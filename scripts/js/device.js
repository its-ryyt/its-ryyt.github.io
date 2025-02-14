! function() {
    "use strict";

    $(document).ready(function() {
        var window_width = null;
        var window_height = null;

        //Check if Page is Reloaded
        if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
            deviceSize();
        }

        function deviceSize() {

            window_width = $(window).width();
            window_height = $(window).height();

            //375 560
            var error_prog = document.getElementsByClassName('errorProg');
            var error_dev = document.getElementsByClassName('errorDev');

            if (Number(window_width) >= 375 && Number(window_width) <= 575) {
                [].forEach.call(error_prog, function(el) {
                    el.classList.remove("d-none");
                });

                [].forEach.call(error_dev, function(el) {
                    el.classList.remove("d-none");
                });
            } else {
                [].forEach.call(error_prog, function(el) {
                    el.classList.add("d-none");
                });

                [].forEach.call(error_dev, function(el) {
                    el.classList.add("d-none");
                });
            }
        }

        window.addEventListener('resize', function(event) {
            deviceSize();
        });
    });
}();