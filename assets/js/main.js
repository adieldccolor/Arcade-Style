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
* Function to start all plugins and events in website
* @return
* */
arcadeStyle.start = function(){
    $('.drawer').drawer();

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