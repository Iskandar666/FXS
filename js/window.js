window.onload = function(){
        (function (doc, win) {
            var docEl = doc.documentElement,
                    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                    recalc = function () {
                        var clientWidth = docEl.clientWidth;
                        if (!clientWidth) return;
                        if (clientWidth >= 768) {
                            docEl.style.fontSize = '76.8px';
                        }else {
                            docEl.style.fontSize = 75 * (clientWidth / 750) + 'px';
                        }
                        if(clientWidth >= 1000){
                            docEl.style.fontSize = '102.4px';
                        }
                    };
            if (!doc.addEventListener) return;
            win.addEventListener(resizeEvt, recalc, false);
            doc.addEventListener('DOMContentLoaded', recalc, false);
        })(document, window);
    }