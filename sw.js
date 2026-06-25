// ListWrite Service Worker — v4
const CACHE = 'listwrite-v4';

// Static assets to pre-cache on install
const PRECACHE = [
  './',
  './index.html',
  './ListenWrite.html',
  './Grammar.html',
  './privacy.html',
  './manifest.json',
  './icon.svg',
  './icon-192.png',
  './icon-512.png',
];

// Word database files cached on first access (may be large)
const RUNTIME_CACHE_PATTERNS = [
  /words_db\.js/,
  /words_extra\.js/,
  /words_eap\.js/,
  /oxford_wordlist\.json/,
];

// Never cache — always go to network
const NETWORK_ONLY = [
  /supabase\.co/,
  /google\.com/,
  /googleapis\.com/,
  /fonts\.gstatic/,
  /fonts\.googleapis/,
  /jsdelivr\.net/,
];

// ── Install: pre-cache static shell ─────────────────────────
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
      .catch((err) => {
        // Don't let a single failed asset block SW install
        console.warn('[SW] Precache error (non-fatal):', err);
        return self.skipWaiting();
      })
  );
});

// ── Activate: clean old caches ───────────────────────────────
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// ── Fetch: stale-while-revalidate for app, network-only for auth/API ──
self.addEventListener('fetch', (e) => {
  const url = e.request.url;

  // Skip non-GET
  if (e.request.method !== 'GET') return;

  // Network-only (Supabase, Google, CDNs)
  if (NETWORK_ONLY.some((re) => re.test(url))) {
    e.respondWith(
      fetch(e.request).catch(() =>
        new Response(JSON.stringify({ error: 'offline' }), {
          status: 503,
          headers: { 'Content-Type': 'application/json' },
        })
      )
    );
    return;
  }

  // Stale-while-revalidate for everything else
  e.respondWith(
    caches.open(CACHE).then((cache) =>
      cache.match(e.request).then((cached) => {
        const networkFetch = fetch(e.request)
          .then((response) => {
            if (response.ok) {
              cache.put(e.request, response.clone());
            }
            return response;
          })
          .catch(() => cached); // offline → use cache

        // Return cached immediately if available, update in background
        return cached || networkFetch;
      })
    )
  );
});
