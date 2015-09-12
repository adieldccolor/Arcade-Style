/*
* This file is intended for arcade beauty website
* Author: Adiel Hercules
* Copyright (c) Arcade Beauty
* */



/*
* Define variables
* @var object arcadeStyle: contains all website functionality api
* @var array __timers: this will store all timers for delayed actions
* */
var arcadeStyle = {}, __timers = [];


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
        var $cloned = $cur.clone().addClass('__cloned');

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
* Function to start all plugins and events in website
* @return
* */
arcadeStyle.start = function(){

    this.NavigationDrawer();
    this.ArcadeUISelect();



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

            if( !$('body').hasClass('__js-search--open') ){
                if(__timers['focusSearchInput'] != undefined){
                    clearTimeout(__timers['focusSearchInput']);
                }
                __timers['focusSearchInput'] = setTimeout(function(){
                    $('.__site-navigation.__cloned [name="q"]').trigger('focus');
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