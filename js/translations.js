'use strict';

const T = {
en:{
  // --- HOME PAGE & GENERAL UI ---
  badge: 'CLINICAL DECISION TOOLS', h1a: 'Ward', h1b: 'Calc', sub: 'Evidence-based medical calculators for daily ward practice.',
  badge_stu: 'BUILT BY A MEDICAL STUDENT · FOR MEDICAL PROFESSIONALS', h1_main: 'Clinical Tools', h1_sub: 'for Ward Rounds',
  hero_desc: '15 evidence-based calculators with mnemonics in 3 languages. Fast, reliable, and mobile-first — everything you need at the bedside.',
  stat_calc: 'CALCULATORS', stat_lang: 'LANGUAGES', stat_free: 'FREE', all_label: 'ALL CALCULATORS',
  search_ph: 'Search tools (e.g., GCS, BMI)...', alert_msg: 'Please complete all fields.', btn: 'Calculate',
  tab_i: 'Interpretation', tab_a: 'Action Plan', tab_d: 'First-Line Rx',
  sp_neuro: 'Neurology', sp_ped: 'Pediatrics', sp_gen: 'General', sp_resp: 'Respiratory', sp_cardio: 'Cardiology', sp_gastro: 'Gastroenterology', sp_id: 'Infectious Disease',
  mnem_all: 'Memory Aid — All 3 Languages', yes: 'Yes', no: 'No', YES: 'Yes', NO: 'No',
  
  // --- FOOTER & INFO PAGES (EXPANDED & PROFESSIONAL) ---
  ft_about: 'About Us', ft_contact: 'Contact', ft_disc: 'Disclaimer', ft_terms: 'Terms', ft_privacy: 'Privacy', ft_rights: '© 2026 WardCalc. All rights reserved.',
  
  nav_about: 'About WardCalc',
  about_p1: 'WardCalc is a comprehensive clinical decision support system developed by Ali Muhammad Sabir, a final year medical student at Bukhara State Medical Institute. Designed to bridge the gap between complex medical literature and fast-paced bedside practice, WardCalc delivers rapid, evidence-based calculation tools to healthcare professionals and medical students globally.',
  about_h2: 'Our Mission',
  about_p2: 'In acute medical settings, time and accuracy are paramount. Our mission is to digitize and simplify internationally validated medical scoring systems into an intuitive, mobile-first interface. By reducing cognitive load, WardCalc empowers clinicians to make safer, faster, and more standardized triage and therapeutic decisions.',
  about_h3: 'Educational Purpose',
  about_p3: 'While all algorithms and logic models within WardCalc are built strictly upon recognized peer-reviewed medical guidelines, the application is designated as an educational and reference tool. It is designed to assist, not replace, formal clinical judgment and institutional protocols.',
  
  nav_contact: 'Contact Us', 
  contact_p1: 'We are committed to continuous improvement. If you have clinical feedback, feature suggestions, or have encountered a technical issue, please reach out to our development team.',
  contact_p2: 'For support, collaborations, or academic inquiries, please email us directly or submit an issue via our official GitHub repository. We actively review all peer feedback to ensure clinical accuracy.',
  
  nav_disc: 'Disclaimer', 
  disc_p1: 'The information provided by WardCalc is strictly for educational and informational purposes. It does not constitute professional medical advice, diagnosis, or treatment guidelines.',
  disc_p2: 'Healthcare providers must exercise their own independent clinical judgment. WardCalc and its creator, Ali Muhammad Sabir, assume no liability for clinical decisions made, or actions taken, based on the outputs of this application. Always consult primary literature and institutional protocols.',
  
  nav_terms: 'Terms & Conditions', 
  terms_p1: 'By accessing and utilizing WardCalc, you agree to these Terms and Conditions. This platform is provided on an "as is" and "as available" basis without any warranties, express or implied.',
  terms_p2: 'Users are entirely responsible for verifying the accuracy of all calculations before applying them to real-world patient care scenarios. Intellectual property rights for the interface and codebase belong to the creator.',
  
  nav_privacy: 'Privacy Policy', 
  privacy_p1: 'Data security and patient confidentiality are integral to our architecture. WardCalc operates entirely client-side, meaning all calculations are performed locally within your browser.',
  privacy_p2: 'We do not collect, transmit, or store any Personal Health Information (PHI) or patient-identifiable data. Your language preferences are saved locally on your device using standard web storage without external tracking.',

  // --- SEVERITY TAGS ---
  sev_lo: 'LOW RISK', sev_md: 'MODERATE RISK', sev_hi: 'HIGH RISK',

  // --- 1. GCS ---
  d_gcs: 'Assess consciousness level in any patient. The baseline score demanded on every trauma call.',
  f_eye:'Eye Opening', f_verbal:'Verbal Response', f_motor:'Motor Response',
  g_e4: 'Spontaneous (4)', g_e3: 'To voice (3)', g_e2: 'To pain (2)', g_e1: 'None (1)',
  g_v5: 'Oriented (5)', g_v4: 'Confused (4)', g_v3: 'Words (3)', g_v2: 'Sounds (2)', g_v1: 'None (1)',
  g_m6: 'Obeys (6)', g_m5: 'Localizes (5)', g_m4: 'Withdrawal (4)', g_m3: 'Flexion (3)', g_m2: 'Extension (2)', g_m1: 'None (1)',
  r_gcs_mild:'Mild impairment / Normal', r_gcs_mild_1:'Full neurological assessment.', r_gcs_mild_2:'Neuro obs every 30–60 mins.', r_gcs_mild_3:'CT head if indicated.',
  r_gcs_mod:'Moderate brain injury', r_gcs_mod_1:'⚠ Urgent CT head.', r_gcs_mod_2:'Neurosurgery referral.', r_gcs_mod_3:'30° head elevation. IV access.', r_gcs_mod_4:'Reassess GCS every 15 mins.',
  r_gcs_sev:'Severe brain injury', r_gcs_sev_1:'⚠ GCS ≤ 8 = intubation threshold.', r_gcs_sev_2:'Rapid Sequence Intubation (RSI).', r_gcs_sev_3:'Urgent CT head + spine.', r_gcs_sev_4:'ICU admission.',
  gcs_info_title: 'Understanding the GCS', 
  gcs_info_p1: 'The Glasgow Coma Scale (GCS) is a universally adopted clinical scale used to reliably and objectively measure a patient\'s level of consciousness following acute brain injury or medical illness.', 
  gcs_info_p3: 'A fully alert and oriented patient scores a maximum of 15, while a completely unresponsive patient scores a minimum of 3. It is critical to apply the painful stimulus centrally (e.g., trapezius squeeze) and always record the best response elicited.', 
  gcs_info_p4: 'The motor component is the most highly predictive metric for overall prognosis.', 
  gcs_info_p2: 'Clinical Threshold: A score of 8 or less indicates a failure to protect the airway and requires immediate intubation.',

  // --- 2. APGAR ---
  d_apgar: 'Newborn assessment at 1 and 5 minutes. Guides immediate resuscitation requirements.',
  f_appear: 'Appearance', f_pulse: 'Pulse', f_grimace: 'Grimace', f_activity: 'Activity', f_resp_a: 'Respiration',
  a_a2: 'Pink (2)', a_a1: 'Blue extremities (1)', a_a0: 'Blue/pale (0)',
  a_p2: '≥ 100 bpm (2)', a_p1: '< 100 bpm (1)', a_p0: 'Absent (0)',
  a_g2: 'Cry/Cough (2)', a_g1: 'Grimace (1)', a_g0: 'None (0)',
  a_c2: 'Active (2)', a_c1: 'Some flexion (1)', a_c0: 'Limp (0)',
  a_r2: 'Strong cry (2)', a_r1: 'Weak (1)', a_r0: 'Absent (0)',
  r_apgar_norm: 'Reassuring', r_apgar_norm_1: 'Routine care.', r_apgar_norm_2: 'Dry, keep warm.', r_apgar_norm_3: 'Skin-to-skin contact.',
  r_apgar_mod: 'Moderately abnormal', r_apgar_mod_1: 'Stimulate infant.', r_apgar_mod_2: 'Give oxygen.', r_apgar_mod_3: 'Consider CPAP.', r_apgar_mod_4: 'Re-evaluate every min.',
  r_apgar_crit: 'Critically low', r_apgar_crit_1: 'Immediate resuscitation.', r_apgar_crit_2: 'PPV immediately.', r_apgar_crit_3: 'Chest compressions if HR < 60.', r_apgar_crit_4: 'Prepare to intubate.',
  apgar_info_title: 'Understanding APGAR', 
  apgar_info_p1: 'Developed by Dr. Virginia Apgar in 1952, this scoring system provides a standardized, rapid method for assessing the clinical status of a newborn infant at 1 minute and 5 minutes after birth.', 
  apgar_info_p2: 'The 1-minute score determines how well the baby tolerated the birthing process, while the 5-minute score assesses how well the baby is adapting to the new environment. A score of 7-10 is considered normal and reassuring.', 
  apgar_info_p3: 'Clinical Threshold: A score ≤ 3 at 5 minutes correlates with an increased risk of long-term neurological damage and necessitates aggressive neonatal resuscitation.',

  // --- 3. BMI ---
  d_bmi: 'Body Mass Index calculation paired with WHO classification thresholds.', 
  f_weight: 'Weight (kg)', f_height: 'Height (cm)',
  r_bmi_under: 'Underweight', r_bmi_under_1: 'Assess for malnutrition.', r_bmi_under_2: 'Dietician referral.',
  r_bmi_norm: 'Normal Weight', r_bmi_norm_1: 'Maintain healthy lifestyle.', r_bmi_norm_d: 'No meds',
  r_bmi_over: 'Overweight', r_bmi_over_1: 'Diet and exercise.', r_bmi_over_2: 'Screen for metabolic syndrome.', r_bmi_over_d: 'Lifestyle optimization',
  r_bmi_ob1: 'Obesity Class I', r_bmi_ob1_1: 'Intensive lifestyle intervention.', r_bmi_ob1_2: 'Consider pharmacotherapy.',
  r_bmi_ob2: 'Obesity Class II/III', r_bmi_ob2_1: 'High cardiovascular risk.', r_bmi_ob2_2: 'Consider bariatric surgery.',
  bmi_info_title: 'Understanding BMI', 
  bmi_info_p1: 'Body Mass Index (BMI) is a simple index of weight-for-height commonly used to classify underweight, overweight, and obesity in adults. It provides a baseline demographic metric for cardiovascular and metabolic risk stratification.', 
  bmi_info_p2: 'While highly useful on a population level, clinicians must note that BMI does not directly measure body fat percentage. It may misclassify highly muscular individuals as overweight or fail to identify dangerous visceral fat in individuals with a "normal" BMI (normal-weight obesity).',

  // --- 4. CURB-65 ---
  d_curb65: 'Mortality risk stratification for community-acquired pneumonia.', 
  f_confusion: 'Confusion (AMTS ≤ 8)', f_urea: 'BUN > 19 mg/dL (> 7 mmol/L)', f_rr30: 'Respiratory Rate ≥ 30/min', f_bp_low: 'Systolic BP < 90 or Diastolic ≤ 60', f_age65: 'Age ≥ 65 years',
  r_curb_lo: 'Low Risk', r_curb_lo_1: 'Outpatient treatment suitable.', r_curb_lo_2: 'Oral antibiotics.', r_curb_lo_3: 'Safety net advice.',
  r_curb_md: 'Moderate Risk', r_curb_md_1: 'Consider hospital admission.', r_curb_md_2: 'Short stay assessment.', r_curb_md_3: 'Oral or IV antibiotics.',
  r_curb_hi: 'High Risk', r_curb_hi_1: 'Urgent hospital admission.', r_curb_hi_2: 'Assess for ICU.', r_curb_hi_3: 'IV broad-spectrum antibiotics.',
  curb_info_title: 'Understanding CURB-65', 
  curb_info_p1: 'CURB-65 is a highly validated clinical prediction rule endorsed by the British Thoracic Society. It utilizes five easily obtainable clinical variables to assist physicians in calculating 30-day mortality risk in Community-Acquired Pneumonia (CAP).', 
  curb_info_p2: 'The score effectively dictates the triage pathway: identifying patients safe for outpatient oral antibiotic therapy versus those requiring inpatient ward or ICU admission.', 
  curb_info_p3: 'Clinical Threshold: A score of 3 or higher carries a mortality risk of roughly 14%, mandating urgent hospitalization and often intensive care assessment.',

  // --- 5. WELLS DVT ---
  d_dvt: 'Estimate the pre-test probability of Deep Vein Thrombosis.', 
  f_cancer: 'Active cancer', f_paralysis: 'Paralysis, paresis, or plaster immobilization', f_bedridden: 'Recently bedridden > 3 days or major surgery', f_tenderness: 'Localized tenderness along deep venous system', f_swelling_entire: 'Entire leg swollen', f_swelling_calf: 'Calf swelling > 3 cm', f_pitting: 'Pitting edema confined to symptomatic leg', f_collateral: 'Collateral superficial veins (non-varicose)', f_alt_dx: 'Alternative diagnosis at least as likely as DVT (-2)',
  r_dvt_hi: 'DVT Likely', r_dvt_hi_1: 'Urgent proximal leg ultrasound.', r_dvt_hi_2: 'Consider D-Dimer if USS negative.', r_dvt_hi_3: 'Start empiric anticoagulation if delay.',
  r_dvt_md: 'Moderate Risk', r_dvt_md_1: 'High-sensitivity D-Dimer test.', r_dvt_md_2: 'If positive, perform ultrasound.', r_dvt_md_d: 'Anticoagulation only if confirmed.',
  r_dvt_lo: 'DVT Unlikely', r_dvt_lo_1: 'Perform D-Dimer test.', r_dvt_lo_2: 'If negative, DVT excluded.', r_dvt_lo_d: 'No empirical anticoagulation.',
  dvt_info_title: 'Understanding Wells DVT', 
  dvt_info_p1: 'The Wells Criteria for DVT safely and objectively categorizes patients into risk tiers, standardizing the diagnostic approach to suspected lower extremity deep vein thrombosis.', 
  dvt_info_p2: 'It actively prevents unnecessary ultrasonography in low-risk populations by utilizing the D-dimer assay as a rule-out mechanism. The crucial "Alternative diagnosis" metric relies heavily on the clinician’s experience to identify cellulitis, Baker\'s cyst rupture, or muscle tears.', 
  dvt_info_p3: 'Threshold: A score ≥ 2 categorizes the patient into the "DVT Likely" tier, where D-dimer alone is insufficient, and imaging is mandatory.',

  // --- 6. WELLS PE ---
  d_pe: 'Calculate pre-test probability to guide Pulmonary Embolism imaging.', 
  f_pe_dvt: 'Clinical signs/symptoms of DVT', f_pe_alt: 'Alternative diagnosis less likely than PE', f_pe_hr: 'Heart rate > 100 bpm', f_pe_immob: 'Immobilization (> 3 days) or surgery', f_pe_hx: 'Previous PE or DVT', f_pe_hemop: 'Hemoptysis', f_pe_malig: 'Malignancy with treatment within 6 months',
  r_pe_hi: 'PE Likely', r_pe_hi_1: 'Urgent CTPA imaging.', r_pe_hi_2: 'Start empiric anticoagulation.', r_pe_hi_3: 'Admit to hospital.',
  r_pe_md: 'Moderate Risk', r_pe_md_1: 'D-Dimer testing.', r_pe_md_2: 'If positive, perform CTPA.', r_pe_lo_d: 'No empirical anticoagulation.',
  r_pe_lo: 'PE Unlikely', r_pe_lo_1: 'Use PERC rule or D-Dimer.', r_pe_lo_2: 'If negative, PE excluded.',
  pe_info_title: 'Understanding Wells PE', 
  pe_info_p1: 'Pulmonary Embolism can present with highly non-specific symptoms. The Wells Score for PE provides a structured framework to calculate a pre-test probability, directly dictating whether a patient should undergo D-dimer blood testing or proceed immediately to a CT Pulmonary Angiogram (CTPA).', 
  pe_info_p2: 'Applying this rule significantly reduces unnecessary radiation exposure and contrast-induced nephropathy in low-risk patients.', 
  pe_info_p3: 'Threshold: A score > 4 means PE is likely; a negative D-dimer cannot safely rule out PE in this cohort, and imaging is required.',

  // --- 7. CHADS2 ---
  d_chads2: 'Stroke risk stratification in non-valvular atrial fibrillation.', 
  f_chf: 'Congestive Heart Failure', f_htn: 'Hypertension', f_age75: 'Age ≥ 75', f_dm: 'Diabetes Mellitus', f_stroke: 'Stroke/TIA history',
  r_chads_lo: 'Low Risk', r_chads_lo_1: 'No anticoagulation usually needed.', r_chads_lo_2: 'Consider individual patient factors.',
  r_chads_md: 'Moderate Risk', r_chads_md_1: 'Consider oral anticoagulation.', r_chads_md_2: 'Weigh bleeding risk.',
  r_chads_hi: 'High Risk', r_chads_hi_1: 'Oral anticoagulation recommended.', r_chads_hi_2: 'DOACs preferred over Warfarin.', r_chads_hi_3: 'Monitor adherence.',
  chads_info_title: 'Understanding CHADS2', 
  chads_info_p1: 'The CHADS2 score is a widely utilized clinical tool used to estimate the annual risk of ischemic stroke in patients with non-valvular atrial fibrillation. It guides the crucial decision of whether to initiate long-term prophylactic anticoagulation.', 
  chads_info_p2: 'The score balances the risk of thromboembolic events against the inherent bleeding risks associated with anticoagulants (DOACs or Vitamin K antagonists).', 
  chads_info_p3: 'Threshold: A score of 2 or greater signifies a high stroke risk (≥ 4.0% per year), establishing a strong clinical indication for systemic anticoagulation.',

  // --- 8. CHILD-PUGH ---
  d_cp: 'Prognostic classification of liver cirrhosis severity.', 
  f_bili: 'Bilirubin (μmol/L)', f_alb: 'Albumin (g/L)', f_pt: 'PT prolongation / INR', f_ascites: 'Ascites', f_enceph: 'Hepatic Encephalopathy', 
  cp_b1: '< 34', cp_b2: '34–50', cp_b3: '> 50',
  cp_a1: '> 35', cp_a2: '28–35', cp_a3: '< 28',
  cp_p1: '< 4s / INR < 1.7', cp_p2: '4–6s / 1.7–2.3', cp_p3: '> 6s / INR > 2.3',
  cp_as2: 'Mild / Moderate', cp_as3: 'Severe / Refractory',
  cp_e2: 'Grade I–II', cp_e3: 'Grade III–IV',
  r_cp_a: 'Mild Hepatic Impairment', r_cp_a_1: 'Good operative risk.', r_cp_a_2: '1-year survival ~100%.',
  r_cp_b: 'Moderate Impairment', r_cp_b_1: 'Moderate operative risk.', r_cp_b_2: 'Consider liver transplant evaluation.',
  r_cp_c: 'Severe Impairment', r_cp_c_1: 'High mortality risk.', r_cp_c_2: 'Transplant evaluation indicated.',
  cp_info_title: 'Understanding Child-Pugh', 
  cp_info_p1: 'The Child-Turcotte-Pugh score is an established system for assessing the prognosis of chronic liver disease, primarily cirrhosis. It blends objective laboratory measures with subjective clinical assessments.', 
  cp_info_p2: 'It provides a reliable estimate of 1-year and 2-year survival, which is critical for determining perioperative risk before abdominal surgery and for adjusting the dosages of hepatically metabolized medications.', 
  cp_info_p3: 'Threshold: Progression to Class C (10-15 points) denotes decompensated disease with poor prognosis, necessitating urgent transplant assessment.',

  // --- 9. EGFR ---
  d_egfr: 'Estimated glomerular filtration rate via the CKD-EPI equation.', 
  f_cr: 'Serum Creatinine', f_age: 'Age', f_sex: 'Sex', sex_m: 'Male', sex_f: 'Female',
  r_egfr_g1: 'Normal or High', r_egfr_g1_1: 'Monitor if underlying kidney disease.', r_egfr_g1_2: 'Manage comorbidities.',
  r_egfr_g2: 'Mildly Decreased', r_egfr_g2_1: 'Estimate progression rate.', r_egfr_g2_2: 'Reduce cardiovascular risk.',
  r_egfr_g3a: 'Mild to Moderate', r_egfr_g3a_1: 'Evaluate and treat complications.', r_egfr_g3a_2: 'Adjust renally cleared meds.',
  r_egfr_g3b: 'Moderate to Severe', r_egfr_g3b_1: 'Nephrology referral recommended.', r_egfr_g3b_2: 'Prepare for renal replacement.',
  r_egfr_g4: 'Severely Decreased', r_egfr_g4_1: 'Close nephrology follow-up.', r_egfr_g4_2: 'Discuss dialysis/transplant.',
  r_egfr_g5: 'Kidney Failure', r_egfr_g5_1: 'Initiate dialysis.', r_egfr_g5_2: 'Palliative care if appropriate.',
  egfr_info_title: 'Understanding eGFR', 
  egfr_info_p1: 'The estimated Glomerular Filtration Rate (eGFR) is the most robust overall index of renal function. The 2021 CKD-EPI Creatinine equation is currently the gold standard recommended by the National Kidney Foundation.', 
  egfr_info_p2: 'It is a mandatory calculation prior to prescribing renally excreted or nephrotoxic drugs (such as Metformin, DOACs, or certain antibiotics) to prevent dangerous drug accumulation and systemic toxicity.', 
  egfr_info_p3: 'Threshold: An eGFR of < 60 mL/min/1.73m² persisting for 3 or more months formally establishes a diagnosis of Chronic Kidney Disease (CKD).',

  // --- 10. MEWS ---
  d_mews: 'Track physiology to detect catastrophic deterioration early.', 
  f_mews_rr: 'Respiratory Rate', f_mews_hr: 'Heart Rate', f_mews_sbp: 'Systolic BP', f_mews_temp: 'Temperature', f_mews_avpu: 'Consciousness (AVPU)',
  r_mews_lo: 'Stable', r_mews_lo_1: 'Routine observations.', r_mews_lo_2: 'Continue current care plan.', r_mews_lo_d: 'No specific intervention.',
  r_mews_md: 'Increased Risk', r_mews_md_1: 'Increase observation frequency.', r_mews_md_2: 'Inform nurse in charge.', r_mews_md_3: 'Medical review within 30 mins.',
  r_mews_hi: 'Critical', r_mews_hi_1: 'Immediate medical review.', r_mews_hi_2: 'Call rapid response team.', r_mews_hi_3: 'Consider ICU transfer.',
  mews_info_title: 'Understanding MEWS', 
  mews_info_p1: 'The Modified Early Warning Score (MEWS) is a simple, physiological scoring system used universally on hospital wards to rapidly identify patients at risk of impending clinical decline, including cardiac arrest.', 
  mews_info_p2: 'By algorithmically converting routine vital signs and AVPU consciousness scores into a single aggregate number, MEWS acts as an objective "trigger" to mandate the escalation of medical care and summon rapid response teams.', 
  mews_info_p3: 'Threshold: A score of 5 or higher is statistically associated with a severely increased likelihood of ICU admission or death.',

  // --- 11. CENTOR ---
  d_centor: 'Clinical probability of Group A Streptococcal pharyngitis.', 
  f_cough_a: 'Absence of cough', f_exudates: 'Tonsillar exudates or swelling', f_lymph: 'Tender anterior cervical lymphadenopathy', f_temp38: 'Temperature > 38.0°C', f_c_age: 'Age Group',
  c_age_1: '3–14 years (+1)', c_age_2: '15–44 years (0)', c_age_3: '≥ 45 years (-1)',
  r_centor_lo: 'Strep Unlikely', r_centor_lo_1: 'Symptomatic treatment.', r_centor_lo_2: 'Antibiotics NOT recommended.',
  r_centor_md: 'Possible Strep', r_centor_md_1: 'Perform rapid strep test.', r_centor_md_2: 'Treat if test is positive.', r_centor_md_d: 'Antibiotics only if confirmed.',
  r_centor_hi: 'Strep Likely', r_centor_hi_1: 'Empiric antibiotics justified.', r_centor_hi_2: 'Consider rapid test to confirm.',
  centor_info_title: 'Understanding Centor', 
  centor_info_p1: 'The Centor Criteria (modified with age) provides a framework to evaluate patients presenting with a sore throat, estimating the likelihood of Group A beta-hemolytic Streptococcus (GAS) infection.', 
  centor_info_p2: 'Its primary utility lies in antibiotic stewardship—actively discouraging the empirical prescription of antibiotics for viral pharyngitis while identifying the small cohort of patients who genuinely require treatment to prevent complications like rheumatic fever.', 
  centor_info_p3: 'Threshold: A score of 0-1 requires no testing; a score of 2-3 warrants a Rapid Antigen Test; a score of 4-5 may justify empirical antibiotics.',

  // --- 12. NIHSS ---
  d_nihss: 'Quantify stroke severity to guide thrombolysis. Time is brain.', 
  f_nihss_score: 'Total NIHSS Score (0-42)',
  r_nihss_none: 'No Stroke Symptoms', r_nihss_none_1: 'Evaluate for TIA.', r_nihss_none_2: 'Secondary prevention.',
  r_nihss_minor: 'Minor Stroke', r_nihss_minor_1: 'Admit to stroke unit.', r_nihss_minor_2: 'Consider thrombolysis if disabling.', r_nihss_minor_3: 'Supportive care.',
  r_nihss_mod: 'Moderate Stroke', r_nihss_mod_1: 'Evaluate for thrombolysis.', r_nihss_mod_2: 'Evaluate for thrombectomy.', r_nihss_mod_3: 'Strict BP control.',
  r_nihss_modsev: 'Moderate-Severe', r_nihss_modsev_1: 'Urgent neurology consult.', r_nihss_modsev_2: 'Thrombectomy evaluation.', r_nihss_modsev_3: 'ICU/Stroke unit admission.',
  r_nihss_sev: 'Severe Stroke', r_nihss_sev_1: 'High risk of complications.', r_nihss_sev_2: 'Airway protection.', r_nihss_sev_3: 'Palliative considerations if massive.',
  nihss_info_title: 'Understanding the NIHSS', 
  nihss_info_p1: 'The National Institutes of Health Stroke Scale (NIHSS) is a highly structured, 15-item assessment tool that provides a quantitative measure of stroke-related neurologic deficit. It is the international standard for acute stroke evaluation.', 
  nihss_info_p2: 'It systematically evaluates level of consciousness, language, neglect, visual-field loss, extraocular movement, motor strength, ataxia, dysarthria, and sensory loss. It is the primary metric used to determine eligibility for IV thrombolysis and endovascular thrombectomy.', 
  nihss_info_p3: 'Threshold: A score greater than 15 indicates a severe stroke with a higher likelihood of long-term disability and poor prognosis.',

  // --- 13. SOFA ---
  d_sofa: 'Define sepsis (Sepsis-3) via sequential organ failure assessment.', 
  f_pao2: 'PaO2/FiO2', f_plt: 'Platelets', f_bili_sofa: 'Bilirubin', f_map: 'MAP or Vasopressors', f_gcs_sofa: 'GCS Score', f_cr_sofa: 'Creatinine or Urine output',
  r_sofa_lo: 'Low Mortality Risk', r_sofa_lo_1: 'Continue supportive care.', r_sofa_lo_2: 'Treat underlying infection.', r_sofa_lo_3: 'Monitor for deterioration.',
  r_sofa_md: 'Moderate Organ Failure', r_sofa_md_1: 'ICU level care indicated.', r_sofa_md_2: 'Hemodynamic support.', r_sofa_md_3: 'Consider mechanical ventilation.',
  r_sofa_hi: 'Severe Multi-Organ Failure', r_sofa_hi_1: 'Aggressive ICU management.', r_sofa_hi_2: 'Vasopressors/CRRT likely needed.', r_sofa_hi_3: 'High mortality probability.',
  sofa_info_title: 'Understanding SOFA', 
  sofa_info_p1: 'The Sequential Organ Failure Assessment (SOFA) score continuously tracks a patient\'s clinical status during an Intensive Care Unit stay to determine the extent of physiological deterioration and rate of multi-organ failure.', 
  sofa_info_p2: 'It meticulously scores respiratory, cardiovascular, hepatic, coagulation, renal, and neurological systems. Unlike older SIRS criteria, SOFA requires laboratory inputs to objectify organ dysfunction.', 
  sofa_info_p3: 'Threshold: The Sepsis-3 consensus dictates that an acute increase in the total SOFA score of ≥ 2 points defines sepsis, carrying an approximate mortality of 10%.',

  // --- 14. RANSON ---
  d_ranson: 'Predictive algorithm for acute pancreatitis mortality risk.', 
  f_age55: 'Age > 55 years', f_wbc: 'WBC > 16,000/mm³', f_glu: 'Blood Glucose > 200 mg/dL', f_ldh: 'LDH > 350 U/L', f_ast: 'AST > 250 U/L', f_hct_drop: 'Hematocrit drop > 10%', f_bun_rise: 'BUN rise > 5 mg/dL', f_ca_low: 'Serum Calcium < 8 mg/dL', f_pao2_low: 'PaO2 < 60 mmHg', f_base_def: 'Base deficit > 4 mEq/L', f_fluid_seq: 'Fluid sequestration > 6 L',
  r_ranson_lo: 'Mild Pancreatitis', r_ranson_lo_1: 'IV fluid resuscitation.', r_ranson_lo_2: 'Analgesia.', r_ranson_lo_3: 'Early oral feeding if tolerated.',
  r_ranson_md: 'Severe Pancreatitis Risk', r_ranson_md_1: 'Aggressive IV fluids.', r_ranson_md_2: 'ICU monitoring.', r_ranson_md_3: 'Enteral nutrition.', r_ranson_md_d: 'Hartmanns preferred.',
  r_ranson_hi: 'High Mortality Risk', r_ranson_hi_1: 'ICU admission mandatory.', r_ranson_hi_2: 'Monitor for necrosis/infection.', r_ranson_hi_3: 'Surgical consult.',
  ranson_info_title: 'Understanding Ranson Criteria', 
  ranson_info_p1: 'Introduced in 1974, Ranson\'s criteria comprise 11 specific clinical signs designed to objectively evaluate the severity and prognosis of acute pancreatitis.', 
  ranson_info_p2: 'Five variables are assessed immediately upon admission to identify systemic inflammation, and six additional variables are assessed at 48 hours to capture the delayed effects of third-spacing, hypocalcemia, and worsening hypoxia.', 
  ranson_info_p3: 'Threshold: A score of 3 or higher indicates severe pancreatitis, correlating with a sharp increase in mortality and necessitating aggressive fluid resuscitation.',

  // --- 15. PSI/PORT ---
  d_psi: 'Comprehensive mortality stratification for CAP.', 
  f_psi_age: 'Age (years)', f_psi_sex: 'Sex', f_psi_nh: 'Nursing home resident', f_psi_neo: 'Neoplastic disease', f_psi_liv: 'Liver disease', f_psi_chf: 'Congestive heart failure', f_psi_cvd: 'Cerebrovascular disease', f_psi_ren: 'Renal disease', f_psi_ams: 'Altered mental status', f_psi_rr: 'Respiratory rate ≥ 30/min', f_psi_sbp: 'Systolic BP < 90 mmHg', f_psi_temp: 'Temp < 35°C or ≥ 40°C', f_psi_pulse: 'Pulse ≥ 125 bpm', f_psi_ph: 'Arterial pH < 7.35', f_psi_bun: 'BUN ≥ 30 mg/dL', f_psi_na: 'Sodium < 130 mEq/L', f_psi_gluc: 'Glucose ≥ 250 mg/dL', f_psi_hct: 'Hematocrit < 30%', f_psi_pao2: 'PaO2 < 60 mmHg', f_psi_eff: 'Pleural effusion',
  r_psi_1: 'Risk Class I (Low)', r_psi_1_1: 'Outpatient care.', r_psi_1_2: 'Oral antibiotics.',
  r_psi_2: 'Risk Class II (Low)', r_psi_2_1: 'Outpatient care.', r_psi_2_2: 'Oral antibiotics.',
  r_psi_3: 'Risk Class III (Moderate)', r_psi_3_1: 'Observation unit or short stay.', r_psi_3_2: 'IV/Oral antibiotics.', r_psi_3_d: 'Switch to oral when stable.',
  r_psi_4: 'Risk Class IV (High)', r_psi_4_1: 'Inpatient admission.', r_psi_4_2: 'IV antibiotics.',
  r_psi_5: 'Risk Class V (Very High)', r_psi_5_1: 'ICU admission likely.', r_psi_5_2: 'Broad-spectrum IV antibiotics.',
  psi_info_title: 'Understanding PSI/PORT', 
  psi_info_p1: 'The Pneumonia Severity Index (PSI), also known as the PORT score, is a comprehensive and highly robust clinical prediction rule used to calculate the 30-day mortality probability for patients with community-acquired pneumonia.', 
  psi_info_p2: 'While significantly more complex than CURB-65 (requiring 20 variables including ABGs and imaging), it is considered the superior tool for identifying low-risk patients who can be safely discharged and treated as outpatients.', 
  psi_info_p3: 'Threshold: Risk Classes IV and V carry substantial mortality risks (up to 27%) and absolutely mandate inpatient admission, often to critical care units.'
},

ru:{
  // --- HOME PAGE & GENERAL UI ---
  badge: 'КЛИНИЧЕСКИЕ КАЛЬКУЛЯТОРЫ', h1a: 'Ward', h1b: 'Calc', sub: 'Доказательные медицинские калькуляторы для ежедневной практики.',
  badge_stu: 'СОЗДАНО СТУДЕНТОМ-МЕДИКОМ · ДЛЯ ВРАЧЕЙ', h1_main: 'Клинические инструменты', h1_sub: 'для обходов',
  hero_desc: '15 калькуляторов с мнемоникой на 3 языках. Быстро, надежно и удобно — всё необходимое у постели больного.',
  stat_calc: 'КАЛЬКУЛЯТОРОВ', stat_lang: 'ЯЗЫКА', stat_free: 'БЕСПЛАТНО', all_label: 'ВСЕ КАЛЬКУЛЯТОРЫ',
  search_ph: 'Поиск инструментов (напр., ШКГ, ИМТ)...', alert_msg: 'Пожалуйста, заполните все поля.', btn: 'Рассчитать',
  tab_i: 'Интерпретация', tab_a: 'План действий', tab_d: 'Лечение',
  sp_neuro: 'Неврология', sp_ped: 'Педиатрия', sp_gen: 'Общие', sp_resp: 'Пульмонология', sp_cardio: 'Кардиология', sp_gastro: 'Гастроэнтерология', sp_id: 'Инфекционные болезни',
  mnem_all: 'Мнемоника — На 3 языках', yes: 'Да', no: 'Нет', YES: 'Да', NO: 'Нет',
  
  // --- FOOTER & INFO PAGES (EXPANDED & PROFESSIONAL) ---
  ft_about: 'О нас', ft_contact: 'Контакты', ft_disc: 'Отказ', ft_terms: 'Условия', ft_privacy: 'Конфиденциальность', ft_rights: '© 2026 WardCalc. Все права защищены.',
  
  nav_about: 'О проекте WardCalc',
  about_p1: 'WardCalc — это комплексная система поддержки принятия клинических решений, разработанная Али Мухаммадом Сабиром, студентом выпускного курса Бухарского государственного медицинского института. Приложение создано для быстрого предоставления доказательных инструментов медицинским работникам и студентам по всему миру.',
  about_h2: 'Наша миссия',
  about_p2: 'В условиях неотложной медицины время и точность имеют первостепенное значение. Наша миссия — оцифровать признанные международные шкалы в интуитивно понятный интерфейс. Снижая когнитивную нагрузку, WardCalc помогает врачам принимать более безопасные и стандартизированные терапевтические решения.',
  about_h3: 'Образовательная цель',
  about_p3: 'Хотя все алгоритмы WardCalc строго основаны на рецензируемых медицинских руководствах, приложение предназначено исключительно для образовательных и справочных целей. Оно должно помогать, а не заменять клиническое мышление и протоколы учреждений.',
  
  nav_contact: 'Свяжитесь с нами', 
  contact_p1: 'Мы стремимся к постоянному улучшению. Если у вас есть клинические отзывы, предложения по функциям или вы столкнулись с технической проблемой, пожалуйста, свяжитесь с нашей командой разработчиков.',
  contact_p2: 'Для технической поддержки, предложений о сотрудничестве или академических вопросов напишите нам напрямую или оставьте сообщение в нашем репозитории GitHub. Мы регулярно проверяем отзывы коллег.',
  
  nav_disc: 'Отказ от ответственности', 
  disc_p1: 'Информация, предоставляемая WardCalc, предназначена исключительно для образовательных и информационных целей. Она не является профессиональной медицинской консультацией, диагнозом или официальным руководством к лечению.',
  disc_p2: 'Медицинские работники обязаны полагаться на собственное независимое клиническое суждение. WardCalc и его создатель, Али Мухаммад Сабир, не несут никакой ответственности за клинические решения, принятые на основе вычислений этого приложения.',
  
  nav_terms: 'Условия использования', 
  terms_p1: 'Используя WardCalc, вы соглашаетесь с настоящими Условиями. Эта платформа предоставляется «как есть» и «по мере доступности» без каких-либо явных или подразумеваемых гарантий.',
  terms_p2: 'Пользователи несут полную ответственность за проверку точности всех расчетов перед их применением в реальной клинической практике. Права на интеллектуальную собственность интерфейса и кода принадлежат создателю.',
  
  nav_privacy: 'Политика конфиденциальности', 
  privacy_p1: 'Безопасность данных и врачебная тайна являются основой нашей архитектуры. WardCalc работает полностью на стороне клиента, что означает, что все вычисления выполняются локально в вашем браузере.',
  privacy_p2: 'Мы не собираем, не передаем и не храним защищенную медицинскую информацию (PHI) или личные данные пациентов. Ваши языковые настройки сохраняются локально на вашем устройстве без внешнего отслеживания.',

  // --- SEVERITY TAGS ---
  sev_lo: 'НИЗКИЙ РИСК', sev_md: 'СРЕДНИЙ РИСК', sev_hi: 'ВЫСОКИЙ РИСК',

  // --- 1. GCS ---
  d_gcs: 'Базовая оценка уровня сознания. Первый показатель при травмах.',
  f_eye:'Открывание глаз', f_verbal:'Речевой ответ', f_motor:'Двигательный ответ',
  g_e4: 'Самопроизвольно (4)', g_e3: 'На голос (3)', g_e2: 'На боль (2)', g_e1: 'Нет (1)',
  g_v5: 'Ориентирован (5)', g_v4: 'Спутанная (4)', g_v3: 'Слова (3)', g_v2: 'Звуки (2)', g_v1: 'Нет (1)',
  g_m6: 'Выполняет (6)', g_m5: 'Локализует (5)', g_m4: 'Отдёргивание (4)', g_m3: 'Сгибание (3)', g_m2: 'Разгибание (2)', g_m1: 'Нет (1)',
  r_gcs_mild:'Легкая ЧМТ', r_gcs_mild_1:'Полный неврологический осмотр.', r_gcs_mild_2:'Наблюдение каждые 30–60 мин.', r_gcs_mild_3:'КТ головы при ухудшении.',
  r_gcs_mod:'Умеренная ЧМТ', r_gcs_mod_1:'⚠ Срочная КТ головы.', r_gcs_mod_2:'Консультация нейрохирурга.', r_gcs_mod_3:'Голова приподнята на 30°.', r_gcs_mod_4:'Оценка ШКГ каждые 15 мин.',
  r_gcs_sev:'Тяжёлая ЧМТ', r_gcs_sev_1:'⚠ ШКГ ≤ 8 = порог интубации.', r_gcs_sev_2:'БСИ (интубация).', r_gcs_sev_3:'Срочная КТ головы + позвоночника.', r_gcs_sev_4:'Госпитализация в ОРИТ.',
  gcs_info_title: 'Понимание шкалы Глазго (ШКГ)', 
  gcs_info_p1: 'Шкала комы Глазго — это общепринятая клиническая шкала, используемая для надежного и объективного измерения уровня сознания пациента после острой травмы мозга или заболевания.', 
  gcs_info_p3: 'Пациент в ясном сознании набирает 15 баллов, а пациент в коме — минимум 3. Важно применять болевой стимул центрально и всегда фиксировать лучший полученный ответ.', 
  gcs_info_p4: 'Двигательный компонент является наиболее важным прогностическим фактором для общего исхода.', 
  gcs_info_p2: 'Клинический порог: Оценка 8 баллов или ниже указывает на неспособность защитить дыхательные пути и требует немедленной интубации.',

  // --- 2. APGAR ---
  d_apgar: 'Оценка новорожденного на 1 и 5 минутах. Руководство по реанимации.',
  f_appear: 'Цвет кожи', f_pulse: 'Пульс', f_grimace: 'Гримаса', f_activity: 'Тонус', f_resp_a: 'Дыхание',
  a_a2: 'Розовый (2)', a_a1: 'Акроцианоз (1)', a_a0: 'Бледный (0)',
  a_p2: '≥ 100 уд/мин (2)', a_p1: '< 100 уд/мин (1)', a_p0: 'Нет (0)',
  a_g2: 'Крик (2)', a_g1: 'Гримаса (1)', a_g0: 'Нет (0)',
  a_c2: 'Активный (2)', a_c1: 'Слабое сгибание (1)', a_c0: 'Вялый (0)',
  a_r2: 'Громкий крик (2)', a_r1: 'Слабое (1)', a_r0: 'Нет (0)',
  r_apgar_norm: 'Норма', r_apgar_norm_1: 'Стандартный уход.', r_apgar_norm_2: 'Обсушить, согреть.', r_apgar_norm_3: 'Передать матери.',
  r_apgar_mod: 'Умеренная асфиксия', r_apgar_mod_1: 'Стимуляция.', r_apgar_mod_2: 'Кислород.', r_apgar_mod_3: 'Рассмотреть CPAP.', r_apgar_mod_4: 'Оценка каждую минуту.',
  r_apgar_crit: 'Тяжелая асфиксия', r_apgar_crit_1: 'Немедленная реанимация.', r_apgar_crit_2: 'ИВЛ.', r_apgar_crit_3: 'Массаж сердца при ЧСС < 60.', r_apgar_crit_4: 'Подготовка к интубации.',
  apgar_info_title: 'Понимание шкалы Апгар', 
  apgar_info_p1: 'Разработанная доктором Вирджинией Апгар в 1952 году, эта система обеспечивает стандартизированный, быстрый метод оценки клинического статуса новорожденного.', 
  apgar_info_p2: 'Оценка на 1-й минуте показывает, как ребенок перенес роды, а на 5-й минуте — как он адаптируется к новой среде. 7-10 баллов считаются нормой.', 
  apgar_info_p3: 'Клинический порог: Оценка ≤ 3 на 5-й минуте коррелирует с риском неврологических повреждений и требует агрессивной реанимации.',

  // --- 3. BMI ---
  d_bmi: 'Индекс массы тела с пороговыми значениями по классификации ВОЗ.', 
  f_weight: 'Вес (кг)', f_height: 'Рост (см)',
  r_bmi_under: 'Дефицит массы', r_bmi_under_1: 'Оценить питание.', r_bmi_under_2: 'Консультация диетолога.',
  r_bmi_norm: 'Нормальный вес', r_bmi_norm_1: 'Здоровый образ жизни.', r_bmi_norm_d: 'Без медикаментов',
  r_bmi_over: 'Избыточный вес', r_bmi_over_1: 'Диета и спорт.', r_bmi_over_2: 'Скрининг метаболического синдрома.', r_bmi_over_d: 'Оптимизация образа жизни',
  r_bmi_ob1: 'Ожирение I', r_bmi_ob1_1: 'Изменение образа жизни.', r_bmi_ob1_2: 'Рассмотреть фармакотерапию.',
  r_bmi_ob2: 'Ожирение II/III', r_bmi_ob2_1: 'Высокий риск ССЗ.', r_bmi_ob2_2: 'Бариатрическая хирургия.',
  bmi_info_title: 'Понимание ИМТ', 
  bmi_info_p1: 'Индекс массы тела (ИМТ) — это простой показатель соотношения веса и роста, который используется для классификации ожирения у взрослых.', 
  bmi_info_p2: 'Врачи должны учитывать, что ИМТ не измеряет напрямую процент жира в организме. Он может ошибочно классифицировать людей с развитой мускулатурой как имеющих избыточный вес.',

  // --- 4. CURB-65 ---
  d_curb65: 'Стратификация риска смертности при пневмонии (ВП).', 
  f_confusion: 'Спутанность сознания', f_urea: 'Мочевина крови > 7 ммоль/л', f_rr30: 'ЧДД ≥ 30/мин', f_bp_low: 'АД сист < 90 или диаст ≤ 60', f_age65: 'Возраст ≥ 65 лет',
  r_curb_lo: 'Низкий риск', r_curb_lo_1: 'Амбулаторное лечение.', r_curb_lo_2: 'Пероральные антибиотики.', r_curb_lo_3: 'Инструкции для пациента.',
  r_curb_md: 'Средний риск', r_curb_md_1: 'Рассмотреть госпитализацию.', r_curb_md_2: 'Краткосрочное наблюдение.', r_curb_md_3: 'Антибиотики в/в или внутрь.',
  r_curb_hi: 'Высокий риск', r_curb_hi_1: 'Срочная госпитализация.', r_curb_hi_2: 'Рассмотреть ОРИТ.', r_curb_hi_3: 'В/в антибиотики.',
  curb_info_title: 'Понимание CURB-65', 
  curb_info_p1: 'CURB-65 — это валидированная клиническая шкала Британского торакального общества. Она использует пять переменных для расчета 30-дневного риска смертности при внебольничной пневмонии.', 
  curb_info_p2: 'Оценка определяет путь сортировки: от выявления пациентов, которым безопасно амбулаторное лечение, до тех, кому требуется госпитализация в ОРИТ.', 
  curb_info_p3: 'Клинический порог: Оценка 3 или выше несет риск смертности около 14%, требуя срочной госпитализации.',

  // --- 5. WELLS DVT ---
  d_dvt: 'Оценка вероятности Тромбоза Глубоких Вен.', 
  f_cancer: 'Активный рак', f_paralysis: 'Паралич, парез или иммобилизация ног', f_bedridden: 'Постельный режим > 3 дней или хирургия', f_tenderness: 'Болезненность по ходу глубоких вен', f_swelling_entire: 'Отек всей ноги', f_swelling_calf: 'Отек голени > 3 см', f_pitting: 'Ямкообразующий отек', f_collateral: 'Коллатеральные поверхностные вены', f_alt_dx: 'Альтернативный диагноз более вероятен (-2)',
  r_dvt_hi: 'ТГВ вероятен', r_dvt_hi_1: 'Срочное УЗИ вен.', r_dvt_hi_2: 'D-димер при (-).', r_dvt_hi_3: 'Эмпирические антикоагулянты.',
  r_dvt_md: 'Средний риск', r_dvt_md_1: 'Тест на D-димер.', r_dvt_md_2: 'При (+) — УЗИ.', r_dvt_md_d: 'Только при подтверждении.',
  r_dvt_lo: 'ТГВ маловероятен', r_dvt_lo_1: 'Тест на D-димер.', r_dvt_lo_2: 'При (-) ТГВ исключен.', r_dvt_lo_d: 'Не показано.',
  dvt_info_title: 'Понимание Критериев Уэллса (ТГВ)', 
  dvt_info_p1: 'Критерии Уэллса безопасно и объективно делят пациентов на группы риска, стандартизируя диагностический подход при подозрении на ТГВ.', 
  dvt_info_p2: 'Шкала предотвращает ненужное УЗИ в популяциях низкого риска за счет использования D-димера как метода исключения.', 
  dvt_info_p3: 'Порог: Оценка ≥ 2 означает, что ТГВ вероятен, и одного D-димера недостаточно — требуется УЗИ.',

  // --- 6. WELLS PE ---
  d_pe: 'Расчет вероятности ТЭЛА перед назначением КТ.', 
  f_pe_dvt: 'Клинические признаки ТГВ', f_pe_alt: 'Альтернативный диагноз менее вероятен, чем ТЭЛА', f_pe_hr: 'ЧСС > 100 в мин', f_pe_immob: 'Иммобилизация (> 3 дней) или операция', f_pe_hx: 'ТЭЛА или ТГВ в анамнезе', f_pe_hemop: 'Кровохарканье', f_pe_malig: 'Онкология (лечение в течение 6 мес)',
  r_pe_hi: 'ТЭЛА вероятна', r_pe_hi_1: 'Срочная КТ-АГ.', r_pe_hi_2: 'Антикоагулянты.', r_pe_hi_3: 'Госпитализация.',
  r_pe_md: 'Средний риск', r_pe_md_1: 'D-димер.', r_pe_md_2: 'При (+) — КТ-АГ.', r_pe_lo_d: 'Не показано.',
  r_pe_lo: 'ТЭЛА маловероятна', r_pe_lo_1: 'Критерии PERC или D-димер.', r_pe_lo_2: 'ТЭЛА исключена.',
  pe_info_title: 'Понимание Критериев Уэллса (ТЭЛА)', 
  pe_info_p1: 'Шкала Уэллса для ТЭЛА предоставляет структурированную систему оценки вероятности, напрямую диктующую, следует ли проводить анализ на D-димер или сразу КТ-ангиографию (КТ-АГ).', 
  pe_info_p2: 'Применение этого правила значительно снижает радиационную нагрузку и риск нефропатии от контраста у пациентов низкого риска.', 
  pe_info_p3: 'Порог: Оценка > 4 означает высокую вероятность ТЭЛА; отрицательный D-димер не исключает диагноз.',

  // --- 7. CHADS2 ---
  d_chads2: 'Стратификация риска инсульта при фибрилляции предсердий.', 
  f_chf: 'Сердечная недостаточность', f_htn: 'Гипертензия', f_age75: 'Возраст ≥ 75 лет', f_dm: 'Сахарный диабет', f_stroke: 'Инсульт/ТИА в анамнезе',
  r_chads_lo: 'Низкий риск', r_chads_lo_1: 'Антикоагулянты не нужны.', r_chads_lo_2: 'Оценка факторов.',
  r_chads_md: 'Средний риск', r_chads_md_1: 'Рассмотреть антикоагулянты.', r_chads_md_2: 'Оценить риск кровотечения.',
  r_chads_hi: 'Высокий риск', r_chads_hi_1: 'Показаны антикоагулянты.', r_chads_hi_2: 'НОАК предпочтительнее.', r_chads_hi_3: 'Контроль.',
  chads_info_title: 'Понимание шкалы CHADS2', 
  chads_info_p1: 'CHADS2 используется для оценки годового риска ишемического инсульта у пациентов с неклапанной фибрилляцией предсердий.', 
  chads_info_p2: 'Шкала балансирует риск тромбоэмболии с риском кровотечений при назначении антикоагулянтов (НОАК или Варфарин).', 
  chads_info_p3: 'Порог: Оценка 2 или выше означает высокий риск (≥ 4.0% в год), что является показанием для антикоагулянтной терапии.',

  // --- 8. CHILD-PUGH ---
  d_cp: 'Прогностическая классификация тяжести цирроза.', 
  f_bili: 'Билирубин (мкмоль/л)', f_alb: 'Альбумин (г/л)', f_pt: 'Удлинение ПВ / МНО', f_ascites: 'Асцит', f_enceph: 'Энцефалопатия', 
  cp_b1: '< 34', cp_b2: '34–50', cp_b3: '> 50',
  cp_a1: '> 35', cp_a2: '28–35', cp_a3: '< 28',
  cp_p1: '< 4с / МНО < 1.7', cp_p2: '4–6с / 1.7–2.3', cp_p3: '> 6с / МНО > 2.3',
  cp_as2: 'Легкий / Умеренный', cp_as3: 'Тяжелый / Рефрактерный',
  cp_e2: 'Степень I–II', cp_e3: 'Степень III–IV',
  r_cp_a: 'Легкое нарушение', r_cp_a_1: 'Хороший прогноз.', r_cp_a_2: 'Выживаемость ~100%.',
  r_cp_b: 'Умеренное', r_cp_b_1: 'Средний риск.', r_cp_b_2: 'Рассмотреть трансплантацию.',
  r_cp_c: 'Тяжелое', r_cp_c_1: 'Высокая смертность.', r_cp_c_2: 'Показана трансплантация.',
  cp_info_title: 'Понимание шкалы Чайлд-Пью', 
  cp_info_p1: 'Оценка Чайлд-Пью — это система оценки прогноза хронических заболеваний печени. Она сочетает объективные лабораторные показатели с клинической оценкой.', 
  cp_info_p2: 'Она обеспечивает надежную оценку выживаемости, что важно для определения риска перед хирургическим вмешательством и корректировки доз лекарств.', 
  cp_info_p3: 'Порог: Класс С (10-15 баллов) означает декомпенсацию с плохим прогнозом, требующую оценки для трансплантации.',

  // --- 9. EGFR ---
  d_egfr: 'Скорость клубочковой фильтрации (CKD-EPI 2021).', 
  f_cr: 'Креатинин', f_age: 'Возраст', f_sex: 'Пол', sex_m: 'Мужской', sex_f: 'Женский',
  r_egfr_g1: 'Норма', r_egfr_g1_1: 'Наблюдение.', r_egfr_g1_2: 'Лечение сопутствующих.',
  r_egfr_g2: 'Легкое снижение', r_egfr_g2_1: 'Оценка прогрессирования.', r_egfr_g2_2: 'Контроль ССЗ.',
  r_egfr_g3a: 'Умеренное', r_egfr_g3a_1: 'Лечение осложнений.', r_egfr_g3a_2: 'Коррекция доз лекарств.',
  r_egfr_g3b: 'Выраженное', r_egfr_g3b_1: 'Консультация нефролога.', r_egfr_g3b_2: 'Подготовка к ЗПТ.',
  r_egfr_g4: 'Тяжелое', r_egfr_g4_1: 'Строгое наблюдение.', r_egfr_g4_2: 'Диализ/трансплантация.',
  r_egfr_g5: 'Терминальная ХБП', r_egfr_g5_1: 'Диализ.', r_egfr_g5_2: 'Паллиатив.',
  egfr_info_title: 'Понимание рСКФ (CKD-EPI)', 
  egfr_info_p1: 'Расчетная скорость клубочковой фильтрации (рСКФ) — наиболее надежный показатель функции почек. Формула CKD-EPI 2021 рекомендована Национальным почечным фондом.', 
  egfr_info_p2: 'Обязательна перед назначением нефротоксичных препаратов (Метформин, НОАК, антибиотики) для предотвращения их кумуляции.', 
  egfr_info_p3: 'Порог: рСКФ < 60 мл/мин, сохраняющаяся ≥ 3 месяцев, устанавливает диагноз Хронической Болезни Почек (ХБП).',

  // --- 10. MEWS ---
  d_mews: 'Выявление риска катастрофического клинического ухудшения.', 
  f_mews_rr: 'ЧДД', f_mews_hr: 'ЧСС', f_mews_sbp: 'Систолическое АД', f_mews_temp: 'Температура', f_mews_avpu: 'Сознание (AVPU)',
  r_mews_lo: 'Стабилен', r_mews_lo_1: 'Обычное наблюдение.', r_mews_lo_2: 'Текущий план.', r_mews_lo_d: 'Не требуется.',
  r_mews_md: 'Риск', r_mews_md_1: 'Участить осмотры.', r_mews_md_2: 'Сообщить врачу.', r_mews_md_3: 'Осмотр в течение 30 мин.',
  r_mews_hi: 'Критическое', r_mews_hi_1: 'Срочный осмотр.', r_mews_hi_2: 'Реанимационная бригада.', r_mews_hi_3: 'Перевод в ОРИТ.',
  mews_info_title: 'Понимание шкалы MEWS', 
  mews_info_p1: 'Модифицированная шкала раннего предупреждения (MEWS) — это физиологическая система, используемая в стационарах для быстрого выявления пациентов с риском остановки сердца или ухудшения.', 
  mews_info_p2: 'Преобразуя рутинные жизненные показатели в единое число, MEWS действует как объективный "триггер" для вызова реанимационной бригады.', 
  mews_info_p3: 'Порог: Оценка 5 баллов или выше статистически связана с высокой вероятностью перевода в ОРИТ или смерти.',

  // --- 11. CENTOR ---
  d_centor: 'Клиническая вероятность стрептококкового фарингита.', 
  f_cough_a: 'Отсутствие кашля', f_exudates: 'Экссудат миндалин', f_lymph: 'Болезненность лимфоузлов', f_temp38: 'Температура > 38.0°C', f_c_age: 'Возраст',
  c_age_1: '3–14 лет (+1)', c_age_2: '15–44 лет (0)', c_age_3: '≥ 45 лет (-1)',
  r_centor_lo: 'Стрептококк маловероятен', r_centor_lo_1: 'Симптоматическое лечение.', r_centor_lo_2: 'Антибиотики НЕ нужны.',
  r_centor_md: 'Возможен стрептококк', r_centor_md_1: 'Экспресс-тест.', r_centor_md_2: 'Лечить при (+).', r_centor_md_d: 'Только при подтверждении.',
  r_centor_hi: 'Стрептококк вероятен', r_centor_hi_1: 'Эмпирические антибиотики.', r_centor_hi_2: 'Подтвердить тестом.',
  centor_info_title: 'Понимание Критериев Центора', 
  centor_info_p1: 'Модифицированные критерии Центора оценивают вероятность инфекции бета-гемолитическим стрептококком группы А (БГСА) при боли в горле.', 
  centor_info_p2: 'Шкала важна для контроля за антибиотиками, предотвращая их назначение при вирусном фарингите.', 
  centor_info_p3: 'Порог: 0-1 балл не требует тестов; 2-3 балла — показан экспресс-тест; 4-5 баллов — возможно эмпирическое лечение антибиотиками.',

  // --- 12. NIHSS ---
  d_nihss: 'Количественная оценка дефицита при остром инсульте.', 
  f_nihss_score: 'Балл по NIHSS (0-42)',
  r_nihss_none: 'Нет инсульта', r_nihss_none_1: 'Оценка ТИА.', r_nihss_none_2: 'Профилактика.',
  r_nihss_minor: 'Легкий', r_nihss_minor_1: 'Инсультное отделение.', r_nihss_minor_2: 'Тромболизис при инвалидизации.', r_nihss_minor_3: 'Уход.',
  r_nihss_mod: 'Средний', r_nihss_mod_1: 'Тромболизис.', r_nihss_mod_2: 'Тромбэктомия.', r_nihss_mod_3: 'Контроль АД.',
  r_nihss_modsev: 'Тяжелый', r_nihss_modsev_1: 'Срочно невролог.', r_nihss_modsev_2: 'Тромбэктомия.', r_nihss_modsev_3: 'ОРИТ.',
  r_nihss_sev: 'Крайне тяжелый', r_nihss_sev_1: 'Высокий риск.', r_nihss_sev_2: 'Защита ВДП.', r_nihss_sev_3: 'Паллиатив.',
  nihss_info_title: 'Понимание шкалы NIHSS', 
  nihss_info_p1: 'Национальная шкала инсульта NIH — это инструмент из 15 пунктов, количественно измеряющий неврологический дефицит. Это мировой стандарт для острой оценки.', 
  nihss_info_p2: 'Она систематически оценивает сознание, речь, зрение, движение и чувствительность. Это основной показатель для решения вопроса о тромболизисе и тромбэктомии.', 
  nihss_info_p3: 'Порог: Оценка более 15 указывает на тяжелый инсульт с высокой вероятностью инвалидизации.',

  // --- 13. SOFA ---
  d_sofa: 'Оценка органной дисфункции (определение Sepsis-3).', 
  f_pao2: 'PaO2/FiO2', f_plt: 'Тромбоциты', f_bili_sofa: 'Билирубин', f_map: 'САД или Вазопрессоры', f_gcs_sofa: 'ШКГ', f_cr_sofa: 'Креатинин или Диурез',
  r_sofa_lo: 'Низкий риск', r_sofa_lo_1: 'Уход.', r_sofa_lo_2: 'Лечение инфекции.', r_sofa_lo_3: 'Мониторинг.',
  r_sofa_md: 'Органная дисфункция', r_sofa_md_1: 'Уровень ОРИТ.', r_sofa_md_2: 'Поддержка.', r_sofa_md_3: 'ИВЛ.',
  r_sofa_hi: 'ПОН', r_sofa_hi_1: 'Агрессивное лечение.', r_sofa_hi_2: 'Вазопрессоры.', r_sofa_hi_3: 'Высокая смертность.',
  sofa_info_title: 'Понимание шкалы SOFA', 
  sofa_info_p1: 'Шкала SOFA отслеживает клинический статус пациента в ОРИТ для определения степени физиологического ухудшения и полиорганной недостаточности.', 
  sofa_info_p2: 'Она тщательно оценивает 6 систем: дыхательную, ССС, печень, коагуляцию, почки и ЦНС, используя точные лабораторные данные.', 
  sofa_info_p3: 'Порог: Консенсус Sepsis-3 постановляет, что острое повышение суммы баллов SOFA на ≥ 2 определяет сепсис (смертность около 10%).',

  // --- 14. RANSON ---
  d_ranson: 'Прогноз риска смертности при остром панкреатите.', 
  f_age55: 'Возраст > 55 лет', f_wbc: 'Лейкоциты > 16 тыс.', f_glu: 'Глюкоза > 11 ммоль/л', f_ldh: 'ЛДГ > 350', f_ast: 'АСТ > 250', f_hct_drop: 'Падение гематокрита > 10%', f_bun_rise: 'Рост мочевины > 1.8 ммоль/л', f_ca_low: 'Кальций < 2 ммоль/л', f_pao2_low: 'PaO2 < 60', f_base_def: 'Дефицит оснований > 4', f_fluid_seq: 'Секвестрация жидкости > 6 л',
  r_ranson_lo: 'Легкий', r_ranson_lo_1: 'Инфузии.', r_ranson_lo_2: 'Анальгезия.', r_ranson_lo_3: 'Питание.',
  r_ranson_md: 'Риск тяжелого', r_ranson_md_1: 'Агрессивные инфузии.', r_ranson_md_2: 'ОРИТ.', r_ranson_md_3: 'Зонд.', r_ranson_md_d: 'Раствор Хартмана.',
  r_ranson_hi: 'Высокий риск', r_ranson_hi_1: 'ОРИТ обязательно.', r_ranson_hi_2: 'Контроль некроза.', r_ranson_hi_3: 'Хирург.',
  ranson_info_title: 'Понимание Критериев Рэнсона', 
  ranson_info_p1: 'Критерии Рэнсона (1974 г.) состоят из 11 клинических признаков для объективной оценки тяжести и прогноза острого панкреатита.', 
  ranson_info_p2: 'Пять переменных оцениваются при поступлении, а еще шесть — через 48 часов, чтобы зафиксировать отсроченные эффекты гипокальциемии и гипоксии.', 
  ranson_info_p3: 'Порог: Оценка 3 и выше указывает на тяжелый панкреатит с резким ростом смертности и требует агрессивной инфузионной терапии.',

  // --- 15. PSI/PORT ---
  d_psi: 'Комплексная стратификация смертности при пневмонии.', 
  f_psi_age: 'Возраст (лет)', f_psi_sex: 'Пол', f_psi_nh: 'Житель дома престарелых', f_psi_neo: 'Онкология', f_psi_liv: 'Заболевание печени', f_psi_chf: 'Сердечная недостаточность', f_psi_cvd: 'Цереброваскулярная болезнь', f_psi_ren: 'Болезнь почек', f_psi_ams: 'Спутанность сознания', f_psi_rr: 'ЧДД ≥ 30', f_psi_sbp: 'Сист. АД < 90', f_psi_temp: 'Темп < 35°C или ≥ 40°C', f_psi_pulse: 'Пульс ≥ 125', f_psi_ph: 'pH < 7.35', f_psi_bun: 'Мочевина ≥ 10.7 ммоль/л', f_psi_na: 'Натрий < 130', f_psi_gluc: 'Глюкоза ≥ 13.9 ммоль/л', f_psi_hct: 'Гематокрит < 30%', f_psi_pao2: 'PaO2 < 60', f_psi_eff: 'Плевральный выпот',
  r_psi_1: 'Класс I', r_psi_1_1: 'Амбулаторно.', r_psi_1_2: 'Внутрь АБ.',
  r_psi_2: 'Класс II', r_psi_2_1: 'Амбулаторно.', r_psi_2_2: 'Внутрь АБ.',
  r_psi_3: 'Класс III', r_psi_3_1: 'Краткосрочно.', r_psi_3_2: 'В/в АБ.', r_psi_3_d: 'Переход на внутрь.',
  r_psi_4: 'Класс IV', r_psi_4_1: 'Госпитализация.', r_psi_4_2: 'В/в АБ.',
  r_psi_5: 'Класс V', r_psi_5_1: 'ОРИТ.', r_psi_5_2: 'Широкого спектра.',
  psi_info_title: 'Понимание шкалы PSI/PORT', 
  psi_info_p1: 'Индекс тяжести пневмонии (PSI) — это комплексное клиническое правило для расчета 30-дневной вероятности смерти у пациентов с ВП.', 
  psi_info_p2: 'Хотя шкала сложнее CURB-65 (требует 20 переменных, включая газы крови), она считается лучшим инструментом для выявления пациентов низкого риска, которых можно безопасно выписать.', 
  psi_info_p3: 'Порог: Классы риска IV и V несут существенный риск смертности и абсолютно требуют госпитализации, часто в отделение реанимации.'
},

uz:{
  // --- HOME PAGE & GENERAL UI ---
  badge: 'KLINIK QAROR QABUL QILISH VOSITALARI', h1a: 'Ward', h1b: 'Calc', sub: 'Kundalik amaliyot uchun isbotlarga asoslangan tibbiy kalkulyatorlar.',
  badge_stu: 'TIBBIYOT TALABASI TOMONIDAN · SHIFOKORLAR UCHUN YARATILGAN', h1_main: 'Klinik vositalar', h1_sub: 'palata aylanmalari uchun',
  hero_desc: '3 tilda mnemonikaga ega 15 ta kalkulyator. Tez, ishonchli va qulay — bemor yotog\'i yonida kerak bo\'lgan hamma narsa.',
  stat_calc: 'KALKULYATOR', stat_lang: 'TIL', stat_free: 'BEPUL', all_label: 'BARCHA KALKULYATORLAR',
  search_ph: 'Qidiruv (masalan, GCS, BMI)...', alert_msg: 'Barcha maydonlarni to\'ldiring.', btn: 'Hisoblash',
  tab_i: 'Talqin', tab_a: 'Harakat Rejasi', tab_d: 'Birinchi Davolash',
  sp_neuro: 'Nevrologiya', sp_ped: 'Pediatriya', sp_gen: 'Umumiy', sp_resp: 'Nafas tizimi', sp_cardio: 'Kardiologiya', sp_gastro: 'Gastroenterologiya', sp_id: 'Yuqumli kasalliklar',
  mnem_all: 'Mnemonika — 3 tilda', yes: 'Ha', no: 'Yo\'q', YES: 'Ha', NO: 'Yo\'q',
  
  // --- FOOTER & INFO PAGES (EXPANDED & PROFESSIONAL) ---
  ft_about: 'Biz haqimizda', ft_contact: 'Aloqa', ft_disc: 'Rad etish', ft_terms: 'Shartlar', ft_privacy: 'Maxfiylik', ft_rights: '© 2026 WardCalc. Barcha huquqlar himoyalangan.',
  
  nav_about: 'WardCalc haqida',
  about_p1: 'WardCalc - bu Buxoro davlat tibbiyot instituti bitiruvchi talabasi  Muhammad Sabir Ali tomonidan ishlab chiqilgan kompleks klinik qarorlarni qabul qilishni qo\'llab-quvvatlash tizimi. Murakkab tibbiy adabiyotlar va tezkor palata amaliyoti o\'rtasidagi tafovutni ko\'prik qilish uchun mo\'ljallangan ushbu dastur tibbiyot xodimlariga tezkor, dalillarga asoslangan hisoblash vositalarini taqdim etadi.',
  about_h2: 'Bizning maqsadimiz',
  about_p2: 'Shoshilinch tibbiy sharoitlarda vaqt va aniqlik birinchi o\'rinda turadi. Bizning vazifamiz xalqaro miqyosda tasdiqlangan tibbiy ball tizimlarini intuitiv, mobil qurilmalarga mos interfeysga aylantirishdir. Kognitiv yukni kamaytirish orqali WardCalc shifokorlarga xavfsizroq va standartlashtirilgan qarorlar qabul qilish imkonini beradi.',
  about_h3: 'Ta\'lim maqsadi',
  about_p3: 'WardCalc doirasidagi barcha algoritmlar va mantiqiy modellar qat\'iy ravishda tan olingan tibbiy ko\'rsatmalarga asoslangan bo\'lsa-da, dastur ta\'lim va ma\'lumot vositasi sifatida belgilangan. U rasmiy klinik xulosa va muassasa protokollarini almashtirish uchun emas, balki yordam berish uchun mo\'ljallangan.',
  
  nav_contact: 'Biz bilan aloqa', 
  contact_p1: 'Biz dasturni doimiy takomillashtirish tarafdorimiz. Agar sizda klinik mulohazalar, yangi xususiyatlar bo\'yicha takliflar bo\'lsa yoki texnik muammoga duch kelsangiz, jamoamiz bilan bog\'laning.',
  contact_p2: 'Qo\'llab-quvvatlash, hamkorlik yoki akademik savollar uchun bizga to\'g\'ridan-to\'g\'ri elektron pochta orqali yozing yoki GitHub orqali xabar qoldiring. Biz klinik aniqlikni ta\'minlash uchun mutaxassislar fikrini muntazam o\'rganamiz.',
  
  nav_disc: 'Rad etish', 
  disc_p1: 'WardCalc tomonidan taqdim etilgan ma\'lumotlar faqat ta\'lim va ma\'lumot olish maqsadida. U kasbiy tibbiy maslahat, tashxis yoki davolash bo\'yicha rasmiy ko\'rsatma o\'rnini bosmaydi.',
  disc_p2: 'Tibbiyot xodimlari o\'zlarining mustaqil klinik xulosalariga tayanishlari shart. WardCalc va uning yaratuvchisi Muhammad Sabir Ali ushbu dastur natijalariga asoslangan holda qabul qilingan qarorlar uchun hech qanday javobgarlikni o\'z zimmasiga olmaydi. Har doim birlamchi adabiyotlar va muassasa protokollariga murojaat qiling.',
  
  nav_terms: 'Foydalanish shartlari', 
  terms_p1: 'WardCalc-ga kirish va undan foydalanish orqali siz ushbu shartlarga rozilik bildirasiz. Ushbu platforma hech qanday kafolatsiz "boricha" taqdim etiladi.',
  terms_p2: 'Foydalanuvchilar hisob-kitoblar aniqligini bemorni parvarish qilish stsenariylariga qo\'llashdan oldin tekshirish uchun to\'liq javobgardir. Interfeys va kod uchun intellektual mulk huquqlari yaratuvchiga tegishli.',
  
  nav_privacy: 'Maxfiylik siyosati', 
  privacy_p1: 'Ma\'lumotlar xavfsizligi va bemor maxfiyligi bizning arxitekturamizning ajralmas qismidir. WardCalc to\'liq mijoz tomonida (brauzeringizda) ishlaydi, ya\'ni barcha hisob-kitoblar lokal ravishda amalga oshiriladi.',
  privacy_p2: 'Biz hech qanday shaxsiy sog\'liqni saqlash ma\'lumotlarini (PHI) yoki bemorni identifikatsiya qiluvchi ma\'lumotlarni yig\'maymiz, uzatmaymiz va saqlamaymiz. Sizning til afzalliklaringiz tashqi kuzatuvsiz qurilmangizda lokal tarzda saqlanadi.',

  // --- SEVERITY TAGS ---
  sev_lo: 'PAST XAVF', sev_md: 'O\'RTACHA XAVF', sev_hi: 'YUQORI XAVF',

  // --- 1. GCS ---
  d_gcs: 'Ong darajasini baholash. Jarohatda eng birinchi talab qilinadigan ko\'rsatkich.',
  f_eye:"Ko'z ochilishi", f_verbal:"Og'zaki javob", f_motor:'Harakat javobi',
  g_e4: 'O\'z-o\'zidan (4)', g_e3: 'Ovozga (3)', g_e2: 'Og\'riqqa (2)', g_e1: 'Yo\'q (1)',
  g_v5: 'Mo\'ljallangan (5)', g_v4: 'Chalkash (4)', g_v3: 'So\'zlar (3)', g_v2: 'Tovushlar (2)', g_v1: 'Yo\'q (1)',
  g_m6: 'Bajaradi (6)', g_m5: 'Lokalizatsiya (5)', g_m4: 'Tortib olish (4)', g_m3: 'Bukilish (3)', g_m2: 'Yozilish (2)', g_m1: 'Yo\'q (1)',
  r_gcs_mild:"Yengil jarohat", r_gcs_mild_1:"To'liq nevrologik tekshiruv.", r_gcs_mild_2:"Har 30–60 daqiqada kuzatuv.", r_gcs_mild_3:"Yomonlashsa bosh KT.",
  r_gcs_mod:"O'rtacha jarohat", r_gcs_mod_1:"⚠ Shoshilinch bosh KT.", r_gcs_mod_2:"Neyrojarroh maslahati.", r_gcs_mod_3:"Bosh 30° ko'tarilgan.", r_gcs_mod_4:"Har 15 daqiqada baholash.",
  r_gcs_sev:"Og'ir jarohat", r_gcs_sev_1:"⚠ GCS ≤ 8 = intubatsiya.", r_gcs_sev_2:"Tezkor intubatsiya (RSI).", r_gcs_sev_3:"Shoshilinch bosh+umurtqa KT.", r_gcs_sev_4:"ORIT ga yotqizish.",
  gcs_info_title: 'Glazgo shkalasini tushunish', 
  gcs_info_p1: 'Glazgo Koma Shkalasi (GCS) bosh miya jarohati yoki o\'tkir kasallikdan keyin bemorning ong darajasini ishonchli o\'lchash uchun universal qabul qilingan klinik shkaladir.', 
  gcs_info_p3: 'To\'liq hushyor bemor maksimal 15 ball, to\'liq javobsiz bemor esa kamida 3 ball oladi. Og\'riq stimulini markaziy ravishda qo\'llash va olingan eng yaxshi javobni yozish juda muhim.', 
  gcs_info_p4: 'Harakat komponenti umumiy prognoz uchun eng muhim ko\'rsatkich hisoblanadi.', 
  gcs_info_p2: 'Klinik chegara: 8 yoki undan past ball nafas yo\'llarini himoya qila olmaslikni ko\'rsatadi va zudlik bilan intubatsiyani talab qiladi.',

  // --- 2. APGAR ---
  d_apgar: 'Chaqaloqni 1 va 5-daqiqada baholash. Zudlik bilan reanimatsiya taktikasini belgilaydi.',
  f_appear: 'Teri rangi', f_pulse: 'Puls', f_grimace: 'Grimasa', f_activity: 'Aktivlik', f_resp_a: 'Nafas',
  a_a2: 'Pushti (2)', a_a1: 'Qo\'llar/oyoqlar ko\'k (1)', a_a0: 'Oqarib ketgan (0)',
  a_p2: '≥ 100 ta/daq (2)', a_p1: '< 100 ta/daq (1)', a_p0: 'Yo\'q (0)',
  a_g2: 'Yig\'lash (2)', a_g1: 'Grimasa (1)', a_g0: 'Yo\'q (0)',
  a_c2: 'Faol (2)', a_c1: 'Biroz bukilish (1)', a_c0: 'Bo\'shashgan (0)',
  a_r2: 'Baland yig\'i (2)', a_r1: 'Sust (1)', a_r0: 'Yo\'q (0)',
  r_apgar_norm: 'Qoniqarli holat', r_apgar_norm_1: 'Standart parvarish.', r_apgar_norm_2: 'Quritish, issiq tutish.', r_apgar_norm_3: 'Onaga berish.',
  r_apgar_mod: 'O\'rtacha asfiksiya', r_apgar_mod_1: 'Stimulyatsiya qilish.', r_apgar_mod_2: 'Kislorod.', r_apgar_mod_3: 'CPAP ko\'rib chiqish.', r_apgar_mod_4: 'Har daqiqada baholash.',
  r_apgar_crit: 'Og\'ir asfiksiya', r_apgar_crit_1: 'Zudlik bilan reanimatsiya.', r_apgar_crit_2: 'Sun\'iy nafas (PPV).', r_apgar_crit_3: 'Yurak massaji < 60.', r_apgar_crit_4: 'Intubatsiyaga tayyorgarlik.',
  apgar_info_title: 'Apgar shkalasini tushunish', 
  apgar_info_p1: '1952 yilda doktor Virjiniya Apgar tomonidan ishlab chiqilgan ushbu tizim chaqaloqning tug\'ilishdan 1 va 5 daqiqa o\'tgach klinik holatini tezkor baholashning standart usulini taqdim etadi.', 
  apgar_info_p2: '1 daqiqalik baho chaqaloq tug\'ruq jarayoniga qanday toqat qilganini belgilaydi, 5 daqiqalik baho esa uning yangi muhitga qanday moslashayotganini baholaydi. 7-10 ball me\'yoriy va qoniqarli hisoblanadi.', 
  apgar_info_p3: 'Chegara: 5-daqiqada ≤ 3 ball nevrologik shikastlanish xavfining oshishi bilan bog\'liq bo\'lib, agressiv neonatal reanimatsiyani talab qiladi.',

  // --- 3. BMI ---
  d_bmi: 'JSST klassifikatsiyasi chegaralari bilan tana vazni indeksi.', 
  f_weight: 'Vazn (kg)', f_height: 'Bo\'y (sm)',
  r_bmi_under: 'Vazn yetishmovchiligi', r_bmi_under_1: 'Ovqatlanishni tekshiring.', r_bmi_under_2: 'Diyetolog maslahati.',
  r_bmi_norm: 'Normal vazn', r_bmi_norm_1: 'Sog\'lom turmush tarzi.', r_bmi_norm_d: 'Dori-darmonsiz',
  r_bmi_over: 'Ortiqcha vazn', r_bmi_over_1: 'Parhez va mashqlar.', r_bmi_over_2: 'Metabolik sindrom skriningi.', r_bmi_over_d: 'Turmush tarzini optimallashtirish',
  r_bmi_ob1: 'I darajali semizlik', r_bmi_ob1_1: 'Turmush tarzini o\'zgartirish.', r_bmi_ob1_2: 'Farmakoterapiyani ko\'rib chiqish.',
  r_bmi_ob2: 'II/III darajali semizlik', r_bmi_ob2_1: 'Yuqori xavf.', r_bmi_ob2_2: 'Bariatrik jarrohlik.',
  bmi_info_title: 'TVI ni tushunish', 
  bmi_info_p1: 'Tana Vazni Indeksi (TVI) - bu kattalardagi semizlikni tasniflash uchun ishlatiladigan vazn va bo\'y nisbatining oddiy ko\'rsatkichi. U yurak-qon tomir va metabolik xavf uchun asosiy o\'lchovni beradi.', 
  bmi_info_p2: 'Aholi darajasida juda foydali bo\'lishiga qaramay, shifokorlar TVI bevosita tana yog\' foizini o\'lchamasligini yodda tutishlari kerak. U mushakdor odamlarni ortiqcha vaznli deb noto\'g\'ri tasniflashi mumkin.',

  // --- 4. CURB-65 ---
  d_curb65: 'Kasalxonadan tashqari pnevmoniyada o\'lim xavfi stratifikatsiyasi.', 
  f_confusion: 'Ong chalkashligi', f_urea: 'Mochevina > 7 mmol/l', f_rr30: 'Nafas ≥ 30/min', f_bp_low: 'Sistolik qon bosimi < 90', f_age65: 'Yosh ≥ 65',
  r_curb_lo: 'Past xavf', r_curb_lo_1: 'Uyda davolanish.', r_curb_lo_2: 'Peroral antibiotiklar.', r_curb_lo_3: 'Kuzatuv.',
  r_curb_md: 'O\'rtacha xavf', r_curb_md_1: 'Kasalxonaga yotqizish.', r_curb_md_2: 'Qisqa kuzatuv.', r_curb_md_3: 'Vena ichiga antibiotiklar.',
  r_curb_hi: 'Yuqori xavf', r_curb_hi_1: 'Zudlik bilan yotqizish.', r_curb_hi_2: 'Reanimatsiya.', r_curb_hi_3: 'Keng spektrli antibiotiklar.',
  curb_info_title: 'CURB-65 shkalasini tushunish', 
  curb_info_p1: 'CURB-65 Britaniya Torakal Jamiyati tomonidan tasdiqlangan klinik qoidadir. U pnevmoniyada 30 kunlik o\'lim xavfini hisoblash uchun 5 ta oson olinadigan o\'zgaruvchidan foydalanadi.', 
  curb_info_p2: 'Baho bemorlarni ajratish yo\'lini samarali belgilaydi: ambulator sharoitda davolanishi xavfsiz bo\'lgan bemorlarni va kasalxonaga yoki ORIT ga yotqizishni talab qiladiganlarni ajratadi.', 
  curb_info_p3: 'Chegara: 3 yoki undan yuqori ball o\'lim xavfining sezilarli oshishi (14% atrofida) bilan bog\'liq va zudlik bilan gospitalizatsiyani talab qiladi.',

  // --- 5. WELLS DVT ---
  d_dvt: 'Chuqur vena trombozi (DVT) ning testdan oldingi ehtimolini baholash.', 
  f_cancer: 'Faol saraton', f_paralysis: 'Paralich yoki gips', f_bedridden: 'Yotoq rejimi > 3 kun', f_tenderness: 'Venalar bo\'ylab og\'riq', f_swelling_entire: 'Butun oyoq shishi', f_swelling_calf: 'Boldir shishi > 3 sm', f_pitting: 'Chuqurcha qoldiruvchi shish', f_collateral: 'Kollateral venalar', f_alt_dx: 'Boshqa tashxis ehtimoli yuqoriroq (-2)',
  r_dvt_hi: 'DVT ehtimoli yuqori', r_dvt_hi_1: 'Zudlik bilan UTT.', r_dvt_hi_2: 'Agar UTT manfiy bo\'lsa D-Dimer.', r_dvt_hi_3: 'Antikoagulyantlar.',
  r_dvt_md: 'O\'rtacha xavf', r_dvt_md_1: 'D-Dimer testi.', r_dvt_md_2: 'Musbat bo\'lsa UTT.', r_dvt_md_d: 'Tasdiqlangandan so\'ng.',
  r_dvt_lo: 'DVT ehtimoli past', r_dvt_lo_1: 'D-Dimer testi.', r_dvt_lo_2: 'Manfiy bo\'lsa DVT istisno qilinadi.', r_dvt_lo_d: 'Kerak emas.',
  dvt_info_title: 'Wells DVT mezonlarini tushunish', 
  dvt_info_p1: 'DVT uchun Wells mezonlari bemorlarni xavf guruhlariga xavfsiz va ob\'ektiv ravishda ajratadi va tashxislash yondashuvini standartlashtiradi.', 
  dvt_info_p2: 'U D-dimer tahlilini rad etish mexanizmi sifatida ishlatish orqali past xavfli populyatsiyalarda keraksiz ultratovush tekshiruvlarini faol ravishda oldini oladi.', 
  dvt_info_p3: 'Chegara: ≥ 2 ball bemorni "DVT ehtimoli yuqori" guruhiga kiritadi, bu yerda D-dimerning o\'zi yetarli emas va UTT majburiydir.',

  // --- 6. WELLS PE ---
  d_pe: 'O\'pka emboliyasini vizualizatsiya qilish yo\'riqnomasi ehtimoli.', 
  f_pe_dvt: 'DVT belgilari', f_pe_alt: 'Boshqa tashxis ehtimoli kamroq', f_pe_hr: 'Puls > 100', f_pe_immob: 'Yotoq rejimi yoki operatsiya', f_pe_hx: 'Oldingi PE yoki DVT', f_pe_hemop: 'Qon tupurish', f_pe_malig: 'Onkologiya',
  r_pe_hi: 'PE ehtimoli yuqori', r_pe_hi_1: 'Zudlik bilan KT-AG.', r_pe_hi_2: 'Antikoagulyantlar.', r_pe_hi_3: 'Kasalxonaga yotqizish.',
  r_pe_md: 'O\'rtacha xavf', r_pe_md_1: 'D-Dimer.', r_pe_md_2: 'Musbat bo\'lsa KT-AG.', r_pe_lo_d: 'Kerak emas.',
  r_pe_lo: 'PE ehtimoli past', r_pe_lo_1: 'PERC yoki D-Dimer.', r_pe_lo_2: 'PE istisno qilinadi.',
  pe_info_title: 'Wells PE mezonlarini tushunish', 
  pe_info_p1: 'O\'pka emboliyasi aniq bo\'lmagan simptomlar bilan namoyon bo\'lishi mumkin. PE uchun Wells shkalasi bemorga qon tekshiruvi (D-dimer) o\'tkazish kerakmi yoki darhol KT o\'pka angiografiyasini (KTPA) bajarish kerakligini bevosita belgilab beruvchi tuzilmali asosni taqdim etadi.', 
  pe_info_p2: 'Ushbu qoidani qo\'llash past xavfli bemorlarda keraksiz nurlanish ta\'siri va kontrast modda sababli kelib chiqadigan nefropatiyani sezilarli darajada kamaytiradi.', 
  pe_info_p3: 'Chegara: > 4 ball PE ehtimoli yuqori ekanligini anglatadi; manfiy D-dimer natijasi PE ni xavfsiz istisno qila olmaydi.',

  // --- 7. CHADS2 ---
  d_chads2: 'Yurak bo\'lmachalari fibrillyatsiyasida insult xavfini baholash.', 
  f_chf: 'Yurak yetishmovchiligi', f_htn: 'Gipertenziya', f_age75: 'Yosh ≥ 75', f_dm: 'Qandli diabet', f_stroke: 'Insult / TIA tarixi',
  r_chads_lo: 'Past xavf', r_chads_lo_1: 'Antikoagulyantlar kerak emas.', r_chads_lo_2: 'Kuzatuv.',
  r_chads_md: 'O\'rtacha xavf', r_chads_md_1: 'Antikoagulyantlar.', r_chads_md_2: 'Qon ketish xavfi.',
  r_chads_hi: 'Yuqori xavf', r_chads_hi_1: 'Antikoagulyantlar ko\'rsatilgan.', r_chads_hi_2: 'NOAK afzal.', r_chads_hi_3: 'Monitoring.',
  chads_info_title: 'CHADS2 shkalasini tushunish', 
  chads_info_p1: 'CHADS2 shkalasi no-klapanli bo\'lmachalar fibrillyatsiyasi bo\'lgan bemorlarda ishemik insultning yillik xavfini hisoblash uchun keng qo\'llaniladigan klinik vositadir.', 
  chads_info_p2: 'Shkala uzoq muddatli antikoagulyant terapiyani (NOAK yoki Varfarin) boshlash to\'g\'risidagi hal qiluvchi qarorni qabul qilishga yordam beradi va tromboemboliya xavfini qon ketish xavfi bilan muvozanatlaydi.', 
  chads_info_p3: 'Chegara: 2 yoki undan yuqori ball tizimli antikoagulyatsiya uchun kuchli klinik ko\'rsatma bo\'lib, yuqori insult xavfini (yiliga ≥ 4.0%) bildiradi.',

  // --- 8. CHILD-PUGH ---
  d_cp: 'Jigar sirrozi og\'irligini prognostik tasniflash.', 
  f_bili: 'Bilirubin (μmol/L)', f_alb: 'Albumin (g/L)', f_pt: 'PV uzayishi / XNN (INR)', f_ascites: 'Assit', f_enceph: 'Ensefalopatiya', 
  cp_b1: '< 34', cp_b2: '34–50', cp_b3: '> 50',
  cp_a1: '> 35', cp_a2: '28–35', cp_a3: '< 28',
  cp_p1: '< 4s / XNN < 1.7', cp_p2: '4–6s / 1.7–2.3', cp_p3: '> 6s / XNN > 2.3',
  cp_as2: 'Yengil / O\'rtacha', cp_as3: 'Og\'ir / Refrakter',
  cp_e2: 'I–II daraja', cp_e3: 'III–IV daraja',
  r_cp_a: 'Yengil', r_cp_a_1: 'Yaxshi prognoz.', r_cp_a_2: 'Yashovchanlik ~100%.',
  r_cp_b: 'O\'rtacha', r_cp_b_1: 'O\'rtacha xavf.', r_cp_b_2: 'Transplantatsiya.',
  r_cp_c: 'Og\'ir', r_cp_c_1: 'Yuqori o\'lim xavfi.', r_cp_c_2: 'Transplantatsiya ko\'rsatilgan.',
  cp_info_title: 'Child-Pugh shkalasini tushunish', 
  cp_info_p1: 'Child-Turcotte-Pugh shkalasi surunkali jigar kasalliklari, asosan sirroz prognozini baholash uchun o\'rnatilgan tizimdir. U ob\'ektiv laboratoriya o\'lchovlarini klinik baholash bilan birlashtiradi.', 
  cp_info_p2: 'Bu 1 va 2 yillik yashovchanlikning ishonchli prognozini taqdim etadi, bu qorin bo\'shlig\'i jarrohligidan oldingi xavfni aniqlash va jigar orqali metabolizatsiya qilinadigan dorilarning dozasini moslashtirish uchun muhimdir.', 
  cp_info_p3: 'Chegara: C sinfiga (10-15 ball) o\'tish yomon prognozli dekompensatsiyalangan kasallikni anglatadi va zudlik bilan transplantatsiya baholashini talab qiladi.',

  // --- 9. EGFR ---
  d_egfr: 'CKD-EPI tenglamasi orqali buyrak faoliyatini baholash (eGFR).', 
  f_cr: 'Kreatinin', f_age: 'Yosh', f_sex: 'Jins', sex_m: 'Erkak', sex_f: 'Ayol',
  r_egfr_g1: 'Normal', r_egfr_g1_1: 'Kuzatuv.', r_egfr_g1_2: 'Kasalliklarni davolash.',
  r_egfr_g2: 'Biroz pasaygan', r_egfr_g2_1: 'Progressiya.', r_egfr_g2_2: 'Yurak xavfi.',
  r_egfr_g3a: 'O\'rtacha', r_egfr_g3a_1: 'Asoratlarni davolash.', r_egfr_g3a_2: 'Dori dozasi.',
  r_egfr_g3b: 'Og\'ir', r_egfr_g3b_1: 'Nefrolog.', r_egfr_g3b_2: 'Gemosodializga tayyorgarlik.',
  r_egfr_g4: 'Juda og\'ir', r_egfr_g4_1: 'Qattiq kuzatuv.', r_egfr_g4_2: 'Transplantatsiya.',
  r_egfr_g5: 'Terminal', r_egfr_g5_1: 'Dializ.', r_egfr_g5_2: 'Palliativ.',
  egfr_info_title: 'eGFR tushunish', 
  egfr_info_p1: 'Taxminiy glomerulyar filtratsiya tezligi (eGFR) buyrak faoliyatining eng ishonchli umumiy ko\'rsatkichidir. 2021 CKD-EPI tenglamasi hozirgi kunda tavsiya etilgan "oltin standart" hisoblanadi.', 
  egfr_info_p2: 'Dori to\'planishi va tizimli toksiklikni oldini olish uchun buyrak orqali chiqariladigan yoki nefrotoksik dorilarni (masalan, Metformin, NOAKlar yoki antibiotiklar) yozishdan oldin eGFR ni hisoblash majburiydir.', 
  egfr_info_p3: 'Chegara: 3 yoki undan ko\'p oy davomida < 60 ml/min eGFR ko\'rsatkichi Surunkali Buyrak Kasalligi (SBK) tashxisini rasmiy ravishda tasdiqlaydi.',

  // --- 10. MEWS ---
  d_mews: 'Klinik yomonlashuvni erta aniqlash uchun fiziologiyani kuzating.', 
  f_mews_rr: 'Nafas tezligi', f_mews_hr: 'Yurak urishi', f_mews_sbp: 'Sistolik bosim', f_mews_temp: 'Harorat', f_mews_avpu: 'Ong darajasi (AVPU)',
  r_mews_lo: 'Stabil', r_mews_lo_1: 'Kuzatuv.', r_mews_lo_2: 'Reja.', r_mews_lo_d: 'Kerak emas.',
  r_mews_md: 'Xavf', r_mews_md_1: 'Tez-tez kuzatish.', r_mews_md_2: 'Shifokorga xabar.', r_mews_md_3: '30 min.',
  r_mews_hi: 'Kritik', r_mews_hi_1: 'Zudlik bilan shifokor.', r_mews_hi_2: 'Reanimatsiya.', r_mews_hi_3: 'ORIT.',
  mews_info_title: 'MEWS shkalasini tushunish', 
  mews_info_p1: 'Modifikatsiyalangan erta ogohlantirish shkalasi (MEWS) - bu yurak xuruji kabi klinik pasayish xavfi ostida bo\'lgan bemorlarni tezda aniqlash uchun kasalxonalarda keng qo\'llaniladigan fiziologik baholash tizimi.', 
  mews_info_p2: 'Muntazam hayotiy ko\'rsatkichlar va AVPU ong bahosini algoritmik ravishda bitta raqamga aylantirish orqali, MEWS tibbiy yordamni kuchaytirish va reanimatsiya guruhini chaqirish uchun ob\'ektiv "trigger" vazifasini bajaradi.', 
  mews_info_p3: 'Chegara: 5 yoki undan yuqori ball ORIT ga yotqizilish yoki o\'lim ehtimolining keskin oshishi bilan statistik jihatdan bog\'liq.',

  // --- 11. CENTOR ---
  d_centor: 'A guruhi streptokokk faringiti ehtimolini klinik baholash.', 
  f_cough_a: 'Yo\'tal yo\'qligi', f_exudates: 'Murtak bezlarida karash', f_lymph: 'Limfa tugunlari og\'riqliligi', f_temp38: 'Harorat > 38.0°C', f_c_age: 'Yosh',
  c_age_1: '3–14 yosh (+1)', c_age_2: '15–44 yosh (0)', c_age_3: '≥ 45 yosh (-1)',
  r_centor_lo: 'Strep ehtimoli past', r_centor_lo_1: 'Simptomatik.', r_centor_lo_2: 'Antibiotiklar KERAK EMAS.',
  r_centor_md: 'Strep mumkin', r_centor_md_1: 'Ekspress-test.', r_centor_md_2: 'Musbat bo\'lsa davolash.', r_centor_md_d: 'Tasdiqlangandan so\'ng.',
  r_centor_hi: 'Strep ehtimoli yuqori', r_centor_hi_1: 'Empirik antibiotiklar.', r_centor_hi_2: 'Test bilan tasdiqlash.',
  centor_info_title: 'Centor mezonlarini tushunish', 
  centor_info_p1: 'Centor mezonlari (yosh bilan o\'zgartirilgan) tomog\'i og\'riyotgan bemorlarni baholash va A guruhi beta-gemolitik streptokokk (GAS) infektsiyasi ehtimolini hisoblash uchun asos yaratadi.', 
  centor_info_p2: 'Uning asosiy maqsadi antibiotiklarni oqilona ishlatishdir - virusli faringit uchun antibiotiklarni empirik yozib berishni faol ravishda kamaytirish va revmatik isitma kabi asoratlarni oldini olish uchun haqiqatan ham davolanishga muhtoj bo\'lgan bemorlarni aniqlash.', 
  centor_info_p3: 'Chegara: 0-1 ball test talab qilmaydi; 2-3 ball tezkor antigen testini talab qiladi; 4-5 ball esa empirik antibiotiklarni asoslashi mumkin.',

  // --- 12. NIHSS ---
  d_nihss: 'Trombolizisni qo\'llash uchun insult og\'irligini miqdoriy baholash. Vaqt - bu miya.', 
  f_nihss_score: 'NIHSS bali (0-42)',
  r_nihss_none: 'Insult yo\'q', r_nihss_none_1: 'TIA.', r_nihss_none_2: 'Profilaktika.',
  r_nihss_minor: 'Yengil', r_nihss_minor_1: 'Insult bo\'limi.', r_nihss_minor_2: 'Trombolizis.', r_nihss_minor_3: 'Parvarish.',
  r_nihss_mod: 'O\'rtacha', r_nihss_mod_1: 'Trombolizis.', r_nihss_mod_2: 'Trombektomiya.', r_nihss_mod_3: 'Qon bosimi.',
  r_nihss_modsev: 'Og\'ir', r_nihss_modsev_1: 'Nevrolog.', r_nihss_modsev_2: 'Trombektomiya.', r_nihss_modsev_3: 'ORIT.',
  r_nihss_sev: 'Juda og\'ir', r_nihss_sev_1: 'Yuqori xavf.', r_nihss_sev_2: 'Nafas yo\'llari.', r_nihss_sev_3: 'Palliativ.',
  nihss_info_title: 'NIHSS shkalasini tushunish', 
  nihss_info_p1: 'Milliy Sog\'liqni Saqlash Institutlari Insult Shkalasi (NIHSS) insult bilan bog\'liq nevrologik defitsitning miqdoriy o\'lchovini ta\'minlaydigan yuqori darajada tuzilgan, 15 banddan iborat baholash vositasidir. Bu o\'tkir insultni baholash uchun xalqaro standartdir.', 
  nihss_info_p2: 'U ong darajasi, til, e\'tiborsizlik (neglect), ko\'rish maydoni yo\'qolishi, ko\'z harakati, motor kuchi, ataksiya, dizartriya va sezgi yo\'qolishini tizimli ravishda baholaydi. U IV trombolizis va endovaskulyar trombektomiyaga yaroqlilikni aniqlash uchun ishlatiladigan asosiy ko\'rsatkichdir.', 
  nihss_info_p3: 'Chegara: 15 dan yuqori ball og\'ir insultni va uzoq muddatli nogironlik hamda yomon prognozning yuqori ehtimolini ko\'rsatadi.',

  // --- 13. SOFA ---
  d_sofa: 'A\'zolar yetishmovchiligini baholash orqali sepsisni aniqlash (Sepsis-3).', 
  f_pao2: 'PaO2/FiO2', f_plt: 'Trombotsitlar', f_bili_sofa: 'Bilirubin', f_map: 'Qon bosimi (MAP) / Vazopressorlar', f_gcs_sofa: 'GCS', f_cr_sofa: 'Kreatinin yoki Siydik',
  r_sofa_lo: 'Past xavf', r_sofa_lo_1: 'Parvarish.', r_sofa_lo_2: 'Infeksiyani davolash.', r_sofa_lo_3: 'Kuzatuv.',
  r_sofa_md: 'A\'zolar disfunksiyasi', r_sofa_md_1: 'ORIT.', r_sofa_md_2: 'Qo\'llab-quvvatlash.', r_sofa_md_3: 'IVL.',
  r_sofa_hi: 'Poliorgan yetishmovchiligi', r_sofa_hi_1: 'Agressiv davolash.', r_sofa_hi_2: 'Vazopressorlar.', r_sofa_hi_3: 'Yuqori o\'lim xavfi.',
  sofa_info_title: 'SOFA shkalasini tushunish', 
  sofa_info_p1: 'SOFA (Sequential Organ Failure Assessment) shkalasi reanimatsiya bo\'limida bemorning klinik holatini, fiziologik yomonlashish darajasini va poliorgan yetishmovchiligi tezligini aniqlash uchun doimiy ravishda kuzatib boradi.', 
  sofa_info_p2: 'U nafas olish, yurak-qon tomir, jigar, koagulyatsiya, buyrak va asab tizimlarini aniq laboratoriya ma\'lumotlari asosida sinchkovlik bilan baholaydi. Eski SIRS mezonlaridan farqli o\'laroq, SOFA organ disfunktsiyasini xolislashtiradi.', 
  sofa_info_p3: 'Chegara: Sepsis-3 konsensusi shuni ko\'rsatadiki, SOFA umumiy balining ≥ 2 ballga keskin oshishi sepsisni belgilaydi (taxminan 10% o\'lim ko\'rsatkichi bilan).',

  // --- 14. RANSON ---
  d_ranson: 'O\'tkir pankreatitda o\'lim xavfini bashorat qilish algoritmi.', 
  f_age55: 'Yosh > 55', f_wbc: 'Leykotsitlar > 16,000', f_glu: 'Glyukoza > 200 mg/dL', f_ldh: 'LDH > 350', f_ast: 'AST > 250', f_hct_drop: 'Gematokrit tushishi > 10%', f_bun_rise: 'Mochevina oshishi > 5', f_ca_low: 'Kaltsiy < 8', f_pao2_low: 'PaO2 < 60', f_base_def: 'Asos defitsiti > 4', f_fluid_seq: 'Suyuqlik sekvestratsiyasi > 6 L',
  r_ranson_lo: 'Yengil', r_ranson_lo_1: 'Infuziyalar.', r_ranson_lo_2: 'Og\'riqsizlantirish.', r_ranson_lo_3: 'Oziqlantirish.',
  r_ranson_md: 'Og\'ir xavf', r_ranson_md_1: 'Agressiv infuziyalar.', r_ranson_md_2: 'ORIT.', r_ranson_md_3: 'Zond.', r_ranson_md_d: 'Hartman.',
  r_ranson_hi: 'Yuqori xavf', r_ranson_hi_1: 'ORIT majburiy.', r_ranson_hi_2: 'Nekroz nazorati.', r_ranson_hi_3: 'Jarroh.',
  ranson_info_title: 'Ranson mezonlarini tushunish', 
  ranson_info_p1: '1974-yilda kiritilgan Ranson mezonlari o\'tkir pankreatitning og\'irligi va prognozini ob\'ektiv baholash uchun mo\'ljallangan 11 ta maxsus klinik belgini o\'z ichiga oladi.', 
  ranson_info_p2: 'Tizimli yallig\'lanishni aniqlash uchun kasalxonaga qabul qilingan zahoti beshta o\'zgaruvchi baholanadi va suyuqlik to\'planishi, gipokalsemiya va kuchayib borayotgan gipoksiyaning kechiktirilgan ta\'sirini ushlash uchun 48 soatdan keyin yana oltita o\'zgaruvchi baholanadi.', 
  ranson_info_p3: 'Chegara: 3 yoki undan yuqori ball o\'lim ko\'rsatkichining keskin oshishi bilan bog\'liq bo\'lgan og\'ir pankreatitni ko\'rsatadi va agressiv infuzion terapiyani talab qiladi.',

  // --- 15. PSI/PORT ---
  d_psi: 'Kasalxonadan tashqari pnevmoniya uchun keng qamrovli o\'lim xavfi stratifikatsiyasi.', 
  f_psi_age: 'Yosh (yillar)', f_psi_sex: 'Jins', f_psi_nh: 'Qariyalar uyi rezidenti', f_psi_neo: 'Onkologiya', f_psi_liv: 'Jigar kasalligi', f_psi_chf: 'Yurak yetishmovchiligi', f_psi_cvd: 'Miya qon tomir kasalligi', f_psi_ren: 'Buyrak kasalligi', f_psi_ams: 'Ong o\'zgarishi', f_psi_rr: 'Nafas ≥ 30/min', f_psi_sbp: 'Sistolik bosim < 90', f_psi_temp: 'Harorat < 35°C yoki ≥ 40°C', f_psi_pulse: 'Puls ≥ 125 bpm', f_psi_ph: 'pH < 7.35', f_psi_bun: 'Mochevina ≥ 30 mg/dL', f_psi_na: 'Natriy < 130 mEq/L', f_psi_gluc: 'Glyukoza ≥ 250 mg/dL', f_psi_hct: 'Gematokrit < 30%', f_psi_pao2: 'PaO2 < 60 mmHg', f_psi_eff: 'Plevral suyuqlik',
  r_psi_1: 'I Sinf (Past)', r_psi_1_1: 'Uyda.', r_psi_1_2: 'Peroral.',
  r_psi_2: 'II Sinf (Past)', r_psi_2_1: 'Uyda.', r_psi_2_2: 'Peroral.',
  r_psi_3: 'III Sinf (O\'rtacha)', r_psi_3_1: 'Qisqa muddat.', r_psi_3_2: 'Vena ichiga.', r_psi_3_d: 'Peroralga o\'tish.',
  r_psi_4: 'IV Sinf (Yuqori)', r_psi_4_1: 'Kasalxona.', r_psi_4_2: 'Vena ichiga.',
  r_psi_5: 'V Sinf (Juda Yuqori)', r_psi_5_1: 'ORIT.', r_psi_5_2: 'Keng spektrli.',
  psi_info_title: 'PSI/PORT ni tushunish', 
  psi_info_p1: 'Pnevmoniya og\'irlik indeksi (PSI) yoki PORT shkalasi kasalxonadan tashqari pnevmoniya bilan kasallangan bemorlar uchun 30 kunlik o\'lim ehtimolini hisoblash uchun keng qamrovli va ishonchli klinik prognoz qoidasidir.', 
  psi_info_p2: 'CURB-65 dan ancha murakkabroq bo\'lsa-da (qon gazlari va vizualizatsiyani o\'z ichiga olgan 20 ta o\'zgaruvchini talab qiladi), xavfsiz tarzda uydan javob berilishi mumkin bo\'lgan past xavfli bemorlarni aniqlash uchun eng ustun vosita hisoblanadi.', 
  psi_info_p3: 'Chegara: IV va V xavf sinflari sezilarli o\'lim xavfini (27% gacha) o\'z ichiga oladi va mutlaqo kasalxonaga, ko\'pincha reanimatsiya bo\'limiga yotqizishni talab qiladi.'
}
};

// Bulletproof Translator: Checks memory directly every single time it runs
const t = k => {
  let activeLang = localStorage.getItem('wardcalc_lang') || 'en';
  return (T[activeLang] || T.en)[k] || T.en[k] || k;
};
