/**
 *  @author : abhishek goswami (hiro)
 *  @github : abhishekg785
 *
 *  main.js
 */

(function($, d, w) {
    var WindowInnerHeight,
        WindowInnerWidth,
        demoCanvas = $("#demo-canvas"),
        aboutUsLaptopWrap = $('.wrap');

    var _MainFunctions = {

        /**
         * function resizes the background of the home page
         *  according to the window height and width
         */
        ResizeHomeBackgroundCanvas : function() {
            WindowInnerHeight = w.innerHeight;
            WindowInnerWidth = w.innerWidth;
            demoCanvas.css({
                'width' : WindowInnerWidth
            });
        },

        ResizeAboutUsSection : function(name) {
            if(w.innerWidth >= 960) {
                aboutUsLaptopWrap.css('transform', 'scale(1)');
            }
            if(w.innerWidth < 960 && w.innerWidth > 823) {
                aboutUsLaptopWrap.css('transform', 'scale(0.8)');
            }
        }
    }

    $(w).on('resize', function(d) {
        console.log({
            'innerWidth' : w.innerWidth,
            'innerHeight' : w.innerHeight
        });
        _MainFunctions.ResizeHomeBackgroundCanvas();
        _MainFunctions.ResizeAboutUsSection();
    });

})(jQuery, document, window);