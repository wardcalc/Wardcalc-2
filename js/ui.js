'use strict';

// 1. Translation Safety
window.t = window.t || function(k) { return k; };

document.addEventListener('DOMContentLoaded', function() {
    // Load saved language
    var savedLang = localStorage.getItem('wardcalc_lang') || 'en';
    window.setLang(savedLang);

    // 2. SELF-HEALING UI LOOP (Fixes blank text)
    var count = 0;
    var retry = setInterval(function() {
        window.updateUI();
        if (++count > 20) clearInterval(retry);
    }, 100);

    // 3. THE BUTTON UNBLOCKER (Fixes non-working buttons)
    // This finds every button and manually attaches the logic
    document.body.addEventListener('click', function(e) {
        var el = e.target;
        
        // Handle Language Buttons
        if (el.classList.contains('lang-btn')) {
            var l = el.innerText.toLowerCase();
            window.setLang(l, el);
        }
        
        // Handle Selection Chips
        if (el.classList.contains('chip')) {
            window.pickChip(el);
        }

        // Handle CHA2DS2-VASc Toggles (Specific for that tool)
        if (el.getAttribute('data-g') && el.getAttribute('data-g').indexOf('ch_') === 0) {
            el.classList.toggle('on');
        }
    });
});

window.setLang = function(l, btn) {
    window.LANG = l;
    localStorage.setItem('wardcalc_lang', l);
    document.querySelectorAll('.lang-btn').forEach(function(b) {
        b.classList.remove('active');
        b.style.cssText = 'background:transparent!important;color:#888!important;border:none;padding:6px 14px;border-radius:15px;cursor:pointer;font-size:11px;font-weight:700;';
        if (b.innerText.toLowerCase() === l) {
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
        if (txt && txt !== key) {
            if (el.tagName === 'INPUT') el.placeholder = txt;
            else el.innerHTML = txt;
        }
    });
};

window.pickChip = function(btn) {
    var g = btn.getAttribute('data-g');
    if (!g) return;
    document.querySelectorAll('[data-g="' + g + '"]').forEach(function(b) { b.classList.remove('on'); });
    btn.classList.add('on');
};

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
    var h = '<div class="result-hero" style="background:rgba(255,255,255,0.03);padding:25px;border-bottom:1px solid rgba(255,255,255,0.1);border-radius:12px 12px 0 0;">';
    h += '<div style="display:flex;align-items:baseline;gap:8px;"><div style="color:' + riskColor + ';font-size:42px;font-weight:800;">' + score + '</div>';
    h += '<span style="color:rgba(255,255,255,0.4);font-size:12px;text-transform:uppercase;">' + unit + '</span></div></div>';
    h += '<div style="display:flex;background:rgba(255,255,255,0.02);">';
    h += '<button class="result-tab on" onclick="switchTab(0)" style="flex:1;padding:12px;background:none;border:none;color:#d4af37;border-bottom:2px solid #d4af37;font-size:9px;text-transform:uppercase;font-weight:700;">Result</button>';
    h += '<button class="result-tab" onclick="switchTab(1)" style="flex:1;padding:12px;background:none;border:none;color:rgba(255,255,255,0.4);font-size:9px;text-transform:uppercase;font-weight:700;">Plan</button>';
    h += '<button class="result-tab" onclick="switchTab(2)" style="flex:1;padding:12px;background:none;border:none;color:rgba(255,255,255,0.4);font-size:9px;text-transform:uppercase;font-weight:700;">Rx</button></div>';
    h += '<div class="result-panels" style="background:rgba(255,255,255,0.01);border-radius:0 0 12px 12px;border:1px solid rgba(255,255,255,0.1);border-top:none;">';
    h += '<div class="result-panel on" style="padding:20px;line-height:1.6;font-style:italic;">' + interp + '</div>';
    h += '<div class="result-panel" style="padding:20px;display:none;line-height:1.6;">' + actions + '</div>';
    h += '<div class="result-panel" style="padding:20px;display:none;line-height:1.6;">' + drugs + '</div></div>';
    box.innerHTML = h;
    box.scrollIntoView({ behavior: 'smooth' });
};
