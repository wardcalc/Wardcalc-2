'use strict';

/**
 * WARDCALC MASTER DICTIONARY
 * Developer: Muhammad Sabir Ali, Final year student at Bukhara State Medical Institute.
 * Contains 15 Tools, Full UI, Questions, and Legal Pages in EN, RU, UZ.
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
  d_gcs: 'Assess consciousness level in any patient.', f_eye:'Eye Opening', f_verbal:'Verbal Response', f_motor:'Motor Response',
  g_e4: 'Spontaneous (4)', g_e3: 'To voice (3)', g_e2: 'To pain (2)', g_e1: 'None (1)',
  g_v5: 'Oriented (5)', g_v4: 'Confused (4)', g_v3: 'Words (3)', g_v2: 'Sounds (2)', g_v1: 'None (1)',
  g_m6: 'Obeys (6)', g_m5: 'Localizes (5)', g_m4: 'Withdrawal (4)', g_m3: 'Flexion (3)', g_m2: 'Extension (2)', g_m1: 'None (1)',
  r_gcs_mild: 'Mild Injury (GCS 13-15)', r_gcs_mod: 'Moderate Injury (GCS 9-12)', r_gcs_sev: 'Severe Injury (GCS 3-8)',
  r_gcs_mild_1: 'Routine neurological observation.', r_gcs_mod_1: 'Urgent CT head scan indicated.', r_gcs_mod_2: 'Neurosurgery consultation.', r_gcs_sev_1: 'Secure airway; Intubation threshold.', r_gcs_sev_2: 'Urgent ICU admission.',
  gcs_info_title: 'Understanding the GCS', gcs_info_p1: 'The Glasgow Coma Scale (GCS) objectively measures a patient\'s level of consciousness following acute brain injury.', gcs_info_p2: 'Clinical Threshold: A score of 8 or less indicates a failure to protect the airway and requires immediate intubation.',

  // --- 2. APGAR ---
  d_apgar: 'Newborn assessment at 1 and 5 minutes.', f_appear: 'Appearance', f_pulse: 'Pulse', f_grimace: 'Grimace', f_activity: 'Activity', f_resp_a: 'Respiration',
  a_a2: 'Pink (2)', a_a1: 'Blue extremities (1)', a_a0: 'Blue/pale (0)', a_p2: '≥ 100 bpm (2)', a_p1: '< 100 bpm (1)', a_p0: 'Absent (0)',
  a_g2: 'Cry/Cough (2)', a_g1: 'Grimace (1)', a_g0: 'None (0)', a_c2: 'Active (2)', a_c1: 'Some flexion (1)', a_c0: 'Limp (0)', a_r2: 'Strong cry (2)', a_r1: 'Weak (1)', a_r0: 'Absent (0)',
  r_apgar_norm: 'Normal Transition', r_apgar_mod: 'Moderately Depressed', r_apgar_crit: 'Critically Low', r_apgar_norm_1: 'Routine postnatal care.',
  apgar_info_title: 'Understanding APGAR', apgar_info_p1: 'Provides a standardized, rapid method for assessing clinical status at 1 and 5 minutes after birth.', apgar_info_p2: 'Threshold: A score ≤ 3 at 5 minutes correlates with an increased risk of neurological damage.',

  // --- 3. WELLS DVT ---
  d_dvt: 'Estimate the pre-test probability of DVT.', f_cancer: 'Active cancer', f_paralysis: 'Paralysis, paresis, or plaster', f_bedridden: 'Recently bedridden > 3 days', f_tenderness: 'Localized tenderness', f_swelling_entire: 'Entire leg swollen', f_swelling_calf: 'Calf swelling > 3 cm', f_pitting: 'Pitting edema on symptomatic leg', f_collateral: 'Collateral superficial veins', f_alt_dx: 'Alternative diagnosis more likely (-2)',
  r_dvt_hi: 'DVT Likely', r_dvt_md: 'Moderate Risk', r_dvt_lo: 'DVT Unlikely', r_dvt_hi_1: 'Urgent proximal vein ultrasound required.',
  dvt_info_title: 'Understanding Wells DVT', dvt_info_p1: 'Standardizes the diagnostic approach to suspected lower extremity DVT.', dvt_info_p2: 'Threshold: A score ≥ 2 categorizes the patient into the "Likely" tier where imaging is mandatory.',

  // --- 4. WELLS PE ---
  d_pe: 'Calculate pre-test probability for PE imaging.', f_pe_dvt: 'Clinical signs of DVT', f_pe_alt: 'Alternative diagnosis less likely than PE', f_pe_hr: 'Heart rate > 100 bpm', f_pe_immob: 'Immobilization (> 3 days)', f_pe_hx: 'Previous PE or DVT', f_pe_hemop: 'Hemoptysis', f_pe_malig: 'Malignancy',
  r_pe_hi: 'PE Likely', r_pe_md: 'Moderate Risk', r_pe_lo: 'PE Unlikely', r_pe_hi_1: 'Urgent CTPA imaging required.',
  pe_info_title: 'Understanding Wells PE', pe_info_p1: 'Directly dictates whether a patient should undergo D-dimer testing or proceed to CTPA.', pe_info_p2: 'Threshold: A score > 4 means PE is likely; a negative D-dimer cannot safely rule out PE.',

  // --- 5. CURB-65 ---
  d_curb65: 'Mortality risk stratification for CAP.', f_confusion: 'Confusion (AMTS ≤ 8)', f_urea: 'BUN > 19 mg/dL', f_rr30: 'Respiratory Rate ≥ 30/min', f_bp_low: 'Systolic BP < 90 or Diastolic ≤ 60', f_age65: 'Age ≥ 65 years',
  r_curb_hi: 'Severe Pneumonia', r_curb_md: 'Moderate Pneumonia', r_curb_lo: 'Mild Pneumonia', r_curb_hi_1: 'Urgent admission; consider ICU.',
  curb_info_title: 'Understanding CURB-65', curb_info_p1: 'A validated prediction rule by the British Thoracic Society to calculate 30-day mortality risk.', curb_info_p2: 'Threshold: A score of 3 or higher carries a mortality risk of roughly 14%.',

  // --- 6. CHADS-VASC ---
  d_chads2: 'Stroke risk stratification in atrial fibrillation.', f_chf: 'Congestive Heart Failure', f_htn: 'Hypertension', f_age75: 'Age ≥ 75', f_dm: 'Diabetes Mellitus', f_stroke: 'Stroke/TIA history', f_vascular: 'Vascular Disease',
  r_chads_hi: 'High Stroke Risk', r_chads_md: 'Intermediate Risk', r_chads_lo: 'Low Stroke Risk', r_chads_hi_1: 'Oral anticoagulation strongly recommended.',
  chads_info_title: 'Understanding CHA₂DS₂-VASc', chads_info_p1: 'Estimates the annual risk of ischemic stroke to guide prophylactic anticoagulation.', chads_info_p2: 'Threshold: A score of 2 or greater signifies a high stroke risk (≥ 4.0% per year).',

  // --- 7. CHILD-PUGH ---
  d_cp: 'Prognostic classification of liver cirrhosis.', f_bili: 'Bilirubin (μmol/L)', f_alb: 'Albumin (g/L)', f_pt: 'PT prolongation / INR', f_ascites: 'Ascites', f_enceph: 'Encephalopathy', 
  cp_b1: '< 34', cp_b2: '34–50', cp_b3: '> 50', cp_a1: '> 35', cp_a2: '28–35', cp_a3: '< 28', cp_p1: '< 4s / INR < 1.7', cp_p2: '4–6s / 1.7–2.3', cp_p3: '> 6s / INR > 2.3', cp_as2: 'Mild/Moderate', cp_as3: 'Severe', cp_e2: 'Grade I–II', cp_e3: 'Grade III–IV',
  r_cp_a: 'Class A: Compensated', r_cp_b: 'Class B: Significant', r_cp_c: 'Class C: Decompensated', r_cp_c_1: 'Hepatology and transplant evaluation required.',
  cp_info_title: 'Understanding Child-Pugh', cp_info_p1: 'An established system for assessing the prognosis of chronic liver disease.', cp_info_p2: 'Threshold: Progression to Class C denotes decompensated disease with poor prognosis.',

  // --- 8. BMI ---
  d_bmi: 'Body Mass Index calculation.', f_weight: 'Weight (kg)', f_height: 'Height (cm)',
  r_bmi_under: 'Underweight', r_bmi_norm: 'Normal Weight', r_bmi_over: 'Overweight', r_bmi_ob1: 'Obesity Class I', r_bmi_ob2: 'Obesity Class II+',
  r_bmi_norm_1: 'Maintain healthy lifestyle habits.', r_bmi_under_1: 'Assess for nutritional deficiencies.', r_bmi_over_1: 'Implement lifestyle optimizations.', r_bmi_ob1_1: 'Intensive lifestyle intervention.', r_bmi_ob2_1: 'Consider bariatric options.',
  bmi_info_title: 'Understanding BMI', bmi_info_p1: 'Provides a baseline metric for cardiovascular and metabolic risk stratification.', bmi_info_p2: 'Note: BMI does not directly measure body fat percentage.',

  // --- 9. EGFR ---
  d_egfr: 'Estimated GFR via CKD-EPI 2021.', f_cr: 'Serum Creatinine', f_age: 'Age', f_sex: 'Sex', sex_m: 'Male', sex_f: 'Female',
  r_egfr_g1: 'Normal/High GFR', r_egfr_g1_1: 'Monitor renal function progression.',
  egfr_info_title: 'Understanding eGFR', egfr_info_p1: 'Mandatory prior to prescribing renally excreted or nephrotoxic drugs.', egfr_info_p2: 'Threshold: An eGFR of < 60 mL/min persisting for 3 months establishes CKD.',

  // --- 10. MEWS ---
  d_mews: 'Early detection of clinical deterioration.', f_mews_rr: 'Respiratory Rate', f_mews_hr: 'Heart Rate', f_mews_sbp: 'Systolic BP', f_mews_temp: 'Temperature', f_mews_avpu: 'Consciousness (AVPU)',
  r_mews_hi: 'Critical Deterioration', r_mews_md: 'Potential Instability', r_mews_lo: 'Physiologically Stable', r_mews_hi_1: 'Immediate medical review; Call Rapid Response.',
  mews_info_title: 'Understanding MEWS', mews_info_p1: 'Used universally to rapidly identify patients at risk of impending clinical decline.', mews_info_p2: 'Threshold: A score of 5 or higher is associated with a severely increased likelihood of ICU admission.',

  // --- 11. CENTOR ---
  d_centor: 'Clinical probability of Strep pharyngitis.', f_cough_a: 'Absence of cough', f_exudates: 'Tonsillar exudates', f_lymph: 'Tender cervical lymphadenopathy', f_temp38: 'Temperature > 38.0°C', f_c_age: 'Age Group', c_age_1: '3–14 years (+1)', c_age_2: '15–44 years (0)', c_age_3: '≥ 45 years (-1)',
  r_centor_hi: 'Strep Highly Likely', r_centor_md: 'Possible Strep', r_centor_lo: 'Viral Pharyngitis likely', r_centor_hi_1: 'Empirical antibiotics may be justified.',
  centor_info_title: 'Understanding Centor Criteria', centor_info_p1: 'Evaluates the likelihood of Group A beta-hemolytic Streptococcus infection.', centor_info_p2: 'Primary utility lies in antibiotic stewardship.',

  // --- 12. NIHSS ---
  d_nihss: 'Quantify stroke severity to guide thrombolysis.', f_nihss_score: 'Total NIHSS Score (0-42)',
  r_nihss_sev: 'Severe Stroke', r_nihss_modsev: 'Moderate-Severe', r_nihss_mod: 'Moderate Stroke', r_nihss_minor: 'Minor Stroke', r_nihss_mod_1: 'Activate stroke/thrombolysis protocol.',
  nihss_info_title: 'Understanding the NIHSS', nihss_info_p1: 'The international standard providing a quantitative measure of stroke-related neurologic deficit.', nihss_info_p2: 'Determines eligibility for IV thrombolysis and endovascular thrombectomy.',

  // --- 13. SOFA ---
  d_sofa: 'Define sepsis via organ failure assessment.', f_pao2: 'PaO2/FiO2', f_plt: 'Platelets', f_bili_sofa: 'Bilirubin', f_map: 'MAP or Vasopressors', f_gcs_sofa: 'GCS Score', f_cr_sofa: 'Creatinine/Urine',
  r_sofa_hi: 'High Sepsis Mortality', r_sofa_md: 'Moderate Sepsis Risk', r_sofa_lo: 'Low Sepsis Risk', r_sofa_hi_1: 'Aggressive ICU management needed.',
  sofa_info_title: 'Understanding SOFA', sofa_info_p1: 'Tracks physiological deterioration and rate of multi-organ failure.', sofa_info_p2: 'Threshold: An acute increase in the total SOFA score of ≥ 2 points defines sepsis.',

  // --- 14. RANSON ---
  d_ranson: 'Predictive algorithm for acute pancreatitis.', f_age55: 'Age > 55 years', f_wbc: 'WBC > 16,000', f_glu: 'Blood Glucose > 200 mg/dL', f_ldh: 'LDH > 350', f_ast: 'AST > 250', f_hct_drop: 'Hematocrit drop > 10%', f_bun_rise: 'BUN rise > 5 mg/dL', f_ca_low: 'Calcium < 8 mg/dL', f_pao2_low: 'PaO2 < 60 mmHg', f_base_def: 'Base deficit > 4', f_fluid_seq: 'Fluid sequestration > 6 L',
  r_ranson_hi: 'Severe Pancreatitis', r_ranson_md: 'Moderate Pancreatitis', r_ranson_lo: 'Mild Pancreatitis', r_ranson_hi_1: 'Intensive fluid resuscitation required.',
  ranson_info_title: 'Understanding Ranson Criteria', ranson_info_p1: 'Objectively evaluates the severity and prognosis of acute pancreatitis.', ranson_info_p2: 'Threshold: A score of 3 or higher indicates severe pancreatitis.',

  // --- 15. PSI/PORT ---
  d_psi: 'Mortality stratification for CAP.', 
  f_psi_age: 'Age (years)', f_psi_sex: 'Sex', f_psi_nh: 'Nursing home resident', f_psi_neo: 'Neoplastic disease', f_psi_liv: 'Liver disease', f_psi_chf: 'Congestive heart failure', f_psi_cvd: 'Cerebrovascular disease', f_psi_ren: 'Renal disease', f_psi_ams: 'Altered mental status', f_psi_rr: 'Respiratory rate ≥ 30/min', f_psi_sbp: 'Systolic BP < 90 mmHg', f_psi_temp: 'Temp < 35°C or ≥ 40°C', f_psi_pulse: 'Pulse ≥ 125 bpm', f_psi_ph: 'Arterial pH < 7.35', f_psi_bun: 'BUN ≥ 30 mg/dL', f_psi_na: 'Sodium < 130 mEq/L', f_psi_gluc: 'Glucose ≥ 250 mg/dL', f_psi_hct: 'Hematocrit < 30%', f_psi_pao2: 'PaO2 < 60 mmHg', f_psi_eff: 'Pleural effusion',
  r_psi_1: 'Class I: Low Risk', r_psi_2: 'Class II: Low Risk', r_psi_3: 'Class III: Moderate', r_psi_4: 'Class IV: High Risk', r_psi_5: 'Class V: Very High',
  r_psi_1_1: 'Suitable for outpatient management.', r_psi_2_1: 'Suitable for outpatient management.', r_psi_3_1: 'Consider short stay or observation.', r_psi_4_1: 'Inpatient admission required.', r_psi_5_1: 'ICU admission likely required.',
  psi_info_title: 'Understanding PSI/PORT', psi_info_p1: 'The Pneumonia Severity Index (PSI) calculates the 30-day mortality probability for CAP.', psi_info_p2: 'Considered the superior tool for identifying low-risk patients who can be safely discharged.', psi_info_p3: 'Threshold: Risk Classes IV and V carry substantial mortality risks (up to 27%).'
},

ru:{
  // --- GENERAL UI ---
  badge: 'КЛИНИЧЕСКИЕ ИНСТРУМЕНТЫ', h1a: 'Ward', h1b: 'Calc', sub: 'Медицинские калькуляторы на основе доказательств.',
  all_label: 'ВСЕ КАЛЬКУЛЯТОРЫ', search_ph: 'Поиск (ШКГ, ИМТ)...', alert_msg: 'Пожалуйста, заполните все поля.', 
  btn: 'Рассчитать', tab_i: 'Логика', tab_a: 'Действие', tab_d: 'Лечение',
  yes: 'Да', no: 'Нет', YES: 'Да', NO: 'Нет',
  sp_neuro: 'Неврология', sp_ped: 'Педиатрия', sp_gen: 'Общие', sp_resp: 'Пульмонология', sp_cardio: 'Кардиология', sp_gastro: 'Гастро', sp_id: 'Инф. болезни',
  sev_lo: 'НИЗКИЙ РИСК', sev_md: 'СРЕДНИЙ РИСК', sev_hi: 'ВЫСОКИЙ РИСК',

  ft_about: 'О нас', ft_contact: 'Контакты', ft_disc: 'Отказ', ft_terms: 'Условия', ft_privacy: 'Конфиденциальность', ft_rights: '© 2026 WardCalc.',
  nav_about: 'О проекте WardCalc',
  about_p1: 'WardCalc — это комплексная система поддержки принятия клинических решений, разработанная Мухаммадом Сабиром Али, студентом выпускного курса Бухарского государственного медицинского института.',
  about_h2: 'Наша миссия', about_p2: 'Оцифровать признанные международные шкалы в интуитивный мобильный интерфейс, помогая врачам принимать безопасные решения.',
  about_h3: 'Образовательная цель', about_p3: 'Приложение предназначено исключительно для образовательных и справочных целей.',
  nav_contact: 'Свяжитесь с нами', contact_p1: 'Если у вас есть клинические отзывы или вы столкнулись с технической проблемой, свяжитесь с нами.', contact_p2: 'Пишите через наш официальный репозиторий GitHub.',
  nav_disc: 'Отказ от ответственности', disc_p1: 'Информация предназначена только для образовательных целей и не является медицинской консультацией.', disc_p2: 'Мухаммад Сабир Али, студент выпускного курса Бухарского государственного медицинского института, не несет ответственности за решения, принятые на основе этого приложения.',
  nav_terms: 'Условия использования', terms_p1: 'Сервис предоставляется «как есть» без гарантий.', terms_p2: 'Пользователи несут ответственность за проверку точности расчетов.',
  nav_privacy: 'Конфиденциальность', privacy_p1: 'WardCalc работает полностью локально в вашем браузере.', privacy_p2: 'Мы не собираем личные медицинские данные.',

  // --- 1. GCS ---
  d_gcs: 'Базовая оценка уровня сознания.', f_eye:'Открывание глаз', f_verbal:'Речевой ответ', f_motor:'Двигательный ответ',
  g_e4: 'Самопроизвольно (4)', g_e3: 'На голос (3)', g_e2: 'На боль (2)', g_e1: 'Нет (1)',
  g_v5: 'Ориентирован (5)', g_v4: 'Спутанная (4)', g_v3: 'Слова (3)', g_v2: 'Звуки (2)', g_v1: 'Нет (1)',
  g_m6: 'Выполняет (6)', g_m5: 'Локализует (5)', g_m4: 'Отдёргивание (4)', g_m3: 'Сгибание (3)', g_m2: 'Разгибание (2)', g_m1: 'Нет (1)',
  r_gcs_mild: 'Легкая ЧМТ', r_gcs_mod: 'Средняя ЧМТ', r_gcs_sev: 'Тяжелая ЧМТ', r_gcs_mild_1: 'Плановое наблюдение.', r_gcs_mod_1: 'Срочное КТ головы.', r_gcs_mod_2: 'Консультация нейрохирурга.', r_gcs_sev_1: 'Интубация.', r_gcs_sev_2: 'ОРИТ.',
  gcs_info_title: 'Шкала Глазго', gcs_info_p1: 'Измеряет уровень сознания.', gcs_info_p2: 'Оценка 8 и ниже требует интубации.',

  // --- 2. APGAR ---
  d_apgar: 'Оценка новорожденного на 1 и 5 минутах.', f_appear: 'Цвет кожи', f_pulse: 'Пульс', f_grimace: 'Гримаса', f_activity: 'Тонус', f_resp_a: 'Дыхание',
  a_a2: 'Розовый (2)', a_a1: 'Акроцианоз (1)', a_a0: 'Бледный (0)', a_p2: '≥ 100 (2)', a_p1: '< 100 (1)', a_p0: 'Нет (0)', a_g2: 'Крик (2)', a_g1: 'Гримаса (1)', a_g0: 'Нет (0)', a_c2: 'Активный (2)', a_c1: 'Слабое сгибание (1)', a_c0: 'Вялый (0)', a_r2: 'Крик (2)', a_r1: 'Слабое (1)', a_r0: 'Нет (0)',
  r_apgar_norm: 'Норма', r_apgar_mod: 'Умеренная асфиксия', r_apgar_crit: 'Критическое состояние', r_apgar_norm_1: 'Стандартный уход.',
  apgar_info_title: 'Шкала Апгар', apgar_info_p1: 'Оценка клинического статуса.', apgar_info_p2: 'Оценка ≤ 3 коррелирует с риском повреждений.',

  // --- 3. WELLS DVT ---
  d_dvt: 'Оценка вероятности ТГВ.', f_cancer: 'Рак', f_paralysis: 'Паралич', f_bedridden: 'Постельный режим', f_tenderness: 'Боль по венам', f_swelling_entire: 'Отек всей ноги', f_swelling_calf: 'Отек голени', f_pitting: 'Ямкообразующий отек', f_collateral: 'Коллатерали', f_alt_dx: 'Альтернативный диагноз (-2)',
  r_dvt_hi: 'ТГВ вероятен', r_dvt_md: 'Средний риск', r_dvt_lo: 'ТГВ маловероятен', r_dvt_hi_1: 'Срочное УЗИ.',
  dvt_info_title: 'ТГВ Уэллса', dvt_info_p1: 'Стандартизирует подход при подозрении на ТГВ.', dvt_info_p2: 'Оценка ≥ 2 требует УЗИ.',

  // --- 4. WELLS PE ---
  d_pe: 'Расчет вероятности ТЭЛА.', f_pe_dvt: 'Признаки ТГВ', f_pe_alt: 'Альтернатива менее вероятна', f_pe_hr: 'ЧСС > 100', f_pe_immob: 'Иммобилизация', f_pe_hx: 'ТЭЛА в анамнезе', f_pe_hemop: 'Кровохарканье', f_pe_malig: 'Онкология',
  r_pe_hi: 'ТЭЛА вероятна', r_pe_md: 'Средний риск', r_pe_lo: 'ТЭЛА маловероятна', r_pe_hi_1: 'Срочное КТ-АГ.',
  pe_info_title: 'ТЭЛА Уэллса', pe_info_p1: 'Диктует необходимость D-димера или КТ-АГ.', pe_info_p2: 'Оценка > 4 означает высокую вероятность ТЭЛА.',

  // --- 5. CURB-65 ---
  d_curb65: 'Стратификация риска при пневмонии.', f_confusion: 'Спутанность', f_urea: 'Мочевина > 7', f_rr30: 'ЧДД ≥ 30', f_bp_low: 'АД < 90/60', f_age65: 'Возраст ≥ 65',
  r_curb_hi: 'Тяжелая пневмония', r_curb_md: 'Средняя пневмония', r_curb_lo: 'Легкая пневмония', r_curb_hi_1: 'Срочная госпитализация; ОРИТ.',
  curb_info_title: 'CURB-65', curb_info_p1: 'Оценка 30-дневного риска смертности.', curb_info_p2: 'Оценка 3 или выше требует госпитализации.',

  // --- 6. CHADS-VASC ---
  d_chads2: 'Риск инсульта при фибрилляции предсердий.', f_chf: 'СН', f_htn: 'Гипертензия', f_age75: 'Возраст ≥ 75', f_dm: 'Диабет', f_stroke: 'Инсульт', f_vascular: 'ССЗ',
  r_chads_hi: 'Высокий риск', r_chads_md: 'Средний риск', r_chads_lo: 'Низкий риск', r_chads_hi_1: 'Пероральные антикоагулянты.',
  chads_info_title: 'CHA₂DS₂-VASc', chads_info_p1: 'Оценивает годовой риск инсульта.', chads_info_p2: 'Оценка 2 или выше — показание для антикоагулянтов.',

  // --- 7. CHILD-PUGH ---
  d_cp: 'Тяжесть цирроза.', f_bili: 'Билирубин', f_alb: 'Альбумин', f_pt: 'ПВ / МНО', f_ascites: 'Асцит', f_enceph: 'Энцефалопатия', 
  cp_b1: '< 34', cp_b2: '34–50', cp_b3: '> 50', cp_a1: '> 35', cp_a2: '28–35', cp_a3: '< 28', cp_p1: '< 1.7', cp_p2: '1.7–2.3', cp_p3: '> 2.3', cp_as2: 'Легкий', cp_as3: 'Тяжелый', cp_e2: 'I–II', cp_e3: 'III–IV',
  r_cp_a: 'Класс A', r_cp_b: 'Класс B', r_cp_c: 'Класс C', r_cp_c_1: 'Оценка для трансплантации.',
  cp_info_title: 'Чайлд-Пью', cp_info_p1: 'Прогноз хронических заболеваний печени.', cp_info_p2: 'Класс С требует трансплантации.',

  // --- 8. BMI ---
  d_bmi: 'Индекс массы тела.', f_weight: 'Вес (кг)', f_height: 'Рост (см)',
  r_bmi_under: 'Дефицит', r_bmi_norm: 'Норма', r_bmi_over: 'Избыток', r_bmi_ob1: 'Ожирение I', r_bmi_ob2: 'Ожирение II+',
  r_bmi_norm_1: 'Здоровый образ жизни.', r_bmi_under_1: 'Оцените питание.', r_bmi_over_1: 'Оптимизация.', r_bmi_ob1_1: 'Диета.', r_bmi_ob2_1: 'Бариатрия.',
  bmi_info_title: 'ИМТ', bmi_info_p1: 'Соотношение веса и роста.', bmi_info_p2: 'Не измеряет напрямую процент жира.',

  // --- 9. EGFR ---
  d_egfr: 'рСКФ (CKD-EPI 2021).', f_cr: 'Креатинин', f_age: 'Возраст', f_sex: 'Пол', sex_m: 'Мужской', sex_f: 'Женский',
  r_egfr_g1: 'Норма', r_egfr_g1_1: 'Мониторинг.',
  egfr_info_title: 'рСКФ', egfr_info_p1: 'Обязательна перед назначением нефротоксичных препаратов.', egfr_info_p2: 'Оценка < 60 устанавливает диагноз ХБП.',

  // --- 10. MEWS ---
  d_mews: 'Риск клинического ухудшения.', f_mews_rr: 'ЧДД', f_mews_hr: 'ЧСС', f_mews_sbp: 'АД', f_mews_temp: 'Температура', f_mews_avpu: 'Сознание',
  r_mews_hi: 'Критическое ухудшение', r_mews_md: 'Нестабильность', r_mews_lo: 'Стабильно', r_mews_hi_1: 'Вызов реаниматолога.',
  mews_info_title: 'MEWS', mews_info_p1: 'Выявление пациентов с риском остановки сердца.', mews_info_p2: 'Оценка 5 или выше связана с высокой вероятностью перевода в ОРИТ.',

  // --- 11. CENTOR ---
  d_centor: 'Вероятность стрептококкового фарингита.', f_cough_a: 'Нет кашля', f_exudates: 'Экссудат', f_lymph: 'Лимфоузлы', f_temp38: 'Темп > 38', f_c_age: 'Возраст', c_age_1: '3–14 лет', c_age_2: '15–44 лет', c_age_3: '≥ 45 лет',
  r_centor_hi: 'Стрептококк', r_centor_md: 'Возможен', r_centor_lo: 'Вирус', r_centor_hi_1: 'Антибиотики.',
  centor_info_title: 'Центор', centor_info_p1: 'Вероятность инфекции БГСА.', centor_info_p2: 'Помогает предотвратить необоснованное назначение антибиотиков.',

  // --- 12. NIHSS ---
  d_nihss: 'Оценка дефицита при инсульте.', f_nihss_score: 'Балл NIHSS',
  r_nihss_sev: 'Тяжелый инсульт', r_nihss_modsev: 'Средне-тяжелый', r_nihss_mod: 'Средний', r_nihss_minor: 'Легкий', r_nihss_mod_1: 'Протокол лечения инсульта.',
  nihss_info_title: 'NIHSS', nihss_info_p1: 'Мировой стандарт оценки.', nihss_info_p2: 'Основной показатель для тромболизиса.',

  // --- 13. SOFA ---
  d_sofa: 'Оценка органной дисфункции.', f_pao2: 'PaO2/FiO2', f_plt: 'Тромбоциты', f_bili_sofa: 'Билирубин', f_map: 'АД / Вазопрессоры', f_gcs_sofa: 'ШКГ', f_cr_sofa: 'Креатинин',
  r_sofa_hi: 'Высокая смертность', r_sofa_md: 'Умеренный риск', r_sofa_lo: 'Низкий риск', r_sofa_hi_1: 'ОРИТ.',
  sofa_info_title: 'SOFA', sofa_info_p1: 'Полиорганная недостаточность.', sofa_info_p2: 'Повышение на ≥ 2 балла определяет сепсис.',

  // --- 14. RANSON ---
  d_ranson: 'Риск при остром панкреатите.', f_age55: 'Возраст > 55', f_wbc: 'Лейкоциты > 16k', f_glu: 'Глюкоза > 11', f_ldh: 'ЛДГ > 350', f_ast: 'АСТ > 250', f_hct_drop: 'Гематокрит', f_bun_rise: 'Мочевина', f_ca_low: 'Кальций', f_pao2_low: 'PaO2 < 60', f_base_def: 'Дефицит оснований', f_fluid_seq: 'Жидкость',
  r_ranson_hi: 'Тяжелый', r_ranson_md: 'Средний', r_ranson_lo: 'Легкий', r_ranson_hi_1: 'Инфузионная терапия.',
  ranson_info_title: 'Рэнсон', ranson_info_p1: 'Оценка тяжести панкреатита.', ranson_info_p2: 'Оценка 3 и выше указывает на тяжелый панкреатит.',

  // --- 15. PSI/PORT ---
  d_psi: 'Стратификация при пневмонии.', 
  f_psi_age: 'Возраст', f_psi_sex: 'Пол', f_psi_nh: 'Дом престарелых', f_psi_neo: 'Онкология', f_psi_liv: 'Печень', f_psi_chf: 'СН', f_psi_cvd: 'Инсульт', f_psi_ren: 'Почки', f_psi_ams: 'Сознание', f_psi_rr: 'ЧДД ≥ 30', f_psi_sbp: 'АД < 90', f_psi_temp: 'Темп < 35 или ≥ 40', f_psi_pulse: 'Пульс ≥ 125', f_psi_ph: 'pH < 7.35', f_psi_bun: 'Мочевина ≥ 10.7', f_psi_na: 'Натрий < 130', f_psi_gluc: 'Глюкоза ≥ 13.9', f_psi_hct: 'Гематокрит < 30%', f_psi_pao2: 'PaO2 < 60', f_psi_eff: 'Выпот',
  r_psi_1: 'Класс I', r_psi_2: 'Класс II', r_psi_3: 'Класс III', r_psi_4: 'Класс IV', r_psi_5: 'Класс V',
  r_psi_1_1: 'Амбулаторно.', r_psi_2_1: 'Амбулаторно.', r_psi_3_1: 'Наблюдение.', r_psi_4_1: 'Госпитализация.', r_psi_5_1: 'ОРИТ.',
  psi_info_title: 'PSI/PORT', psi_info_p1: 'Вероятность смерти при ВП.', psi_info_p2: 'Помогает выявить пациентов низкого риска.', psi_info_p3: 'Классы IV и V требуют госпитализации.'
},

uz:{
  // --- GENERAL UI ---
  badge: 'KLINIK VOSITALAR', h1a: 'Ward', h1b: 'Calc', sub: 'Isbotlangan tibbiy kalkulyatorlar.',
  all_label: 'BARCHA KALKULYATORLAR', search_ph: 'Qidiruv (GCS, TVI)...', alert_msg: 'Barcha maydonlarni tanlang.', 
  btn: 'Hisoblash', tab_i: 'Mantiq', tab_a: 'Harakat', tab_d: 'Davolash',
  yes: 'Ha', no: 'Yo\'q', YES: 'Ha', NO: 'Yo\'q',
  sp_neuro: 'Nevrologiya', sp_ped: 'Pediatriya', sp_gen: 'Umumiy', sp_resp: 'Nafas tizimi', sp_cardio: 'Kardiologiya', sp_gastro: 'Gastro', sp_id: 'Yuqumli kasal.',
  sev_lo: 'PAST XAVF', sev_md: 'O’RTACHA XAVF', sev_hi: 'YUQORI XAVF',

  ft_about: 'Biz haqimizda', ft_contact: 'Aloqa', ft_disc: 'Rad etish', ft_terms: 'Shartlar', ft_privacy: 'Maxfiylik', ft_rights: '© 2026 WardCalc.',
  nav_about: 'WardCalc haqida',
  about_p1: 'WardCalc - bu Buxoro davlat tibbiyot instituti bitiruvchi talabasi Muhammad Sabir Ali tomonidan ishlab chiqilgan kompleks klinik qarorlarni qabul qilishni qo\'llab-quvvatlash tizimi.',
  about_h2: 'Bizning maqsadimiz', about_p2: 'Tibbiy ball tizimlarini intuitiv interfeysga aylantirish, shifokorlarga xavfsizroq qarorlar qabul qilish imkonini berishdir.',
  about_h3: 'Ta\'lim maqsadi', about_p3: 'U rasmiy klinik xulosani almashtirish uchun emas, yordam berish uchun mo\'ljallangan.',
  nav_contact: 'Aloqa', contact_p1: 'Agar sizda klinik mulohazalar yoki texnik muammolar bo\'lsa, biz bilan bog\'laning.', contact_p2: 'GitHub orqali murojaat qiling.',
  nav_disc: 'Rad etish', disc_p1: 'Ma\'lumotlar faqat ta\'lim maqsadida bo\'lib, rasmiy tibbiy maslahat hisoblanmaydi.', disc_p2: 'Muhammad Sabir Ali, Buxoro davlat tibbiyot instituti bitiruvchi talabasi, ushbu dastur natijalariga asoslangan qarorlar uchun javobgar emas.',
  nav_terms: 'Foydalanish shartlari', terms_p1: 'Ushbu xizmat hech qanday kafolatsiz taqdim etiladi.', terms_p2: 'Hisob-kitoblar aniqligini tekshirish foydalanuvchi javobgarligida.',
  nav_privacy: 'Maxfiylik siyosati', privacy_p1: 'WardCalc to\'liq mijoz tomonida (brauzeringizda) ishlaydi.', privacy_p2: 'Biz bemor ma\'lumotlarini yig\'maymiz.',

  // --- 1. GCS ---
  d_gcs: 'Ong darajasini baholash.', f_eye:"Ko'z ochilishi", f_verbal:"Og'zaki javob", f_motor:'Harakat javobi',
  g_e4: 'O\'z-o\'zidan (4)', g_e3: 'Ovozga (3)', g_e2: 'Og\'riqqa (2)', g_e1: 'Yo\'q (1)',
  g_v5: 'Mo\'ljallangan (5)', g_v4: 'Chalkash (4)', g_v3: 'So\'zlar (3)', g_v2: 'Tovushlar (2)', g_v1: 'Yo\'q (1)',
  g_m6: 'Bajaradi (6)', g_m5: 'Lokalizatsiya (5)', g_m4: 'Tortib olish (4)', g_m3: 'Bukilish (3)', g_m2: 'Yozilish (2)', g_m1: 'Yo\'q (1)',
  r_gcs_mild: 'Yengil jarohat', r_gcs_mod: 'O’rtacha jarohat', r_gcs_sev: 'Og’ir jarohat', r_gcs_mild_1: 'Kuzatuv.', r_gcs_mod_1: 'Zudlik bilan bosh KT.', r_gcs_mod_2: 'Neyrojarroh.', r_gcs_sev_1: 'Intubatsiya.', r_gcs_sev_2: 'ORIT.',
  gcs_info_title: 'Glazgo shkalasi', gcs_info_p1: 'Ong darajasini o\'lchash.', gcs_info_p2: '8 yoki undan past ball intubatsiyani talab qiladi.',

  // --- 2. APGAR ---
  d_apgar: 'Chaqaloqni baholash.', f_appear: 'Teri rangi', f_pulse: 'Puls', f_grimace: 'Grimasa', f_activity: 'Aktivlik', f_resp_a: 'Nafas',
  a_a2: 'Pushti (2)', a_a1: 'Ko\'k (1)', a_a0: 'Oq (0)', a_p2: '≥ 100 (2)', a_p1: '< 100 (1)', a_p0: 'Yo\'q (0)', a_g2: 'Yig\'lash (2)', a_g1: 'Grimasa (1)', a_g0: 'Yo\'q (0)', a_c2: 'Faol (2)', a_c1: 'Bukilish (1)', a_c0: 'Bo\'sh (0)', a_r2: 'Yig\'i (2)', a_r1: 'Sust (1)', a_r0: 'Yo\'q (0)',
  r_apgar_norm: 'Normal', r_apgar_mod: 'Depressiya', r_apgar_crit: 'Kritik', r_apgar_norm_1: 'Parvarish.',
  apgar_info_title: 'Apgar', apgar_info_p1: 'Klinik holatni tezkor baholash usuli.', apgar_info_p2: '≤ 3 ball agressiv reanimatsiyani talab qiladi.',

  // --- 3. WELLS DVT ---
  d_dvt: 'TVT ehtimolini baholash.', f_cancer: 'Saraton', f_paralysis: 'Paralich', f_bedridden: 'Yotoq rejimi', f_tenderness: 'Og\'riq', f_swelling_entire: 'Oyoq shishi', f_swelling_calf: 'Boldir shishi', f_pitting: 'Chuqurcha', f_collateral: 'Venalar', f_alt_dx: 'Boshqa tashxis (-2)',
  r_dvt_hi: 'TVT ehtimoli yuqori', r_dvt_md: 'O\'rtacha xavf', r_dvt_lo: 'TVT ehtimoli past', r_dvt_hi_1: 'Zudlik bilan UTT.',
  dvt_info_title: 'Wells DVT', dvt_info_p1: 'Tashxislash yondashuvini standartlashtiradi.', dvt_info_p2: '≥ 2 ball UTT majburiydir.',

  // --- 4. WELLS PE ---
  d_pe: 'O\'ATE ehtimolini baholash.', f_pe_dvt: 'DVT belgilari', f_pe_alt: 'Boshqa tashxis kamroq', f_pe_hr: 'Puls > 100', f_pe_immob: 'Yotoq rejimi', f_pe_hx: 'PE yoki DVT', f_pe_hemop: 'Qon tupurish', f_pe_malig: 'Onkologiya',
  r_pe_hi: 'O’ATE yuqori', r_pe_md: 'O\'rtacha', r_pe_lo: 'O’ATE past', r_pe_hi_1: 'Zudlik bilan KT-AG.',
  pe_info_title: 'Wells PE', pe_info_p1: 'D-dimer yoki KT angiografiyasini belgilash.', pe_info_p2: '> 4 ball O\'ATE ehtimoli yuqori.',

  // --- 5. CURB-65 ---
  d_curb65: 'Pnevmoniyada o\'lim xavfi.', f_confusion: 'Ong chalkashligi', f_urea: 'Mochevina > 7', f_rr30: 'Nafas ≥ 30', f_bp_low: 'Qon bosimi < 90', f_age65: 'Yosh ≥ 65',
  r_curb_hi: 'Og’ir pnevmoniya', r_curb_md: 'O\'rtacha', r_curb_lo: 'Yengil', r_curb_hi_1: 'ORIT.',
  curb_info_title: 'CURB-65', curb_info_p1: '30 kunlik o\'lim xavfini hisoblash.', curb_info_p2: '3 yoki undan yuqori ball gospitalizatsiyani talab qiladi.',

  // --- 6. CHADS-VASC ---
  d_chads2: 'Insult xavfini baholash.', f_chf: 'Yurak yetishmovchiligi', f_htn: 'Gipertenziya', f_age75: 'Yosh ≥ 75', f_dm: 'Qandli diabet', f_stroke: 'Insult', f_vascular: 'Tomir',
  r_chads_hi: 'Insult xavfi yuqori', r_chads_md: 'O\'rtacha', r_chads_lo: 'Past xavf', r_chads_hi_1: 'Antikoagulyantlar.',
  chads_info_title: 'CHA₂DS₂-VASc', chads_info_p1: 'Ishemik insultning yillik xavfini hisoblash.', chads_info_p2: '2 yoki undan yuqori ball antikoagulyatsiya uchun ko\'rsatma.',

  // --- 7. CHILD-PUGH ---
  d_cp: 'Jigar sirrozi og\'irligi.', f_bili: 'Bilirubin', f_alb: 'Albumin', f_pt: 'PV / XNN', f_ascites: 'Assit', f_enceph: 'Ensefalopatiya', 
  cp_b1: '< 34', cp_b2: '34–50', cp_b3: '> 50', cp_a1: '> 35', cp_a2: '28–35', cp_a3: '< 28', cp_p1: '< 1.7', cp_p2: '1.7–2.3', cp_p3: '> 2.3', cp_as2: 'O\'rtacha', cp_as3: 'Og\'ir', cp_e2: 'I–II', cp_e3: 'III–IV',
  r_cp_a: 'A sinf', r_cp_b: 'B sinf', r_cp_c: 'C sinf', r_cp_c_1: 'Transplantatsiya.',
  cp_info_title: 'Child-Pugh', cp_info_p1: 'Surunkali jigar kasalliklari prognozi.', cp_info_p2: 'C sinf yomon prognoz.',

  // --- 8. BMI ---
  d_bmi: 'Tana vazni indeksi.', f_weight: 'Vazn (kg)', f_height: 'Bo\'y (sm)',
  r_bmi_under: 'Vazn kam', r_bmi_norm: 'Normal vazn', r_bmi_over: 'Semizlik oldi', r_bmi_ob1: 'I daraja', r_bmi_ob2: 'II+ daraja',
  r_bmi_norm_1: 'Sog’lom turmush tarzi.', r_bmi_under_1: 'Oziqlanishni tekshiring.', r_bmi_over_1: 'Optimallashtirish.', r_bmi_ob1_1: 'Parhez.', r_bmi_ob2_1: 'Jarrohlik.',
  bmi_info_title: 'TVI', bmi_info_p1: 'Semizlikni tasniflash uchun ko\'rsatkich.', bmi_info_p2: 'Bevosita tana yog\' foizini o\'lchamasligini yodda tuting.',

  // --- 9. EGFR ---
  d_egfr: 'Buyrak faoliyatini baholash.', f_cr: 'Kreatinin', f_age: 'Yosh', f_sex: 'Jins', sex_m: 'Erkak', sex_f: 'Ayol',
  r_egfr_g1: 'Normal/Yuqori', r_egfr_g1_1: 'Kuzating.',
  egfr_info_title: 'eGFR', egfr_info_p1: 'Nefrotoksik dorilarni yozishdan oldin majburiydir.', egfr_info_p2: '< 60 ml/min ko\'rsatkichi kasallikni tasdiqlaydi.',

  // --- 10. MEWS ---
  d_mews: 'Klinik yomonlashuvni aniqlash.', f_mews_rr: 'Nafas', f_mews_hr: 'Puls', f_mews_sbp: 'Bosim', f_mews_temp: 'Harorat', f_mews_avpu: 'Ong',
  r_mews_hi: 'Kritik', r_mews_md: 'Beqarorlik', r_mews_lo: 'Stabil', r_mews_hi_1: 'Shifokor ko\'rigi.',
  mews_info_title: 'MEWS', mews_info_p1: 'Yurak xuruji kabi xavflarni aniqlash.', mews_info_p2: '5 yoki undan yuqori ball ORIT ehtimoli.',

  // --- 11. CENTOR ---
  d_centor: 'Streptokokk ehtimoli.', f_cough_a: 'Yo\'tal yo\'q', f_exudates: 'Karash', f_lymph: 'Limfa tugun', f_temp38: 'Harorat > 38', f_c_age: 'Yosh', c_age_1: '3–14 yosh', c_age_2: '15–44 yosh', c_age_3: '≥ 45 yosh',
  r_centor_hi: 'Strep yuqori', r_centor_md: 'Strep mumkin', r_centor_lo: 'Virusli', r_centor_hi_1: 'Antibiotiklar.',
  centor_info_title: 'Centor', centor_info_p1: 'Faringit baholash.', centor_info_p2: 'Antibiotiklarni empirik yozib berishni kamaytirish.',

  // --- 12. NIHSS ---
  d_nihss: 'Insult og\'irligini baholash.', f_nihss_score: 'NIHSS bali',
  r_nihss_sev: 'Og\'ir', r_nihss_modsev: 'O\'rta-og\'ir', r_nihss_mod: 'O\'rtacha', r_nihss_minor: 'Yengil', r_nihss_mod_1: 'Trombolizis.',
  nihss_info_title: 'NIHSS', nihss_info_p1: 'Nevrologik defitsitning miqdoriy o\'lchovi.', nihss_info_p2: 'Trombolizis va trombektomiya uchun asosiy ko\'rsatkich.',

  // --- 13. SOFA ---
  d_sofa: 'A\'zolar yetishmovchiligi (Sepsis-3).', f_pao2: 'PaO2/FiO2', f_plt: 'Trombotsitlar', f_bili_sofa: 'Bilirubin', f_map: 'Bosim/Vazopressor', f_gcs_sofa: 'GCS', f_cr_sofa: 'Kreatinin',
  r_sofa_hi: 'Yuqori o\'lim xavfi', r_sofa_md: 'O\'rtacha xavf', r_sofa_lo: 'Past xavf', r_sofa_hi_1: 'ORIT.',
  sofa_info_title: 'SOFA', sofa_info_p1: 'Poliorgan yetishmovchiligini kuzatib boradi.', sofa_info_p2: '≥ 2 ballga oshishi sepsisni belgilaydi.',

  // --- 14. RANSON ---
  d_ranson: 'O\'tkir pankreatitda o\'lim xavfi.', f_age55: 'Yosh > 55', f_wbc: 'Leykotsit > 16k', f_glu: 'Glyukoza > 200', f_ldh: 'LDH > 350', f_ast: 'AST > 250', f_hct_drop: 'Gematokrit', f_bun_rise: 'Mochevina', f_ca_low: 'Kaltsiy', f_pao2_low: 'PaO2 < 60', f_base_def: 'Asos defitsiti', f_fluid_seq: 'Suyuqlik',
  r_ranson_hi: 'Og\'ir', r_ranson_md: 'O\'rtacha', r_ranson_lo: 'Yengil', r_ranson_hi_1: 'Infuzion terapiya.',
  ranson_info_title: 'Ranson', ranson_info_p1: 'O\'tkir pankreatitning og\'irligini baholash.', ranson_info_p2: '3 yoki undan yuqori ball og\'ir pankreatitni ko\'rsatadi.',

  // --- 15. PSI/PORT ---
  d_psi: 'Kasalxonadan tashqari pnevmoniya uchun xavf.', 
  f_psi_age: 'Yosh (yillar)', f_psi_sex: 'Jins', f_psi_nh: 'Qariyalar uyi', f_psi_neo: 'Onkologiya', f_psi_liv: 'Jigar kasalligi', f_psi_chf: 'Yurak yetishmovchiligi', f_psi_cvd: 'Miya qon tomir', f_psi_ren: 'Buyrak kasalligi', f_psi_ams: 'Ong o\'zgarishi', f_psi_rr: 'Nafas ≥ 30', f_psi_sbp: 'Bosim < 90', f_psi_temp: 'Harorat < 35 yoki ≥ 40', f_psi_pulse: 'Puls ≥ 125', f_psi_ph: 'pH < 7.35', f_psi_bun: 'Mochevina ≥ 30', f_psi_na: 'Natriy < 130', f_psi_gluc: 'Glyukoza ≥ 250', f_psi_hct: 'Gematokrit < 30%', f_psi_pao2: 'PaO2 < 60', f_psi_eff: 'Plevral suyuqlik',
  r_psi_1: 'I Sinf', r_psi_2: 'II Sinf', r_psi_3: 'III Sinf', r_psi_4: 'IV Sinf', r_psi_5: 'V Sinf',
  r_psi_1_1: 'Uyda davolanish.', r_psi_2_1: 'Uyda davolanish.', r_psi_3_1: 'Qisqa kuzatuv.', r_psi_4_1: 'Kasalxonaga yotqizish.', r_psi_5_1: 'ORIT.',
  psi_info_title: 'PSI/PORT', psi_info_p1: 'Pnevmoniya bilan kasallangan bemorlar uchun 30 kunlik o\'lim ehtimoli.', psi_info_p2: 'Uydan xavfsiz javob berilishi mumkin bo\'lgan bemorlarni aniqlash uchun.', psi_info_p3: 'IV va V xavf sinflari kasalxonaga yotqizishni talab qiladi.'
}
};

// --- GLOBAL TRANSLATION HANDLER ---
window.t = function(key) {
    var lang = localStorage.getItem('wardcalc_lang') || 'en';
    var dict = (window.T && window.T[lang]) ? window.T[lang] : (window.T ? window.T.en : {});
    return dict[key] || (window.T.en ? window.T.en[key] : key) || key;
};
