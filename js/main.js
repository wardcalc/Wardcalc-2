/* ── CALCULATOR DATA ── */
const CARDS = [
  {id:'gcs',      spec:'sp_neuro', icon:'🧠', descKey:'d_gcs',      name:'Glasgow Coma Scale'},
  {id:'apgar',    spec:'sp_ped',   icon:'👶', descKey:'d_apgar',    name:'APGAR Score'},
  {id:'wellsdvt', spec:'sp_vasc',  icon:'🩸', descKey:'d_wellsdvt', name:'Wells Score — DVT'},
  {id:'wellspe',  spec:'sp_vasc',  icon:'🫀', descKey:'d_wellspe',  name:'Wells Score — PE'},
  {id:'curb65',   spec:'sp_resp',  icon:'🫁', descKey:'d_curb65',   name:'CURB-65'},
  {id:'chads2',   spec:'sp_cardio',icon:'❤️', descKey:'d_chads2',   name:'CHA₂DS₂-VASc'},
  {id:'childpugh',spec:'sp_hep',   icon:'🍂', descKey:'d_childpugh',name:'Child-Pugh Score'},
  {id:'bmi',      spec:'sp_gen',   icon:'⚖️', descKey:'d_bmi',      name:'BMI Calculator'},
  {id:'egfr',     spec:'sp_renal', icon:'🫘', descKey:'d_egfr',     name:'eGFR — CKD-EPI'},
  {id:'mews',     spec:'sp_icu',   icon:'📊', descKey:'d_mews',     name:'MEWS Score'},
  {id:'centor',   spec:'sp_inf',   icon:'🦠', descKey:'d_centor',   name:'Centor Score'},
  {id:'nihss',    spec:'sp_neuro', icon:'⚡', descKey:'d_nihss',    name:'NIHSS Stroke Scale'},
  {id:'sofa',     spec:'sp_icu',   icon:'🏥', descKey:'d_sofa',     name:'SOFA Score'},
  {id:'ranson',   spec:'sp_surg',  icon:'🔬', descKey:'d_ranson',   name:'Ranson\'s Criteria'},
  {id:'psi',      spec:'sp_resp',  icon:'💨', descKey:'d_psi',      name:'PSI / PORT Score'}
];

/* ── GRID RENDERER ── */
function renderGrid(){
  const grid = document.getElementById('calcGrid');
  if(!grid) return;
  grid.innerHTML = '';
  CARDS.forEach(c => {
    const el = document.createElement('a'); 
    el.className = 'calc-card';
    el.href = `calculators/${c.id}.html`; 
    el.style.textDecoration = 'none';
    el.innerHTML = `
      <div class="card-accent-dot"></div>
      <div class="card-top">
        <div class="card-icon">${c.icon}</div>
        <div><div class="card-spec">${t(c.spec)}</div></div>
      </div>
      <div class="card-name">${c.name}</div>
      <div class="card-desc">${t(c.descKey)}</div>
    `;
    grid.appendChild(el);
  });
}

/* ── AUTO-INITIALIZE ON PAGE LOAD ── */
document.addEventListener('DOMContentLoaded', () => {
    updateUI(); 
    if(document.getElementById('calcGrid')) {
        renderGrid();
    }
});
