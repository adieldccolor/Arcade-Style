<?php

require_once "routes.php";

define("TEMPLATE","default");

class Template{

    public static function renderpage(){
        include "layouts/" . constant("TEMPLATE") . ".layout.php";
    }

    public static function getHeader(){
        include "layouts/partials/" . constant("TEMPLATE") . ".header.php";
    }

    public static function getFooter(){
        include "layouts/partials/" . constant("TEMPLATE") . ".footer.php";
    }

    public static function getPage(){
        global $routes;
        include "views/index.html";
    }

}



// helpers
function asset($file){
    if( $file[0] != "/" ) $file = "/" . $file;
    return "assets" . $file;
}

function url($url){
    return $url;
}

function get_page_url($page){
    return "?page=" . $page;
}