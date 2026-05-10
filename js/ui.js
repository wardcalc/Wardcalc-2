'use strict';
window.onerror = function(msg, url, line) { console.log("🚨 UI CRASH: " + msg + " Line: " + line); };

document.addEventListener('DOMContentLoaded', function() {
    var savedLang = localStorage.getItem('wardcalc_lang') || 'en';
    window.setLang(savedLang);
    if (typeof window.updateUI === 'function') window.updateUI();
});

window.setLang = function(l, btn){
    window.LANG = l;
    localStorage.setItem('wardcalc_lang', l); 
    document.querySelectorAll('.lang-btn').forEach(function(b) {
        b.classList.remove('active');
        b.style.cssText = 'background: transparent !important; color: #888 !important; border: none; padding: 6px 14px; border-radius: 15px; cursor: pointer; font-size: 11px; font-weight: 700; letter-spacing: 1px;';
        if (b.innerText.toLowerCase() === l.toLowerCase()) {
            b.classList.add('active');
            b.style.cssText = 'background: #d4af37 !important; color: #000 !important; border: none; padding: 6px 14px; border-radius: 15px; cursor: pointer; font-size: 11px; font-weight: 700; letter-spacing: 1px;';
        }
    });
    if (typeof window.updateUI === 'function') window.updateUI();
};

window.updateUI = function(){
    if (typeof window.t !== 'function') return;
    document.querySelectorAll('[data-k]').forEach(function(el) {
        var key = el.getAttribute('data-k');
        var txt = window.t(key);
        if (txt !== key) {
            if (el.tagName === 'INPUT') el.placeholder = txt;
            else el.innerHTML = txt;
        }
    });
};

window.pickChip = function(btn){
    var g = btn.getAttribute('data-g');
    document.querySelectorAll('[data-g="' + g + '"]').forEach(function(b) { b.classList.remove('on'); });
    btn.classList.add('on');
};

window.toggleChip = function(el) { el.classList.toggle('on'); };

window.switchTab = function(i){
    var tabs = document.querySelectorAll('.result-tab');
    var panels = document.querySelectorAll('.result-panel');
    tabs.forEach(function(t, j) {
        t.classList.toggle('on', j === i);
        t.style.color = (j === i) ? 'var(--gold)' : 'var(--w40)';
        t.style.borderBottomColor = (j === i) ? 'var(--gold)' : 'transparent';
    });
    panels.forEach(function(p, j) { p.style.display = (j === i) ? 'block' : 'none'; });
};

window.showResult = function(score, unit, sev, interp, actions, drugs){
    var box = document.getElementById('R'); if(!box) return;
    box.className = 'result-box visible';
    var riskColor = sev === 'hi' ? 'var(--rose)' : sev === 'md' ? 'var(--amber)' : 'var(--emerald)';
    box.innerHTML = '<div class="result-hero" style="background:var(--bg3); padding:30px; border-bottom:1px solid var(--border); border-radius:12px 12px 0 0;"><div style="display:flex; align-items:center; gap:10px;"><div style="color:' + riskColor + '; font-size:48px; font-weight:800;">' + score + '</div><span style="color:var(--w40); font-family:var(--mono); font-size:12px;">' + unit + '</span></div></div><div class="result-tabs" style="display:flex; background:var(--bg2);"><button class="result-tab on" onclick="switchTab(0)" style="flex:1; padding:15px; background:none; border:none; border-bottom:2px solid var(--gold); color:var(--gold); cursor:pointer; font-size:9px; text-transform:uppercase;">Interpretation</button><button class="result-tab" onclick="switchTab(1)" style="flex:1; padding:15px; background:none; border:none; color:var(--w40); cursor:pointer; font-size:9px; text-transform:uppercase;">Action Plan</button><button class="result-tab" onclick="switchTab(2)" style="flex:1; padding:15px; background:none; border:none; color:var(--w40); cursor:pointer; font-size:9px; text-transform:uppercase;">First-Line Rx</button></div><div class="result-panels" style="background:var(--bg2); border-radius:0 0 12px 12px; border:1px solid var(--border); border-top:none;"><div class="result-panel on" style="padding:24px; color:var(--w80); line-height:1.7;">' + interp + '</div><div class="result-panel" style="padding:24px; display:none;">' + actions + '</div><div class="result-panel" style="padding:24px; display:none;">' + drugs + '</div></div>';
};
