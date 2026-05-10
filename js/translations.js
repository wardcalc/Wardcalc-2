'use strict';

/**
 * WARDCALC MASTER TRANSLATION DICTIONARY
 * Developer: Muhammad Sabir Ali
 * Status: Final Year Medical Student
 */

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
  
  // --- FOOTER & INFO PAGES ---
  ft_about: 'About Us', ft_contact: 'Contact', ft_disc: 'Disclaimer', ft_terms: 'Terms', ft_privacy: 'Privacy', ft_rights: '© 2026 WardCalc. All rights reserved.',
  nav_about: 'About WardCalc',
  about_p1: 'WardCalc is a specialized clinical decision support platform engineered by Muhammad Sabir Ali, a final year medical student at Bukhara State Medical Institute. The application was born from a need to centralize complex clinical algorithms into a high-performance, offline-capable interface for frontline healthcare providers.',
  about_h2: 'Our Mission',
  about_p2: 'To empower clinicians with instant access to validated medical scoring systems. By digitizing evidence-based guidelines, WardCalc aims to standardize patient assessment, reduce medical errors, and optimize clinical workflows during acute ward rounds.',
  about_h3: 'Clinical Integrity',
  about_p3: 'Every formula integrated into WardCalc is derived from high-impact, peer-reviewed medical literature. While our tools undergo rigorous internal validation, they are designed to augment clinical expertise, not replace it.',
  
  nav_contact: 'Contact Us', 
  contact_p1: 'We value professional peer feedback. If you have identified a clinical discrepancy, a technical bug, or wish to suggest a new diagnostic tool, please contact our team.',
  contact_p2: 'For academic inquiries, institutional partnerships, or technical support, please reach out via our official GitHub repository or email. We aim to respond to all professional correspondence within 48 hours.',
  
  nav_disc: 'Clinical Disclaimer', 
  disc_p1: 'WardCalc is strictly an educational and reference tool intended for use by qualified healthcare professionals. It does not provide medical advice, diagnosis, or definitive treatment recommendations.',
  disc_p2: 'The user assumes full responsibility for all clinical decisions made. Neither Muhammad Sabir Ali nor Bukhara State Medical Institute shall be held liable for any direct or indirect damages resulting from the use of these calculations. Always verify results against primary medical literature.',
  
  nav_terms: 'Terms of Use', 
  terms_p1: 'By utilizing the WardCalc platform, you acknowledge that you are using this software at your own risk. This service is provided "as-is" without any express or implied warranties regarding clinical accuracy or uptime.',
  terms_p2: 'The logic, design, and source code of WardCalc remain the intellectual property of its creator. Unauthorized commercial redistribution is strictly prohibited.',
  
  nav_privacy: 'Privacy & Data Security', 
  privacy_p1: 'WardCalc is built on a "Privacy-First" architecture. All data processing occurs locally on your device. No patient-identifiable information (PII) or Personal Health Information (PHI) is ever transmitted to a server or stored externally.',
  privacy_p2: 'We are compliant with the principles of data minimization. Your language and theme preferences are stored on your local hardware via browser storage, ensuring 100% offline security and zero-tracking.',

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
  bmi_info_p2: 'While highly useful on a population level, clinicians must note that BMI does not directly measure body fat percentage. It may misclassify highly muscular individuals as overweight or fail to identify dangerous visceral fat in individuals with a "normal" BMI.',

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
  dvt_info_p2: 'It actively prevents unnecessary ultrasonography in low-risk populations by utilizing the D-dimer assay as a rule-out mechanism.', 
  dvt_info_p3: 'Threshold: A score ≥ 2 categorizes the patient into the "DVT Likely" tier, where D-dimer alone is insufficient, and imaging is mandatory.',

  // --- 6. WELLS PE ---
  d_pe: 'Calculate pre-test probability to guide Pulmonary Embolism imaging.', 
  f_pe_dvt: 'Clinical signs/symptoms of DVT', f_pe_alt: 'Alternative diagnosis less likely than PE', f_pe_hr: 'Heart rate > 100 bpm', f_pe_immob: 'Immobilization (> 3 days) or surgery', f_pe_hx: 'Previous PE or DVT', f_pe_hemop: 'Hemoptysis', f_pe_malig: 'Malignancy with treatment within 6 months',
  r_pe_hi: 'PE Likely', r_pe_hi_1: 'Urgent CTPA imaging.', r_pe_hi_2: 'Start empiric anticoagulation.', r_pe_hi_3: 'Admit to hospital.',
  r_pe_md: 'Moderate Risk', r_pe_md_1: 'D-Dimer testing.', r_pe_md_2: 'If positive, perform CTPA.', r_pe_lo_d: 'No empirical anticoagulation.',
  r_pe_lo: 'PE Unlikely', r_pe_lo_1: 'Use PERC rule or D-Dimer.', r_pe_lo_2: 'If negative, PE excluded.',
  pe_info_title: 'Understanding Wells PE', 
  pe_info_p1: 'The Wells Score for PE provides a structured framework to calculate a pre-test probability, directly dictating whether a patient should undergo D-dimer blood testing or proceed immediately to a CT Pulmonary Angiogram (CTPA).', 
  pe_info_p2: 'Applying this rule significantly reduces unnecessary radiation exposure and contrast-induced nephropathy in low-risk patients.', 
  pe_info_p3: 'Threshold: A score > 4 means PE is likely; a negative D-dimer cannot safely rule out PE in this cohort, and imaging is required.',

  // --- 7. CHADS2 ---
  d_chads2: 'Stroke risk stratification in non-valvular atrial fibrillation.', 
  f_chf: 'Congestive Heart Failure', f_htn: 'Hypertension', f_age75: 'Age ≥ 75', f_dm: 'Diabetes Mellitus', f_stroke: 'Stroke/TIA history',
  r_chads_lo: 'Low Risk', r_chads_lo_1: 'No anticoagulation usually needed.', r_chads_lo_2: 'Consider individual patient factors.',
  r_chads_md: 'Moderate Risk', r_chads_md_1: 'Consider oral anticoagulation.', r_chads_md_2: 'Weigh bleeding risk.',
  r_chads_hi: 'High Risk', r_chads_hi_1: 'Oral anticoagulation recommended.', r_chads_hi_2: 'DOACs preferred over Warfarin.', r_chads_hi_3: 'Monitor adherence.',
  chads_info_title: 'Understanding CHADS2', 
  chads_info_p1: 'The CHADS2 score is a clinical tool used to estimate the annual risk of ischemic stroke in patients with non-valvular atrial fibrillation.', 
  chads_info_p2: 'The score balances the risk of thromboembolic events against the inherent bleeding risks associated with anticoagulants.', 
  chads_info_p3: 'Threshold: A score of 2 or greater signifies a high stroke risk, establishing a strong clinical indication for systemic anticoagulation.',

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
  cp_info_p1: 'The Child-Turcotte-Pugh score is an established system for assessing the prognosis of chronic liver disease, primarily cirrhosis.', 
  cp_info_p2: 'It provides a reliable estimate of survival, critical for determining perioperative risk before abdominal surgery.', 
  cp_info_p3: 'Threshold: Progression to Class C (10-15 points) denotes decompensated disease with poor prognosis.',

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
  egfr_info_p1: 'The estimated Glomerular Filtration Rate (eGFR) is the most robust overall index of renal function. The CKD-EPI equation is currently the gold standard.', 
  egfr_info_p2: 'It is a mandatory calculation prior to prescribing renally excreted drugs to prevent toxicity.', 
  egfr_info_p3: 'Threshold: An eGFR of < 60 mL/min/1.73m² persisting for 3 months formally establishes a diagnosis of CKD.',

  // --- 10. MEWS ---
  d_mews: 'Track physiology to detect catastrophic deterioration early.', 
  f_mews_rr: 'Respiratory Rate', f_mews_hr: 'Heart Rate', f_mews_sbp: 'Systolic BP', f_mews_temp: 'Temperature', f_mews_avpu: 'Consciousness (AVPU)',
  r_mews_lo: 'Stable', r_mews_lo_1: 'Routine observations.', r_mews_lo_2: 'Continue current care plan.', r_mews_lo_d: 'No specific intervention.',
  r_mews_md: 'Increased Risk', r_mews_md_1: 'Increase observation frequency.', r_mews_md_2: 'Inform nurse in charge.', r_mews_md_3: 'Medical review within 30 mins.',
  r_mews_hi: 'Critical', r_mews_hi_1: 'Immediate medical review.', r_mews_hi_2: 'Call rapid response team.', r_mews_hi_3: 'Consider ICU transfer.',
  mews_info_title: 'Understanding MEWS', 
  mews_info_p1: 'The Modified Early Warning Score (MEWS) identifies patients at risk of impending clinical decline, including cardiac arrest.', 
  mews_info_p2: 'By algorithmically converting routine vital signs into a single number, MEWS acts as a standard clinical trigger.', 
  mews_info_p3: 'Threshold: A score of 5 or higher is statistically associated with a severely increased likelihood of death.',

  // --- 11. CENTOR ---
  d_centor: 'Clinical probability of Group A Streptococcal pharyngitis.', 
  f_cough_a: 'Absence of cough', f_exudates: 'Tonsillar exudates or swelling', f_lymph: 'Tender anterior cervical lymphadenopathy', f_temp38: 'Temperature > 38.0°C', f_c_age: 'Age Group',
  c_age_1: '3–14 years (+1)', c_age_2: '15–44 years (0)', c_age_3: '≥ 45 years (-1)',
  r_centor_lo: 'Strep Unlikely', r_centor_lo_1: 'Symptomatic treatment.', r_centor_lo_2: 'Antibiotics NOT recommended.',
  r_centor_md: 'Possible Strep', r_centor_md_1: 'Perform rapid strep test.', r_centor_md_2: 'Treat if test is positive.', r_centor_md_d: 'Antibiotics only if confirmed.',
  r_centor_hi: 'Strep Likely', r_centor_hi_1: 'Empiric antibiotics justified.', r_centor_hi_2: 'Consider rapid test to confirm.',
  centor_info_title: 'Understanding Centor', 
  centor_info_p1: 'The Centor Criteria provides a framework to evaluate patients presenting with a sore throat, estimating Group A beta-hemolytic Streptococcus infection likelihood.', 
  centor_info_p2: 'Its primary utility lies in antibiotic stewardship—preventing empirical prescription for viral pharyngitis.', 
  centor_info_p3: 'Threshold: A score of 4-5 may justify empirical antibiotics.',

  // --- 12. NIHSS ---
  d_nihss: 'Quantify stroke severity to guide thrombolysis. Time is brain.', 
  f_nihss_score: 'Total NIHSS Score (0-42)',
  r_nihss_none: 'No Stroke Symptoms', r_nihss_none_1: 'Evaluate for TIA.', r_nihss_none_2: 'Secondary prevention.',
  r_nihss_minor: 'Minor Stroke', r_nihss_minor_1: 'Admit to stroke unit.', r_nihss_minor_2: 'Consider thrombolysis if disabling.', r_nihss_minor_3: 'Supportive care.',
  r_nihss_mod: 'Moderate Stroke', r_nihss_mod_1: 'Evaluate for thrombolysis.', r_nihss_mod_2: 'Evaluate for thrombectomy.', r_nihss_mod_3: 'Strict BP control.',
  r_nihss_modsev: 'Moderate-Severe', r_nihss_modsev_1: 'Urgent neurology consult.', r_nihss_modsev_2: 'Thrombectomy evaluation.', r_nihss_modsev_3: 'ICU/Stroke unit admission.',
  r_nihss_sev: 'Severe Stroke', r_nihss_sev_1: 'High risk of complications.', r_nihss_sev_2: 'Airway protection.', r_nihss_sev_3: 'Palliative considerations if massive.',
  nihss_info_title: 'Understanding the NIHSS', 
  nihss_info_p1: 'The NIH Stroke Scale is the international standard for acute stroke evaluation, quantifying stroke-related neurologic deficit.', 
  nihss_info_p2: 'It determines eligibility for IV thrombolysis and endovascular thrombectomy.', 
  nihss_info_p3: 'Threshold: A score > 15 indicates a severe stroke with a poor prognosis.',

  // --- 13. SOFA ---
  d_sofa: 'Define sepsis (Sepsis-3) via sequential organ failure assessment.', 
  f_pao2: 'PaO2/FiO2', f_plt: 'Platelets', f_bili_sofa: 'Bilirubin', f_map: 'MAP or Vasopressors', f_gcs_sofa: 'GCS Score', f_cr_sofa: 'Creatinine or Urine output',
  r_sofa_lo: 'Low Mortality Risk', r_sofa_lo_1: 'Continue supportive care.', r_sofa_lo_2: 'Treat underlying infection.', r_sofa_lo_3: 'Monitor for deterioration.',
  r_sofa_md: 'Moderate Organ Failure', r_sofa_md_1: 'ICU level care indicated.', r_sofa_md_2: 'Hemodynamic support.', r_sofa_md_3: 'Consider mechanical ventilation.',
  r_sofa_hi: 'Severe Multi-Organ Failure', r_sofa_hi_1: 'Aggressive ICU management.', r_sofa_hi_2: 'Vasopressors/CRRT likely needed.', r_sofa_hi_3: 'High mortality probability.',
  sofa_info_title: 'Understanding SOFA', 
  sofa_info_p1: 'The Sequential Organ Failure Assessment (SOFA) tracks status in the ICU to determine physiological deterioration.', 
  sofa_info_p2: 'Unlike older SIRS criteria, SOFA requires laboratory inputs to objectify organ dysfunction.', 
  sofa_info_p3: 'Threshold: An acute increase in the total SOFA score of ≥ 2 points defines sepsis.',

  // --- 14. RANSON ---
  d_ranson: 'Predictive algorithm for acute pancreatitis mortality risk.', 
  f_age55: 'Age > 55 years', f_wbc: 'WBC > 16,000/mm³', f_glu: 'Blood Glucose > 200 mg/dL', f_ldh: 'LDH > 350 U/L', f_ast: 'AST > 250 U/L', f_hct_drop: 'Hematocrit drop > 10%', f_bun_rise: 'BUN rise > 5 mg/dL', f_ca_low: 'Serum Calcium < 8 mg/dL', f_pao2_low: 'PaO2 < 60 mmHg', f_base_def: 'Base deficit > 4 mEq/L', f_fluid_seq: 'Fluid sequestration > 6 L',
  r_ranson_lo: 'Mild Pancreatitis', r_ranson_lo_1: 'IV fluid resuscitation.', r_ranson_lo_2: 'Analgesia.', r_ranson_lo_3: 'Early oral feeding if tolerated.',
  r_ranson_md: 'Severe Pancreatitis Risk', r_ranson_md_1: 'Aggressive IV fluids.', r_ranson_md_2: 'ICU monitoring.', r_ranson_md_3: 'Enteral nutrition.', r_ranson_md_d: 'Hartmanns preferred.',
  r_ranson_hi: 'High Mortality Risk', r_ranson_hi_1: 'ICU admission mandatory.', r_ranson_hi_2: 'Monitor for necrosis/infection.', r_ranson_hi_3: 'Surgical consult.',
  ranson_info_title: 'Understanding Ranson Criteria', 
  ranson_info_p1: 'Ranson\'s criteria evaluate the severity and prognosis of acute pancreatitis based on 11 specific clinical signs.', 
  ranson_info_p2: 'Variables are assessed at admission and at 48 hours to capture systemic impact.', 
  ranson_info_p3: 'Threshold: A score of 3 or higher indicates severe pancreatitis.',

  // --- 15. PSI/PORT ---
  d_psi: 'Comprehensive mortality stratification for CAP.', 
  f_psi_age: 'Age (years)', f_psi_sex: 'Sex', f_psi_nh: 'Nursing home resident', f_psi_neo: 'Neoplastic disease', f_psi_liv: 'Liver disease', f_psi_chf: 'Congestive heart failure', f_psi_cvd: 'Cerebrovascular disease', f_psi_ren: 'Renal disease', f_psi_ams: 'Altered mental status', f_psi_rr: 'Respiratory rate ≥ 30/min', f_psi_sbp: 'Systolic BP < 90 mmHg', f_psi_temp: 'Temp < 35°C or ≥ 40°C', f_psi_pulse: 'Pulse ≥ 125 bpm', f_psi_ph: 'Arterial pH < 7.35', f_psi_bun: 'BUN ≥ 30 mg/dL', f_psi_na: 'Sodium < 130 mEq/L', f_psi_gluc: 'Glucose ≥ 250 mg/dL', f_psi_hct: 'Hematocrit < 30%', f_psi_pao2: 'PaO2 < 60 mmHg', f_psi_eff: 'Pleural effusion',
  r_psi_1: 'Risk Class I (Low)', r_psi_1_1: 'Outpatient care.', r_psi_1_2: 'Oral antibiotics.',
  r_psi_2: 'Risk Class II (Low)', r_psi_2_1: 'Outpatient care.', r_psi_2_2: 'Oral antibiotics.',
  r_psi_3: 'Risk Class III (Moderate)', r_psi_3_1: 'Observation unit or short stay.', r_psi_3_2: 'IV/Oral antibiotics.', r_psi_3_d: 'Switch to oral when stable.',
  r_psi_4: 'Risk Class IV (High)', r_psi_4_1: 'Inpatient admission.', r_psi_4_2: 'IV antibiotics.',
  r_psi_5: 'Risk Class V (Very High)', r_psi_5_1: 'ICU admission likely.', r_psi_5_2: 'Broad-spectrum IV antibiotics.',
  psi_info_title: 'Understanding PSI/PORT', 
  psi_info_p1: 'The Pneumonia Severity Index (PSI) calculates 30-day mortality for patients with community-acquired pneumonia.', 
  psi_info_p2: 'It is considered the superior tool for identifying low-risk patients who can be safely discharged.', 
  psi_info_p3: 'Threshold: Risk Classes IV and V mandate inpatient admission.'
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
  
  // --- FOOTER & INFO PAGES ---
  ft_about: 'О нас', ft_contact: 'Контакты', ft_disc: 'Отказ', ft_terms: 'Условия', ft_privacy: 'Конфиденциальность', ft_rights: '© 2026 WardCalc. Все права защищены.',
  nav_about: 'О проекте WardCalc',
  about_p1: 'WardCalc — это специализированная платформа поддержки клинических решений, разработанная Мухаммадом Сабиром Али, студентом выпускного курса Бухарского государственного медицинского института. Приложение было создано для централизации сложных клинических алгоритмов в высокопроизводительный интерфейс.',
  about_h2: 'Наша миссия',
  about_p2: 'Обеспечить клиницистам мгновенный доступ к проверенным системам медицинской оценки. Оцифровывая доказательные руководства, WardCalc стремится стандартизировать оценку пациентов и минимизировать ошибки.',
  about_h3: 'Клиническая целостность',
  about_p3: 'Каждая формула, интегрированная в WardCalc, взята из рецензируемой медицинской литературы. Инструменты предназначены для дополнения клинического опыта, а не для его замены.',
  
  nav_contact: 'Свяжитесь с нами', 
  contact_p1: 'Мы ценим профессиональную обратную связь. Если вы обнаружили клиническое несоответствие или техническую ошибку, пожалуйста, свяжитесь с нами.',
  contact_p2: 'Для академических запросов или технической поддержки пишите через наш официальный репозиторий GitHub. Мы отвечаем на профессиональную корреспонденцию в течение 48 часов.',
  
  nav_disc: 'Отказ от ответственности', 
  disc_p1: 'WardCalc является исключительно образовательным и справочным инструментом. Он не предоставляет медицинских консультаций, диагнозов или окончательных рекомендаций по лечению.',
  disc_p2: 'Пользователь несет полную ответственность за принятые клинические решения. Ни Мухаммад Сабир Али, ни Бухарский ГМИ не несут ответственности за ущерб, возникший в результате использования данных расчетов.',
  
  nav_terms: 'Условия использования', 
  terms_p1: 'Используя платформу WardCalc, вы подтверждаете, что используете это программное обеспечение на свой страх и риск. Сервис предоставляется «как есть» без каких-либо гарантий.',
  terms_p2: 'Пользователи несут полную ответственность за проверку точности всех расчетов перед их применением в реальной практике.',
  
  nav_privacy: 'Конфиденциальность', 
  privacy_p1: 'WardCalc построен на архитектуре «Privacy-First». Вся обработка данных происходит локально на вашем устройстве. Никакая личная информация о пациентах (PHI) никогда не передается на сервер.',
  privacy_p2: 'Мы соблюдаем принципы минимизации данных. Ваши языковые предпочтения сохраняются локально в браузере, обеспечивая 100% безопасность в автономном режиме.',

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
  gcs_info_title: 'Понимание шкалы Глазго', 
  gcs_info_p1: 'Шкала комы Глазго используется для надежного измерения уровня сознания после травмы мозга.', 
  gcs_info_p3: 'Норма — 15 баллов; кома — 3 балла.', 
  gcs_info_p4: 'Двигательный компонент — лучший прогностический фактор.', 
  gcs_info_p2: 'Порог: ШКГ ≤ 8 требует интубации.',

  // --- 8. CHILD-PUGH ---
  cp_b1: '< 34', cp_b2: '34–50', cp_b3: '> 50',
  cp_a1: '> 35', cp_a2: '28–35', cp_a3: '< 28',
  cp_p1: '< 4с / МНО < 1.7', cp_p2: '4–6с / 1.7–2.3', cp_p3: '> 6с / МНО > 2.3',
  cp_as2: 'Легкий / Умеренный', cp_as3: 'Тяжелый / Рефрактерный',
  cp_e2: 'Степень I–II', cp_e3: 'Степень III–IV'
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
  
  // --- FOOTER & INFO PAGES ---
  ft_about: 'Biz haqimizda', ft_contact: 'Aloqa', ft_disc: 'Rad etish', ft_terms: 'Shartlar', ft_privacy: 'Maxfiylik', ft_rights: '© 2026 WardCalc. Barcha huquqlar himoyalangan.',
  nav_about: 'WardCalc haqida',
  about_p1: 'WardCalc - bu Buxoro davlat tibbiyot instituti bitiruvchi talabasi Muhammad Sabir Ali tomonidan ishlab chiqilgan kompleks klinik qarorlarni qabul qilishni qo\'llab-quvvatlash tizimi.',
  about_h2: 'Bizning maqsadimiz',
  about_p2: 'Shifokorlarni tasdiqlangan tibbiy ball tizimlariga tezkor kirish bilan ta\'minlash. WardCalc diagnostika jarayonlarini standartlashtirish va xatolarni kamaytirishni maqsad qiladi.',
  about_h3: 'Klinik yaxlitlik',
  about_p3: 'WardCalc ichidagi har bir formula nufuzli tibbiy adabiyotlarga asoslangan. Ushbu vositalar klinik tajribani to\'ldirish uchun mo\'ljallangan.',
  
  nav_contact: 'Biz bilan aloqa', 
  contact_p1: 'Biz professional hamkasblarning fikr-mulohazalarini qadrlaymiz. Agar klinik nomuvofiqlik yoki texnik xatolikni aniqlasangiz, biz bilan bog\'laning.',
  contact_p2: 'Akademik so\'rovlar yoki texnik yordam uchun rasmiy GitHub repozitoriyamiz orqali murojaat qiling. Biz 48 soat ichida javob berishga harakat qilamiz.',
  
  nav_disc: 'Rad etish', 
  disc_p1: 'WardCalc faqat ta\'lim va ma\'lumot olish maqsadida mo\'ljallangan. U rasmiy tibbiy maslahat yoki tashxis hisoblanmaydi.',
  disc_p2: 'Barcha klinik qarorlar uchun foydalanuvchi javobgardir. Muhammad Sabir Ali yoki Buxoro davlat tibbiyot instituti ushbu dasturdan foydalanish natijasida yuzaga keladigan zararlar uchun javobgar emas.',
  
  nav_terms: 'Foydalanish shartlari', 
  terms_p1: 'WardCalc platformasidan foydalanish orqali siz ushbu shartlarga rozilik bildirasiz. Ushbu xizmat hech qanday kafolatsiz taqdim etiladi.',
  terms_p2: 'Foydalanuvchilar har qanday klinik amaliyotdan oldin hisob-kitoblar aniqligini tekshirishlari shart.',
  
  nav_privacy: 'Maxfiylik siyosati', 
  privacy_p1: 'WardCalc maxfiylikka asoslangan arxitekturaga ega. Barcha ma\'lumotlar lokal ravishda qurilmangizda qayta ishlanadi.',
  privacy_p2: 'Biz hech qanday shaxsiy sog\'liqni saqlash ma\'lumotlarini yig\'maymiz. Sizning til sozlamalaringiz tashqi kuzatuvsiz brauzerda saqlanadi.',

  // --- 8. CHILD-PUGH ---
  cp_b1: '< 34', cp_b2: '34–50', cp_b3: '> 50',
  cp_a1: '> 35', cp_a2: '28–35', cp_a3: '< 28',
  cp_p1: '< 4s / XNN < 1.7', cp_p2: '4–6s / 1.7–2.3', cp_p3: '> 6s / XNN > 2.3',
  cp_as2: 'Yengil / O\'rtacha', cp_as3: 'Og\'ir / Refrakter',
  cp_e2: 'I–II daraja', cp_e3: 'III–IV daraja'
}
};

// Global Bindings for Sandbox Environments
window.T = T;
window.LANG = localStorage.getItem('wardcalc_lang') || 'en';

// Bulletproof Translator
window.t = function(k) {
  let activeLang = localStorage.getItem('wardcalc_lang') || 'en';
  let dictionary = window.T[activeLang] || window.T.en;
  return dictionary[k] || window.T.en[k] || k;
};
