'use strict';
window.onerror = function(msg, url, line) { alert("🚨 MATH ERROR: " + msg + " line " + line); };

function gv(g){
    var e = document.querySelector('[data-g="' + g + '"].on');
    return e ? parseFloat(e.getAttribute('data-v')) : null;
}

function rowS(num, text) {
    if (!text || text === 'undefined') return '';
    return '<div style="margin-bottom:12px; display:flex; gap:10px;"><span style="color:var(--gold); font-weight:bold;">' + num + '.</span> <span>' + text + '</span></div>';
}

function rowD(title, desc) {
    return '<div style="margin-bottom:15px;"><strong style="color:var(--white);">' + title + '</strong><br><span style="color:var(--w60); font-size:13px;">' + desc + '</span></div>';
}

// 1. GCS
window.calc_gcs = function(){
    var e = gv('ge'), v = gv('gv'), m = gv('gm');
    if(e===null || v===null || m===null) return alert("Select all fields");
    var s = e + v + m;
    var sev = s >= 13 ? 'lo' : s >= 9 ? 'md' : 'hi';
    window.showResult(s, '/15', sev, window.t('r_gcs_mild'), rowS(1, window.t('r_gcs_mild_1')), '');
};

// 4. WELLS PE
window.calc_wellspe = window.calc_pe = function(){
    var ks = ['p1','p2','p3','p4','p5','p6','p7'];
    var s = 0;
    ks.forEach(function(k) { s += (gv(k) || 0); });
    var sev = s > 4 ? 'hi' : s >= 2 ? 'md' : 'lo';
    window.showResult(s, 'pts', sev, window.t('r_pe_hi'), rowS(1, 'Urgent Imaging Required'), '');
};

// 12. NIHSS
window.calc_nihss = function(){
    var el = document.getElementById('nihss_s');
    if(!el || el.value === "") return alert("Enter score");
    var s = parseInt(el.value);
    var sev = s > 15 ? 'hi' : s > 5 ? 'md' : 'lo';
    window.showResult(s, '/42', sev, "Stroke severity assessed", rowS(1, "Follow local stroke protocol"), "");
};

// 3. WELLS DVT
window.calc_wellsdvt = window.calc_dvt = function(){
    var ks = ['d1','d2','d3','d4','d5','d6','d7','d8','d9'];
    var s = 0; ks.forEach(function(k) { s += (gv(k) || 0); });
    var sev = s >= 3 ? 'hi' : s >= 1 ? 'md' : 'lo';
    window.showResult(s, 'pts', sev, "DVT probability check", rowS(1, "Consider Ultrasound"), "");
};
