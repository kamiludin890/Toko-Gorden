jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 25) {
        jQuery(".totop").stop().animate({ left: "0px" });
    } else {
        jQuery(".totop").stop().animate({ left: "-1000px" });
    }
});
jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 25) {
        if (jQuery(".totop").hasClass("visible") == false) {
            jQuery(".totop")
                .stop()
                .animate({
                        left: "0px",
                    },
                    function() {
                        jQuery(".totop").addClass("visible");
                    }
                );
        }
    } else {
        if (jQuery(".totop").hasClass("visible") == true) {
            jQuery(".totop")
                .stop()
                .animate({
                        left: "-1000px",
                    },
                    function() {
                        jQuery(".totop").removeClass("visible");
                    }
                );
        }
    }
});