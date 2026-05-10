'use strict';

/**
 * WARDCALC MASTER DICTIONARY
 * Developer: Muhammad Sabir Ali, Final year student at Bukhara State Medical Institute.
 * Contains 15 Tools, Full UI, and Legal/Info Pages in EN, RU, UZ.
 */

window.T = {
en:{
  // --- GENERAL UI ---
  badge: 'CLINICAL DECISION TOOLS', h1a: 'Ward', h1b: 'Calc', sub: 'Evidence-based medical calculators.',
  all_label: 'ALL CALCULATORS', search_ph: 'Search tools (e.g. GCS, BMI)...', alert_msg: 'Please select all required fields to calculate.', 
  btn: 'Calculate', tab_i: 'Logic', tab_a: 'Action', tab_d: 'Rx',
  yes: 'Yes', no: 'No', YES: 'Yes', NO: 'No',
  
  // --- SPECIALTIES & SEVERITY ---
  sp_neuro: 'Neurology', sp_ped: 'Pediatrics', sp_gen: 'General', sp_resp: 'Respiratory', sp_cardio: 'Cardiology', sp_gastro: 'Gastroenterology', sp_id: 'Infectious Disease',
  sev_lo: 'LOW RISK', sev_md: 'MODERATE RISK', sev_hi: 'HIGH RISK',

  // --- FOOTER & LEGAL ---
  ft_about: 'About Us', ft_contact: 'Contact', ft_disc: 'Disclaimer', ft_terms: 'Terms', ft_privacy: 'Privacy', ft_rights: '© 2026 WardCalc. All rights reserved.',
  
  nav_about: 'About WardCalc',
  about_p1: 'WardCalc is a comprehensive clinical decision support system developed by Muhammad Sabir Ali, Final year student at Bukhara State Medical Institute. Designed to bridge the gap between complex medical literature and fast-paced bedside practice, WardCalc delivers rapid, evidence-based calculation tools to healthcare professionals globally.',
  about_h2: 'Our Mission',
  about_p2: 'In acute medical settings, time and accuracy are paramount. Our mission is to digitize and simplify internationally validated medical scoring systems into an intuitive, mobile-first interface. By reducing cognitive load, WardCalc empowers clinicians to make safer, faster, and more standardized therapeutic decisions.',
  about_h3: 'Educational Purpose',
  about_p3: 'While all algorithms and logic models within WardCalc are built strictly upon recognized peer-reviewed medical guidelines, the application is designated as an educational and reference tool. It is designed to assist, not replace, formal clinical judgment.',
  
  nav_contact: 'Contact & Support', 
  contact_p1: 'We are committed to continuous clinical and technical improvement. If you have professional feedback, feature suggestions, or have encountered a technical issue, we encourage you to reach out.',
  contact_p2: 'For academic inquiries, institutional collaborations, or technical support, please submit an issue via our official GitHub repository. All peer feedback is reviewed to ensure strict clinical accuracy.',
  
  nav_disc: 'Clinical Disclaimer', 
  disc_p1: 'The calculations, guidelines, and information provided by WardCalc are strictly for educational and informational purposes. They do not constitute definitive professional medical advice, diagnosis, or treatment protocols.',
  disc_p2: 'Healthcare providers must exercise their own independent clinical judgment. Muhammad Sabir Ali, Final year student at Bukhara State Medical Institute, assumes no liability for clinical decisions made, or actions taken, based on the outputs of this application. Always consult primary literature.',
  
  nav_terms: 'Terms of Use', 
  terms_p1: 'By accessing and utilizing the WardCalc platform, you agree to these Terms and Conditions. This application is provided on an "as is" and "as available" basis without any express or implied warranties.',
  terms_p2: 'Users are entirely responsible for verifying the accuracy of all calculations before applying them to real-world patient care. The intellectual property rights for the interface, logic, and codebase belong exclusively to the creator.',
  
  nav_privacy: 'Privacy Policy', 
  privacy_p1: 'Data security and patient confidentiality are the foundational pillars of our architecture. WardCalc operates entirely client-side, meaning all calculations are performed locally within your device\'s browser.',
  privacy_p2: 'We do not collect, transmit, or store any Personal Health Information (PHI) or patient-identifiable data. Your application preferences are saved locally on your device using standard web storage without external tracking scripts.',

  // --- 1. GCS ---
  d_gcs: 'Assess consciousness level in any patient. The baseline score demanded on every trauma call.',
  r_gcs_mild: 'Mild Injury (GCS 13-15)', r_gcs_mod: 'Moderate Injury (GCS 9-12)', r_gcs_sev: 'Severe Injury (GCS 3-8)',
  r_gcs_mild_1: 'Routine neurological observation.', r_gcs_mod_1: 'Urgent CT head scan indicated.', r_gcs_mod_2: 'Neurosurgery consultation.', r_gcs_sev_1: 'Secure airway; Intubation threshold.', r_gcs_sev_2: 'Urgent ICU admission.',
  gcs_info_title: 'Understanding the GCS', gcs_info_p1: 'The Glasgow Coma Scale (GCS) objectively measures a patient\'s level of consciousness following acute brain injury.', gcs_info_p2: 'Clinical Threshold: A score of 8 or less indicates a failure to protect the airway and requires immediate intubation. The motor component is the most highly predictive metric for overall prognosis.', gcs_info_p3: '',

  // --- 2. APGAR ---
  d_apgar: 'Newborn assessment at 1 and 5 minutes. Guides immediate resuscitation requirements.',
  r_apgar_norm: 'Normal Neonatal Transition', r_apgar_mod: 'Moderately Depressed', r_apgar_crit: 'Critically Low',
  r_apgar_norm_1: 'Routine postnatal care and skin-to-skin.',
  apgar_info_title: 'Understanding APGAR', apgar_info_p1: 'Provides a standardized, rapid method for assessing the clinical status of a newborn infant at 1 minute and 5 minutes after birth.', apgar_info_p2: 'Clinical Threshold: A score ≤ 3 at 5 minutes correlates with an increased risk of long-term neurological damage and necessitates aggressive neonatal resuscitation.', apgar_info_p3: '',

  // --- 3. WELLS DVT ---
  d_dvt: 'Estimate the pre-test probability of Deep Vein Thrombosis.',
  r_dvt_hi: 'DVT Likely', r_dvt_md: 'Moderate Risk', r_dvt_lo: 'DVT Unlikely',
  r_dvt_hi_1: 'Urgent proximal vein ultrasound required.',
  dvt_info_title: 'Understanding Wells DVT', dvt_info_p1: 'Safely and objectively categorizes patients into risk tiers, standardizing the diagnostic approach to suspected lower extremity DVT.', dvt_info_p2: 'Threshold: A score ≥ 2 categorizes the patient into the "Likely" tier, where D-dimer alone is insufficient, and imaging is mandatory.', dvt_info_p3: '',

  // --- 4. WELLS PE ---
  d_pe: 'Calculate pre-test probability to guide Pulmonary Embolism imaging.',
  r_pe_hi: 'PE Likely', r_pe_md: 'Moderate Risk', r_pe_lo: 'PE Unlikely',
  r_pe_hi_1: 'Urgent CTPA imaging required.',
  pe_info_title: 'Understanding Wells PE', pe_info_p1: 'Provides a structured framework to calculate a pre-test probability, directly dictating whether a patient should undergo D-dimer testing or proceed immediately to a CT Pulmonary Angiogram (CTPA).', pe_info_p2: 'Threshold: A score > 4 means PE is likely; a negative D-dimer cannot safely rule out PE in this cohort.', pe_info_p3: '',

  // --- 5. CURB-65 ---
  d_curb65: 'Mortality risk stratification for community-acquired pneumonia.',
  r_curb_hi: 'Severe Pneumonia', r_curb_md: 'Moderate Pneumonia', r_curb_lo: 'Mild Pneumonia',
  r_curb_hi_1: 'Urgent admission; consider ICU.',
  curb_info_title: 'Understanding CURB-65', curb_info_p1: 'A highly validated clinical prediction rule endorsed by the British Thoracic Society to calculate 30-day mortality risk in CAP.', curb_info_p2: 'Threshold: A score of 3 or higher carries a mortality risk of roughly 14%, mandating urgent hospitalization and often intensive care assessment.', curb_info_p3: '',

  // --- 6. CHADS-VASC ---
  d_chads2: 'Stroke risk stratification in non-valvular atrial fibrillation.',
  r_chads_hi: 'High Stroke Risk', r_chads_md: 'Intermediate Risk', r_chads_lo: 'Low Stroke Risk',
  r_chads_hi_1: 'Long-term oral anticoagulation strongly recommended.',
  chads_info_title: 'Understanding CHA₂DS₂-VASc', chads_info_p1: 'Estimates the annual risk of ischemic stroke in patients with non-valvular atrial fibrillation to guide the initiation of prophylactic anticoagulation.', chads_info_p2: 'Threshold: A score of 2 or greater signifies a high stroke risk (≥ 4.0% per year), establishing a strong clinical indication for systemic anticoagulation.', chads_info_p3: '',

  // --- 7. CHILD-PUGH ---
  d_cp: 'Prognostic classification of liver cirrhosis severity.',
  r_cp_a: 'Class A: Compensated', r_cp_b: 'Class B: Significant', r_cp_c: 'Class C: Decompensated',
  r_cp_c_1: 'Hepatology and transplant evaluation required.',
  cp_info_title: 'Understanding Child-Pugh', cp_info_p1: 'An established system for assessing the prognosis of chronic liver disease, primarily cirrhosis, blending objective labs with clinical assessments.', cp_info_p2: 'Threshold: Progression to Class C (10-15 points) denotes decompensated disease with poor prognosis, necessitating urgent transplant assessment.', cp_info_p3: '',

  // --- 8. BMI ---
  d_bmi: 'Body Mass Index calculation paired with WHO classification thresholds.',
  r_bmi_under: 'Underweight', r_bmi_norm: 'Normal Weight', r_bmi_over: 'Overweight', r_bmi_ob1: 'Obesity Class I', r_bmi_ob2: 'Obesity Class II+',
  r_bmi_norm_1: 'Maintain healthy lifestyle habits.', r_bmi_under_1: 'Assess for nutritional deficiencies.', r_bmi_over_1: 'Implement lifestyle optimizations.', r_bmi_ob1_1: 'Intensive lifestyle intervention.', r_bmi_ob2_1: 'Consider bariatric or pharmacological options.',
  bmi_info_title: 'Understanding BMI', bmi_info_p1: 'A simple index of weight-for-height commonly used to classify obesity in adults, providing a baseline metric for cardiovascular and metabolic risk.', bmi_info_p2: 'Note: BMI does not directly measure body fat percentage and may misclassify highly muscular individuals.', bmi_info_p3: '',

  // --- 9. EGFR ---
  d_egfr: 'Estimated glomerular filtration rate via the CKD-EPI 2021 equation.',
  r_egfr_g1: 'Normal/High GFR', r_egfr_g1_1: 'Monitor renal function progression.',
  egfr_info_title: 'Understanding eGFR (CKD-EPI 2021)', egfr_info_p1: 'The most robust overall index of renal function. It is a mandatory calculation prior to prescribing renally excreted or nephrotoxic drugs to prevent systemic toxicity.', egfr_info_p2: 'Threshold: An eGFR of < 60 mL/min/1.73m² persisting for 3 or more months formally establishes a diagnosis of Chronic Kidney Disease (CKD).', egfr_info_p3: '',

  // --- 10. MEWS ---
  d_mews: 'Track physiology to detect catastrophic deterioration early.',
  r_mews_hi: 'Critical Deterioration', r_mews_md: 'Potential Instability', r_mews_lo: 'Physiologically Stable',
  r_mews_hi_1: 'Immediate medical review; Call Rapid Response.',
  mews_info_title: 'Understanding MEWS', mews_info_p1: 'A physiological scoring system used universally to rapidly identify patients at risk of impending clinical decline, including cardiac arrest.', mews_info_p2: 'Threshold: A score of 5 or higher is statistically associated with a severely increased likelihood of ICU admission or death.', mews_info_p3: '',

  // --- 11. CENTOR ---
  d_centor: 'Clinical probability of Group A Streptococcal pharyngitis.',
  r_centor_hi: 'Strep Highly Likely', r_centor_md: 'Possible Strep', r_centor_lo: 'Viral Pharyngitis likely',
  r_centor_hi_1: 'Empirical antibiotics may be justified.',
  centor_info_title: 'Understanding Centor Criteria', centor_info_p1: 'Evaluates patients presenting with a sore throat, estimating the likelihood of Group A beta-hemolytic Streptococcus (GAS) infection.', centor_info_p2: 'Its primary utility lies in antibiotic stewardship—discouraging empirical prescription for viral pharyngitis while identifying those needing treatment to prevent complications like rheumatic fever.', centor_info_p3: '',

  // --- 12. NIHSS ---
  d_nihss: 'Quantify stroke severity to guide thrombolysis. Time is brain.',
  r_nihss_sev: 'Severe Stroke', r_nihss_modsev: 'Moderate-Severe', r_nihss_mod: 'Moderate Stroke', r_nihss_minor: 'Minor Stroke',
  r_nihss_mod_1: 'Activate stroke/thrombolysis protocol immediately.',
  nihss_info_title: 'Understanding the NIHSS', nihss_info_p1: 'The National Institutes of Health Stroke Scale (NIHSS) is a highly structured assessment tool providing a quantitative measure of stroke-related neurologic deficit. It is the international standard.', nihss_info_p2: 'It systematically evaluates consciousness, language, motor strength, and sensory loss to determine eligibility for IV thrombolysis and endovascular thrombectomy.', nihss_info_p3: '',

  // --- 13. SOFA ---
  d_sofa: 'Define sepsis (Sepsis-3) via sequential organ failure assessment.',
  r_sofa_hi: 'High Sepsis Mortality', r_sofa_md: 'Moderate Sepsis Risk', r_sofa_lo: 'Low Sepsis Risk',
  r_sofa_hi_1: 'Aggressive ICU management needed.',
  sofa_info_title: 'Understanding SOFA', sofa_info_p1: 'Tracks a patient\'s clinical status during an ICU stay to determine the extent of physiological deterioration and rate of multi-organ failure.', sofa_info_p2: 'Threshold: The Sepsis-3 consensus dictates that an acute increase in the total SOFA score of ≥ 2 points defines sepsis, carrying an approximate mortality of 10%.', sofa_info_p3: '',

  // --- 14. RANSON ---
  d_ranson: 'Predictive algorithm for acute pancreatitis mortality risk.',
  r_ranson_hi: 'Severe Pancreatitis', r_ranson_md: 'Moderate Pancreatitis', r_ranson_lo: 'Mild Pancreatitis',
  r_ranson_hi_1: 'Intensive fluid resuscitation required.',
  ranson_info_title: 'Understanding Ranson Criteria', ranson_info_p1: 'Introduced in 1974, comprising 11 specific clinical signs designed to objectively evaluate the severity and prognosis of acute pancreatitis.', ranson_info_p2: 'Threshold: A score of 3 or higher indicates severe pancreatitis, correlating with a sharp increase in mortality and necessitating aggressive fluid resuscitation.', ranson_info_p3: '',

  // --- 15. PSI/PORT ---
  d_psi: 'Comprehensive mortality stratification for Community Acquired Pneumonia.',
  r_psi_1: 'Class I: Low Risk', r_psi_2: 'Class II: Low Risk', r_psi_3: 'Class III: Moderate', r_psi_4: 'Class IV: High Risk', r_psi_5: 'Class V: Very High',
  r_psi_1_1: 'Suitable for outpatient management.', r_psi_2_1: 'Suitable for outpatient management.', r_psi_3_1: 'Consider short stay or observation.', r_psi_4_1: 'Inpatient admission required.', r_psi_5_1: 'ICU admission likely required.',
  psi_info_title: 'Understanding PSI/PORT', psi_info_p1: 'The Pneumonia Severity Index (PSI) is a highly robust clinical prediction rule used to calculate the 30-day mortality probability for CAP.', psi_info_p2: 'Considered the superior tool for identifying low-risk patients who can be safely discharged and treated as outpatients.', psi_info_p3: 'Threshold: Risk Classes IV and V carry substantial mortality risks (up to 27%) and absolutely mandate inpatient admission, often to critical care units.'
},

ru:{
  // --- UI & GENERAL ---
  badge: 'КЛИНИЧЕСКИЕ ИНСТРУМЕНТЫ', h1a: 'Ward', h1b: 'Calc', sub: 'Медицинские калькуляторы на основе доказательств.',
  all_label: 'ВСЕ КАЛЬКУЛЯТОРЫ', search_ph: 'Поиск (ШКГ, ИМТ)...', alert_msg: 'Пожалуйста, выберите все поля для расчета.', 
  btn: 'Рассчитать', tab_i: 'Логика', tab_a: 'Действие', tab_d: 'Лечение',
  yes: 'Да', no: 'Нет', YES: 'Да', NO: 'Нет',
  
  sp_neuro: 'Неврология', sp_ped: 'Педиатрия', sp_gen: 'Общие', sp_resp: 'Пульмонология', sp_cardio: 'Кардиология', sp_gastro: 'Гастро', sp_id: 'Инф. болезни',
  sev_lo: 'НИЗКИЙ РИСК', sev_md: 'СРЕДНИЙ РИСК', sev_hi: 'ВЫСОКИЙ РИСК',

  // --- FOOTER & LEGAL ---
  ft_about: 'О нас', ft_contact: 'Контакты', ft_disc: 'Отказ', ft_terms: 'Условия', ft_privacy: 'Конфиденциальность', ft_rights: '© 2026 WardCalc. Все права защищены.',
  
  nav_about: 'О проекте WardCalc',
  about_p1: 'WardCalc — это комплексная система поддержки принятия клинических решений, разработанная Мухаммадом Сабиром Али, студентом выпускного курса Бухарского государственного медицинского института. Приложение создано для быстрого предоставления доказательных инструментов медицинским работникам по всему миру.',
  about_h2: 'Наша миссия',
  about_p2: 'В условиях неотложной медицины время и точность имеют первостепенное значение. Наша миссия — оцифровать признанные международные шкалы в интуитивный мобильный интерфейс, помогая врачам принимать безопасные и стандартизированные решения.',
  about_h3: 'Образовательная цель',
  about_p3: 'Хотя все алгоритмы WardCalc строго основаны на рецензируемых медицинских руководствах, приложение предназначено исключительно для образовательных и справочных целей. Оно должно помогать, а не заменять клиническое мышление.',
  
  nav_contact: 'Свяжитесь с нами', 
  contact_p1: 'Мы стремимся к постоянному улучшению. Если у вас есть клинические отзывы, предложения или вы столкнулись с технической проблемой, пожалуйста, свяжитесь с нашей командой.',
  contact_p2: 'Для академических запросов, сотрудничества или технической поддержки обращайтесь через наш официальный репозиторий GitHub. Все отзывы проверяются для обеспечения клинической точности.',
  
  nav_disc: 'Отказ от ответственности', 
  disc_p1: 'Информация, предоставляемая WardCalc, предназначена только для образовательных целей и не является официальной медицинской консультацией, диагнозом или протоколом лечения.',
  disc_p2: 'Врачи должны полагаться на собственное независимое клиническое суждение. Мухаммад Сабир Али, студент выпускного курса Бухарского государственного медицинского института, не несет ответственности за решения, принятые на основе вычислений этого приложения.',
  
  nav_terms: 'Условия использования', 
  terms_p1: 'Используя платформу WardCalc, вы соглашаетесь с этими условиями. Сервис предоставляется «как есть» без каких-либо гарантий.',
  terms_p2: 'Пользователи несут полную ответственность за проверку точности расчетов перед применением их в реальной клинической практике. Права на код принадлежат создателю.',
  
  nav_privacy: 'Конфиденциальность', 
  privacy_p1: 'Безопасность данных — основа нашей архитектуры. WardCalc работает полностью на стороне клиента (локально в вашем браузере).',
  privacy_p2: 'Мы не собираем, не передаем и не храним личные медицинские данные пациентов. Ваши настройки сохраняются локально на устройстве без внешнего отслеживания.',

  // --- 1. GCS ---
  d_gcs: 'Базовая оценка уровня сознания. Первый показатель при травмах.',
  r_gcs_mild: 'Легкая ЧМТ (ШКГ 13-15)', r_gcs_mod: 'Средняя ЧМТ (ШКГ 9-12)', r_gcs_sev: 'Тяжелая ЧМТ (ШКГ 3-8)',
  r_gcs_mild_1: 'Плановое неврологическое наблюдение.', r_gcs_mod_1: 'Срочное КТ головы.', r_gcs_mod_2: 'Консультация нейрохирурга.', r_gcs_sev_1: 'Интубация; защита дыхательных путей.', r_gcs_sev_2: 'Срочная госпитализация в ОРИТ.',
  gcs_info_title: 'Понимание шкалы Глазго', gcs_info_p1: 'Шкала комы Глазго объективно измеряет уровень сознания пациента после острой травмы мозга.', gcs_info_p2: 'Порог: Оценка 8 баллов или ниже указывает на неспособность защитить дыхательные пути и требует немедленной интубации.', gcs_info_p3: '',

  // --- 2. APGAR ---
  d_apgar: 'Оценка новорожденного на 1 и 5 минутах. Руководство по реанимации.',
  r_apgar_norm: 'Нормальная адаптация', r_apgar_mod: 'Умеренная депрессия', r_apgar_crit: 'Критическое состояние',
  r_apgar_norm_1: 'Стандартный послеродовой уход.',
  apgar_info_title: 'Понимание шкалы Апгар', apgar_info_p1: 'Обеспечивает стандартизированный метод оценки клинического статуса новорожденного на 1-й и 5-й минутах.', apgar_info_p2: 'Порог: Оценка ≤ 3 на 5-й минуте коррелирует с риском неврологических повреждений и требует агрессивной реанимации.', apgar_info_p3: '',

  // --- 3. WELLS DVT ---
  d_dvt: 'Оценка вероятности Тромбоза Глубоких Вен (ТГВ).',
  r_dvt_hi: 'ТГВ вероятен', r_dvt_md: 'Средний риск', r_dvt_lo: 'ТГВ маловероятен',
  r_dvt_hi_1: 'Срочное УЗИ вен нижних конечностей.',
  dvt_info_title: 'Понимание Критериев Уэллса (ТГВ)', dvt_info_p1: 'Безопасно и объективно делит пациентов на группы риска, стандартизируя диагностический подход при подозрении на ТГВ.', dvt_info_p2: 'Порог: Оценка ≥ 2 означает высокую вероятность, одного D-димера недостаточно — требуется УЗИ.', dvt_info_p3: '',

  // --- 4. WELLS PE ---
  d_pe: 'Расчет вероятности ТЭЛА перед назначением КТ.',
  r_pe_hi: 'ТЭЛА вероятна', r_pe_md: 'Средний риск', r_pe_lo: 'ТЭЛА маловероятна',
  r_pe_hi_1: 'Срочное выполнение КТ-ангиографии.',
  pe_info_title: 'Понимание Критериев Уэллса (ТЭЛА)', pe_info_p1: 'Предоставляет структуру для расчета вероятности, диктуя необходимость D-димера или сразу КТ-АГ.', pe_info_p2: 'Порог: Оценка > 4 означает высокую вероятность ТЭЛА; отрицательный D-димер не исключает диагноз.', pe_info_p3: '',

  // --- 5. CURB-65 ---
  d_curb65: 'Стратификация риска смертности при пневмонии (ВП).',
  r_curb_hi: 'Тяжелая пневмония', r_curb_md: 'Средняя пневмония', r_curb_lo: 'Легкая пневмония',
  r_curb_hi_1: 'Срочная госпитализация; рассмотреть ОРИТ.',
  curb_info_title: 'Понимание CURB-65', curb_info_p1: 'Валидированная клиническая шкала для расчета 30-дневного риска смертности при внебольничной пневмонии.', curb_info_p2: 'Порог: Оценка 3 или выше несет риск смертности около 14%, требуя срочной госпитализации.', curb_info_p3: '',

  // --- 6. CHADS-VASC ---
  d_chads2: 'Стратификация риска инсульта при фибрилляции предсердий.',
  r_chads_hi: 'Высокий риск инсульта', r_chads_md: 'Умеренный риск', r_chads_lo: 'Низкий риск инсульта',
  r_chads_hi_1: 'Рекомендованы пероральные антикоагулянты.',
  chads_info_title: 'Понимание шкалы CHA₂DS₂-VASc', chads_info_p1: 'Оценивает годовой риск ишемического инсульта у пациентов с неклапанной фибрилляцией предсердий.', chads_info_p2: 'Порог: Оценка 2 или выше означает высокий риск, что является показанием для антикоагулянтной терапии.', chads_info_p3: '',

  // --- 7. CHILD-PUGH ---
  d_cp: 'Прогностическая классификация тяжести цирроза.',
  r_cp_a: 'Класс A: Компенсированный', r_cp_b: 'Класс B: Существенный', r_cp_c: 'Класс C: Декомпенсированный',
  r_cp_c_1: 'Консультация гепатолога и оценка для трансплантации.',
  cp_info_title: 'Понимание шкалы Чайлд-Пью', cp_info_p1: 'Система оценки прогноза хронических заболеваний печени, сочетающая лабораторные и клинические данные.', cp_info_p2: 'Порог: Класс С (10-15 баллов) означает декомпенсацию с плохим прогнозом, требующую трансплантации.', cp_info_p3: '',

  // --- 8. BMI ---
  d_bmi: 'Индекс массы тела с пороговыми значениями ВОЗ.',
  r_bmi_under: 'Дефицит веса', r_bmi_norm: 'Нормальный вес', r_bmi_over: 'Избыточный вес', r_bmi_ob1: 'Ожирение I', r_bmi_ob2: 'Ожирение II+',
  r_bmi_norm_1: 'Поддерживайте здоровый образ жизни.', r_bmi_under_1: 'Оцените дефицит питания.', r_bmi_over_1: 'Оптимизация образа жизни.', r_bmi_ob1_1: 'Интенсивное изменение образа жизни.', r_bmi_ob2_1: 'Рассмотреть бариатрическую хирургию.',
  bmi_info_title: 'Понимание ИМТ', bmi_info_p1: 'Простой показатель соотношения веса и роста, используемый для классификации ожирения.', bmi_info_p2: 'ИМТ не измеряет напрямую процент жира и может быть неточным для людей с развитой мускулатурой.', bmi_info_p3: '',

  // --- 9. EGFR ---
  d_egfr: 'Скорость клубочковой фильтрации (CKD-EPI 2021).',
  r_egfr_g1: 'Норма/Высокая рСКФ', r_egfr_g1_1: 'Мониторинг функции почек.',
  egfr_info_title: 'Понимание рСКФ', egfr_info_p1: 'Наиболее надежный показатель функции почек. Формула CKD-EPI 2021 рекомендована как стандарт.', egfr_info_p2: 'Обязательна перед назначением нефротоксичных препаратов для предотвращения их кумуляции.', egfr_info_p3: '',

  // --- 10. MEWS ---
  d_mews: 'Выявление риска катастрофического клинического ухудшения.',
  r_mews_hi: 'Критическое ухудшение', r_mews_md: 'Возможная нестабильность', r_mews_lo: 'Стабильное состояние',
  r_mews_hi_1: 'Срочный осмотр врачом; вызов реаниматолога.',
  mews_info_title: 'Понимание шкалы MEWS', mews_info_p1: 'Физиологическая система для быстрого выявления пациентов с риском остановки сердца или ухудшения.', mews_info_p2: 'Порог: Оценка 5 баллов или выше статистически связана с высокой вероятностью перевода в ОРИТ или смерти.', mews_info_p3: '',

  // --- 11. CENTOR ---
  d_centor: 'Клиническая вероятность стрептококкового фарингита.',
  r_centor_hi: 'Стрептококк высоко вероятен', r_centor_md: 'Возможен стрептококк', r_centor_lo: 'Вирусный фарингит вероятен',
  r_centor_hi_1: 'Оправдано эмпирическое назначение антибиотиков.',
  centor_info_title: 'Понимание Критериев Центора', centor_info_p1: 'Оценивает вероятность инфекции бета-гемолитическим стрептококком группы А при боли в горле.', centor_info_p2: 'Помогает предотвратить необоснованное назначение антибиотиков при вирусных инфекциях.', centor_info_p3: '',

  // --- 12. NIHSS ---
  d_nihss: 'Количественная оценка дефицита при остром инсульте.',
  r_nihss_sev: 'Тяжелый инсульт', r_nihss_modsev: 'Средне-тяжелый', r_nihss_mod: 'Средний инсульт', r_nihss_minor: 'Легкий инсульт',
  r_nihss_mod_1: 'Активация протокола лечения инсульта (тромболизис).',
  nihss_info_title: 'Понимание шкалы NIHSS', nihss_info_p1: 'Мировой стандарт для количественной оценки неврологического дефицита при остром инсульте.', nihss_info_p2: 'Основной показатель для решения вопроса о внутривенном тромболизисе и тромбэктомии.', nihss_info_p3: '',

  // --- 13. SOFA ---
  d_sofa: 'Оценка органной дисфункции (определение Sepsis-3).',
  r_sofa_hi: 'Высокая смертность при сепсисе', r_sofa_md: 'Умеренный риск сепсиса', r_sofa_lo: 'Низкий риск',
  r_sofa_hi_1: 'Агрессивное лечение в условиях ОРИТ.',
  sofa_info_title: 'Понимание шкалы SOFA', sofa_info_p1: 'Отслеживает статус пациента в ОРИТ для определения степени полиорганной недостаточности.', sofa_info_p2: 'Порог: Острое повышение оценки SOFA на ≥ 2 балла определяет сепсис (смертность около 10%).', sofa_info_p3: '',

  // --- 14. RANSON ---
  d_ranson: 'Прогноз риска смертности при остром панкреатите.',
  r_ranson_hi: 'Тяжелый панкреатит', r_ranson_md: 'Средний панкреатит', r_ranson_lo: 'Легкий панкреатит',
  r_ranson_hi_1: 'Требуется интенсивная инфузионная терапия.',
  ranson_info_title: 'Понимание Критериев Рэнсона', ranson_info_p1: 'Клинические признаки для объективной оценки тяжести и прогноза острого панкреатита.', ranson_info_p2: 'Порог: Оценка 3 и выше указывает на тяжелый панкреатит, требующий агрессивной инфузионной терапии.', ranson_info_p3: '',

  // --- 15. PSI/PORT ---
  d_psi: 'Комплексная стратификация смертности при пневмонии.',
  r_psi_1: 'Класс I: Низкий риск', r_psi_2: 'Класс II: Низкий риск', r_psi_3: 'Класс III: Средний риск', r_psi_4: 'Класс IV: Высокий риск', r_psi_5: 'Класс V: Очень высокий',
  r_psi_1_1: 'Подходит для амбулаторного лечения.', r_psi_2_1: 'Подходит для амбулаторного лечения.', r_psi_3_1: 'Краткосрочное наблюдение.', r_psi_4_1: 'Требуется госпитализация.', r_psi_5_1: 'Вероятна госпитализация в ОРИТ.',
  psi_info_title: 'Понимание шкалы PSI/PORT', psi_info_p1: 'Комплексное клиническое правило для расчета 30-дневной вероятности смерти при внебольничной пневмонии.', psi_info_p2: 'Лучший инструмент для выявления пациентов низкого риска, которых можно безопасно лечить амбулаторно.', psi_info_p3: ''
},

uz:{
  // --- UI & GENERAL ---
  badge: 'KLINIK VOSITALAR', h1a: 'Ward', h1b: 'Calc', sub: 'Isbotlangan tibbiy kalkulyatorlar.',
  all_label: 'BARCHA KALKULYATORLAR', search_ph: 'Qidiruv (GCS, TVI)...', alert_msg: 'Hisoblash uchun barcha maydonlarni tanlang.', 
  btn: 'Hisoblash', tab_i: 'Mantiq', tab_a: 'Harakat', tab_d: 'Davolash',
  yes: 'Ha', no: 'Yo\'q', YES: 'Ha', NO: 'Yo\'q',
  
  sp_neuro: 'Nevrologiya', sp_ped: 'Pediatriya', sp_gen: 'Umumiy', sp_resp: 'Nafas tizimi', sp_cardio: 'Kardiologiya', sp_gastro: 'Gastro', sp_id: 'Yuqumli kasal.',
  sev_lo: 'PAST XAVF', sev_md: 'O’RTACHA XAVF', sev_hi: 'YUQORI XAVF',

  // --- FOOTER & LEGAL ---
  ft_about: 'Biz haqimizda', ft_contact: 'Aloqa', ft_disc: 'Rad etish', ft_terms: 'Shartlar', ft_privacy: 'Maxfiylik', ft_rights: '© 2026 WardCalc. Barcha huquqlar himoyalangan.',
  
  nav_about: 'WardCalc haqida',
  about_p1: 'WardCalc - bu Buxoro davlat tibbiyot instituti bitiruvchi talabasi Muhammad Sabir Ali tomonidan ishlab chiqilgan kompleks klinik qarorlarni qabul qilishni qo\'llab-quvvatlash tizimi. Dastur tibbiyot xodimlariga tezkor, dalillarga asoslangan hisoblash vositalarini taqdim etadi.',
  about_h2: 'Bizning maqsadimiz',
  about_p2: 'Shoshilinch tibbiy sharoitlarda vaqt va aniqlik birinchi o\'rinda turadi. Bizning vazifamiz xalqaro miqyosda tasdiqlangan tibbiy ball tizimlarini intuitiv interfeysga aylantirish, shifokorlarga xavfsizroq va standartlashtirilgan qarorlar qabul qilish imkonini berishdir.',
  about_h3: 'Ta\'lim maqsadi',
  about_p3: 'WardCalc doirasidagi barcha algoritmlar nufuzli tibbiy ko\'rsatmalarga asoslangan bo\'lsa-da, u ta\'lim va ma\'lumot vositasi hisoblanadi. U rasmiy klinik xulosani almashtirish uchun emas, yordam berish uchun mo\'ljallangan.',
  
  nav_contact: 'Aloqa va Qo\'llab-quvvatlash', 
  contact_p1: 'Biz doimiy takomillashtirish tarafdorimiz. Agar sizda klinik mulohazalar, takliflar bo\'lsa yoki texnik muammoga duch kelsangiz, biz bilan bog\'laning.',
  contact_p2: 'Akademik so\'rovlar yoki texnik yordam uchun rasmiy GitHub repozitoriyamiz orqali murojaat qiling. Barcha fikr-mulohazalar klinik aniqlikni ta\'minlash uchun ko\'rib chiqiladi.',
  
  nav_disc: 'Rad etish', 
  disc_p1: 'WardCalc tomonidan taqdim etilgan ma\'lumotlar faqat ta\'lim maqsadida bo\'lib, rasmiy tibbiy maslahat yoki tashxis hisoblanmaydi.',
  disc_p2: 'Shifokorlar o\'zlarining mustaqil klinik xulosalariga tayanishlari shart. Muhammad Sabir Ali, Buxoro davlat tibbiyot instituti bitiruvchi talabasi, ushbu dastur natijalariga asoslangan qarorlar uchun hech qanday javobgarlikni o\'z zimmasiga olmaydi.',
  
  nav_terms: 'Foydalanish shartlari', 
  terms_p1: 'WardCalc platformasidan foydalanish orqali siz ushbu shartlarga rozilik bildirasiz. Ushbu xizmat hech qanday kafolatsiz taqdim etiladi.',
  terms_p2: 'Foydalanuvchilar har qanday klinik amaliyotdan oldin hisob-kitoblar aniqligini tekshirishlari shart. Kod va interfeys huquqlari yaratuvchiga tegishli.',
  
  nav_privacy: 'Maxfiylik siyosati', 
  privacy_p1: 'Ma\'lumotlar xavfsizligi bizning arxitekturamizning asosidir. WardCalc to\'liq mijoz tomonida (lokal ravishda brauzeringizda) ishlaydi.',
  privacy_p2: 'Biz bemorni identifikatsiya qiluvchi hech qanday ma\'lumotlarni yig\'maymiz va saqlamaymiz. Sozlamalaringiz qurilmangizda xavfsiz saqlanadi.',

  // --- 1. GCS ---
  d_gcs: 'Ong darajasini baholash. Jarohatda eng birinchi talab qilinadigan ko\'rsatkich.',
  r_gcs_mild: 'Yengil jarohat (GCS 13-15)', r_gcs_mod: 'O’rtacha jarohat (GCS 9-12)', r_gcs_sev: 'Og’ir jarohat (GCS 3-8)',
  r_gcs_mild_1: 'Nevrologik kuzatuv o\'tkazilsin.', r_gcs_mod_1: 'Zudlik bilan bosh KT qilish lozim.', r_gcs_mod_2: 'Neyrojarroh konsultatsiyasi.', r_gcs_sev_1: 'Nafas yo\'llarini himoyalash; Intubatsiya.', r_gcs_sev_2: 'Zudlik bilan ORITga yotqizish.',
  gcs_info_title: 'Glazgo shkalasini tushunish', gcs_info_p1: 'Glazgo Koma Shkalasi bosh miya jarohatidan keyin bemorning ong darajasini ishonchli o\'lchash uchun xizmat qiladi.', gcs_info_p2: 'Chegara: 8 yoki undan past ball nafas yo\'llarini himoya qila olmaslikni ko\'rsatadi va zudlik bilan intubatsiyani talab qiladi.', gcs_info_p3: '',

  // --- 2. APGAR ---
  d_apgar: 'Chaqaloqni 1 va 5-daqiqada baholash. Reanimatsiya taktikasini belgilaydi.',
  r_apgar_norm: 'Normal holat', r_apgar_mod: 'O’rtacha depressiya', r_apgar_crit: 'Kritik holat',
  r_apgar_norm_1: 'Doimiy tug\'ruqdan keyingi parvarish.',
  apgar_info_title: 'Apgar shkalasini tushunish', apgar_info_p1: 'Chaqaloqning tug\'ilishdan 1 va 5 daqiqa o\'tgach klinik holatini tezkor baholash usuli.', apgar_info_p2: 'Chegara: 5-daqiqada ≤ 3 ball nevrologik shikastlanish xavfining oshishini bildiradi va agressiv reanimatsiyani talab qiladi.', apgar_info_p3: '',

  // --- 3. WELLS DVT ---
  d_dvt: 'Chuqur vena trombozi (TVT) ehtimolini baholash.',
  r_dvt_hi: 'TVT ehtimoli yuqori', r_dvt_md: 'O\'rtacha xavf', r_dvt_lo: 'TVT ehtimoli past',
  r_dvt_hi_1: 'Zudlik bilan tomirlar UTT tekshiruvi.',
  dvt_info_title: 'Wells DVT mezonlarini tushunish', dvt_info_p1: 'TVT uchun Wells mezonlari bemorlarni xavf guruhlariga ajratadi va tashxislash yondashuvini standartlashtiradi.', dvt_info_p2: 'Chegara: ≥ 2 ball bemorni "TVT ehtimoli yuqori" guruhiga kiritadi, bu yerda UTT majburiydir.', dvt_info_p3: '',

  // --- 4. WELLS PE ---
  d_pe: 'O\'pka emboliyasini (O\'ATE) vizualizatsiya qilish ehtimoli.',
  r_pe_hi: 'O’ATE ehtimoli yuqori', r_pe_md: 'O\'rtacha xavf', r_pe_lo: 'O’ATE ehtimoli past',
  r_pe_hi_1: 'Zudlik bilan KT-angiografiya tekshiruvi.',
  pe_info_title: 'Wells PE mezonlarini tushunish', pe_info_p1: 'O\'pka emboliyasi ehtimolini hisoblash va D-dimer yoki KT angiografiyasini (KTPA) bajarishni belgilash uchun xizmat qiladi.', pe_info_p2: 'Chegara: > 4 ball O\'ATE ehtimoli yuqori ekanligini anglatadi; manfiy D-dimer istisno qila olmaydi.', pe_info_p3: '',

  // --- 5. CURB-65 ---
  d_curb65: 'Pnevmoniyada (KTP) o\'lim xavfi stratifikatsiyasi.',
  r_curb_hi: 'Og’ir pnevmoniya', r_curb_md: 'O\'rtacha pnevmoniya', r_curb_lo: 'Yengil pnevmoniya',
  r_curb_hi_1: 'Zudlik bilan kasalxonaga yotqizish; ORIT.',
  curb_info_title: 'CURB-65 shkalasini tushunish', curb_info_p1: 'Pnevmoniyada 30 kunlik o\'lim xavfini hisoblash uchun tasdiqlangan klinik qoida.', curb_info_p2: 'Chegara: 3 yoki undan yuqori ball o\'lim xavfining sezilarli oshishi (14%) bilan bog\'liq va gospitalizatsiyani talab qiladi.', curb_info_p3: '',

  // --- 6. CHADS-VASC ---
  d_chads2: 'Yurak bo\'lmachalari fibrillyatsiyasida insult xavfini baholash.',
  r_chads_hi: 'Insult xavfi yuqori', r_chads_md: 'O\'rtacha xavf', r_chads_lo: 'Insult xavfi past',
  r_chads_hi_1: 'Uzoq muddatli antikoagulyantlar qat\'iy tavsiya etiladi.',
  chads_info_title: 'CHA₂DS₂-VASc shkalasini tushunish', chads_info_p1: 'Bo\'lmachalar fibrillyatsiyasi bo\'lgan bemorlarda ishemik insultning yillik xavfini hisoblash uchun klinik vosita.', chads_info_p2: 'Chegara: 2 yoki undan yuqori ball tizimli antikoagulyatsiya uchun kuchli klinik ko\'rsatma bo\'lib xizmat qiladi.', chads_info_p3: '',

  // --- 7. CHILD-PUGH ---
  d_cp: 'Jigar sirrozi og\'irligini prognostik tasniflash.',
  r_cp_a: 'A sinf: Kompensatsiyalangan', r_cp_b: 'B sinf: Sezilarli buzilish', r_cp_c: 'C sinf: Dekompensatsiyalangan',
  r_cp_c_1: 'Gepatolog ko\'rigi va transplantatsiya baholash zarur.',
  cp_info_title: 'Child-Pugh shkalasini tushunish', cp_info_p1: 'Surunkali jigar kasalliklari, asosan sirroz prognozini baholash uchun o\'rnatilgan tizim.', cp_info_p2: 'Chegara: C sinfiga (10-15 ball) o\'tish yomon prognozli dekompensatsiyalangan kasallikni anglatadi.', cp_info_p3: '',

  // --- 8. BMI ---
  d_bmi: 'JSST klassifikatsiyasi chegaralari bilan tana vazni indeksi (TVI).',
  r_bmi_under: 'Vazn kam', r_bmi_norm: 'Normal vazn', r_bmi_over: 'Semizlik oldi', r_bmi_ob1: 'I darajali semizlik', r_bmi_ob2: 'II+ darajali semizlik',
  r_bmi_norm_1: 'Sog’lom turmush tarzini davom ettiring.', r_bmi_under_1: 'Oziqlanish yetishmovchiligini tekshiring.', r_bmi_over_1: 'Turmush tarzini optimallashtiring.', r_bmi_ob1_1: 'Intensiv parhez va mashqlar.', r_bmi_ob2_1: 'Bariatrik jarrohlikni ko\'rib chiqing.',
  bmi_info_title: 'TVI ni tushunish', bmi_info_p1: 'Kattalardagi semizlikni tasniflash uchun ishlatiladigan vazn va bo\'y nisbatining oddiy ko\'rsatkichi.', bmi_info_p2: 'Eslatma: TVI bevosita tana yog\' foizini o\'lchamasligini yodda tutish kerak.', bmi_info_p3: '',

  // --- 9. EGFR ---
  d_egfr: 'CKD-EPI 2021 tenglamasi orqali buyrak faoliyatini baholash.',
  r_egfr_g1: 'Normal/Yuqori GFR', r_egfr_g1_1: 'Buyrak faoliyati progressiyasini kuzating.',
  egfr_info_title: 'eGFR tushunish', egfr_info_p1: 'Buyrak faoliyatining eng ishonchli umumiy ko\'rsatkichi. Nefrotoksik dorilarni yozishdan oldin majburiydir.', egfr_info_p2: 'Chegara: < 60 ml/min ko\'rsatkichi Surunkali Buyrak Kasalligi tashxisini tasdiqlaydi.', egfr_info_p3: '',

  // --- 10. MEWS ---
  d_mews: 'Klinik yomonlashuvni erta aniqlash uchun fiziologiyani kuzating.',
  r_mews_hi: 'Kritik yomonlashuv', r_mews_md: 'Ehtimoliy beqarorlik', r_mews_lo: 'Fiziologik stabil',
  r_mews_hi_1: 'Zudlik bilan shifokor ko\'rigi; RRT chaqiruv.',
  mews_info_title: 'MEWS shkalasini tushunish', mews_info_p1: 'Yurak xuruji kabi klinik pasayish xavfi ostida bo\'lgan bemorlarni tezda aniqlash uchun fiziologik baholash tizimi.', mews_info_p2: 'Chegara: 5 yoki undan yuqori ball ORIT ga yotqizilish yoki o\'lim ehtimolining keskin oshishi bilan bog\'liq.', mews_info_p3: '',

  // --- 11. CENTOR ---
  d_centor: 'A guruhi streptokokk faringiti ehtimolini klinik baholash.',
  r_centor_hi: 'Strep ehtimoli yuqori', r_centor_md: 'Strep mumkin', r_centor_lo: 'Virusli faringit ehtimoli',
  r_centor_hi_1: 'Empirik antibiotiklar tavsiya etilishi mumkin.',
  centor_info_title: 'Centor mezonlarini tushunish', centor_info_p1: 'Tomog\'i og\'riyotgan bemorlarni baholash va A guruhi streptokokk (GAS) infektsiyasi ehtimolini hisoblash.', centor_info_p2: 'Asosiy maqsadi - virusli faringit uchun antibiotiklarni empirik yozib berishni faol ravishda kamaytirish.', centor_info_p3: '',

  // --- 12. NIHSS ---
  d_nihss: 'Trombolizisni qo\'llash uchun insult og\'irligini miqdoriy baholash.',
  r_nihss_sev: 'Og\'ir insult', r_nihss_modsev: 'O\'rta-og\'ir', r_nihss_mod: 'O\'rtacha insult', r_nihss_minor: 'Yengil insult',
  r_nihss_mod_1: 'Insultni davolash (trombolizis) bayonnomasini faollashtirish.',
  nihss_info_title: 'NIHSS shkalasini tushunish', nihss_info_p1: 'Insult bilan bog\'liq nevrologik defitsitning miqdoriy o\'lchovini ta\'minlaydigan xalqaro standart.', nihss_info_p2: 'U IV trombolizis va endovaskulyar trombektomiyaga yaroqlilikni aniqlash uchun asosiy ko\'rsatkichdir.', nihss_info_p3: '',

  // --- 13. SOFA ---
  d_sofa: 'A\'zolar yetishmovchiligini baholash orqali sepsisni aniqlash (Sepsis-3).',
  r_sofa_hi: 'Yuqori o\'lim xavfi (Sepsis)', r_sofa_md: 'O\'rtacha sepsis xavfi', r_sofa_lo: 'Past sepsis xavfi',
  r_sofa_hi_1: 'Agressiv reanimatsion (ORIT) davolash.',
  sofa_info_title: 'SOFA shkalasini tushunish', sofa_info_p1: 'Reanimatsiya bo\'limida bemorning klinik holatini, fiziologik yomonlashish darajasini va poliorgan yetishmovchiligini kuzatib boradi.', sofa_info_p2: 'Chegara: SOFA umumiy balining ≥ 2 ballga keskin oshishi sepsisni belgilaydi (taxminan 10% o\'lim ko\'rsatkichi).', sofa_info_p3: '',

  // --- 14. RANSON ---
  d_ranson: 'O\'tkir pankreatitda o\'lim xavfini bashorat qilish algoritmi.',
  r_ranson_hi: 'Og\'ir pankreatit', r_ranson_md: 'O\'rtacha pankreatit', r_ranson_lo: 'Yengil pankreatit',
  r_ranson_hi_1: 'Intensiv infuzion terapiya talab qilinadi.',
  ranson_info_title: 'Ranson mezonlarini tushunish', ranson_info_p1: 'O\'tkir pankreatitning og\'irligi va prognozini ob\'ektiv baholash uchun mo\'ljallangan klinik belgilar.', ranson_info_p2: 'Chegara: 3 yoki undan yuqori ball o\'lim ko\'rsatkichining keskin oshishi bilan bog\'liq bo\'lgan og\'ir pankreatitni ko\'rsatadi.', ranson_info_p3: '',

  // --- 15. PSI/PORT ---
  d_psi: 'Kasalxonadan tashqari pnevmoniya uchun keng qamrovli o\'lim xavfi stratifikatsiyasi.',
  r_psi_1: 'I Sinf: Past xavf', r_psi_2: 'II Sinf: Past xavf', r_psi_3: 'III Sinf: O\'rtacha xavf', r_psi_4: 'IV Sinf: Yuqori xavf', r_psi_5: 'V Sinf: Juda yuqori xavf',
  r_psi_1_1: 'Uyda davolanish uchun xavfsiz.', r_psi_2_1: 'Uyda davolanish uchun xavfsiz.', r_psi_3_1: 'Kasalxonada qisqa kuzatuv.', r_psi_4_1: 'Kasalxonaga yotqizish majburiy.', r_psi_5_1: 'Reanimatsiyaga (ORIT) yotqizish zarur.',
  psi_info_title: 'PSI/PORT shkalasini tushunish', psi_info_p1: 'Pnevmoniya og\'irlik indeksi (PSI) pnevmoniya bilan kasallangan bemorlar uchun 30 kunlik o\'lim ehtimolini hisoblash vositasi.', psi_info_p2: 'Uydan xavfsiz javob berilishi mumkin bo\'lgan past xavfli bemorlarni aniqlash uchun eng ustun vosita hisoblanadi.', psi_info_p3: 'Chegara: IV va V xavf sinflari sezilarli o\'lim xavfini o\'z ichiga oladi va mutlaqo kasalxonaga yotqizishni talab qiladi.'
}
};

// --- GLOBAL TRANSLATION HANDLER ---
// Ensures UI elements and calculations instantly fetch the correct language without crashing
window.t = function(key) {
    var lang = localStorage.getItem('wardcalc_lang') || 'en';
    var dict = (window.T && window.T[lang]) ? window.T[lang] : (window.T ? window.T.en : {});
    return dict[key] || (window.T.en ? window.T.en[key] : key) || key;
};
