'use strict';

const T = {
en:{
  // --- HOME PAGE & GENERAL UI ---
  badge: 'CLINICAL DECISION TOOLS', h1a: 'Ward', h1b: 'Calc', sub: 'Evidence-based medical calculators for daily ward practice.',
  badge_stu: 'BUILT BY A MEDICAL STUDENT · FOR MEDICAL STUDENTS', h1_main: 'Clinical Tools', h1_sub: 'for Ward Rounds',
  hero_desc: '15 evidence-based calculators with mnemonics in 3 languages. Fast, free, mobile-first — everything you need at the bedside.',
  stat_calc: 'CALCULATORS', stat_lang: 'LANGUAGES', stat_free: 'FREE', all_label: 'ALL CALCULATORS',
  search_ph: 'Search tools (e.g., GCS, BMI)...', alert_msg: 'Please complete all fields.', btn: 'Calculate',
  tab_i: 'Interpretation', tab_a: 'Action Plan', tab_d: 'First-Line Rx',
  sp_neuro: 'Neurology', sp_ped: 'Pediatrics', sp_gen: 'General', sp_resp: 'Respiratory', sp_cardio: 'Cardiology', sp_gastro: 'Gastroenterology', sp_id: 'Infectious Disease',
  mnem_all: 'Memory Aid — All 3 Languages', yes: 'Yes', no: 'No',
  
  // --- FOOTER ---
  ft_about: 'About Us', ft_contact: 'Contact', ft_disc: 'Disclaimer', ft_rights: '© 2026 WardCalc. All rights reserved.',
  
  // --- SEVERITY TAGS (BOTH CASES) ---
  sev_lo: 'LOW RISK', sev_md: 'MODERATE RISK', sev_hi: 'HIGH RISK',
  SEV_LO: 'LOW RISK', SEV_MD: 'MODERATE RISK', SEV_HI: 'HIGH RISK',

  // --- 1. GCS ---
  d_gcs: 'Assess consciousness level in any patient. The score every doctor demands first on a trauma call.',
  f_eye:'Eye Opening', f_verbal:'Verbal Response', f_motor:'Motor Response',
  g_e4: 'Spontaneous (4)', g_e3: 'To voice (3)', g_e2: 'To pain (2)', g_e1: 'None (1)',
  g_v5: 'Oriented (5)', g_v4: 'Confused (4)', g_v3: 'Words (3)', g_v2: 'Sounds (2)', g_v1: 'None (1)',
  g_m6: 'Obeys (6)', g_m5: 'Localizes (5)', g_m4: 'Withdrawal (4)', g_m3: 'Flexion (3)', g_m2: 'Extension (2)', g_m1: 'None (1)',
  r_gcs_mild:'Mild impairment / Normal', r_gcs_mild_1:'Full neurological assessment.', r_gcs_mild_2:'Neuro obs every 30–60 mins.', r_gcs_mild_3:'CT head if indicated.',
  r_gcs_mod:'Moderate brain injury', r_gcs_mod_1:'⚠ Urgent CT head.', r_gcs_mod_2:'Neurosurgery referral.', r_gcs_mod_3:'30° head elevation. IV access.', r_gcs_mod_4:'Reassess GCS every 15 mins.',
  r_gcs_sev:'Severe brain injury', r_gcs_sev_1:'⚠ GCS ≤ 8 = intubation threshold.', r_gcs_sev_2:'Rapid Sequence Intubation (RSI).', r_gcs_sev_3:'Urgent CT head + spine.', r_gcs_sev_4:'ICU admission.',
  gcs_info_title: 'Understanding the GCS', gcs_info_p1: 'Standardized method to assess impairment of conscious level.', gcs_info_p3: 'Normal patient scores 15; completely unresponsive scores 3.', gcs_info_p4: 'Always record the best response.', gcs_info_p2: 'Clinical Threshold: A score of 8 or less requires intubation.',

  // --- 2. APGAR ---
  d_apgar: 'Newborn assessment at 1 and 5 minutes. Guides resuscitation decisions.',
  f_appear: 'Appearance', f_pulse: 'Pulse', f_grimace: 'Grimace', f_activity: 'Activity', f_resp_a: 'Respiration',
  a_a2: 'Pink (2)', a_a1: 'Blue extremities (1)', a_a0: 'Blue/pale (0)',
  a_p2: '≥ 100 bpm (2)', a_p1: '< 100 bpm (1)', a_p0: 'Absent (0)',
  a_g2: 'Cry/Cough (2)', a_g1: 'Grimace (1)', a_g0: 'None (0)',
  a_c2: 'Active (2)', a_c1: 'Some flexion (1)', a_c0: 'Limp (0)',
  a_r2: 'Strong cry (2)', a_r1: 'Weak (1)', a_r0: 'Absent (0)',
  r_apgar_norm: 'Reassuring', r_apgar_norm_1: 'Routine care.', r_apgar_norm_2: 'Dry, keep warm.', r_apgar_norm_3: 'Skin-to-skin contact.',
  r_apgar_mod: 'Moderately abnormal', r_apgar_mod_1: 'Stimulate infant.', r_apgar_mod_2: 'Give oxygen.', r_apgar_mod_3: 'Consider CPAP.', r_apgar_mod_4: 'Re-evaluate every min.',
  r_apgar_crit: 'Critically low', r_apgar_crit_1: 'Immediate resuscitation.', r_apgar_crit_2: 'PPV immediately.', r_apgar_crit_3: 'Chest compressions if HR < 60.', r_apgar_crit_4: 'Prepare to intubate.',
  apgar_info_title: 'Understanding APGAR', apgar_info_p1: 'Rapid method assessing clinical status at 1 and 5 minutes.', apgar_info_p2: 'A score of 7-10 is reassuring.', apgar_info_p3: 'Clinical Threshold: Score ≤ 3 at 5 mins needs immediate intervention.',

  // --- 3. BMI ---
  d_bmi: 'Body Mass Index with WHO classification.', f_weight: 'Weight (kg)', f_height: 'Height (cm)',
  r_bmi_under: 'Underweight', r_bmi_under_1: 'Assess for malnutrition.', r_bmi_under_2: 'Dietician referral.',
  r_bmi_norm: 'Normal Weight', r_bmi_norm_1: 'Maintain healthy lifestyle.', r_bmi_norm_d: 'No meds',
  r_bmi_over: 'Overweight', r_bmi_over_1: 'Diet and exercise.', r_bmi_over_2: 'Screen for metabolic syndrome.', r_bmi_over_d: 'Lifestyle optimization',
  r_bmi_ob1: 'Obesity Class I', r_bmi_ob1_1: 'Intensive lifestyle intervention.', r_bmi_ob1_2: 'Consider pharmacotherapy.',
  r_bmi_ob2: 'Obesity Class II/III', r_bmi_ob2_1: 'High cardiovascular risk.', r_bmi_ob2_2: 'Consider bariatric surgery.',
  bmi_info_title: 'Understanding BMI', bmi_info_p1: 'Index of weight-for-height classifying obesity.', bmi_info_p2: 'Must be interpreted alongside clinical factors like muscle mass.',

  // --- 4. CURB-65 ---
  d_curb65: 'Community-acquired pneumonia mortality risk.', f_confusion: 'Confusion (AMTS ≤ 8)', f_urea: 'BUN > 19 mg/dL (> 7 mmol/L)', f_rr30: 'Respiratory Rate ≥ 30/min', f_bp_low: 'Systolic BP < 90 or Diastolic ≤ 60', f_age65: 'Age ≥ 65 years',
  r_curb_lo: 'Low Risk', r_curb_lo_1: 'Outpatient treatment suitable.', r_curb_lo_2: 'Oral antibiotics.', r_curb_lo_3: 'Safety net advice.',
  r_curb_md: 'Moderate Risk', r_curb_md_1: 'Consider hospital admission.', r_curb_md_2: 'Short stay assessment.', r_curb_md_3: 'Oral or IV antibiotics.',
  r_curb_hi: 'High Risk', r_curb_hi_1: 'Urgent hospital admission.', r_curb_hi_2: 'Assess for ICU.', r_curb_hi_3: 'IV broad-spectrum antibiotics.',
  curb_info_title: 'Understanding CURB-65', curb_info_p1: 'Predicts mortality in community-acquired pneumonia.', curb_info_p2: 'Evaluates Confusion, Urea, RR, BP, Age ≥ 65.', curb_info_p3: 'Clinical Threshold: Score ≥ 3 indicates severe pneumonia.',

  // --- 5. WELLS DVT ---
  d_dvt: 'Deep vein thrombosis probability.', f_cancer: 'Active cancer', f_paralysis: 'Paralysis, paresis, or plaster immobilization', f_bedridden: 'Recently bedridden > 3 days or major surgery', f_tenderness: 'Localized tenderness along deep venous system', f_swelling_entire: 'Entire leg swollen', f_swelling_calf: 'Calf swelling > 3 cm', f_pitting: 'Pitting edema confined to symptomatic leg', f_collateral: 'Collateral superficial veins (non-varicose)', f_alt_dx: 'Alternative diagnosis at least as likely as DVT (-2)',
  r_dvt_hi: 'DVT Likely', r_dvt_hi_1: 'Urgent proximal leg ultrasound.', r_dvt_hi_2: 'Consider D-Dimer if USS negative.', r_dvt_hi_3: 'Start empiric anticoagulation if delay.',
  r_dvt_md: 'Moderate Risk', r_dvt_md_1: 'High-sensitivity D-Dimer test.', r_dvt_md_2: 'If positive, perform ultrasound.', r_dvt_md_d: 'Anticoagulation only if confirmed.',
  r_dvt_lo: 'DVT Unlikely', r_dvt_lo_1: 'Perform D-Dimer test.', r_dvt_lo_2: 'If negative, DVT excluded.', r_dvt_lo_d: 'No empirical anticoagulation.',
  dvt_info_title: 'Understanding Wells DVT', dvt_info_p1: 'Risk stratifies for Deep Vein Thrombosis.', dvt_info_p2: 'Evaluates clinical signs and alternative diagnoses.', dvt_info_p3: 'Threshold: Score ≥ 2 means DVT is likely.',

  // --- 6. WELLS PE ---
  d_pe: 'Pulmonary embolism probability.', f_pe_dvt: 'Clinical signs/symptoms of DVT', f_pe_alt: 'Alternative diagnosis less likely than PE', f_pe_hr: 'Heart rate > 100 bpm', f_pe_immob: 'Immobilization (> 3 days) or surgery', f_pe_hx: 'Previous PE or DVT', f_pe_hemop: 'Hemoptysis', f_pe_malig: 'Malignancy with treatment within 6 months',
  r_pe_hi: 'PE Likely', r_pe_hi_1: 'Urgent CTPA imaging.', r_pe_hi_2: 'Start empiric anticoagulation.', r_pe_hi_3: 'Admit to hospital.',
  r_pe_md: 'Moderate Risk', r_pe_md_1: 'D-Dimer testing.', r_pe_md_2: 'If positive, perform CTPA.', r_pe_lo_d: 'No empirical anticoagulation.',
  r_pe_lo: 'PE Unlikely', r_pe_lo_1: 'Use PERC rule or D-Dimer.', r_pe_lo_2: 'If negative, PE excluded.',
  pe_info_title: 'Understanding Wells PE', pe_info_p1: 'Risk stratifies for Pulmonary Embolism.', pe_info_p2: 'Evaluates HR, hemoptysis, and DVT signs.', pe_info_p3: 'Threshold: Score > 4 means PE is likely.',

  // --- 7. CHADS2 ---
  d_chads2: 'Stroke risk in atrial fibrillation.', f_chf: 'Congestive Heart Failure', f_htn: 'Hypertension', f_age75: 'Age ≥ 75', f_dm: 'Diabetes Mellitus', f_stroke: 'Stroke/TIA history',
  r_chads_lo: 'Low Risk', r_chads_lo_1: 'No anticoagulation usually needed.', r_chads_lo_2: 'Consider individual patient factors.',
  r_chads_md: 'Moderate Risk', r_chads_md_1: 'Consider oral anticoagulation.', r_chads_md_2: 'Weigh bleeding risk.',
  r_chads_hi: 'High Risk', r_chads_hi_1: 'Oral anticoagulation recommended.', r_chads_hi_2: 'DOACs preferred over Warfarin.', r_chads_hi_3: 'Monitor adherence.',
  chads_info_title: 'Understanding CHADS2', chads_info_p1: 'Assesses stroke risk in atrial fibrillation.', chads_info_p2: 'Evaluates CHF, HTN, Age, Diabetes, Stroke.', chads_info_p3: 'Threshold: Score ≥ 2 requires anticoagulation.',

  // --- 8. CHILD-PUGH ---
  d_cp: 'Cirrhosis mortality risk.', f_enceph: 'Encephalopathy', f_ascites: 'Ascites', f_bili: 'Bilirubin', f_alb: 'Albumin', f_pt: 'PT prolongation / INR',
  r_cp_a: 'Mild Hepatic Impairment', r_cp_a_1: 'Good operative risk.', r_cp_a_2: '1-year survival ~100%.',
  r_cp_b: 'Moderate Impairment', r_cp_b_1: 'Moderate operative risk.', r_cp_b_2: 'Consider liver transplant evaluation.',
  r_cp_c: 'Severe Impairment', r_cp_c_1: 'High mortality risk.', r_cp_c_2: 'Transplant evaluation indicated.',
  cp_info_title: 'Understanding Child-Pugh', cp_info_p1: 'Assesses prognosis of liver cirrhosis.', cp_info_p2: 'Evaluates bilirubin, albumin, ascites, PT/INR.', cp_info_p3: 'Threshold: Class C indicates severe disease.',

  // --- 9. EGFR ---
  d_egfr: 'Estimated glomerular filtration rate.', f_cr: 'Serum Creatinine', f_age: 'Age', f_sex: 'Sex', sex_m: 'Male', sex_f: 'Female',
  r_egfr_g1: 'Normal or High', r_egfr_g1_1: 'Monitor if underlying kidney disease.', r_egfr_g1_2: 'Manage comorbidities.',
  r_egfr_g2: 'Mildly Decreased', r_egfr_g2_1: 'Estimate progression rate.', r_egfr_g2_2: 'Reduce cardiovascular risk.',
  r_egfr_g3a: 'Mild to Moderate', r_egfr_g3a_1: 'Evaluate and treat complications.', r_egfr_g3a_2: 'Adjust renally cleared meds.',
  r_egfr_g3b: 'Moderate to Severe', r_egfr_g3b_1: 'Nephrology referral recommended.', r_egfr_g3b_2: 'Prepare for renal replacement.',
  r_egfr_g4: 'Severely Decreased', r_egfr_g4_1: 'Close nephrology follow-up.', r_egfr_g4_2: 'Discuss dialysis/transplant.',
  r_egfr_g5: 'Kidney Failure', r_egfr_g5_1: 'Initiate dialysis.', r_egfr_g5_2: 'Palliative care if appropriate.',
  egfr_info_title: 'Understanding eGFR', egfr_info_p1: 'Best overall index of kidney function.', egfr_info_p2: 'Uses creatinine, age, and sex.', egfr_info_p3: 'Threshold: < 60 mL/min for ≥ 3 months indicates CKD.',

  // --- 10. MEWS ---
  d_mews: 'Early warning score for clinical deterioration.', f_mews_rr: 'Respiratory Rate', f_mews_hr: 'Heart Rate', f_mews_sbp: 'Systolic BP', f_mews_temp: 'Temperature', f_mews_avpu: 'Consciousness (AVPU)',
  r_mews_lo: 'Stable', r_mews_lo_1: 'Routine observations.', r_mews_lo_2: 'Continue current care plan.', r_mews_lo_d: 'No specific intervention.',
  r_mews_md: 'Increased Risk', r_mews_md_1: 'Increase observation frequency.', r_mews_md_2: 'Inform nurse in charge.', r_mews_md_3: 'Medical review within 30 mins.',
  r_mews_hi: 'Critical', r_mews_hi_1: 'Immediate medical review.', r_mews_hi_2: 'Call rapid response team.', r_mews_hi_3: 'Consider ICU transfer.',
  mews_info_title: 'Understanding MEWS', mews_info_p1: 'Identifies patients at risk of deterioration.', mews_info_p2: 'Evaluates vitals and AVPU.', mews_info_p3: 'Threshold: Score ≥ 5 links to ICU admission.',

  // --- 11. CENTOR ---
  d_centor: 'Streptococcal pharyngitis probability.', f_cough_a: 'Absence of cough', f_exudates: 'Tonsillar exudates or swelling', f_lymph: 'Tender anterior cervical lymphadenopathy', f_temp38: 'Temperature > 38.0°C', f_c_age: 'Age Group',
  c_age_1: '3–14 years (+1)', c_age_2: '15–44 years (0)', c_age_3: '≥ 45 years (-1)',
  r_centor_lo: 'Strep Unlikely', r_centor_lo_1: 'Symptomatic treatment.', r_centor_lo_2: 'Antibiotics NOT recommended.',
  r_centor_md: 'Possible Strep', r_centor_md_1: 'Perform rapid strep test.', r_centor_md_2: 'Treat if test is positive.', r_centor_md_d: 'Antibiotics only if confirmed.',
  r_centor_hi: 'Strep Likely', r_centor_hi_1: 'Empiric antibiotics justified.', r_centor_hi_2: 'Consider rapid test to confirm.',
  centor_info_title: 'Understanding Centor', centor_info_p1: 'Estimates probability of Strep pharyngitis.', centor_info_p2: 'Evaluates fever, exudate, nodes, lack of cough.', centor_info_p3: 'Threshold: Score ≥ 3 suggests antibiotics.',

  // --- 12. NIHSS ---
  d_nihss: 'Stroke severity assessment.', f_nihss_score: 'Total NIHSS Score (0-42)',
  r_nihss_none: 'No Stroke Symptoms', r_nihss_none_1: 'Evaluate for TIA.', r_nihss_none_2: 'Secondary prevention.',
  r_nihss_minor: 'Minor Stroke', r_nihss_minor_1: 'Admit to stroke unit.', r_nihss_minor_2: 'Consider thrombolysis if disabling.', r_nihss_minor_3: 'Supportive care.',
  r_nihss_mod: 'Moderate Stroke', r_nihss_mod_1: 'Evaluate for thrombolysis.', r_nihss_mod_2: 'Evaluate for thrombectomy.', r_nihss_mod_3: 'Strict BP control.',
  r_nihss_modsev: 'Moderate-Severe', r_nihss_modsev_1: 'Urgent neurology consult.', r_nihss_modsev_2: 'Thrombectomy evaluation.', r_nihss_modsev_3: 'ICU/Stroke unit admission.',
  r_nihss_sev: 'Severe Stroke', r_nihss_sev_1: 'High risk of complications.', r_nihss_sev_2: 'Airway protection.', r_nihss_sev_3: 'Palliative considerations if massive.',
  nihss_info_title: 'Understanding NIHSS', nihss_info_p1: 'Quantitative measure of neurologic deficit.', nihss_info_p2: 'Evaluates motor, sensory, language, vision.', nihss_info_p3: 'Threshold: > 15 indicates severe stroke.',

  // --- 13. SOFA ---
  d_sofa: 'Sepsis-related organ failure assessment.', f_pao2: 'PaO2/FiO2', f_plt: 'Platelets', f_bili_sofa: 'Bilirubin', f_map: 'MAP or Vasopressors', f_gcs_sofa: 'GCS Score', f_cr_sofa: 'Creatinine or Urine output',
  r_sofa_lo: 'Low Mortality Risk', r_sofa_lo_1: 'Continue supportive care.', r_sofa_lo_2: 'Treat underlying infection.', r_sofa_lo_3: 'Monitor for deterioration.',
  r_sofa_md: 'Moderate Organ Failure', r_sofa_md_1: 'ICU level care indicated.', r_sofa_md_2: 'Hemodynamic support.', r_sofa_md_3: 'Consider mechanical ventilation.',
  r_sofa_hi: 'Severe Multi-Organ Failure', r_sofa_hi_1: 'Aggressive ICU management.', r_sofa_hi_2: 'Vasopressors/CRRT likely needed.', r_sofa_hi_3: 'High mortality probability.',
  sofa_info_title: 'Understanding SOFA', sofa_info_p1: 'Tracks patient status during ICU stay.', sofa_info_p2: 'Evaluates 6 organ systems.', sofa_info_p3: 'Threshold: Increase of ≥ 2 points defines sepsis.',

  // --- 14. RANSON ---
  d_ranson: 'Acute pancreatitis mortality risk.', f_age55: 'Age > 55 years', f_wbc: 'WBC > 16,000/mm³', f_glu: 'Blood Glucose > 200 mg/dL', f_ldh: 'LDH > 350 U/L', f_ast: 'AST > 250 U/L', f_hct_drop: 'Hematocrit drop > 10%', f_bun_rise: 'BUN rise > 5 mg/dL', f_ca_low: 'Serum Calcium < 8 mg/dL', f_pao2_low: 'PaO2 < 60 mmHg', f_base_def: 'Base deficit > 4 mEq/L', f_fluid_seq: 'Fluid sequestration > 6 L',
  r_ranson_lo: 'Mild Pancreatitis', r_ranson_lo_1: 'IV fluid resuscitation.', r_ranson_lo_2: 'Analgesia.', r_ranson_lo_3: 'Early oral feeding if tolerated.',
  r_ranson_md: 'Severe Pancreatitis Risk', r_ranson_md_1: 'Aggressive IV fluids.', r_ranson_md_2: 'ICU monitoring.', r_ranson_md_3: 'Enteral nutrition.', r_ranson_md_d: 'Hartmanns preferred.',
  r_ranson_hi: 'High Mortality Risk', r_ranson_hi_1: 'ICU admission mandatory.', r_ranson_hi_2: 'Monitor for necrosis/infection.', r_ranson_hi_3: 'Surgical consult.',
  ranson_info_title: 'Understanding Ranson', ranson_info_p1: 'Estimates severity of acute pancreatitis.', ranson_info_p2: 'Evaluates admission and 48hr labs.', ranson_info_p3: 'Threshold: Score ≥ 3 indicates severe disease.',

  // --- 15. PSI/PORT ---
  d_psi: 'Pneumonia Severity Index (PORT Score).', f_psi_age: 'Age (years)', f_psi_sex: 'Sex', f_psi_nh: 'Nursing home resident', f_psi_neo: 'Neoplastic disease', f_psi_liv: 'Liver disease', f_psi_chf: 'Congestive heart failure', f_psi_cvd: 'Cerebrovascular disease', f_psi_ren: 'Renal disease', f_psi_ams: 'Altered mental status', f_psi_rr: 'Respiratory rate ≥ 30/min', f_psi_sbp: 'Systolic BP < 90 mmHg', f_psi_temp: 'Temp < 35°C or ≥ 40°C', f_psi_pulse: 'Pulse ≥ 125 bpm', f_psi_ph: 'Arterial pH < 7.35', f_psi_bun: 'BUN ≥ 30 mg/dL', f_psi_na: 'Sodium < 130 mEq/L', f_psi_gluc: 'Glucose ≥ 250 mg/dL', f_psi_hct: 'Hematocrit < 30%', f_psi_pao2: 'PaO2 < 60 mmHg', f_psi_eff: 'Pleural effusion',
  r_psi_1: 'Risk Class I (Low)', r_psi_1_1: 'Outpatient care.', r_psi_1_2: 'Oral antibiotics.',
  r_psi_2: 'Risk Class II (Low)', r_psi_2_1: 'Outpatient care.', r_psi_2_2: 'Oral antibiotics.',
  r_psi_3: 'Risk Class III (Moderate)', r_psi_3_1: 'Observation unit or short stay.', r_psi_3_2: 'IV/Oral antibiotics.', r_psi_3_d: 'Switch to oral when stable.',
  r_psi_4: 'Risk Class IV (High)', r_psi_4_1: 'Inpatient admission.', r_psi_4_2: 'IV antibiotics.',
  r_psi_5: 'Risk Class V (Very High)', r_psi_5_1: 'ICU admission likely.', r_psi_5_2: 'Broad-spectrum IV antibiotics.',
  psi_info_title: 'Understanding PSI/PORT', psi_info_p1: 'Predicts mortality in pneumonia.', psi_info_p2: 'Evaluates demographics and labs.', psi_info_p3: 'Threshold: Classes IV & V require hospital admission.'
},

ru:{
  // --- HOME PAGE & GENERAL UI ---
  badge: 'КЛИНИЧЕСКИЕ КАЛЬКУЛЯТОРЫ', h1a: 'Ward', h1b: 'Calc', sub: 'Доказательные медицинские калькуляторы для ежедневной практики.',
  badge_stu: 'СОЗДАНО СТУДЕНТОМ-МЕДИКОМ · ДЛЯ СТУДЕНТОВ', h1_main: 'Клинические инструменты', h1_sub: 'для обходов',
  hero_desc: '15 калькуляторов с мнемоникой на 3 языках. Быстро, бесплатно, удобно — всё необходимое у постели больного.',
  stat_calc: 'КАЛЬКУЛЯТОРОВ', stat_lang: 'ЯЗЫКА', stat_free: 'БЕСПЛАТНО', all_label: 'ВСЕ КАЛЬКУЛЯТОРЫ',
  search_ph: 'Поиск инструментов (напр., ШКГ, ИМТ)...', alert_msg: 'Пожалуйста, заполните все поля.', btn: 'Рассчитать',
  tab_i: 'Интерпретация', tab_a: 'План действий', tab_d: 'Лечение',
  sp_neuro: 'Неврология', sp_ped: 'Педиатрия', sp_gen: 'Общие', sp_resp: 'Пульмонология', sp_cardio: 'Кардиология', sp_gastro: 'Гастроэнтерология', sp_id: 'Инфекционные болезни',
  mnem_all: 'Мнемоника — На 3 языках', yes: 'Да', no: 'Нет',
  
  // --- FOOTER ---
  ft_about: 'О нас', ft_contact: 'Контакты', ft_disc: 'Отказ от ответственности', ft_rights: '© 2026 WardCalc. Все права защищены.',

  // --- SEVERITY TAGS (BOTH CASES) ---
  sev_lo: 'НИЗКИЙ РИСК', sev_md: 'СРЕДНИЙ РИСК', sev_hi: 'ВЫСОКИЙ РИСК',
  SEV_LO: 'НИЗКИЙ РИСК', SEV_MD: 'СРЕДНИЙ РИСК', SEV_HI: 'ВЫСОКИЙ РИСК',

  // --- 1. GCS ---
  d_gcs: 'Оценка уровня сознания. Первый показатель при травмах.',
  f_eye:'Открывание глаз', f_verbal:'Речевой ответ', f_motor:'Двигательный ответ',
  g_e4: 'Самопроизвольно (4)', g_e3: 'На голос (3)', g_e2: 'На боль (2)', g_e1: 'Нет (1)',
  g_v5: 'Ориентирован (5)', g_v4: 'Спутанная (4)', g_v3: 'Слова (3)', g_v2: 'Звуки (2)', g_v1: 'Нет (1)',
  g_m6: 'Выполняет (6)', g_m5: 'Локализует (5)', g_m4: 'Отдёргивание (4)', g_m3: 'Сгибание (3)', g_m2: 'Разгибание (2)', g_m1: 'Нет (1)',
  r_gcs_mild:'Легкая ЧМТ', r_gcs_mild_1:'Полный неврологический осмотр.', r_gcs_mild_2:'Наблюдение каждые 30–60 мин.', r_gcs_mild_3:'КТ головы при ухудшении.',
  r_gcs_mod:'Умеренная ЧМТ', r_gcs_mod_1:'⚠ Срочная КТ головы.', r_gcs_mod_2:'Консультация нейрохирурга.', r_gcs_mod_3:'Голова приподнята на 30°.', r_gcs_mod_4:'Оценка ШКГ каждые 15 мин.',
  r_gcs_sev:'Тяжёлая ЧМТ', r_gcs_sev_1:'⚠ ШКГ ≤ 8 = порог интубации.', r_gcs_sev_2:'БСИ (интубация).', r_gcs_sev_3:'Срочная КТ головы + позвоночника.', r_gcs_sev_4:'Госпитализация в ОРИТ.',
  gcs_info_title: 'Понимание шкалы Глазго', gcs_info_p1: 'Стандартизированный метод оценки нарушения уровня сознания.', gcs_info_p3: 'Нормальный пациент набирает 15 баллов.', gcs_info_p4: 'Всегда фиксируйте наилучший ответ.', gcs_info_p2: 'Порог: балл 8 или меньше требует интубации.',

  // --- 2. APGAR ---
  d_apgar: 'Оценка новорожденного на 1-й и 5-й минутах.',
  f_appear: 'Цвет кожи', f_pulse: 'Пульс', f_grimace: 'Гримаса', f_activity: 'Тонус', f_resp_a: 'Дыхание',
  a_a2: 'Розовый (2)', a_a1: 'Акроцианоз (1)', a_a0: 'Бледный (0)',
  a_p2: '≥ 100 уд/мин (2)', a_p1: '< 100 уд/мин (1)', a_p0: 'Нет (0)',
  a_g2: 'Крик (2)', a_g1: 'Гримаса (1)', a_g0: 'Нет (0)',
  a_c2: 'Активный (2)', a_c1: 'Слабое сгибание (1)', a_c0: 'Вялый (0)',
  a_r2: 'Громкий крик (2)', a_r1: 'Слабое (1)', a_r0: 'Нет (0)',
  r_apgar_norm: 'Норма', r_apgar_norm_1: 'Стандартный уход.', r_apgar_norm_2: 'Обсушить, согреть.', r_apgar_norm_3: 'Передать матери.',
  r_apgar_mod: 'Умеренная асфиксия', r_apgar_mod_1: 'Стимуляция.', r_apgar_mod_2: 'Кислород.', r_apgar_mod_3: 'Рассмотреть CPAP.', r_apgar_mod_4: 'Оценка каждую минуту.',
  r_apgar_crit: 'Тяжелая асфиксия', r_apgar_crit_1: 'Немедленная реанимация.', r_apgar_crit_2: 'ИВЛ.', r_apgar_crit_3: 'Массаж сердца при ЧСС < 60.', r_apgar_crit_4: 'Подготовка к интубации.',
  apgar_info_title: 'Понимание шкалы Апгар', apgar_info_p1: 'Быстрый метод оценки состояния новорожденного.', apgar_info_p2: '7–10 баллов — норма.', apgar_info_p3: 'Порог: Оценка ≤ 3 на 5-й минуте требует реанимации.',

  // --- 3. BMI ---
  d_bmi: 'Индекс массы тела с классификацией ВОЗ.', f_weight: 'Вес (кг)', f_height: 'Рост (см)',
  r_bmi_under: 'Дефицит массы', r_bmi_under_1: 'Оценить питание.', r_bmi_under_2: 'Консультация диетолога.',
  r_bmi_norm: 'Нормальный вес', r_bmi_norm_1: 'Здоровый образ жизни.', r_bmi_norm_d: 'Без медикаментов',
  r_bmi_over: 'Избыточный вес', r_bmi_over_1: 'Диета и спорт.', r_bmi_over_2: 'Скрининг метаболического синдрома.', r_bmi_over_d: 'Оптимизация образа жизни',
  r_bmi_ob1: 'Ожирение I', r_bmi_ob1_1: 'Изменение образа жизни.', r_bmi_ob1_2: 'Рассмотреть фармакотерапию.',
  r_bmi_ob2: 'Ожирение II/III', r_bmi_ob2_1: 'Высокий риск ССЗ.', r_bmi_ob2_2: 'Бариатрическая хирургия.',
  bmi_info_title: 'Понимание ИМТ', bmi_info_p1: 'Отношение веса к росту.', bmi_info_p2: 'Не измеряет жир напрямую.',

  // --- 4. CURB-65 ---
  d_curb65: 'Риск смертности при внебольничной пневмонии.', f_confusion: 'Спутанность сознания', f_urea: 'Мочевина крови > 7 ммоль/л', f_rr30: 'ЧДД ≥ 30/мин', f_bp_low: 'АД сист < 90 или диаст ≤ 60', f_age65: 'Возраст ≥ 65 лет',
  r_curb_lo: 'Низкий риск', r_curb_lo_1: 'Амбулаторное лечение.', r_curb_lo_2: 'Пероральные антибиотики.', r_curb_lo_3: 'Инструкции для пациента.',
  r_curb_md: 'Средний риск', r_curb_md_1: 'Рассмотреть госпитализацию.', r_curb_md_2: 'Краткосрочное наблюдение.', r_curb_md_3: 'Антибиотики в/в или внутрь.',
  r_curb_hi: 'Высокий риск', r_curb_hi_1: 'Срочная госпитализация.', r_curb_hi_2: 'Рассмотреть ОРИТ.', r_curb_hi_3: 'В/в антибиотики.',
  curb_info_title: 'Шкала CURB-65', curb_info_p1: 'Риск при пневмонии.', curb_info_p2: 'Оценивает сознание, мочевину, ЧДД, АД.', curb_info_p3: 'Порог: ≥ 3 баллов — тяжелая пневмония.',

  // --- 5. WELLS DVT ---
  d_dvt: 'Риск тромбоза глубоких вен.', f_cancer: 'Активный рак', f_paralysis: 'Паралич, парез или иммобилизация ног', f_bedridden: 'Постельный режим > 3 дней или хирургия', f_tenderness: 'Болезненность по ходу глубоких вен', f_swelling_entire: 'Отек всей ноги', f_swelling_calf: 'Отек голени > 3 см', f_pitting: 'Ямкообразующий отек', f_collateral: 'Коллатеральные поверхностные вены', f_alt_dx: 'Альтернативный диагноз более вероятен (-2)',
  r_dvt_hi: 'ТГВ вероятен', r_dvt_hi_1: 'Срочное УЗИ вен.', r_dvt_hi_2: 'D-димер при (-).', r_dvt_hi_3: 'Эмпирические антикоагулянты.',
  r_dvt_md: 'Средний риск', r_dvt_md_1: 'Тест на D-димер.', r_dvt_md_2: 'При (+) — УЗИ.', r_dvt_md_d: 'Только при подтверждении.',
  r_dvt_lo: 'ТГВ маловероятен', r_dvt_lo_1: 'Тест на D-димер.', r_dvt_lo_2: 'При (-) ТГВ исключен.', r_dvt_lo_d: 'Не показано.',
  dvt_info_title: 'Критерии Уэллса', dvt_info_p1: 'Риск тромбоза глубоких вен.', dvt_info_p2: 'Оценивает симптомы и факторы риска.', dvt_info_p3: 'Порог: ≥ 2 — высокая вероятность.',

  // --- 6. WELLS PE ---
  d_pe: 'Риск тромбоэмболии легочной артерии.', f_pe_dvt: 'Клинические признаки ТГВ', f_pe_alt: 'Альтернативный диагноз менее вероятен, чем ТЭЛА', f_pe_hr: 'ЧСС > 100 в мин', f_pe_immob: 'Иммобилизация (> 3 дней) или операция', f_pe_hx: 'ТЭЛА или ТГВ в анамнезе', f_pe_hemop: 'Кровохарканье', f_pe_malig: 'Онкология (лечение в течение 6 мес)',
  r_pe_hi: 'ТЭЛА вероятна', r_pe_hi_1: 'Срочная КТ-АГ.', r_pe_hi_2: 'Антикоагулянты.', r_pe_hi_3: 'Госпитализация.',
  r_pe_md: 'Средний риск', r_pe_md_1: 'D-димер.', r_pe_md_2: 'При (+) — КТ-АГ.', r_pe_lo_d: 'Не показано.',
  r_pe_lo: 'ТЭЛА маловероятна', r_pe_lo_1: 'Критерии PERC или D-димер.', r_pe_lo_2: 'ТЭЛА исключена.',
  pe_info_title: 'ТЭЛА по Уэллсу', pe_info_p1: 'Риск тромбоэмболии.', pe_info_p2: 'Оценивает ЧСС, ТГВ.', pe_info_p3: 'Порог: > 4 — ТЭЛА вероятна.',

  // --- 7. CHADS2 ---
  d_chads2: 'Риск инсульта при фибрилляции предсердий.', f_chf: 'Сердечная недостаточность', f_htn: 'Гипертензия', f_age75: 'Возраст ≥ 75 лет', f_dm: 'Сахарный диабет', f_stroke: 'Инсульт/ТИА в анамнезе',
  r_chads_lo: 'Низкий риск', r_chads_lo_1: 'Антикоагулянты не нужны.', r_chads_lo_2: 'Оценка факторов.',
  r_chads_md: 'Средний риск', r_chads_md_1: 'Рассмотреть антикоагулянты.', r_chads_md_2: 'Оценить риск кровотечения.',
  r_chads_hi: 'Высокий риск', r_chads_hi_1: 'Показаны антикоагулянты.', r_chads_hi_2: 'НОАК предпочтительнее.', r_chads_hi_3: 'Контроль.',
  chads_info_title: 'Шкала CHADS2', chads_info_p1: 'Риск инсульта при ФП.', chads_info_p2: 'Возраст, АГ, СН, диабет.', chads_info_p3: 'Порог: ≥ 2 — нужны антикоагулянты.',

  // --- 8. CHILD-PUGH ---
  d_cp: 'Прогноз при циррозе печени.', f_enceph: 'Энцефалопатия', f_ascites: 'Асцит', f_bili: 'Билирубин', f_alb: 'Альбумин', f_pt: 'Удлинение ПВ / МНО',
  r_cp_a: 'Легкое нарушение', r_cp_a_1: 'Хороший прогноз.', r_cp_a_2: 'Выживаемость ~100%.',
  r_cp_b: 'Умеренное', r_cp_b_1: 'Средний риск.', r_cp_b_2: 'Рассмотреть трансплантацию.',
  r_cp_c: 'Тяжелое', r_cp_c_1: 'Высокая смертность.', r_cp_c_2: 'Показана трансплантация.',
  cp_info_title: 'Чайлд-Пью', cp_info_p1: 'Прогноз при циррозе.', cp_info_p2: 'Билирубин, альбумин, асцит.', cp_info_p3: 'Порог: Класс C — тяжелое течение.',

  // --- 9. EGFR ---
  d_egfr: 'Скорость клубочковой фильтрации (CKD-EPI).', f_cr: 'Креатинин', f_age: 'Возраст', f_sex: 'Пол', sex_m: 'Мужской', sex_f: 'Женский',
  r_egfr_g1: 'Норма', r_egfr_g1_1: 'Наблюдение.', r_egfr_g1_2: 'Лечение сопутствующих.',
  r_egfr_g2: 'Легкое снижение', r_egfr_g2_1: 'Оценка прогрессирования.', r_egfr_g2_2: 'Контроль ССЗ.',
  r_egfr_g3a: 'Умеренное', r_egfr_g3a_1: 'Лечение осложнений.', r_egfr_g3a_2: 'Коррекция доз лекарств.',
  r_egfr_g3b: 'Выраженное', r_egfr_g3b_1: 'Консультация нефролога.', r_egfr_g3b_2: 'Подготовка к ЗПТ.',
  r_egfr_g4: 'Тяжелое', r_egfr_g4_1: 'Строгое наблюдение.', r_egfr_g4_2: 'Диализ/трансплантация.',
  r_egfr_g5: 'Терминальная ХБП', r_egfr_g5_1: 'Диализ.', r_egfr_g5_2: 'Паллиатив.',
  egfr_info_title: 'рСКФ (CKD-EPI)', egfr_info_p1: 'Функция почек.', egfr_info_p2: 'Учитывает креатинин, пол, возраст.', egfr_info_p3: 'Порог: < 60 мл/мин — ХБП.',

  // --- 10. MEWS ---
  d_mews: 'Оценка риска клинического ухудшения.', f_mews_rr: 'ЧДД', f_mews_hr: 'ЧСС', f_mews_sbp: 'Систолическое АД', f_mews_temp: 'Температура', f_mews_avpu: 'Сознание (AVPU)',
  r_mews_lo: 'Стабилен', r_mews_lo_1: 'Обычное наблюдение.', r_mews_lo_2: 'Текущий план.', r_mews_lo_d: 'Не требуется.',
  r_mews_md: 'Риск', r_mews_md_1: 'Участить осмотры.', r_mews_md_2: 'Сообщить врачу.', r_mews_md_3: 'Осмотр в течение 30 мин.',
  r_mews_hi: 'Критическое', r_mews_hi_1: 'Срочный осмотр.', r_mews_hi_2: 'Реанимационная бригада.', r_mews_hi_3: 'Перевод в ОРИТ.',
  mews_info_title: 'Шкала MEWS', mews_info_p1: 'Выявляет риск ухудшения.', mews_info_p2: 'Жизненные показатели.', mews_info_p3: 'Порог: ≥ 5 — высокий риск.',

  // --- 11. CENTOR ---
  d_centor: 'Вероятность стрептококкового фарингита.', f_cough_a: 'Отсутствие кашля', f_exudates: 'Экссудат миндалин', f_lymph: 'Болезненность лимфоузлов', f_temp38: 'Температура > 38.0°C', f_c_age: 'Возраст',
  c_age_1: '3–14 лет (+1)', c_age_2: '15–44 лет (0)', c_age_3: '≥ 45 лет (-1)',
  r_centor_lo: 'Стрептококк маловероятен', r_centor_lo_1: 'Симптоматическое лечение.', r_centor_lo_2: 'Антибиотики НЕ нужны.',
  r_centor_md: 'Возможен стрептококк', r_centor_md_1: 'Экспресс-тест.', r_centor_md_2: 'Лечить при (+).', r_centor_md_d: 'Только при подтверждении.',
  r_centor_hi: 'Стрептококк вероятен', r_centor_hi_1: 'Эмпирические антибиотики.', r_centor_hi_2: 'Подтвердить тестом.',
  centor_info_title: 'Критерии Центора', centor_info_p1: 'Вероятность стрептококка.', centor_info_p2: 'Лихорадка, налет.', centor_info_p3: 'Порог: ≥ 3 — антибиотики.',

  // --- 12. NIHSS ---
  d_nihss: 'Оценка тяжести инсульта.', f_nihss_score: 'Балл по NIHSS (0-42)',
  r_nihss_none: 'Нет инсульта', r_nihss_none_1: 'Оценка ТИА.', r_nihss_none_2: 'Профилактика.',
  r_nihss_minor: 'Легкий', r_nihss_minor_1: 'Инсультное отделение.', r_nihss_minor_2: 'Тромболизис при инвалидизации.', r_nihss_minor_3: 'Уход.',
  r_nihss_mod: 'Средний', r_nihss_mod_1: 'Тромболизис.', r_nihss_mod_2: 'Тромбэктомия.', r_nihss_mod_3: 'Контроль АД.',
  r_nihss_modsev: 'Тяжелый', r_nihss_modsev_1: 'Срочно невролог.', r_nihss_modsev_2: 'Тромбэктомия.', r_nihss_modsev_3: 'ОРИТ.',
  r_nihss_sev: 'Крайне тяжелый', r_nihss_sev_1: 'Высокий риск.', r_nihss_sev_2: 'Защита ВДП.', r_nihss_sev_3: 'Паллиатив.',
  nihss_info_title: 'Шкала NIHSS', nihss_info_p1: 'Оценка дефицита.', nihss_info_p2: 'Движения, речь.', nihss_info_p3: 'Порог: > 15 — тяжелый инсульт.',

  // --- 13. SOFA ---
  d_sofa: 'Оценка органной дисфункции при сепсисе.', f_pao2: 'PaO2/FiO2', f_plt: 'Тромбоциты', f_bili_sofa: 'Билирубин', f_map: 'САД или Вазопрессоры', f_gcs_sofa: 'ШКГ', f_cr_sofa: 'Креатинин или Диурез',
  r_sofa_lo: 'Низкий риск', r_sofa_lo_1: 'Уход.', r_sofa_lo_2: 'Лечение инфекции.', r_sofa_lo_3: 'Мониторинг.',
  r_sofa_md: 'Органная дисфункция', r_sofa_md_1: 'Уровень ОРИТ.', r_sofa_md_2: 'Поддержка.', r_sofa_md_3: 'ИВЛ.',
  r_sofa_hi: 'ПОН', r_sofa_hi_1: 'Агрессивное лечение.', r_sofa_hi_2: 'Вазопрессоры.', r_sofa_hi_3: 'Высокая смертность.',
  sofa_info_title: 'Шкала SOFA', sofa_info_p1: 'Состояние в ОРИТ.', sofa_info_p2: '6 систем.', sofa_info_p3: 'Порог: Рост ≥ 2 — сепсис.',

  // --- 14. RANSON ---
  d_ranson: 'Риск смертности при остром панкреатите.', f_age55: 'Возраст > 55 лет', f_wbc: 'Лейкоциты > 16 тыс.', f_glu: 'Глюкоза > 11 ммоль/л', f_ldh: 'ЛДГ > 350', f_ast: 'АСТ > 250', f_hct_drop: 'Падение гематокрита > 10%', f_bun_rise: 'Рост мочевины > 1.8 ммоль/л', f_ca_low: 'Кальций < 2 ммоль/л', f_pao2_low: 'PaO2 < 60', f_base_def: 'Дефицит оснований > 4', f_fluid_seq: 'Секвестрация жидкости > 6 л',
  r_ranson_lo: 'Легкий', r_ranson_lo_1: 'Инфузии.', r_ranson_lo_2: 'Анальгезия.', r_ranson_lo_3: 'Питание.',
  r_ranson_md: 'Риск тяжелого', r_ranson_md_1: 'Агрессивные инфузии.', r_ranson_md_2: 'ОРИТ.', r_ranson_md_3: 'Зонд.', r_ranson_md_d: 'Раствор Хартмана.',
  r_ranson_hi: 'Высокий риск', r_ranson_hi_1: 'ОРИТ обязательно.', r_ranson_hi_2: 'Контроль некроза.', r_ranson_hi_3: 'Хирург.',
  ranson_info_title: 'Критерии Рэнсона', ranson_info_p1: 'Тяжесть панкреатита.', ranson_info_p2: 'Анализы.', ranson_info_p3: 'Порог: ≥ 3 — тяжелый.',

  // --- 15. PSI/PORT ---
  d_psi: 'Индекс тяжести пневмонии.', f_psi_age: 'Возраст (лет)', f_psi_sex: 'Пол', f_psi_nh: 'Житель дома престарелых', f_psi_neo: 'Онкология', f_psi_liv: 'Заболевание печени', f_psi_chf: 'Сердечная недостаточность', f_psi_cvd: 'Цереброваскулярная болезнь', f_psi_ren: 'Болезнь почек', f_psi_ams: 'Спутанность сознания', f_psi_rr: 'ЧДД ≥ 30', f_psi_sbp: 'Сист. АД < 90', f_psi_temp: 'Темп < 35°C или ≥ 40°C', f_psi_pulse: 'Пульс ≥ 125', f_psi_ph: 'pH < 7.35', f_psi_bun: 'Мочевина ≥ 10.7 ммоль/л', f_psi_na: 'Натрий < 130', f_psi_gluc: 'Глюкоза ≥ 13.9 ммоль/л', f_psi_hct: 'Гематокрит < 30%', f_psi_pao2: 'PaO2 < 60', f_psi_eff: 'Плевральный выпот',
  r_psi_1: 'Класс I', r_psi_1_1: 'Амбулаторно.', r_psi_1_2: 'Внутрь АБ.',
  r_psi_2: 'Класс II', r_psi_2_1: 'Амбулаторно.', r_psi_2_2: 'Внутрь АБ.',
  r_psi_3: 'Класс III', r_psi_3_1: 'Краткосрочно.', r_psi_3_2: 'В/в АБ.', r_psi_3_d: 'Переход на внутрь.',
  r_psi_4: 'Класс IV', r_psi_4_1: 'Госпитализация.', r_psi_4_2: 'В/в АБ.',
  r_psi_5: 'Класс V', r_psi_5_1: 'ОРИТ.', r_psi_5_2: 'Широкого спектра.',
  psi_info_title: 'Шкала PSI', psi_info_p1: 'Прогноз пневмонии.', psi_info_p2: 'Анализы и клиника.', psi_info_p3: 'Порог: IV и V — стационар.'
},

uz:{
  // --- HOME PAGE & GENERAL UI ---
  badge: 'KLINIK QAROR QABUL QILISH VOSITALARI', h1a: 'Ward', h1b: 'Calc', sub: 'Kundalik amaliyot uchun isbotlarga asoslangan tibbiy kalkulyatorlar.',
  badge_stu: 'TIBBIYOT TALABASI TOMONIDAN · TALABALAR UCHUN', h1_main: 'Klinik vositalar', h1_sub: 'palata aylanmalari uchun',
  hero_desc: '3 tilda mnemonikaga ega 15 ta kalkulyator. Tez, bepul va qulay — bemor yotog\'i yonida kerak bo\'lgan hamma narsa.',
  stat_calc: 'KALKULYATOR', stat_lang: 'TIL', stat_free: 'BEPUL', all_label: 'BARCHA KALKULYATORLAR',
  search_ph: 'Qidiruv (masalan, GCS, BMI)...', alert_msg: 'Barcha maydonlarni to\'ldiring.', btn: 'Hisoblash',
  tab_i: 'Talqin', tab_a: 'Harakat Rejasi', tab_d: 'Birinchi Davolash',
  sp_neuro: 'Nevrologiya', sp_ped: 'Pediatriya', sp_gen: 'Umumiy', sp_resp: 'Nafas tizimi', sp_cardio: 'Kardiologiya', sp_gastro: 'Gastroenterologiya', sp_id: 'Yuqumli kasalliklar',
  mnem_all: 'Mnemonika — 3 tilda', yes: 'Ha', no: 'Yo\'q',
  
  // --- FOOTER ---
  ft_about: 'Biz haqimizda', ft_contact: 'Aloqa', ft_disc: 'Rad etish', ft_rights: '© 2026 WardCalc. Barcha huquqlar himoyalangan.',

  // --- SEVERITY TAGS (BOTH CASES) ---
  sev_lo: 'PAST XAVF', sev_md: 'O\'RTACHA XAVF', sev_hi: 'YUQORI XAVF',
  SEV_LO: 'PAST XAVF', SEV_MD: 'O\'RTACHA XAVF', SEV_HI: 'YUQORI XAVF',

  // --- 1. GCS ---
  d_gcs: 'Ong darajasini baholash. Jarohatda birinchi talab qilinadigan ko\'rsatkich.',
  f_eye:"Ko'z ochilishi", f_verbal:"Og'zaki javob", f_motor:'Harakat javobi',
  g_e4: 'O\'z-o\'zidan (4)', g_e3: 'Ovozga (3)', g_e2: 'Og\'riqqa (2)', g_e1: 'Yo\'q (1)',
  g_v5: 'Mo\'ljallangan (5)', g_v4: 'Chalkash (4)', g_v3: 'So\'zlar (3)', g_v2: 'Tovushlar (2)', g_v1: 'Yo\'q (1)',
  g_m6: 'Bajaradi (6)', g_m5: 'Lokalizatsiya (5)', g_m4: 'Tortib olish (4)', g_m3: 'Bukilish (3)', g_m2: 'Yozilish (2)', g_m1: 'Yo\'q (1)',
  r_gcs_mild:"Yengil jarohat", r_gcs_mild_1:"To'liq nevrologik tekshiruv.", r_gcs_mild_2:"Har 30–60 daqiqada kuzatuv.", r_gcs_mild_3:"Yomonlashsa bosh KT.",
  r_gcs_mod:"O'rtacha jarohat", r_gcs_mod_1:"⚠ Shoshilinch bosh KT.", r_gcs_mod_2:"Neyrojarroh maslahati.", r_gcs_mod_3:"Bosh 30° ko'tarilgan.", r_gcs_mod_4:"Har 15 daqiqada baholash.",
  r_gcs_sev:"Og'ir jarohat", r_gcs_sev_1:"⚠ GCS ≤ 8 = intubatsiya.", r_gcs_sev_2:"Tezkor intubatsiya (RSI).", r_gcs_sev_3:"Shoshilinch bosh+umurtqa KT.", r_gcs_sev_4:"ORIT ga yotqizish.",
  gcs_info_title: 'Glazgo shkalasini tushunish', gcs_info_p1: 'Ong darajasini baholash uchun standartlashtirilgan usul.', gcs_info_p3: 'Normal bemor 15 ball oladi.', gcs_info_p4: 'Har doim eng yaxshi javobni yozing.', gcs_info_p2: 'Klinik chegara: 8 yoki undan past ball intubatsiyani talab qiladi.',

  // --- 2. APGAR ---
  d_apgar: 'Chaqaloqni 1 va 5-daqiqada baholash. Reanimatsiya taktikasini belgilaydi.',
  f_appear: 'Teri rangi', f_pulse: 'Puls', f_grimace: 'Grimasa', f_activity: 'Aktivlik', f_resp_a: 'Nafas',
  a_a2: 'Pushti (2)', a_a1: 'Qo\'llar/oyoqlar ko\'k (1)', a_a0: 'Oqarib ketgan (0)',
  a_p2: '≥ 100 ta/daq (2)', a_p1: '< 100 ta/daq (1)', a_p0: 'Yo\'q (0)',
  a_g2: 'Yig\'lash (2)', a_g1: 'Grimasa (1)', a_g0: 'Yo\'q (0)',
  a_c2: 'Faol (2)', a_c1: 'Biroz bukilish (1)', a_c0: 'Bo\'shashgan (0)',
  a_r2: 'Baland yig\'i (2)', a_r1: 'Sust (1)', a_r0: 'Yo\'q (0)',
  r_apgar_norm: 'Qoniqarli holat', r_apgar_norm_1: 'Standart parvarish.', r_apgar_norm_2: 'Quritish, issiq tutish.', r_apgar_norm_3: 'Onaga berish.',
  r_apgar_mod: 'O\'rtacha asfiksiya', r_apgar_mod_1: 'Stimulyatsiya qilish.', r_apgar_mod_2: 'Kislorod.', r_apgar_mod_3: 'CPAP ko\'rib chiqish.', r_apgar_mod_4: 'Har daqiqada baholash.',
  r_apgar_crit: 'Og\'ir asfiksiya', r_apgar_crit_1: 'Zudlik bilan reanimatsiya.', r_apgar_crit_2: 'Sun\'iy nafas (PPV).', r_apgar_crit_3: 'Yurak massaji < 60.', r_apgar_crit_4: 'Intubatsiyaga tayyorgarlik.',
  apgar_info_title: 'Apgar shkalasini tushunish', apgar_info_p1: 'Chaqaloqning holatini tezkor baholash.', apgar_info_p2: '7-10 ball me\'yor.', apgar_info_p3: 'Chegara: 5-daqiqada ≤ 3 ball zudlik bilan reanimatsiyani talab qiladi.',

  // --- 3. BMI ---
  d_bmi: 'JSST klassifikatsiyasi va klinik harakatlar rejasi bilan TVI.', f_weight: 'Vazn (kg)', f_height: 'Bo\'y (sm)',
  r_bmi_under: 'Vazn yetishmovchiligi', r_bmi_under_1: 'Ovqatlanishni tekshiring.', r_bmi_under_2: 'Diyetolog maslahati.',
  r_bmi_norm: 'Normal vazn', r_bmi_norm_1: 'Sog\'lom turmush tarzi.', r_bmi_norm_d: 'Dori-darmonsiz',
  r_bmi_over: 'Ortiqcha vazn', r_bmi_over_1: 'Parhez va mashqlar.', r_bmi_over_2: 'Metabolik sindrom skriningi.', r_bmi_over_d: 'Turmush tarzini optimallashtirish',
  r_bmi_ob1: 'I darajali semizlik', r_bmi_ob1_1: 'Turmush tarzini o\'zgartirish.', r_bmi_ob1_2: 'Farmakoterapiyani ko\'rib chiqish.',
  r_bmi_ob2: 'II/III darajali semizlik', r_bmi_ob2_1: 'Yuqori xavf.', r_bmi_ob2_2: 'Bariatrik jarrohlik.',
  bmi_info_title: 'TVI ni tushunish', bmi_info_p1: 'Vazn va bo\'y nisbati.', bmi_info_p2: 'To\'g\'ridan-to\'g\'ri tana yog\'ini o\'lchamaydi.',

  // --- 4. CURB-65 ---
  d_curb65: 'Pnevmoniyada o\'lim xavfi.', f_confusion: 'Ong chalkashligi', f_urea: 'Mochevina > 7 mmol/l', f_rr30: 'Nafas ≥ 30/min', f_bp_low: 'Sistolik qon bosimi < 90', f_age65: 'Yosh ≥ 65',
  r_curb_lo: 'Past xavf', r_curb_lo_1: 'Uyda davolanish.', r_curb_lo_2: 'Peroral antibiotiklar.', r_curb_lo_3: 'Kuzatuv.',
  r_curb_md: 'O\'rtacha xavf', r_curb_md_1: 'Kasalxonaga yotqizish.', r_curb_md_2: 'Qisqa kuzatuv.', r_curb_md_3: 'Vena ichiga antibiotiklar.',
  r_curb_hi: 'Yuqori xavf', r_curb_hi_1: 'Zudlik bilan yotqizish.', r_curb_hi_2: 'Reanimatsiya.', r_curb_hi_3: 'Keng spektrli antibiotiklar.',
  curb_info_title: 'CURB-65 shkalasi', curb_info_p1: 'Pnevmoniyada o\'lim xavfi.', curb_info_p2: 'Ong, mochevina, nafas, bosim.', curb_info_p3: 'Chegara: ≥ 3 ball og\'ir pnevmoniya.',

  // --- 5. WELLS DVT ---
  d_dvt: 'Chuqur vena trombozi ehtimoli.', f_cancer: 'Faol saraton', f_paralysis: 'Paralich yoki gips', f_bedridden: 'Yotoq rejimi > 3 kun', f_tenderness: 'Venalar bo\'ylab og\'riq', f_swelling_entire: 'Butun oyoq shishi', f_swelling_calf: 'Boldir shishi > 3 sm', f_pitting: 'Chuqurcha qoldiruvchi shish', f_collateral: 'Kollateral venalar', f_alt_dx: 'Boshqa tashxis ehtimoli yuqoriroq (-2)',
  r_dvt_hi: 'DVT ehtimoli yuqori', r_dvt_hi_1: 'Zudlik bilan UTT.', r_dvt_hi_2: 'Agar UTT manfiy bo\'lsa D-Dimer.', r_dvt_hi_3: 'Antikoagulyantlar.',
  r_dvt_md: 'O\'rtacha xavf', r_dvt_md_1: 'D-Dimer testi.', r_dvt_md_2: 'Musbat bo\'lsa UTT.', r_dvt_md_d: 'Tasdiqlangandan so\'ng.',
  r_dvt_lo: 'DVT ehtimoli past', r_dvt_lo_1: 'D-Dimer testi.', r_dvt_lo_2: 'Manfiy bo\'lsa DVT istisno qilinadi.', r_dvt_lo_d: 'Kerak emas.',
  dvt_info_title: 'Wells mezonlari', dvt_info_p1: 'DVT xavfini baholaydi.', dvt_info_p2: 'Klinik belgilar.', dvt_info_p3: 'Chegara: ≥ 2 ball yuqori ehtimol.',

  // --- 6. WELLS PE ---
  d_pe: 'O\'pka emboliyasi ehtimoli.', f_pe_dvt: 'DVT belgilari', f_pe_alt: 'Boshqa tashxis ehtimoli kamroq', f_pe_hr: 'Puls > 100', f_pe_immob: 'Yotoq rejimi yoki operatsiya', f_pe_hx: 'Oldingi PE yoki DVT', f_pe_hemop: 'Qon tupurish', f_pe_malig: 'Onkologiya',
  r_pe_hi: 'PE ehtimoli yuqori', r_pe_hi_1: 'Zudlik bilan KT-AG.', r_pe_hi_2: 'Antikoagulyantlar.', r_pe_hi_3: 'Kasalxonaga yotqizish.',
  r_pe_md: 'O\'rtacha xavf', r_pe_md_1: 'D-Dimer.', r_pe_md_2: 'Musbat bo\'lsa KT-AG.', r_pe_lo_d: 'Kerak emas.',
  r_pe_lo: 'PE ehtimoli past', r_pe_lo_1: 'PERC yoki D-Dimer.', r_pe_lo_2: 'PE istisno qilinadi.',
  pe_info_title: 'Wells PE', pe_info_p1: 'O\'pka emboliyasi xavfi.', pe_info_p2: 'Puls va belgilar.', pe_info_p3: 'Chegara: > 4 ball PE ehtimoli yuqori.',

  // --- 7. CHADS2 ---
  d_chads2: 'Insult xavfi.', f_chf: 'Yurak yetishmovchiligi', f_htn: 'Gipertenziya', f_age75: 'Yosh ≥ 75', f_dm: 'Qandli diabet', f_stroke: 'Insult / TIA tarixi',
  r_chads_lo: 'Past xavf', r_chads_lo_1: 'Antikoagulyantlar kerak emas.', r_chads_lo_2: 'Kuzatuv.',
  r_chads_md: 'O\'rtacha xavf', r_chads_md_1: 'Antikoagulyantlar.', r_chads_md_2: 'Qon ketish xavfi.',
  r_chads_hi: 'Yuqori xavf', r_chads_hi_1: 'Antikoagulyantlar ko\'rsatilgan.', r_chads_hi_2: 'NOAK afzal.', r_chads_hi_3: 'Monitoring.',
  chads_info_title: 'CHADS2 shkalasi', chads_info_p1: 'Insult xavfi.', chads_info_p2: 'Yosh, gipertenziya.', chads_info_p3: 'Chegara: ≥ 2 ball antikoagulyantlar.',

  // --- 8. CHILD-PUGH ---
  d_cp: 'Jigar sirrozi prognozi.', f_enceph: 'Ensefalopatiya', f_ascites: 'Assit', f_bili: 'Bilirubin', f_alb: 'Albumin', f_pt: 'PV / XNN (INR)',
  r_cp_a: 'Yengil', r_cp_a_1: 'Yaxshi prognoz.', r_cp_a_2: 'Yashovchanlik ~100%.',
  r_cp_b: 'O\'rtacha', r_cp_b_1: 'O\'rtacha xavf.', r_cp_b_2: 'Transplantatsiya.',
  r_cp_c: 'Og\'ir', r_cp_c_1: 'Yuqori o\'lim xavfi.', r_cp_c_2: 'Transplantatsiya ko\'rsatilgan.',
  cp_info_title: 'Child-Pugh', cp_info_p1: 'Jigar sirrozi prognozi.', cp_info_p2: 'Bilirubin, albumin.', cp_info_p3: 'Chegara: C sinf og\'ir.',

  // --- 9. EGFR ---
  d_egfr: 'Buyrak faoliyatini baholash (eGFR).', f_cr: 'Kreatinin', f_age: 'Yosh', f_sex: 'Jins', sex_m: 'Erkak', sex_f: 'Ayol',
  r_egfr_g1: 'Normal', r_egfr_g1_1: 'Kuzatuv.', r_egfr_g1_2: 'Kasalliklarni davolash.',
  r_egfr_g2: 'Biroz pasaygan', r_egfr_g2_1: 'Progressiya.', r_egfr_g2_2: 'Yurak xavfi.',
  r_egfr_g3a: 'O\'rtacha', r_egfr_g3a_1: 'Asoratlarni davolash.', r_egfr_g3a_2: 'Dori dozasi.',
  r_egfr_g3b: 'Og\'ir', r_egfr_g3b_1: 'Nefrolog.', r_egfr_g3b_2: 'Gemosodializga tayyorgarlik.',
  r_egfr_g4: 'Juda og\'ir', r_egfr_g4_1: 'Qattiq kuzatuv.', r_egfr_g4_2: 'Transplantatsiya.',
  r_egfr_g5: 'Terminal', r_egfr_g5_1: 'Dializ.', r_egfr_g5_2: 'Palliativ.',
  egfr_info_title: 'eGFR', egfr_info_p1: 'Buyrak faoliyati.', egfr_info_p2: 'Kreatinin.', egfr_info_p3: 'Chegara: < 60 ml/min.',

  // --- 10. MEWS ---
  d_mews: 'Klinik yomonlashuv xavfini baholash.', f_mews_rr: 'Nafas tezligi', f_mews_hr: 'Yurak urishi', f_mews_sbp: 'Sistolik bosim', f_mews_temp: 'Harorat', f_mews_avpu: 'Ong darajasi (AVPU)',
  r_mews_lo: 'Stabil', r_mews_lo_1: 'Kuzatuv.', r_mews_lo_2: 'Reja.', r_mews_lo_d: 'Kerak emas.',
  r_mews_md: 'Xavf', r_mews_md_1: 'Tez-tez kuzatish.', r_mews_md_2: 'Shifokorga xabar.', r_mews_md_3: '30 min.',
  r_mews_hi: 'Kritik', r_mews_hi_1: 'Zudlik bilan shifokor.', r_mews_hi_2: 'Reanimatsiya.', r_mews_hi_3: 'ORIT.',
  mews_info_title: 'MEWS shkalasi', mews_info_p1: 'Yomonlashuv xavfi.', mews_info_p2: 'Hayotiy belgilar.', mews_info_p3: 'Chegara: ≥ 5 ball yuqori xavf.',

  // --- 11. CENTOR ---
  d_centor: 'Streptokokk faringiti ehtimoli.', f_cough_a: 'Yo\'tal yo\'qligi', f_exudates: 'Murtak bezlarida karash', f_lymph: 'Limfa tugunlari og\'riqliligi', f_temp38: 'Harorat > 38.0°C', f_c_age: 'Yosh',
  c_age_1: '3–14 yosh (+1)', c_age_2: '15–44 yosh (0)', c_age_3: '≥ 45 yosh (-1)',
  r_centor_lo: 'Strep ehtimoli past', r_centor_lo_1: 'Simptomatik.', r_centor_lo_2: 'Antibiotiklar KERAK EMAS.',
  r_centor_md: 'Strep mumkin', r_centor_md_1: 'Ekspress-test.', r_centor_md_2: 'Musbat bo\'lsa davolash.', r_centor_md_d: 'Tasdiqlangandan so\'ng.',
  r_centor_hi: 'Strep ehtimoli yuqori', r_centor_hi_1: 'Empirik antibiotiklar.', r_centor_hi_2: 'Test bilan tasdiqlash.',
  centor_info_title: 'Centor mezonlari', centor_info_p1: 'Streptokokk ehtimoli.', centor_info_p2: 'Isitma, karash.', centor_info_p3: 'Chegara: ≥ 3 ball antibiotiklar.',

  // --- 12. NIHSS ---
  d_nihss: 'Insult og\'irligini baholash.', f_nihss_score: 'NIHSS bali (0-42)',
  r_nihss_none: 'Insult yo\'q', r_nihss_none_1: 'TIA.', r_nihss_none_2: 'Profilaktika.',
  r_nihss_minor: 'Yengil', r_nihss_minor_1: 'Insult bo\'limi.', r_nihss_minor_2: 'Trombolizis.', r_nihss_minor_3: 'Parvarish.',
  r_nihss_mod: 'O\'rtacha', r_nihss_mod_1: 'Trombolizis.', r_nihss_mod_2: 'Trombektomiya.', r_nihss_mod_3: 'Qon bosimi.',
  r_nihss_modsev: 'Og\'ir', r_nihss_modsev_1: 'Nevrolog.', r_nihss_modsev_2: 'Trombektomiya.', r_nihss_modsev_3: 'ORIT.',
  r_nihss_sev: 'Juda og\'ir', r_nihss_sev_1: 'Yuqori xavf.', r_nihss_sev_2: 'Nafas yo\'llari.', r_nihss_sev_3: 'Palliativ.',
  nihss_info_title: 'NIHSS shkalasi', nihss_info_p1: 'Nevrologik defitsit.', nihss_info_p2: 'Harakat, nutq.', nihss_info_p3: 'Chegara: > 15 ball og\'ir insult.',

  // --- 13. SOFA ---
  d_sofa: 'Sepsisda a\'zolar disfunksiyasini baholash.', f_pao2: 'PaO2/FiO2', f_plt: 'Trombotsitlar', f_bili_sofa: 'Bilirubin', f_map: 'Qon bosimi (MAP) / Vazopressorlar', f_gcs_sofa: 'GCS', f_cr_sofa: 'Kreatinin yoki Siydik',
  r_sofa_lo: 'Past xavf', r_sofa_lo_1: 'Parvarish.', r_sofa_lo_2: 'Infeksiyani davolash.', r_sofa_lo_3: 'Kuzatuv.',
  r_sofa_md: 'A\'zolar disfunksiyasi', r_sofa_md_1: 'ORIT.', r_sofa_md_2: 'Qo\'llab-quvvatlash.', r_sofa_md_3: 'IVL.',
  r_sofa_hi: 'Poliorgan yetishmovchiligi', r_sofa_hi_1: 'Agressiv davolash.', r_sofa_hi_2: 'Vazopressorlar.', r_sofa_hi_3: 'Yuqori o\'lim xavfi.',
  sofa_info_title: 'SOFA shkalasi', sofa_info_p1: 'Reanimatsiyadagi holat.', sofa_info_p2: '6 tizim.', sofa_info_p3: 'Chegara: ≥ 2 ball o\'sish - sepsis.',

  // --- 14. RANSON ---
  d_ranson: 'O\'tkir pankreatitda o\'lim xavfi.', f_age55: 'Yosh > 55', f_wbc: 'Leykotsitlar > 16,000', f_glu: 'Glyukoza > 200 mg/dL', f_ldh: 'LDH > 350', f_ast: 'AST > 250', f_hct_drop: 'Gematokrit tushishi > 10%', f_bun_rise: 'Mochevina oshishi > 5', f_ca_low: 'Kaltsiy < 8', f_pao2_low: 'PaO2 < 60', f_base_def: 'Asos defitsiti > 4', f_fluid_seq: 'Suyuqlik sekvestratsiyasi > 6 L',
  r_ranson_lo: 'Yengil', r_ranson_lo_1: 'Infuziyalar.', r_ranson_lo_2: 'Og\'riqsizlantirish.', r_ranson_lo_3: 'Oziqlantirish.',
  r_ranson_md: 'Og\'ir xavf', r_ranson_md_1: 'Agressiv infuziyalar.', r_ranson_md_2: 'ORIT.', r_ranson_md_3: 'Zond.', r_ranson_md_d: 'Hartman.',
  r_ranson_hi: 'Yuqori xavf', r_ranson_hi_1: 'ORIT majburiy.', r_ranson_hi_2: 'Nekroz nazorati.', r_ranson_hi_3: 'Jarroh.',
  ranson_info_title: 'Ranson mezonlari', ranson_info_p1: 'Pankreatit og\'irligi.', ranson_info_p2: 'Tahlillar.', ranson_info_p3: 'Chegara: ≥ 3 ball og\'ir.',

  // --- 15. PSI/PORT ---
  d_psi: 'Pnevmoniya og\'irlik indeksi.', f_psi_age: 'Yosh (yillar)', f_psi_sex: 'Jins', f_psi_nh: 'Qariyalar uyi rezidenti', f_psi_neo: 'Onkologiya', f_psi_liv: 'Jigar kasalligi', f_psi_chf: 'Yurak yetishmovchiligi', f_psi_cvd: 'Miya qon tomir kasalligi', f_psi_ren: 'Buyrak kasalligi', f_psi_ams: 'Ong o\'zgarishi', f_psi_rr: 'Nafas ≥ 30/min', f_psi_sbp: 'Sistolik bosim < 90', f_psi_temp: 'Harorat < 35°C yoki ≥ 40°C', f_psi_pulse: 'Puls ≥ 125 bpm', f_psi_ph: 'pH < 7.35', f_psi_bun: 'Mochevina ≥ 30 mg/dL', f_psi_na: 'Natriy < 130 mEq/L', f_psi_gluc: 'Glyukoza ≥ 250 mg/dL', f_psi_hct: 'Gematokrit < 30%', f_psi_pao2: 'PaO2 < 60 mmHg', f_psi_eff: 'Plevral suyuqlik',
  r_psi_1: 'I Sinf', r_psi_1_1: 'Uyda.', r_psi_1_2: 'Peroral.',
  r_psi_2: 'II Sinf', r_psi_2_1: 'Uyda.', r_psi_2_2: 'Peroral.',
  r_psi_3: 'III Sinf', r_psi_3_1: 'Qisqa muddat.', r_psi_3_2: 'Vena ichiga.', r_psi_3_d: 'Peroralga o\'tish.',
  r_psi_4: 'IV Sinf', r_psi_4_1: 'Kasalxona.', r_psi_4_2: 'Vena ichiga.',
  r_psi_5: 'V Sinf', r_psi_5_1: 'ORIT.', r_psi_5_2: 'Keng spektrli.',
  psi_info_title: 'PSI/PORT', psi_info_p1: 'Pnevmoniya prognozi.', psi_info_p2: 'Klinika va tahlil.', psi_info_p3: 'Chegara: IV va V sinflar yotqizish.'
}
};

let LANG = localStorage.getItem('wardcalc_lang') || 'en';
const t = k => (T[LANG]||T.en)[k] || T.en[k] || k;
