jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 50) {
        jQuery(".kanan").stop().animate({ right: "-5%" });
    } else {
        jQuery(".kanan").stop().animate({ right: "-1400px" });
    }
});
jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 50) {
        if (jQuery(".kanan").hasClass("visible") == false) {
            jQuery(".kanan")
                .stop()
                .animate({
                        right: "-5%",
                    },
                    function() {
                        jQuery(".kanan").addClass("visible");
                    }
                );
        }
    } else {
        if (jQuery(".kanan").hasClass("visible") == true) {
            jQuery(".kanan")
                .stop()
                .animate({
                        right: "-1400px",
                    },
                    function() {
                        jQuery(".totop").removeClass("visible");
                    }
                );
        }
    }
});