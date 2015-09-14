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
* */
var arcadeStyle = {}, __timers = [], __slider = [];


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
    __slider['main'] = $(".__main--slider");
    __slider['main'].owlCarousel({
        // autoPlay: -1, //Set AutoPlay to 3 seconds
        items : 1,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [979,1],
        itemsTablet : [768,1],
        itemsMobile : [480,1],
        autoHeight : true,
        slideSpeed: 800,
        //responsiveRefreshRate: 200,
        //afterAction: app.getCurrent
    });
    __slider['main'] = $(".__main--slider").data('owlCarousel');
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
    ;
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