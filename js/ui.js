'use strict';

window.t = window.t || function(k) { return k; };

document.addEventListener('DOMContentLoaded', function() {
    var savedLang = localStorage.getItem('wardcalc_lang') || 'en';
    window.setLang(savedLang);

    // Auto-refresh to prevent blank text on slow loads
    var refreshCount = 0;
    var globalRefresh = setInterval(function() {
        window.updateUI();
        if (++refreshCount > 30) clearInterval(globalRefresh);
    }, 100);

    // Global Click Listener with Double-Fire Protection
    document.body.addEventListener('click', function(e) {
        var langBtn = e.target.closest('.lang-btn');
        if (langBtn) { 
            window.setLang(langBtn.innerText.toLowerCase(), langBtn); 
            return; 
        }

        var chip = e.target.closest('.chip');
        if (chip) {
            // FIX: If your HTML already has onclick="", do not fire twice!
            if (chip.hasAttribute('onclick')) return;

            var g = chip.getAttribute('data-g');
            // Check if it is a multi-select tool (CHADS2, Wells, SOFA, Ranson, Centor, PSI)
            if (g && (g.indexOf('ch_') === 0 || g.indexOf('p') === 0 || g.indexOf('d') === 0 || g.indexOf('rn') === 0 || g.indexOf('cen') === 0 || g.indexOf('s') === 0 || g.indexOf('psi') === 0)) {
                window.toggleChip(chip);
            } else {
                window.pickChip(chip);
            }
        }
    });
});

window.setLang = function(l, btn) {
    window.LANG = l;
    localStorage.setItem('wardcalc_lang', l);
    
    document.querySelectorAll('.lang-btn').forEach(function(b) {
        b.classList.remove('active');
        b.style.cssText = 'background:transparent!important;color:#888!important;border:none;padding:6px 14px;border-radius:15px;cursor:pointer;font-size:11px;font-weight:700;';
        if (b.innerText.toLowerCase() === l.toLowerCase()) {
            b.classList.add('active');
            b.style.cssText = 'background:#d4af37!important;color:#000!important;border:none;padding:6px 14px;border-radius:15px;cursor:pointer;font-size:11px;font-weight:700;';
        }
    });
    window.updateUI();
};

window.updateUI = function() {
    document.querySelectorAll('[data-k]').forEach(function(el) {
        var key = el.getAttribute('data-k');
        var txt = window.t(key);
        
        if (!txt || txt === key) { 
            txt = key; 
        }

        if (el.tagName === 'INPUT') {
            el.placeholder = txt;
        } else {
            if (txt !== key || el.innerHTML.trim() === '') {
                el.innerHTML = txt;
            }
        }
    });
};

window.pickChip = function(btn) { 
    var g = btn.getAttribute('data-g'); 
    if (!g) return; 
    document.querySelectorAll('[data-g="' + g + '"]').forEach(function(b) { b.classList.remove('on'); }); 
    btn.classList.add('on'); 
};
window.toggleChip = function(el) { el.classList.toggle('on'); };
window.switchTab = function(i) {
    var tabs = document.querySelectorAll('.result-tab');
    var panels = document.querySelectorAll('.result-panel');
    tabs.forEach(function(t, j) {
        t.classList.toggle('on', j === i);
        t.style.color = (j === i) ? '#d4af37' : 'rgba(255,255,255,0.4)';
        t.style.borderBottom = (j === i) ? '2px solid #d4af37' : '2px solid transparent';
    });
    panels.forEach(function(p, j) { p.style.display = (j === i) ? 'block' : 'none'; });
};

window.showResult = function(score, unit, sev, interp, actions, drugs) {
    var box = document.getElementById('R'); if (!box) return;
    box.className = 'result-box visible';
    var riskColor = sev === 'hi' ? '#ff4d4d' : sev === 'md' ? '#ffa500' : '#00ff7f';
    var lI = window.t('tab_i') || 'Interpretation'; var lA = window.t('tab_a') || 'Action Plan'; var lD = window.t('tab_d') || 'First-Line Rx';
    
    var h = '<div class="result-hero" style="background:rgba(255,255,255,0.03);padding:25px;border-bottom:1px solid rgba(255,255,255,0.1);border-radius:12px 12px 0 0;">';
    h += '<div style="display:flex;align-items:baseline;gap:8px;"><div style="color:' + riskColor + ';font-size:42px;font-weight:800;">' + score + '</div>';
    h += '<span style="color:rgba(255,255,255,0.4);font-size:12px;text-transform:uppercase;">' + unit + '</span></div></div>';
    h += '<div style="display:flex;background:rgba(255,255,255,0.02);">';
    h += '<button class="result-tab on" onclick="switchTab(0)" style="flex:1;padding:12px;background:none;border:none;color:#d4af37;border-bottom:2px solid #d4af37;font-size:9px;text-transform:uppercase;font-weight:700;">' + lI + '</button>';
    h += '<button class="result-tab" onclick="switchTab(1)" style="flex:1;padding:12px;background:none;border:none;color:rgba(255,255,255,0.4);font-size:9px;text-transform:uppercase;font-weight:700;">' + lA + '</button>';
    h += '<button class="result-tab" onclick="switchTab(2)" style="flex:1;padding:12px;background:none;border:none;color:rgba(255,255,255,0.4);font-size:9px;text-transform:uppercase;font-weight:700;">' + lD + '</button></div>';
    h += '<div class="result-panels" style="background:rgba(255,255,255,0.01);border-radius:0 0 12px 12px;border:1px solid rgba(255,255,255,0.1);border-top:none;">';
    h += '<div class="result-panel on" style="padding:24px;color:rgba(255,255,255,0.8);line-height:1.7;font-style:italic;">' + interp + '</div>';
    h += '<div class="result-panel" style="padding:24px;display:none;line-height:1.7;">' + actions + '</div>';
    h += '<div class="result-panel" style="padding:24px;display:none;line-height:1.7;">' + drugs + '</div></div>';
    box.innerHTML = h; box.scrollIntoView({ behavior: 'smooth' });
};
