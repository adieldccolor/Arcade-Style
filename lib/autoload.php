<?php

require_once "routes.php";

define("TEMPLATE","default");

class Template{

    public static function renderpage(){
        include "layouts/" . constant("TEMPLATE") . ".layout.php";
    }

    public static function getHeader(){
        global $routes;

        include "layouts/partials/" . constant("TEMPLATE") . ".header.php";
    }

    public static function getFooter(){
        global $routes;

        include "layouts/partials/" . constant("TEMPLATE") . ".footer.php";
    }

    public static function getPage(){
        global $routes;

        if( get("page") == false ){
            include "views/index.html";
            return false;
        }

        $page = get("page");
        if( !in_array($page, $routes) || !file_exists("views/" . $page . ".html") ){
            echo "<pre>This page does not exist</pre>";
            return false;
        }

        include "views/" . $page . ".html";
    }

}



// helpers
function asset($file){
    if( $file[0] != "/" ) $file = "/" . $file;
    return "assets" . $file;
}

function get($var){
    return isset($_GET[$var]) ? $_GET[$var] : false;
}

function url($url){
    return $url;
}

function get_page_url($page){
    return "?page=" . $page;
}