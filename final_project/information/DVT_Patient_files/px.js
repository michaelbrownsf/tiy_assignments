var captifyPxlObj = (function() {

    if (typeof _captifyAnalytics == 'undefined') {
        _captifyAnalytics = _ca;
    }

    var _pid = 11225,
        _inj_ver = +_captifyAnalytics[0] || 0,
        _hn_ver = 2,
        _ref = document.referrer || '';

    var pngUrl = '//s.cpx.to/ca.png' +
        '?ref=' + encodeURIComponent(_ref) +
        '&pid=' + encodeURIComponent(_pid) +
        '&adnxs_uid=$UID' +
        '&inj_ver=' + _inj_ver +
        '&hn_ver=' + _hn_ver;

    (new Image()).src = (location.protocol == 'https:' ? 'https://secure' : 'http://ib') +
        '.adnxs.com/getuid?' + encodeURIComponent(pngUrl);

})();