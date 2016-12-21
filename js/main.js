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
        aboutUsLaptopWrap = $('.wrap'),
        aboutUsAppDevelopSectionWrapper = $('#app-develop-section .wrapper'),
        previousSelected,
        currentSelected = $('#home_link'),
        menuColors = {
            'selectedItem' : 'rgb(255, 87, 34)',
            'deSelectedItem' : 'white'
        };

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
        },

        ResizeAboutAppSection : function() {
            if(w.innerWidth >= 1330) {
                aboutUsAppDevelopSectionWrapper.css('transform', 'scale(0.6)');
            }
            else if(w.innerWidth < 1330 && w.innerWidth >= 1320) {
                aboutUsAppDevelopSectionWrapper.css('transform', 'scale(0.5)');
            }
            else if(w.innerWidth < 1320 && w.innerWidth > 1134 ) {
                aboutUsAppDevelopSectionWrapper.css('transform', 'scale(0.4)');
            }
        },
        
        ApplyOnMouseOverEventOnMenuItem : function(element) {
            $(element).on('mouseover', function() {
                _MainFunctions.SelectMenuItem($(this));
            });
        },
        
        ApplyOnMouseOutEventOnMenuItem : function (element) {
            $(element).on('mouseout', function(){
                _MainFunctions.DeSelectMenuItem($(this));
            });
        },

        SelectMenuItem : function(element) {
            $(element).css({
                'color' : menuColors.selectedItem
            });
        },

        DeSelectMenuItem : function(element) {
            $(element).css({
                'color' : menuColors.deSelectedItem
            });
        }
    }

    $(w).on('resize', function(d) {
        console.log({
            'innerWidth' : w.innerWidth,
            'innerHeight' : w.innerHeight
        });
        _MainFunctions.ResizeHomeBackgroundCanvas();
        _MainFunctions.ResizeAboutUsSection();
        _MainFunctions.ResizeAboutAppSection();
    });

    // for slow scrolling and selected menu item
    $(d).ready(function() {

        $(w).scroll(function(d) {
            // console.log($(d).height());
            console.log($('body').scrollTop());
        });

        _MainFunctions.SelectMenuItem(currentSelected);
        $('.nav-list a').click(function(){
            _MainFunctions.ApplyOnMouseOverEventOnMenuItem($('.nav-list a'));
            _MainFunctions.ApplyOnMouseOutEventOnMenuItem($('.nav-list a'));
            _MainFunctions.DeSelectMenuItem($('.nav-list a'));
            _MainFunctions.ApplyOnMouseOverEventOnMenuItem($(this));
            $(this).on('mouseout', function() {
                _MainFunctions.SelectMenuItem($(this));
            });
            _MainFunctions.SelectMenuItem($(this));
            $('html, body').animate({
                scrollTop: $( $(this).attr('href') ).offset().top
            }, 500);
            return false;
        });
    });

})(jQuery, document, window);