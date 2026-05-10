'use strict';

// 🚨 CRASH DETECTOR
window.onerror = function(msg, url, line) { alert("🚨 UI CRASH:\n" + msg + "\nLine: " + line); };

document.addEventListener('DOMContentLoaded', () => {
    let savedLang = localStorage.getItem('wardcalc_lang') || 'en';
    window.LANG = savedLang;
    
    document.querySelectorAll('.lang-btn').forEach(b => {
        if (b.innerText.toLowerCase() === savedLang.toLowerCase()) {
            b.classList.add('active');
            b.style.cssText = 'background: #d4af37 !important; color: #000 !important; border: none; padding: 6px 14px; border-radius: 15px; cursor: pointer; font-size: 11px; font-weight: 700; letter-spacing: 1px;';
        } else {
            b.classList.remove('active');
            b.style.cssText = 'background: transparent !important; color: #888 !important; border: none; padding: 6px 14px; border-radius: 15px; cursor: pointer; font-size: 11px; font-weight: 700; letter-spacing: 1px;';
        }
    });

    if (typeof window.updateUI === 'function') window.updateUI();
});

function setLang(l, btn){
    window.LANG = l;
    localStorage.setItem('wardcalc_lang', l); 
    
    document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.remove('active');
        b.style.cssText = 'background: transparent !important; color: #888 !important; border: none; padding: 6px 14px; border-radius: 15px; cursor: pointer; font-size: 11px; font-weight: 700; letter-spacing: 1px;';
    });
    
    if (btn) {
        btn.classList.add('active');
        btn.style.cssText = 'background: #d4af37 !important; color: #000 !important; border: none; padding: 6px 14px; border-radius: 15px; cursor: pointer; font-size: 11px; font-weight: 700; letter-spacing: 1px;';
    }
    
    const resultBox = document.getElementById('R');
    if (resultBox) resultBox.innerHTML = '';
    
    if (typeof window.updateUI === 'function') window.updateUI();
}

function updateUI(){
    if (typeof window.t !== 'function') return;
    const t = window.t;
    document.querySelectorAll('[data-k]').forEach(el => {
        const key = el.getAttribute('data-k');
        const translatedText = t(key);
        if (translatedText !== key) {
            if (el.tagName === 'INPUT' && (el.type === 'search' || el.hasAttribute('placeholder'))) {
                el.placeholder = translatedText;
            } else {
                el.innerHTML = translatedText;
            }
        }
    });
}

function pickChip(btn){
    const group = btn.getAttribute('data-g');
    if(!group) return;
    document.querySelectorAll(`[data-g="${group}"]`).forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
}

function toggleChip(el) {
    el.classList.toggle('on');
}

function switchTab(i){
    const tabs = document.querySelectorAll('.result-tab');
    const panels = document.querySelectorAll('.result-panel');
    tabs.forEach((t, j) => {
        t.classList.toggle('on', j === i);
        t.style.color = (j === i) ? 'var(--gold)' : 'var(--w40)';
        t.style.borderBottomColor = (j === i) ? 'var(--gold)' : 'transparent';
    });
    panels.forEach((p, j) => {
        p.style.display = (j === i) ? 'block' : 'none';
        p.classList.toggle('on', j === i);
    });
}

function showResult(score, unit, sev, interp, actions, drugs){
    const box = document.getElementById('R'); 
    if(!box) return;
    box.className = `result-box visible`;
    
    const t = typeof window.t === 'function' ? window.t : (k=>k);
    const riskText = sev === 'lo' ? t('sev_lo') : sev === 'md' ? t('sev_md') : t('sev_hi');
    const riskColor = sev === 'hi' ? 'var(--rose)' : sev === 'md' ? 'var(--amber)' : 'var(--emerald)';

    box.innerHTML = `
        <div class="result-hero" style="background:var(--bg3); padding:30px; border-bottom:1px solid var(--border); border-radius: 12px 12px 0 0;">
        <div style="display:flex; align-items:center; gap:10px;">
            <div class="result-number" style="color: ${riskColor}; font-size:48px; font-weight:800; line-height:1;">${score}</div>
            <span style="color:var(--w40); font-family:var(--mono); font-size:12px; text-transform:uppercase;">${unit}</span>
        </div>
        <div style="text-align:right; font-family:var(--mono); font-size:10px; letter-spacing:2px; text-transform:uppercase; margin-top:10px; color:${riskColor};">
            ${riskText}
        </div>
        </div>
        <div class="result-tabs" style="display:flex; background:var(--bg2);">
        <button class="result-tab on" onclick="switchTab(0)" style="flex:1; padding:15px; background:none; border:none; border-bottom:2px solid var(--gold); color:var(--gold); cursor:pointer; font-family:var(--mono); font-size:9px; letter-spacing:1.5px; text-transform:uppercase;">${t('tab_i')}</button>
        <button class="result-tab" onclick="switchTab(1)" style="flex:1; padding:15px; background:none; border:none; border-bottom:2px solid transparent; color:var(--w40); cursor:pointer; font-family:var(--mono); font-size:9px; letter-spacing:1.5px; text-transform:uppercase;">${t('tab_a')}</button>
        <button class="result-tab" onclick="switchTab(2)" style="flex:1; padding:15px; background:none; border:none; border-bottom:2px solid transparent; color:var(--w40); cursor:pointer; font-family:var(--mono); font-size:9px; letter-spacing:1.5px; text-transform:uppercase;">${t('tab_d')}</button>
        </div>
        <div class="result-panels" style="background:var(--bg2); border-radius: 0 0 12px 12px; border: 1px solid var(--border); border-top: none;">
        <div class="result-panel on" style="padding:24px; color:var(--w80); font-size:15px; font-style:italic; line-height:1.7;">${interp}</div>
        <div class="result-panel" style="padding:24px; display:none;">${actions}</div>
        <div class="result-panel" style="padding:24px; display:none;">${drugs}</div>
        </div>`;
}

function filterTools() {
    let input = document.getElementById('search');
    if (!input) return;
    let filter = input.value.toLowerCase();
    let tools = document.querySelectorAll('.tool-card');
    tools.forEach(tool => {
        if (tool.innerText.toLowerCase().includes(filter)) tool.style.display = "block";
        else tool.style.display = "none";
    });
}

// FORCE GLOBAL BINDING FOR IDE SANDBOX
window.setLang = setLang;
window.updateUI = updateUI;
window.pickChip = pickChip;
window.toggleChip = toggleChip;
window.switchTab = switchTab;
window.showResult = showResult;
window.filterTools = filterTools;
