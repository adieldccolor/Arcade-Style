/*
* This file is intended for arcade beauty website
* Author: Adiel Hercules
* Copyright (c) Arcade Beauty
* */



/*
* Define variables
* @var object arcadeStyle: contains all website functionality api
* @var array __timers: this will store all timers for delayed actions
* @var array __slider: this will store all the slider to have multiple instances
* @var object __screen: this will contains screen specific validations and shorthands
* */
var arcadeStyle = {}, __timers = [], __slider = [], __screen = {};



/*
* Function will check if screen is mobile (only checks if window size is less than 768
* @return bool
* */
__screen.__small = function(){
    return window.innerWidth < 768;
};



/*
* Function to execute tasks with a small delay
* @param fn function
* @param time number
* */
function delayed(fn, time, name){
    if( __timers[name] != undefined ){
        clearTimeout(__timers[name]);
    }
    __timers[name] = setTimeout(function(){ fn(); }, time);
}




/*
* Function to start everything related to the navigation and the navigation drawer
* @return
* */
arcadeStyle.NavigationDrawer = function(){
    if( !$('body').hasClass('drawer') ){
        $('body').addClass('drawer');
    }

    $('.drawer').drawer();


    $('.__drawer-navigation > ul > li').each(function(){
        var $cur = $(this);
        if( $cur.find('ul').length > 0 ){
            $cur.addClass('js-can-collapse')
        }else{
            $cur.addClass('js-cant-collapse')
        }
    });


    $('.__navigation').each(function(){
        var $cur = $(this);
        var $cloned = $cur.clone().addClass('__cloned').removeClass('__static');

        if( $cur.closest('.__drawer-content').length > 0 ){
            $cur.closest('.__drawer-content').before($cloned);
        }else{
            $cur.after($cloned);
        }

    });
};





/*
* Function to start an external plugin that will allow us to create a custom ui for <select> elements.
* @return
* */
arcadeStyle.ArcadeUISelect = function(){
    $(".__arcade-ui-select").select2({
        minimumResultsForSearch: Infinity
    });
};




/*
* Function to handle sticky items listening window scrolling
* @return
* */
arcadeStyle.StickyItems = function(){
    $(window).on('scroll', function(){
        var __scroll = $(window).scrollTop(),
            $nav = $('.__navigation');

        $nav.removeClass('__sticky');
        if( __scroll > 100 ){
            $nav.addClass('__sticky');
        }
    });
};


/*
* Function to handle sliders on website
* @return
* */
arcadeStyle.Sliders = function(){
    var $mainSlider = $(".__main--slider");

    __slider['main'] = $mainSlider;
    if( __slider['main'].length > 0 ){

        //$mainSlider.find('.__slide-item');

        __slider['main'].owlCarousel({
            // autoPlay: -1, //Set AutoPlay to 3 seconds
            items : 1,
            itemsDesktop : [1199,1],
            itemsDesktopSmall : [979,1],
            itemsTablet : [768,1],
            itemsMobile : [480,1],
            autoHeight : true,
            slideSpeed: 800,
            circular: true
            //responsiveRefreshRate: 200,
            //afterAction: app.getCurrent
        });
        __slider['main'] = $mainSlider.data('owlCarousel');
    }
};





/*
* Function will handle navigation arrows for sliders
* @param s object
* @param $arrow DOMElement
* */
arcadeStyle.SliderNavigate = function(s, $arrow){
    if( $arrow.length > 0 ){

        if( $arrow.hasClass('next') || $arrow.hasClass('__next') ){
            if(s.currentItem == s.$owlItems.length){
                s.goTo(0);
            }else{
                s.goTo(++s.currentItem);
            }
        }

        if( $arrow.hasClass('prev') || $arrow.hasClass('__prev') ){
            if(s.currentItem == 0){
                s.goTo(s.$owlItems.length);
            }else{
                s.goTo(--s.currentItem);
            }
        }
    }
};




/*
* Function will handle vertical-align columns
* */
arcadeStyle.VerticalAlign = function(){
    var $columns = $('.__featured--single');

    function v_align(){
        if( $columns.length > 0 ){
            $columns.each(function(){
                var $cur = $(this),
                    $left = $cur.children('div').eq(0),
                    $right = $cur.children('div').eq(1),
                    leftHeight = $left.outerHeight(),
                    rightHeight = $right.outerHeight();

                if( leftHeight > rightHeight && !__screen.__small() ){
                    var total = ( leftHeight - rightHeight ) / 2;
                    $right.children().css({ marginTop: total });
                }

                if( leftHeight < rightHeight && !__screen.__small() ){
                    var total = ( rightHeight - leftHeight ) / 2;
                    $left.children().css({ marginTop: total });
                }


                if( __screen.__small() ){
                    $left.children().css({ marginTop: 'auto' });
                    $right.children().css({ marginTop: 'auto' });
                }
            });
        }
    }


    function v_align_mainSlider(){
        var $slider = $('.__main--slider'),
            $sliderItems = $slider.find('.__slide-item')

        $sliderItems.each(function(){
            var $curItem = $(this),
                thisHeight = $curItem.outerHeight(),
                $content = $curItem.find('.__slider--content'),
                contentHeight = $content.outerHeight();


            if( !__screen.__small() ){
                var total = ( thisHeight - contentHeight ) / 2;
                $content.css({ paddingTop: total });
            }


            if( __screen.__small() ){
                var total = thisHeight - contentHeight,
                    hasImage = $content.find('img').length > 0,
                    $image = hasImage ? $content.find('img') : $('<img />');

                if( hasImage ){
                    total = (total - $image.outerHeight() ) / 2;
                }else{
                    total = total / 2;
                }

                $content.css({ paddingTop: total });
            }
        });
    }

    arcadeStyle.addResizeQueue(v_align);
    arcadeStyle.addResizeQueue(v_align_mainSlider);
};





/*
* Function will store queue for window resize
* @return number -1
* */
arcadeStyle.RunResizeQueueStored = function(){ return -1; };

/*
* Function will queue new functions for window resize on the fly
* @param function fn
* */
arcadeStyle.addResizeQueue = function(fn){
    var old = function(){};
    if( this.RunResizeQueueStored() != -1 ){
        old = this.RunResizeQueueStored;
    }

    if( fn != undefined ){
        this.RunResizeQueueStored = function(){
            old();

            fn();
        };
    }else{
        throw Error('Function expected passed as parameter.');
    }
};





/*
* Function to start all plugins and events in website
* @return
* */
arcadeStyle.start = function(){

    this.NavigationDrawer();
    this.ArcadeUISelect();
    this.StickyItems();
    this.Sliders();
    this.VerticalAlign();



    this.listenEvents();
};


/*
* Function to start all the event listeners over website
* @return
* */
arcadeStyle.listenEvents = function(){

    $('body').on('click', '.menu-button', function(){
        var $drawer = $('.drawer');

        if( $(this).hasClass('close-drawer') ){
            $drawer.drawer("close");

            return false;
        }

        $drawer.drawer("open");
    })
        .on('click', '.__drawer-navigation > ul > li.js-can-collapse > a', function(e){
            e.preventDefault();e.stopPropagation();

            $(this).closest('li').toggleClass('__is-expanded');
            $(window).trigger('updated:props');
            return false;
        })

        .on('click', '.search-button', function(){
            $('body').toggleClass('__js-search--open');

            if( $('body').hasClass('__js-search--open') ){
                if(__timers['focusSearchInput'] != undefined){
                    clearTimeout(__timers['focusSearchInput']);
                }
                __timers['focusSearchInput'] = setTimeout(function(){
                    $('.__site-navigation.__cloned [name="q"]').trigger('focus');

                    var c = document.getElementsByClassName('__site-navigation __cloned'),
                        d = c[0],
                        input = d.getElementsByTagName('input')[1];

                    //input.focus();
                }, 500);
            }
        })

        .on('click', '.__slider--arrow', function(e){
            e.preventDefault();e.stopPropagation();

            arcadeStyle.SliderNavigate(__slider['main'], $(this));
        })
    ;




    $(window).on('resize', function(){
        delayed(arcadeStyle.RunResizeQueueStored, 100, 'valign');
    });

    $(window).on('load', function(){
        arcadeStyle.RunResizeQueueStored();
    });

};



/*
* Function shorthand for arcadeStyle.start
* @return
* */
function startWebsite(){
    arcadeStyle.start();
}

/*
* jQuery Event DOMReady to start all plugins and website functionality
* */
$(document).on('ready', function(){
    startWebsite();
});