// ══════════════════════════════════════════════════════════════════════
//  EAP — Oxford Phrasal Academic Lexicon (OPAL Written Phrases)
//  129 academic phrases across 14 functional categories
// ══════════════════════════════════════════════════════════════════════
(function () {
  if (typeof WORDS_DB === 'undefined') return;
  if (!WORDS_DB['EAP']) WORDS_DB['EAP'] = {};

  WORDS_DB['EAP']['Specifying Topics'] = [
      { word: 'in terms of', arabic: 'من حيث', pos: 'phrase', sentence: 'We evaluated the project {w} cost and efficiency.' },
      { word: 'in relation to', arabic: 'فيما يتعلق بـ', pos: 'phrase', sentence: 'The data was analyzed {w} age and gender.' },
      { word: 'in the context of', arabic: 'في سياق', pos: 'phrase', sentence: 'This is important {w} modern education.' },
      { word: 'with respect to', arabic: 'فيما يخص', pos: 'phrase', sentence: 'There are clear differences {w} performance.' },
      { word: 'with regard to', arabic: 'بشأن', pos: 'phrase', sentence: 'The policy changed {w} environmental standards.' },
      { word: 'the relationship between', arabic: 'العلاقة بين', pos: 'phrase', sentence: 'We examined {w} diet and health outcomes.' },
      { word: 'in the field of', arabic: 'في مجال', pos: 'phrase', sentence: 'She is a leading researcher {w} biology.' },
      { word: 'the concept of', arabic: 'مفهوم', pos: 'phrase', sentence: 'The paper explores {w} sustainability.' },
      { word: 'the notion of', arabic: 'فكرة / مفهوم', pos: 'phrase', sentence: 'He challenged {w} absolute truth.' },
      { word: 'the problem of', arabic: 'مشكلة', pos: 'phrase', sentence: 'The study addresses {w} urban poverty.' },
      { word: 'focus on', arabic: 'التركيز على', pos: 'phrase', sentence: 'This chapter will {w} methods of analysis.' },
      { word: 'in particular', arabic: 'بشكل خاص', pos: 'phrase', sentence: 'The report discusses education, {w} early learning.' },
      { word: 'as part of', arabic: 'كجزء من', pos: 'phrase', sentence: 'The survey was conducted {w} a wider study.' },
  ];

  WORDS_DB['EAP']['Drawing Attention'] = [
      { word: 'it is important to', arabic: 'من المهم أن', pos: 'phrase', sentence: '{w} consider all possible outcomes carefully.' },
      { word: 'it should be noted that', arabic: 'تجدر الإشارة إلى أن', pos: 'phrase', sentence: '{w} results may vary across populations.' },
      { word: 'it is worth noting that', arabic: 'من الجدير بالملاحظة أن', pos: 'phrase', sentence: '{w} no significant differences were found.' },
      { word: 'in the case of', arabic: 'في حالة', pos: 'phrase', sentence: 'Different rules apply {w} minors.' },
      { word: 'the importance of', arabic: 'أهمية', pos: 'phrase', sentence: 'The author highlights {w} early intervention.' },
      { word: 'it is necessary to', arabic: 'من الضروري أن', pos: 'phrase', sentence: '{w} test all variables independently.' },
      { word: 'take into account', arabic: 'يأخذ بعين الاعتبار', pos: 'phrase', sentence: 'Researchers must {w} cultural differences.' },
      { word: 'an important role in', arabic: 'دوراً مهماً في', pos: 'phrase', sentence: 'Technology plays {w} modern learning.' },
      { word: 'in fact', arabic: 'في الواقع', pos: 'phrase', sentence: 'The results were, {w}, the opposite of expected.' },
  ];

  WORDS_DB['EAP']['Hedging'] = [
      { word: 'it may be', arabic: 'قد يكون', pos: 'phrase', sentence: '{w} that further research is needed here.' },
      { word: 'appears to be', arabic: 'يبدو أنه', pos: 'phrase', sentence: 'The solution {w} more complex than expected.' },
      { word: 'seems to be', arabic: 'يبدو أنه', pos: 'phrase', sentence: 'There {w} a strong link between the two.' },
      { word: 'it could be argued that', arabic: 'يمكن القول إن', pos: 'phrase', sentence: '{w} current policies are insufficient.' },
      { word: 'it is possible that', arabic: 'من المحتمل أن', pos: 'phrase', sentence: '{w} the data contains errors.' },
      { word: 'considered to be', arabic: 'يُعتبر', pos: 'phrase', sentence: 'This method is widely {w} effective.' },
      { word: 'it is clear that', arabic: 'من الواضح أن', pos: 'phrase', sentence: '{w} more investment is required.' },
      { word: 'it is likely that', arabic: 'من المرجح أن', pos: 'phrase', sentence: '{w} these trends will continue.' },
      { word: 'in general', arabic: 'بشكل عام', pos: 'phrase', sentence: '{w}, students performed better in the morning.' },
      { word: 'as a whole', arabic: 'ككل', pos: 'phrase', sentence: 'The system, {w}, performed well under pressure.' },
      { word: 'it is reasonable to assume that', arabic: 'من المعقول افتراض أن', pos: 'phrase', sentence: '{w} practice improves performance.' },
  ];

  WORDS_DB['EAP']['Explaining & Defining'] = [
      { word: 'in other words', arabic: 'بعبارة أخرى', pos: 'phrase', sentence: 'The rate doubled; {w}, it increased by 100%.' },
      { word: 'referred to as', arabic: 'يُشار إليه بـ', pos: 'phrase', sentence: 'This process is often {w} adaptation.' },
      { word: 'this means that', arabic: 'هذا يعني أن', pos: 'phrase', sentence: 'The sample was small; {w} results may not generalize.' },
      { word: 'in the sense that', arabic: 'بمعنى أن', pos: 'phrase', sentence: 'The approach is flexible {w} it adapts to context.' },
      { word: 'in this way', arabic: 'بهذه الطريقة', pos: 'phrase', sentence: '{w}, we can reduce the margin of error.' },
      { word: 'is defined as', arabic: 'يُعرَّف بأنه', pos: 'phrase', sentence: 'Intelligence {w} the ability to learn and adapt.' },
      { word: 'to account for', arabic: 'يفسر', pos: 'phrase', sentence: 'Several factors help {w} the variation in results.' },
      { word: 'the reason for this is that', arabic: 'السبب في ذلك هو أن', pos: 'phrase', sentence: '{w} the control group was too small.' },
      { word: 'can be described as', arabic: 'يمكن وصفه بأنه', pos: 'phrase', sentence: 'The process {w} a series of chemical reactions.' },
  ];

  WORDS_DB['EAP']['Giving Examples'] = [
      { word: 'such as', arabic: 'مثل', pos: 'phrase', sentence: 'Many factors, {w} diet and exercise, affect health.' },
      { word: 'for example', arabic: 'على سبيل المثال', pos: 'phrase', sentence: 'Several countries, {w} Japan, have high literacy rates.' },
      { word: 'for instance', arabic: 'على سبيل المثال', pos: 'phrase', sentence: 'Some animals, {w} bats, use sound to navigate.' },
      { word: 'according to', arabic: 'وفقاً لـ', pos: 'phrase', sentence: '{w} recent studies, sleep affects memory.' },
      { word: 'it can be seen that', arabic: 'يمكن ملاحظة أن', pos: 'phrase', sentence: 'From the graph, {w} the trend is declining.' },
      { word: 'show that', arabic: 'يُظهر أن', pos: 'phrase', sentence: 'The results {w} a strong correlation exists.' },
      { word: 'indicate that', arabic: 'يشير إلى أن', pos: 'phrase', sentence: 'The findings {w} further testing is needed.' },
      { word: 'it has been shown that', arabic: 'لقد أُثبت أن', pos: 'phrase', sentence: '{w} regular exercise reduces the risk of disease.' },
      { word: 'tend to', arabic: 'يميل إلى', pos: 'phrase', sentence: 'Urban students {w} perform better academically.' },
      { word: 'characterized by', arabic: 'يتميز بـ', pos: 'phrase', sentence: 'The disease is {w} rapid onset and fever.' },
      { word: 'in the form of', arabic: 'في شكل', pos: 'phrase', sentence: 'The data was presented {w} a bar chart.' },
      { word: 'evidence of', arabic: 'دليل على', pos: 'phrase', sentence: 'There is strong {w} a link between stress and illness.' },
  ];

  WORDS_DB['EAP']['Aims & Effects'] = [
      { word: 'in order to', arabic: 'من أجل', pos: 'phrase', sentence: 'The experiment was designed {w} test this hypothesis.' },
      { word: 'as a result of', arabic: 'نتيجة لـ', pos: 'phrase', sentence: 'Productivity increased {w} the new training program.' },
      { word: 'because of', arabic: 'بسبب', pos: 'phrase', sentence: 'The project was delayed {w} funding issues.' },
      { word: 'the effect of', arabic: 'تأثير', pos: 'phrase', sentence: 'The study measured {w} temperature on reaction speed.' },
      { word: 'the impact of', arabic: 'الأثر', pos: 'phrase', sentence: 'Researchers examined {w} social media on teenagers.' },
      { word: 'depends on', arabic: 'يعتمد على', pos: 'phrase', sentence: 'The outcome largely {w} the quality of the data.' },
      { word: 'in response to', arabic: 'استجابةً لـ', pos: 'phrase', sentence: 'The policy was revised {w} public criticism.' },
      { word: 'is based on', arabic: 'يستند إلى', pos: 'phrase', sentence: 'The model {w} decades of empirical research.' },
      { word: 'on the basis of', arabic: 'على أساس', pos: 'phrase', sentence: 'Decisions were made {w} available evidence.' },
      { word: 'associated with', arabic: 'مرتبط بـ', pos: 'phrase', sentence: 'Risk factors {w} heart disease include poor diet.' },
      { word: 'lead to', arabic: 'يؤدي إلى', pos: 'phrase', sentence: 'Increased stress can {w} reduced performance.' },
      { word: 'plays a key role in', arabic: 'يلعب دوراً محورياً في', pos: 'phrase', sentence: 'Motivation {w} academic success.' },
      { word: 'have a significant impact on', arabic: 'له تأثير كبير على', pos: 'phrase', sentence: 'Sleep deprivation can {w} cognitive performance.' },
  ];

  WORDS_DB['EAP']['Making Contrasts'] = [
      { word: 'rather than', arabic: 'بدلاً من', pos: 'phrase', sentence: 'The study used observation {w} surveys.' },
      { word: 'as opposed to', arabic: 'في مقابل', pos: 'phrase', sentence: 'Qualitative methods were used, {w} quantitative ones.' },
      { word: 'in contrast to', arabic: 'على النقيض من', pos: 'phrase', sentence: '{w} earlier findings, the new data shows growth.' },
      { word: 'on the other hand', arabic: 'من ناحية أخرى', pos: 'phrase', sentence: 'Group A improved; {w}, Group B declined.' },
      { word: 'on the one hand', arabic: 'من ناحية', pos: 'phrase', sentence: '{w}, the method is efficient; on the other, costly.' },
      { word: 'the difference between', arabic: 'الفرق بين', pos: 'phrase', sentence: 'The study explored {w} formal and informal learning.' },
      { word: 'different from', arabic: 'مختلف عن', pos: 'phrase', sentence: 'The results were significantly {w} previous studies.' },
      { word: 'with the exception of', arabic: 'باستثناء', pos: 'phrase', sentence: 'All groups improved, {w} the control group.' },
      { word: 'in spite of the fact that', arabic: 'على الرغم من أن', pos: 'phrase', sentence: '{w} funding was limited, the study succeeded.' },
      { word: 'not necessarily', arabic: 'ليس بالضرورة', pos: 'phrase', sentence: 'A high score does {w} indicate deep understanding.' },
  ];

  WORDS_DB['EAP']['Comparing'] = [
      { word: 'compared with', arabic: 'مقارنة بـ', pos: 'phrase', sentence: 'Costs decreased significantly {w} last year.' },
      { word: 'relative to', arabic: 'نسبةً إلى', pos: 'phrase', sentence: 'Performance improved {w} the previous semester.' },
      { word: 'in the same way as', arabic: 'بنفس الطريقة التي', pos: 'phrase', sentence: 'This enzyme functions {w} a catalyst.' },
      { word: 'similar to', arabic: 'مشابه لـ', pos: 'phrase', sentence: 'The findings are {w} those of earlier studies.' },
      { word: 'consistent with', arabic: 'متوافق مع', pos: 'phrase', sentence: 'These results are {w} our original hypothesis.' },
      { word: 'corresponding to', arabic: 'مقابل', pos: 'phrase', sentence: 'Each level has tasks {w} its complexity.' },
  ];

  WORDS_DB['EAP']['Adding'] = [
      { word: 'as well as', arabic: 'فضلاً عن', pos: 'phrase', sentence: 'The study examined motivation {w} learning strategies.' },
      { word: 'in addition', arabic: 'بالإضافة إلى ذلك', pos: 'phrase', sentence: 'The method was fast; {w}, it was cost-effective.' },
      { word: 'not only but also', arabic: 'ليس فقط بل أيضاً', pos: 'phrase', sentence: 'The program improved skills {w} confidence.' },
      { word: 'a combination of', arabic: 'مزيج من', pos: 'phrase', sentence: 'Success depends on {w} talent and effort.' },
  ];

  WORDS_DB['EAP']['Quantity & Degree'] = [
      { word: 'a number of', arabic: 'عدد من', pos: 'phrase', sentence: 'There are {w} factors that influence this result.' },
      { word: 'the amount of', arabic: 'كمية', pos: 'phrase', sentence: 'Researchers measured {w} carbon dioxide in the air.' },
      { word: 'a high level of', arabic: 'مستوى عالٍ من', pos: 'phrase', sentence: 'The task requires {w} concentration.' },
      { word: 'a wide range of', arabic: 'مجموعة واسعة من', pos: 'phrase', sentence: 'The study included {w} participants.' },
      { word: 'a large number of', arabic: 'عدد كبير من', pos: 'phrase', sentence: '{w} studies have confirmed this finding.' },
      { word: 'an increase in', arabic: 'زيادة في', pos: 'phrase', sentence: 'There was a significant {w} test scores.' },
      { word: 'a reduction in', arabic: 'انخفاض في', pos: 'phrase', sentence: 'The therapy led to {w} symptoms.' },
      { word: 'the degree to which', arabic: 'الدرجة التي', pos: 'phrase', sentence: 'We measured {w} students understood the concept.' },
      { word: 'the proportion of', arabic: 'نسبة', pos: 'phrase', sentence: 'The study recorded {w} students who passed.' },
      { word: 'high levels of', arabic: 'مستويات عالية من', pos: 'phrase', sentence: 'Participants reported {w} anxiety during exams.' },
  ];

  WORDS_DB['EAP']['Existence'] = [
      { word: 'in the presence of', arabic: 'في وجود', pos: 'phrase', sentence: 'The reaction accelerates {w} oxygen.' },
      { word: 'the existence of', arabic: 'وجود', pos: 'phrase', sentence: 'The study confirmed {w} a significant link.' },
      { word: 'in the absence of', arabic: 'في غياب', pos: 'phrase', sentence: '{w} clear data, conclusions remain tentative.' },
      { word: 'the lack of', arabic: 'غياب / نقص', pos: 'phrase', sentence: '{w} evidence makes this claim hard to support.' },
      { word: 'the majority of', arabic: 'غالبية', pos: 'phrase', sentence: '{w} participants reported positive outcomes.' },
      { word: 'the vast majority of', arabic: 'الغالبية العظمى من', pos: 'phrase', sentence: '{w} studies support this conclusion.' },
  ];

  WORDS_DB['EAP']['Referring to Text'] = [
      { word: 'in this study', arabic: 'في هذه الدراسة', pos: 'phrase', sentence: '{w}, we examine the effects of sleep deprivation.' },
      { word: 'as follows', arabic: 'كما يلي', pos: 'phrase', sentence: 'The results are summarized {w}.' },
      { word: 'the following', arabic: 'التالي', pos: 'phrase', sentence: '{w} section describes the research method.' },
      { word: 'in the literature', arabic: 'في الأدبيات', pos: 'phrase', sentence: 'This topic has been widely debated {w}.' },
      { word: 'at the beginning of', arabic: 'في بداية', pos: 'phrase', sentence: 'A brief overview is provided {w} each chapter.' },
      { word: 'in the previous section', arabic: 'في القسم السابق', pos: 'phrase', sentence: '{w}, we outlined the main theoretical framework.' },
  ];

  WORDS_DB['EAP']['Referring to Time'] = [
      { word: 'in recent years', arabic: 'في السنوات الأخيرة', pos: 'phrase', sentence: '{w}, interest in renewable energy has grown rapidly.' },
      { word: 'in the past', arabic: 'في الماضي', pos: 'phrase', sentence: 'This approach was widely used {w}.' },
      { word: 'prior to', arabic: 'قبل', pos: 'phrase', sentence: 'Samples were collected {w} the experiment.' },
      { word: 'over time', arabic: 'مع مرور الوقت', pos: 'phrase', sentence: 'The symptoms gradually improved {w}.' },
      { word: 'at the same time', arabic: 'في الوقت ذاته', pos: 'phrase', sentence: 'Both variables were measured {w}.' },
      { word: 'in the future', arabic: 'في المستقبل', pos: 'phrase', sentence: '{w}, researchers may develop more effective treatments.' },
      { word: 'in turn', arabic: 'بدوره', pos: 'phrase', sentence: 'This affects confidence, which {w} impacts performance.' },
  ];

  WORDS_DB['EAP']['Noun Phrases'] = [
      { word: 'the use of', arabic: 'استخدام', pos: 'phrase', sentence: 'The study evaluated {w} digital tools in education.' },
      { word: 'the development of', arabic: 'تطوير', pos: 'phrase', sentence: 'The research traces {w} modern language teaching.' },
      { word: 'the role of', arabic: 'دور', pos: 'phrase', sentence: 'We examined {w} feedback in improving performance.' },
      { word: 'the nature of', arabic: 'طبيعة', pos: 'phrase', sentence: 'The study investigates {w} long-term memory.' },
      { word: 'the risk of', arabic: 'خطر', pos: 'phrase', sentence: 'Diet changes can reduce {w} cardiovascular disease.' },
      { word: 'the quality of', arabic: 'جودة', pos: 'phrase', sentence: 'Researchers assessed {w} student writing.' },
      { word: 'the analysis of', arabic: 'تحليل', pos: 'phrase', sentence: '{w} the data revealed unexpected patterns.' },
      { word: 'the ability to', arabic: 'القدرة على', pos: 'phrase', sentence: 'Learning enhances {w} solve complex problems.' },
      { word: 'the introduction of', arabic: 'إدخال', pos: 'phrase', sentence: '{w} new technology changed the industry.' },
      { word: 'the effectiveness of', arabic: 'فعالية', pos: 'phrase', sentence: 'The trial measured {w} the new drug.' },
      { word: 'the availability of', arabic: 'توافر', pos: 'phrase', sentence: '{w} data has improved significantly in recent years.' },
      { word: 'aspects of', arabic: 'جوانب من', pos: 'phrase', sentence: 'The review covers different {w} language acquisition.' },
      { word: 'features of', arabic: 'سمات', pos: 'phrase', sentence: 'The paper describes the key {w} effective leadership.' },
  ];

})();