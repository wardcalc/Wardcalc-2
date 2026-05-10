'use strict';

const T = {
en:{
  // GENERAL UI
  alert_msg: 'Please complete all fields.', btn:'Calculate',
  tab_i:'Interpretation', tab_a:'Action Plan', tab_d:'First-Line Rx',
  sp_neuro:'Neurology', sp_ped: 'Pediatrics', sp_gen: 'General',
  mnem_all:'Memory Aid — All 3 Languages',
  
  // 1. GCS 
  f_eye:'Eye Opening', f_verbal:'Verbal Response', f_motor:'Motor Response',
  g_e4: 'Spontaneous (4)', g_e3: 'To voice (3)', g_e2: 'To pain (2)', g_e1: 'None (1)',
  g_v5: 'Oriented (5)', g_v4: 'Confused (4)', g_v3: 'Words (3)', g_v2: 'Sounds (2)', g_v1: 'None (1)',
  g_m6: 'Obeys (6)', g_m5: 'Localizes (5)', g_m4: 'Withdrawal (4)', g_m3: 'Flexion (3)', g_m2: 'Extension (2)', g_m1: 'None (1)',
  r_gcs_mild:'Mild impairment / Normal', r_gcs_mild_1:'Full neurological assessment.', r_gcs_mild_2:'Neuro obs every 30–60 mins.', r_gcs_mild_3:'CT head if indicated.',
  r_gcs_mod:'Moderate brain injury', r_gcs_mod_1:'⚠ Urgent CT head.', r_gcs_mod_2:'Neurosurgery referral.', r_gcs_mod_3:'30° head elevation. IV access.', r_gcs_mod_4:'Reassess GCS every 15 mins.',
  r_gcs_sev:'Severe brain injury', r_gcs_sev_1:'⚠ GCS ≤ 8 = intubation threshold.', r_gcs_sev_2:'Rapid Sequence Intubation (RSI).', r_gcs_sev_3:'Urgent CT head + spine.', r_gcs_sev_4:'ICU admission.',
  d_gcs: 'Assess consciousness level in any patient. The score every doctor demands first on a trauma call.',
  gcs_info_title: 'Understanding the GCS',
  gcs_info_p1: 'The Glasgow Coma Scale provides a standardized method to assess impairment of conscious level.',
  gcs_info_p3: 'A normal, fully alert patient will score 15 (E4, V5, M6), while a completely unresponsive patient scores 3 (E1, V1, M1).',
  gcs_info_p4: 'When calculating the score, always record the best response.',
  gcs_info_p2: 'Clinical Threshold: A score of 8 or less requires intubation.',

  // 2. APGAR
  d_apgar: 'Newborn assessment at 1 and 5 minutes. Guides resuscitation decisions.',
  f_appear: 'Appearance (Skin Colour)', f_pulse: 'Pulse (Heart Rate)', f_grimace: 'Grimace (Reflex Irritability)', f_activity: 'Activity (Muscle Tone)', f_resp_a: 'Respiration',
  a_a2: 'Pink all over (2)', a_a1: 'Blue extremities (1)', a_a0: 'Blue/pale all over (0)',
  a_p2: '≥ 100 bpm (2)', a_p1: '< 100 bpm (1)', a_p0: 'Absent (0)',
  a_g2: 'Cry/Cough (2)', a_g1: 'Grimace only (1)', a_g0: 'None (0)',
  a_c2: 'Active motion (2)', a_c1: 'Some flexion (1)', a_c0: 'Limp (0)',
  a_r2: 'Strong cry (2)', a_r1: 'Weak/irregular (1)', a_r0: 'Absent (0)',
  r_apgar_norm: 'Reassuring', r_apgar_norm_1: 'Routine post-delivery care.', r_apgar_norm_2: 'Dry, keep warm, clear airway.', r_apgar_norm_3: 'Hand to mother for skin-to-skin.',
  r_apgar_mod: 'Moderately abnormal', r_apgar_mod_1: 'Stimulate infant vigorously.', r_apgar_mod_2: 'Give oxygen if cyanosis persists.', r_apgar_mod_3: 'Consider CPAP.', r_apgar_mod_4: 'Re-evaluate every minute.',
  r_apgar_crit: 'Critically low', r_apgar_crit_1: 'Immediate aggressive resuscitation.', r_apgar_crit_2: 'Positive pressure ventilation (PPV).', r_apgar_crit_3: 'Start chest compressions if HR < 60.', r_apgar_crit_4: 'Prepare for intubation.',
  apgar_info_title: 'Understanding the APGAR Score',
  apgar_info_p1: 'The APGAR score is a rapid method for assessing the clinical status of the newborn infant at 1 minute and 5 minutes after birth.',
  apgar_info_p2: 'It evaluates Appearance (color), Pulse (heart rate), Grimace (reflex irritability), Activity (muscle tone), and Respiration. A score of 7-10 is reassuring.',
  apgar_info_p3: 'Clinical Threshold: A score of 3 or below at 5 minutes is considered critically low and indicates a need for immediate intervention.',

  // 3. BMI
  d_bmi: 'Body Mass Index with full WHO classification and clinical action plan.',
  f_weight: 'Weight (kg)', f_height: 'Height (cm)',
  r_bmi_under: 'Underweight', r_bmi_under_1: 'Assess for malnutrition or eating disorders.', r_bmi_under_2: 'Dietician referral recommended.',
  r_bmi_norm: 'Normal Weight', r_bmi_norm_1: 'Maintain healthy lifestyle.', r_bmi_norm_d: 'No pharmacological intervention',
  r_bmi_over: 'Overweight', r_bmi_over_1: 'Advise on diet and exercise.', r_bmi_over_2: 'Screen for metabolic syndrome.', r_bmi_over_d: 'Lifestyle optimization',
  r_bmi_ob1: 'Obesity Class I', r_bmi_ob1_1: 'Intensive lifestyle intervention.', r_bmi_ob1_2: 'Consider pharmacotherapy if comorbidities exist.',
  r_bmi_ob2: 'Obesity Class II/III', r_bmi_ob2_1: 'High risk of cardiovascular disease.', r_bmi_ob2_2: 'Consider bariatric surgery referral.',

  // --- INFO SECTIONS FOR THE REMAINING 12 TOOLS ---

  // CURB-65
  curb_info_title: 'Understanding CURB-65',
  curb_info_p1: 'CURB-65 is a clinical prediction rule validated for predicting mortality in community-acquired pneumonia.',
  curb_info_p2: 'It evaluates Confusion, Urea, Respiratory rate, Blood pressure, and Age ≥ 65.',
  curb_info_p3: 'Clinical Threshold: A score of 3 or more indicates severe pneumonia usually requiring hospital or ICU admission.',

  // Wells DVT
  dvt_info_title: 'Understanding Wells Criteria for DVT',
  dvt_info_p1: 'The Wells Criteria risk stratifies patients for suspected Deep Vein Thrombosis (DVT).',
  dvt_info_p2: 'It evaluates clinical signs, risk factors like surgery or cancer, and alternative diagnoses.',
  dvt_info_p3: 'Clinical Threshold: A score ≥ 2 means DVT is likely; ultrasound imaging is indicated.',

  // Wells PE
  pe_info_title: 'Understanding Wells Criteria for PE',
  pe_info_p1: 'The Wells Criteria risk stratifies patients for suspected Pulmonary Embolism (PE).',
  pe_info_p2: 'It evaluates heart rate, hemoptysis, prior DVT/PE, and the likelihood of alternative diagnoses.',
  pe_info_p3: 'Clinical Threshold: A score > 4 means PE is likely; imaging (CTPA) is indicated.',

  // CHADS2
  chads_info_title: 'Understanding CHADS2 Score',
  chads_info_p1: 'The CHADS2 score assesses stroke risk in patients with non-valvular atrial fibrillation.',
  chads_info_p2: 'It evaluates Congestive heart failure, Hypertension, Age ≥ 75, Diabetes, and prior Stroke/TIA.',
  chads_info_p3: 'Clinical Threshold: A score ≥ 2 generally requires oral anticoagulation.',

  // Child-Pugh
  cp_info_title: 'Understanding Child-Pugh Score',
  cp_info_p1: 'The Child-Pugh score assesses the prognosis of chronic liver disease, primarily cirrhosis.',
  cp_info_p2: 'It evaluates bilirubin, albumin, ascites, encephalopathy, and PT/INR.',
  cp_info_p3: 'Clinical Threshold: Class C (10-15 points) indicates severe liver disease with 1-year survival around 45%.',

  // EGFR
  egfr_info_title: 'Understanding eGFR (CKD-EPI)',
  egfr_info_p1: 'Estimated Glomerular Filtration Rate (eGFR) is the best overall index of kidney function.',
  egfr_info_p2: 'The CKD-EPI equation uses serum creatinine, age, and sex to estimate the GFR.',
  egfr_info_p3: 'Clinical Threshold: An eGFR < 60 mL/min/1.73m² for ≥ 3 months indicates chronic kidney disease (CKD).',

  // MEWS
  mews_info_title: 'Understanding MEWS',
  mews_info_p1: 'The Modified Early Warning Score (MEWS) identifies hospitalized patients at risk of clinical deterioration.',
  mews_info_p2: 'It evaluates systolic BP, heart rate, respiratory rate, temperature, and AVPU level of consciousness.',
  mews_info_p3: 'Clinical Threshold: A score ≥ 5 is statistically linked to increased likelihood of death or ICU admission.',

  // Centor
  centor_info_title: 'Understanding Centor Criteria',
  centor_info_p1: 'Centor Criteria estimates the probability that pharyngitis is caused by Group A Streptococcus.',
  centor_info_p2: 'It evaluates fever, tonsillar exudate, tender cervical adenopathy, and absence of cough.',
  centor_info_p3: 'Clinical Threshold: A score ≥ 3 suggests considering rapid strep testing or empiric antibiotics.',

  // NIHSS
  nihss_info_title: 'Understanding NIH Stroke Scale',
  nihss_info_p1: 'The NIHSS is a systematic assessment tool that provides a quantitative measure of stroke-related neurologic deficit.',
  nihss_info_p2: 'It evaluates consciousness, vision, motor, sensory, ataxia, language, and inattention.',
  nihss_info_p3: 'Clinical Threshold: Scores > 15 indicate a severe stroke; scores ≤ 4 may be considered for thrombolytics.',

  // SOFA
  sofa_info_title: 'Understanding SOFA Score',
  sofa_info_p1: 'The Sequential Organ Failure Assessment (SOFA) score tracks a patient\'s status during an ICU stay.',
  sofa_info_p2: 'It evaluates respiratory, cardiovascular, hepatic, coagulation, renal, and neurological systems.',
  sofa_info_p3: 'Clinical Threshold: An acute increase of ≥ 2 points reflects organ dysfunction associated with a high mortality risk (sepsis).',

  // Ranson
  ranson_info_title: 'Understanding Ranson\'s Criteria',
  ranson_info_p1: 'Ranson\'s Criteria estimates the severity and mortality risk of acute pancreatitis.',
  ranson_info_p2: 'It evaluates parameters at admission and at 48 hours (Hct drop, BUN rise, calcium, PaO2, etc.).',
  ranson_info_p3: 'Clinical Threshold: A score ≥ 3 indicates severe pancreatitis and increased mortality risk.',

  // PSI/PORT
  psi_info_title: 'Understanding PSI/PORT Score',
  psi_info_p1: 'The Pneumonia Severity Index (PSI/PORT) predicts 30-day mortality in patients with community-acquired pneumonia.',
  psi_info_p2: 'It extensively evaluates demographics, comorbidities, vital signs, and laboratory findings.',
  psi_info_p3: 'Clinical Threshold: Risk Classes IV and V indicate severe pneumonia requiring hospital admission.'
},

ru:{
  alert_msg: 'Пожалуйста, заполните все поля.', btn:'Рассчитать',
  tab_i:'Интерпретация', tab_a:'План действий', tab_d:'Лечение',
  sp_neuro:'Неврология', sp_ped: 'Педиатрия', sp_gen: 'Общие',
  mnem_all:'Мнемоника — На 3 языках',
  
  // GCS, APGAR, BMI UI...
  f_eye:'Открывание глаз', f_verbal:'Речевой ответ', f_motor:'Двигательный ответ',
  g_e4: 'Самопроизвольно (4)', g_e3: 'На голос (3)', g_e2: 'На боль (2)', g_e1: 'Нет (1)',
  g_v5: 'Ориентирован (5)', g_v4: 'Спутанная (4)', g_v3: 'Слова (3)', g_v2: 'Звуки (2)', g_v1: 'Нет (1)',
  g_m6: 'Выполняет (6)', g_m5: 'Локализует (5)', g_m4: 'Отдёргивание (4)', g_m3: 'Сгибание (3)', g_m2: 'Разгибание (2)', g_m1: 'Нет (1)',
  r_gcs_mild:'Легкая ЧМТ', r_gcs_mild_1:'Полный неврологический осмотр.', r_gcs_mild_2:'Наблюдение каждые 30–60 мин.', r_gcs_mild_3:'КТ головы при ухудшении.',
  r_gcs_mod:'Умеренная ЧМТ', r_gcs_mod_1:'⚠ Срочная КТ головы.', r_gcs_mod_2:'Консультация нейрохирурга.', r_gcs_mod_3:'Голова приподнята на 30°.', r_gcs_mod_4:'Оценка ШКГ каждые 15 мин.',
  r_gcs_sev:'Тяжёлая ЧМТ', r_gcs_sev_1:'⚠ ШКГ ≤ 8 = порог интубации.', r_gcs_sev_2:'БСИ (интубация).', r_gcs_sev_3:'Срочная КТ головы + позвоночника.', r_gcs_sev_4:'Госпитализация в ОРИТ.',
  d_gcs: 'Оценка уровня сознания. Первый показатель при травмах.',
  gcs_info_title: 'Понимание шкалы Глазго (ШКГ)', gcs_info_p1: 'Шкала ком Глазго — стандартизированный метод оценки нарушения уровня сознания.', gcs_info_p3: 'Нормальный пациент набирает 15 баллов, полностью невосприимчивый — 3 балла.', gcs_info_p4: 'Всегда фиксируйте наилучший ответ.', gcs_info_p2: 'Клинический порог: балл 8 или меньше требует интубации.',
  
  d_apgar: 'Оценка новорожденного на 1-й и 5-й минутах. Определяет тактику реанимации.',
  f_appear: 'Цвет кожи', f_pulse: 'Пульс (ЧСС)', f_grimace: 'Гримаса (рефлексы)', f_activity: 'Активность (тонус)', f_resp_a: 'Дыхание',
  a_a2: 'Полностью розовый (2)', a_a1: 'Акроцианоз (1)', a_a0: 'Бледный/синий (0)',
  a_p2: '≥ 100 уд/мин (2)', a_p1: '< 100 уд/мин (1)', a_p0: 'Отсутствует (0)',
  a_g2: 'Кашель/крик (2)', a_g1: 'Слабая гримаса (1)', a_g0: 'Нет (0)',
  a_c2: 'Активные движения (2)', a_c1: 'Слабое сгибание (1)', a_c0: 'Вялый (0)',
  a_r2: 'Громкий крик (2)', a_r1: 'Слабое/нерегулярное (1)', a_r0: 'Отсутствует (0)',
  r_apgar_norm: 'Норма', r_apgar_norm_1: 'Стандартный уход после родов.', r_apgar_norm_2: 'Обсушить, согреть.', r_apgar_norm_3: 'Передать матери.',
  r_apgar_mod: 'Умеренная асфиксия', r_apgar_mod_1: 'Тактильная стимуляция.', r_apgar_mod_2: 'Кислород при цианозе.', r_apgar_mod_3: 'Рассмотреть CPAP.', r_apgar_mod_4: 'Повторная оценка каждую минуту.',
  r_apgar_crit: 'Тяжелая асфиксия', r_apgar_crit_1: 'Немедленная реанимация.', r_apgar_crit_2: 'ИВЛ с положительным давлением.', r_apgar_crit_3: 'Непрямой массаж сердца при ЧСС < 60.', r_apgar_crit_4: 'Подготовка к интубации.',
  apgar_info_title: 'Понимание шкалы Апгар', apgar_info_p1: 'Шкала Апгар — это быстрый метод оценки клинического состояния новорожденного на 1-й и 5-й минутах.', apgar_info_p2: 'Оценивает цвет кожи, пульс, рефлексы, мышечный тонус и дыхание. 7–10 баллов — норма.', apgar_info_p3: 'Клинический порог: Оценка 3 и ниже на 5-й минуте требует немедленной реанимации.',
  
  d_bmi: 'Индекс массы тела с классификацией ВОЗ и клиническим планом.',
  f_weight: 'Вес (кг)', f_height: 'Рост (см)',
  r_bmi_under: 'Дефицит массы', r_bmi_under_1: 'Оценить на предмет недоедания.', r_bmi_under_2: 'Консультация диетолога.',
  r_bmi_norm: 'Нормальный вес', r_bmi_norm_1: 'Поддерживайте здоровый образ жизни.', r_bmi_norm_d: 'Без медикаментов',
  r_bmi_over: 'Избыточный вес', r_bmi_over_1: 'Диета и физические упражнения.', r_bmi_over_2: 'Скрининг метаболического синдрома.', r_bmi_over_d: 'Оптимизация образа жизни',
  r_bmi_ob1: 'Ожирение I степени', r_bmi_ob1_1: 'Интенсивное изменение образа жизни.', r_bmi_ob1_2: 'Рассмотреть фармакотерапию.',
  r_bmi_ob2: 'Ожирение II/III степени', r_bmi_ob2_1: 'Высокий риск сердечно-сосудистых заболеваний.', r_bmi_ob2_2: 'Рассмотреть бариатрическую хирургию.',

  // CURB-65
  curb_info_title: 'Понимание шкалы CURB-65',
  curb_info_p1: 'CURB-65 — это шкала для оценки риска смертности при внебольничной пневмонии.',
  curb_info_p2: 'Оценивает спутанность сознания, мочевину, частоту дыхания, артериальное давление и возраст ≥ 65 лет.',
  curb_info_p3: 'Клинический порог: 3 и более баллов указывают на тяжелую пневмонию, требующую госпитализации в стационар или ОРИТ.',

  // Wells DVT
  dvt_info_title: 'Критерии Уэллса для ТГВ',
  dvt_info_p1: 'Критерии Уэллса оценивают риск при подозрении на тромбоз глубоких вен (ТГВ).',
  dvt_info_p2: 'Оценивает клинические признаки, факторы риска (операции, рак) и альтернативные диагнозы.',
  dvt_info_p3: 'Клинический порог: Оценка ≥ 2 означает высокую вероятность ТГВ; показано УЗИ.',

  // Wells PE
  pe_info_title: 'Критерии Уэллса для ТЭЛА',
  pe_info_p1: 'Критерии Уэллса оценивают риск при подозрении на тромбоэмболию легочной артерии (ТЭЛА).',
  pe_info_p2: 'Оценивает ЧСС, кровохарканье, предшествующий ТГВ/ТЭЛА и альтернативные диагнозы.',
  pe_info_p3: 'Клинический порог: Оценка > 4 означает высокую вероятность ТЭЛА; показана КТ-ангиография.',

  // CHADS2
  chads_info_title: 'Понимание шкалы CHADS2',
  chads_info_p1: 'Шкала CHADS2 оценивает риск инсульта у пациентов с неклапанной фибрилляцией предсердий.',
  chads_info_p2: 'Оценивает сердечную недостаточность, гипертензию, возраст ≥ 75, диабет и перенесенный инсульт/ТИА.',
  chads_info_p3: 'Клинический порог: Оценка ≥ 2 обычно требует назначения пероральных антикоагулянтов.',

  // Child-Pugh
  cp_info_title: 'Шкала Чайлд-Пью',
  cp_info_p1: 'Шкала Чайлд-Пью оценивает прогноз хронического заболевания печени, преимущественно цирроза.',
  cp_info_p2: 'Оценивает билирубин, альбумин, асцит, энцефалопатию и ПВ/МНО.',
  cp_info_p3: 'Клинический порог: Класс C (10-15 баллов) указывает на тяжелое заболевание с выживаемостью около 45% за 1 год.',

  // EGFR
  egfr_info_title: 'Понимание рСКФ (CKD-EPI)',
  egfr_info_p1: 'Расчетная скорость клубочковой фильтрации (рСКФ) — лучший показатель функции почек.',
  egfr_info_p2: 'Формула CKD-EPI использует уровень креатинина в сыворотке крови, возраст и пол.',
  egfr_info_p3: 'Клинический порог: рСКФ < 60 мл/мин в течение ≥ 3 месяцев указывает на хроническую болезнь почек (ХБП).',

  // MEWS
  mews_info_title: 'Понимание шкалы MEWS',
  mews_info_p1: 'Шкала MEWS выявляет госпитализированных пациентов с риском клинического ухудшения.',
  mews_info_p2: 'Оценивает систолическое АД, ЧСС, частоту дыхания, температуру и уровень сознания.',
  mews_info_p3: 'Клинический порог: Оценка ≥ 5 статистически связана с повышенным риском летального исхода или перевода в ОРИТ.',

  // Centor
  centor_info_title: 'Критерии Центора',
  centor_info_p1: 'Критерии Центора оценивают вероятность стрептококкового фарингита группы А.',
  centor_info_p2: 'Учитывают лихорадку, налет на миндалинах, болезненность лимфоузлов и отсутствие кашля.',
  centor_info_p3: 'Клинический порог: Оценка ≥ 3 требует экспресс-тестирования или эмпирической антибиотикотерапии.',

  // NIHSS
  nihss_info_title: 'Шкала инсульта NIHSS',
  nihss_info_p1: 'NIHSS — это систематизированный инструмент для количественной оценки неврологического дефицита при инсульте.',
  nihss_info_p2: 'Оценивает сознание, зрение, моторику, чувствительность, атаксию и речь.',
  nihss_info_p3: 'Клинический порог: Балл > 15 указывает на тяжелый инсульт; балл ≤ 4 может рассматриваться для тромболизиса.',

  // SOFA
  sofa_info_title: 'Шкала SOFA',
  sofa_info_p1: 'Шкала SOFA отслеживает состояние пациента и дисфункцию органов во время пребывания в ОРИТ.',
  sofa_info_p2: 'Оценивает дыхательную, сердечно-сосудистую, печеночную, коагуляционную, почечную и неврологическую системы.',
  sofa_info_p3: 'Клинический порог: Острое увеличение на ≥ 2 балла отражает дисфункцию органов, связанную с высоким риском смертности (сепсис).',

  // Ranson
  ranson_info_title: 'Критерии Рэнсона',
  ranson_info_p1: 'Критерии Рэнсона оценивают тяжесть и риск смертности при остром панкреатите.',
  ranson_info_p2: 'Оценивают параметры при поступлении и через 48 часов (падение гематокрита, повышение мочевины, кальций и т.д.).',
  ranson_info_p3: 'Клинический порог: Оценка ≥ 3 указывает на тяжелый панкреатит и повышенный риск смертности.',

  // PSI/PORT
  psi_info_title: 'Индекс тяжести пневмонии (PSI/PORT)',
  psi_info_p1: 'Индекс PSI/PORT прогнозирует 30-дневную смертность у пациентов с внебольничной пневмонией.',
  psi_info_p2: 'Детально оценивает демографические данные, сопутствующие заболевания, жизненно важные показатели и анализы.',
  psi_info_p3: 'Клинический порог: Классы риска IV и V указывают на тяжелую пневмонию, требующую госпитализации.'
},

uz:{
  alert_msg: 'Barcha maydonlarni to\'ldiring.', btn:'Hisoblash',
  tab_i:'Talqin', tab_a:'Harakat Rejasi', tab_d:'Birinchi Davolash',
  sp_neuro:'Nevrologiya', sp_ped: 'Pediatriya', sp_gen: 'Umumiy',
  mnem_all:"Mnemonika — 3 tilda",

  // GCS, APGAR, BMI UI...
  f_eye:"Ko'z ochilishi", f_verbal:"Og'zaki javob", f_motor:'Harakat javobi',
  g_e4: 'O\'z-o\'zidan (4)', g_e3: 'Ovozga (3)', g_e2: 'Og\'riqqa (2)', g_e1: 'Yo\'q (1)',
  g_v5: 'Mo\'ljallangan (5)', g_v4: 'Chalkash (4)', g_v3: 'So\'zlar (3)', g_v2: 'Tovushlar (2)', g_v1: 'Yo\'q (1)',
  g_m6: 'Bajaradi (6)', g_m5: 'Lokalizatsiya (5)', g_m4: 'Tortib olish (4)', g_m3: 'Bukilish (3)', g_m2: 'Yozilish (2)', g_m1: 'Yo\'q (1)',
  r_gcs_mild:"Yengil jarohat", r_gcs_mild_1:"To'liq nevrologik tekshiruv.", r_gcs_mild_2:"Har 30–60 daqiqada kuzatuv.", r_gcs_mild_3:"Yomonlashsa bosh KT.",
  r_gcs_mod:"O'rtacha jarohat", r_gcs_mod_1:"⚠ Shoshilinch bosh KT.", r_gcs_mod_2:"Neyrojarroh maslahati.", r_gcs_mod_3:"Bosh 30° ko'tarilgan.", r_gcs_mod_4:"Har 15 daqiqada baholash.",
  r_gcs_sev:"Og'ir jarohat", r_gcs_sev_1:"⚠ GCS ≤ 8 = intubatsiya.", r_gcs_sev_2:"Tezkor intubatsiya (RSI).", r_gcs_sev_3:"Shoshilinch bosh+umurtqa KT.", r_gcs_sev_4:"ORIT ga yotqizish.",
  d_gcs: "Ong darajasini baholash. Jarohatda birinchi talab qilinadigan ko'rsatkich.",
  gcs_info_title: 'Glazgo shkalasini tushunish', gcs_info_p1: 'Glazgo koma shkalasi ong darajasini baholash uchun standartlashtirilgan usul.', gcs_info_p3: 'Normal bemor 15 ball oladi, butunlay javobsiz bemor esa 3 ball.', gcs_info_p4: 'Har doim eng yaxshi javobni yozing.', gcs_info_p2: 'Klinik chegara: 8 yoki undan past ball intubatsiyani talab qiladi.',
  
  d_apgar: 'Chaqaloqni 1 va 5-daqiqada baholash. Reanimatsiya taktikasini belgilaydi.',
  f_appear: 'Teri rangi', f_pulse: 'Puls (Yurak urishi)', f_grimace: 'Grimasa (Reflekslar)', f_activity: 'Aktivlik (Tonus)', f_resp_a: 'Nafas olish',
  a_a2: 'Butunlay pushti (2)', a_a1: 'Qo\'llar/oyoqlar ko\'k (1)', a_a0: 'Oqarib ketgan/ko\'k (0)',
  a_p2: '≥ 100 ta/daq (2)', a_p1: '< 100 ta/daq (1)', a_p0: 'Yo\'q (0)',
  a_g2: 'Yig\'lash/yo\'tal (2)', a_g1: 'Faqat grimasa (1)', a_g0: 'Yo\'q (0)',
  a_c2: 'Faol harakatlar (2)', a_c1: 'Biroz bukilish (1)', a_c0: 'Bo\'shashgan (0)',
  a_r2: 'Baland yig\'i (2)', a_r1: 'Sust/tartibsiz (1)', a_r0: 'Yo\'q (0)',
  r_apgar_norm: 'Qoniqarli holat', r_apgar_norm_1: 'Standart parvarish.', r_apgar_norm_2: 'Quritish, issiq tutish.', r_apgar_norm_3: 'Onaga berish (teri-teriga).',
  r_apgar_mod: 'O\'rtacha asfiksiya', r_apgar_mod_1: 'Chaqaloqni stimulyatsiya qilish.', r_apgar_mod_2: 'Sianozda kislorod.', r_apgar_mod_3: 'CPAP ko\'rib chiqish.', r_apgar_mod_4: 'Har daqiqada baholash.',
  r_apgar_crit: 'Og\'ir asfiksiya', r_apgar_crit_1: 'Zudlik bilan reanimatsiya.', r_apgar_crit_2: 'Sun\'iy nafas (PPV).', r_apgar_crit_3: 'Yurak urishi < 60 bo\'lsa massaj.', r_apgar_crit_4: 'Intubatsiyaga tayyorgarlik.',
  apgar_info_title: 'Apgar shkalasini tushunish', apgar_info_p1: 'Apgar shkalasi chaqaloqning 1 va 5-daqiqalardagi holatini baholaydi.', apgar_info_p2: 'U teri rangi, puls, reflekslar, mushak tonusi va nafasni baholaydi. 7-10 ball me\'yor.', apgar_info_p3: 'Klinik chegara: 5-daqiqada 3 yoki undan past ball zudlik bilan reanimatsiyani talab qiladi.',
  
  d_bmi: 'JSST klassifikatsiyasi va klinik harakatlar rejasi bilan Tana Vazni Indeksi.',
  f_weight: 'Vazn (kg)', f_height: 'Bo\'y (sm)',
  r_bmi_under: 'Vazn yetishmovchiligi', r_bmi_under_1: 'Ovqatlanish buzilishini tekshiring.', r_bmi_under_2: 'Diyetolog maslahati.',
  r_bmi_norm: 'Normal vazn', r_bmi_norm_1: 'Sog\'lom turmush tarzini saqlang.', r_bmi_norm_d: 'Dori-darmonsiz',
  r_bmi_over: 'Ortiqcha vazn', r_bmi_over_1: 'Parhez va jismoniy mashqlar.', r_bmi_over_2: 'Metabolik sindrom skriningi.', r_bmi_over_d: 'Turmush tarzini optimallashtirish',
  r_bmi_ob1: 'I darajali semizlik', r_bmi_ob1_1: 'Turmush tarzini intensiv o\'zgartirish.', r_bmi_ob1_2: 'Farmakoterapiyani ko\'rib chiqish.',
  r_bmi_ob2: 'II/III darajali semizlik', r_bmi_ob2_1: 'Yurak-qon tomir kasalliklari xavfi yuqori.', r_bmi_ob2_2: 'Bariatrik jarrohlikni ko\'rib chiqish.',

  // CURB-65
  curb_info_title: 'CURB-65 shkalasini tushunish',
  curb_info_p1: 'CURB-65 kasalxonadan tashqari pnevmoniyada o\'lim xavfini bashorat qiluvchi shkaladir.',
  curb_info_p2: 'U ong chalkashligi, mochevina, nafas olish tezligi, qon bosimi va yoshni (≥ 65) baholaydi.',
  curb_info_p3: 'Klinik chegara: 3 va undan yuqori ball kasalxona yoki reanimatsiyaga yotqizishni talab qiluvchi og\'ir pnevmoniyani ko\'rsatadi.',

  // Wells DVT
  dvt_info_title: 'Chuqur Vena Trombozi (DVT) uchun Wells mezonlari',
  dvt_info_p1: 'Wells mezonlari chuqur vena trombozi (DVT) ehtimolini baholaydi.',
  dvt_info_p2: 'U klinik belgilar, xavf omillari (jarrohlik, saraton) va muqobil tashxislarni baholaydi.',
  dvt_info_p3: 'Klinik chegara: ≥ 2 ball DVT ehtimoli yuqoriligini anglatadi; UTT tekshiruvi ko\'rsatilgan.',

  // Wells PE
  pe_info_title: 'O\'pka Emboliyasi (PE) uchun Wells mezonlari',
  pe_info_p1: 'Wells mezonlari o\'pka emboliyasi (PE) ehtimolini baholaydi.',
  pe_info_p2: 'U yurak urishi, qon tupurish, oldingi DVT/PE va muqobil tashxis ehtimolini baholaydi.',
  pe_info_p3: 'Klinik chegara: > 4 ball PE ehtimoli yuqoriligini anglatadi; KT angiografiyasi ko\'rsatilgan.',

  // CHADS2
  chads_info_title: 'CHADS2 shkalasini tushunish',
  chads_info_p1: 'CHADS2 shkalasi bo\'lmachalar fibrillyatsiyasi bo\'lgan bemorlarda insult xavfini baholaydi.',
  chads_info_p2: 'U yurak yetishmovchiligi, gipertenziya, yosh (≥ 75), qandli diabet va oldingi insult/TIA ni baholaydi.',
  chads_info_p3: 'Klinik chegara: ≥ 2 ball odatda peroral antikoagulyantlar buyurishni talab qiladi.',

  // Child-Pugh
  cp_info_title: 'Child-Pugh shkalasini tushunish',
  cp_info_p1: 'Child-Pugh shkalasi surunkali jigar kasalligi (asosan sirroz) prognozini baholaydi.',
  cp_info_p2: 'U bilirubin, albumin, assit, ensefalopatiya va PV/XNN (PT/INR) ni baholaydi.',
  cp_info_p3: 'Klinik chegara: C sinfi (10-15 ball) og\'ir jigar kasalligi va 1 yillik yashovchanlik ~45% ekanligini ko\'rsatadi.',

  // EGFR
  egfr_info_title: 'eGFR (CKD-EPI) ni tushunish',
  egfr_info_p1: 'Taxminiy koptokchalar filtratsiyasi tezligi (eGFR) buyrak faoliyatining eng yaxshi ko\'rsatkichidir.',
  egfr_info_p2: 'CKD-EPI formulasi qon zardobidagi kreatinin, yosh va jinsdan foydalanib GFR ni hisoblaydi.',
  egfr_info_p3: 'Klinik chegara: ≥ 3 oy davomida eGFR < 60 ml/min/1.73m² bo\'lishi surunkali buyrak kasalligini (SBK) ko\'rsatadi.',

  // MEWS
  mews_info_title: 'MEWS shkalasini tushunish',
  mews_info_p1: 'MEWS shkalasi (Bemor holati yomonlashuvini erta aniqlash) kasalxonadagi bemorlarda klinik yomonlashuv xavfini aniqlaydi.',
  mews_info_p2: 'U sistolik qon bosimi, puls, nafas olish tezligi, harorat va ong darajasini baholaydi.',
  mews_info_p3: 'Klinik chegara: ≥ 5 ball o\'lim yoki reanimatsiyaga o\'tkazish ehtimoli ortganligini anglatadi.',

  // Centor
  centor_info_title: 'Centor mezonlarini tushunish',
  centor_info_p1: 'Centor mezonlari faringitning A guruh streptokokklari tomonidan chaqirilganlik ehtimolini baholaydi.',
  centor_info_p2: 'U isitma, murtak bezlaridagi karash, bo\'yin limfa tugunlari og\'rig\'i va yo\'tal yo\'qligini baholaydi.',
  centor_info_p3: 'Klinik chegara: ≥ 3 ball ekspress-test yoki empirik antibiotiklarni talab qiladi.',

  // NIHSS
  nihss_info_title: 'NIHSS insult shkalasini tushunish',
  nihss_info_p1: 'NIHSS insult bilan bog\'liq nevrologik defitsitni miqdoriy baholash uchun tizimli vositadir.',
  nihss_info_p2: 'U ong, ko\'rish, motorika, sezgi, ataksiya va nutqni baholaydi.',
  nihss_info_p3: 'Klinik chegara: > 15 ball og\'ir insultni anglatadi; ≤ 4 ball trombolizis uchun ko\'rib chiqilishi mumkin.',

  // SOFA
  sofa_info_title: 'SOFA shkalasini tushunish',
  sofa_info_p1: 'SOFA (A\'zolar yetishmovchiligini ketma-ket baholash) shkalasi reanimatsiyadagi bemorning holatini kuzatib boradi.',
  sofa_info_p2: 'U nafas olish, yurak-qon tomir, jigar, koagulyatsiya, buyrak va asab tizimlarini baholaydi.',
  sofa_info_p3: 'Klinik chegara: ≥ 2 ballga o\'tkir o\'sish yuqori o\'lim xavfi (sepsis) bilan bog\'liq a\'zolar disfunksiyasini aks ettiradi.',

  // Ranson
  ranson_info_title: 'Ranson mezonlarini tushunish',
  ranson_info_p1: 'Ranson mezonlari o\'tkir pankreatitning og\'irligi va o\'lim xavfini baholaydi.',
  ranson_info_p2: 'U kasalxonaga yotqizish paytidagi va 48 soatdan keyingi laborator parametrlarini baholaydi.',
  ranson_info_p3: 'Klinik chegara: ≥ 3 ball og\'ir pankreatit va o\'lim xavfi ortganligini ko\'rsatadi.',

  // PSI/PORT
  psi_info_title: 'PSI/PORT shkalasini tushunish',
  psi_info_p1: 'PSI/PORT (Pnevmoniya og\'irlik indeksi) kasalxonadan tashqari pnevmoniyada 30 kunlik o\'lim xavfini bashorat qiladi.',
  psi_info_p2: 'U demografiya, yondosh kasalliklar, hayotiy ko\'rsatkichlar va laborator tahlillarni chuqur baholaydi.',
  psi_info_p3: 'Klinik chegara: IV va V xavf sinflari kasalxonaga yotqizishni talab qiluvchi og\'ir pnevmoniyani ko\'rsatadi.'
}
};

let LANG = localStorage.getItem('wardcalc_lang') || 'en';
const t = k => (T[LANG]||T.en)[k] || T.en[k] || k;
