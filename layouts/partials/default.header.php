<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Arcade Style</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1 user-scalable=no">
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/select2.min.css">
    <link rel="stylesheet" href="assets/css/drawer.css">

    <link rel="stylesheet" href="assets/css/owl.carousel.css">
    <link rel="stylesheet" href="assets/css/owl.transitions.css">

    <link rel="stylesheet" href="assets/css/style.css">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body class="drawer drawer-right">


<nav class="__navigation __site-navigation __static">

    <div class="__navigation-content">
        <div class="container __container-fluid">
        <span class="brand-logo">
            <a href="<?php echo get_page_url("index"); ?>"><img src="assets/images/logotype.png" alt="Arcade Beauty" /></a>
        </span>

            <div class="navigation-buttons">
                <ul>
                    <li><a href="javascript:;" class="search-button"><i class="icon-magnify"></i></a>
                        <div class="arrow--search-bar"><div class="arrow--inner"></div></div></li>
                    <li class="hidden-xs"><a href="javascript:;" class="button">CONTACT US</a></li>
                    <li class="nav-divider hidden-xs"></li>
                    <li><a href="javascript:;" class="menu-button">
                        <span class="nav-icon">
                            <i class="icon-lines-nav"></i>
                        </span>
                        <span class="menu-button-text __text-open">
                            MENU
                        </span>
                        </a></li>
                </ul>
            </div>
        </div>
    </div>

    <div class="__search--bar">
        <div class="container">
            <form action="">
                <input type="hidden" name="page" value="search" />
                <input type="text" name="q" id="search-query" placeholder="Search Technologies..." />
                <button type="submit" class="__search-icon">
                    <i class="icon-magnify"></i>
                </button>
            </form>
        </div>
    </div>
</nav>







<header role="banner">
    <div class="drawer-main drawer-arcade-style">
        <div class="__drawer-content">
            <div class="__navigation">
                <div class="navigation-buttons">
                    <ul>
                        <li><a href="javascript:;" class="menu-button close-drawer">
                        <span class="nav-icon __close-icon">
                            <i class="icon-close-nav"></i>
                        </span>
                        <span class="menu-button-text">
                            CLOSE
                        </span>
                            </a></li>
                    </ul>
                </div>
            </div>

            <div class="__drawer-navigation">
                <ul>
                    <li>
                        <a href="<?php echo get_page_url("technologies"); ?>">Our technologies</a>
                        <ul>
                            <li><a href="javascript:;">Fragrance</a></li>
                            <li><a href="javascript:;">Makeup</a></li>
                            <li><a href="javascript:;">Skincare</a></li>
                            <li><a href="javascript:;">Haircare</a></li>
                            <li><a href="javascript:;">Personal Care</a></li>
                            <li><a href="javascript:;">All Technologies</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="<?php echo get_page_url("capabilities"); ?>">Our capabilities</a>
                        <ul>
                            <li><a href="javascript:;">Fragrance</a></li>
                            <li><a href="javascript:;">Makeup</a></li>
                            <li><a href="javascript:;">Skincare</a></li>
                            <li><a href="javascript:;">Haircare</a></li>
                            <li><a href="javascript:;">Personal Care</a></li>
                            <li><a href="javascript:;">All Technologies</a></li>
                        </ul>
                    </li>
                    <li><a href="<?php echo get_page_url("about"); ?>">About us</a></li>
                    <li><a href="<?php echo get_page_url("contact"); ?>">Contact us</a></li>
                    <li>
                        <select name="language" id="language" class="__arcade-ui-select form-control">
                            <option value="en-us">English</option>
                            <option value="es-es">Spanish</option>
                        </select>
                    </li>


                </ul>
            </div>
        </div>
    </div>
</header>

<div class="drawer-overlay">
    <!-- content -->
</div>