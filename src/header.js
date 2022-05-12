import React from "react";
import {Link} from "react-router-dom"


/*

<header id="ht-header" class="">
        <div class="mobile-control-toggle">
        <div class="container"><button type="button" class="mobile-nav-toggle" data-target="#menu-list"><span class="sr-only">Toggle mobile menu</span><span class="icon-bar icon-bar-1"></span><span class="icon-bar icon-bar-2"></span><span class="icon-bar icon-bar-3"></span></button></div>
        </div>
        <div class="mobile-nav">
        <form class="ht-search-form" action="#"><input type="text" placeholder="Type keyword ..." class=""/><button type="button" class="ht-search-form-toggle"><span class="sr-only">Toggle search</span><i class="fa fa-search"></i></button></form>
        <ul>
            <li class="current-menu-item menu-item-has-children dropdown-menu">
                <i class="sub-menu-toggle fa fa-chevron-down"></i><a href="">Properties</a>
                <ul>
                    <li class="menu-item-has-children">
                    <i class="sub-menu-toggle fa fa-chevron-down"></i><a href="">Menu level 2</a>
                    <ul>
                        <li><a href=""><i class="fa fa-book"></i>Menu level 3</a></li>
                        <li><a href=""><i class="fa fa-bullhorn"></i>Menu level 3</a></li>
                        <li><a href=""><i class="fa fa-coffee"></i>Menu level 3</a></li>
                        <li><a href=""><i class="fa fa-gear"></i>Menu level 3</a></li>
                    </ul>
                    </li>
                    <li class="menu-item-has-children">
                    <i class="sub-menu-toggle fa fa-chevron-down"></i><a href="">Menu level 2</a>
                    <ul>
                        <li><a href=""><i class="fa fa-book"></i>Menu level 3</a></li>
                        <li><a href=""><i class="fa fa-bullhorn"></i>Menu level 3</a></li>
                        <li><a href=""><i class="fa fa-coffee"></i>Menu level 3</a></li>
                        <li><a href=""><i class="fa fa-gear"></i>Menu level 3</a></li>
                    </ul>
                    </li>
                    <li class="menu-item-has-children">
                    <i class="sub-menu-toggle fa fa-chevron-down"></i><a href="">Menu level 2</a>
                    <ul>
                        <li><a href=""><i class="fa fa-book"></i>Menu level 3</a></li>
                        <li><a href=""><i class="fa fa-bullhorn"></i>Menu level 3</a></li>
                        <li><a href=""><i class="fa fa-coffee"></i>Menu level 3</a></li>
                        <li><a href=""><i class="fa fa-gear"></i>Menu level 3</a></li>
                    </ul>
                    </li>
                    <li class="menu-item-has-children">
                    <i class="sub-menu-toggle fa fa-chevron-down"></i><a href="">Menu level 2</a>
                    <ul>
                        <li><a href=""><i class="fa fa-book"></i>Menu level 3</a></li>
                        <li><a href=""><i class="fa fa-bullhorn"></i>Menu level 3</a></li>
                        <li><a href=""><i class="fa fa-coffee"></i>Menu level 3</a></li>
                        <li><a href=""><i class="fa fa-gear"></i>Menu level 3</a></li>
                    </ul>
                    </li>
                </ul>
            </li>
            <li class="mega-menu menu-item-has-children">
                <i class="sub-menu-toggle fa fa-chevron-down"></i><a href="">Agents</a>
                <ul>
                    <li class="menu-item-has-children">
                    <i class="sub-menu-toggle fa fa-chevron-down"></i><a href="">MENU LEVEL 2</a>
                    <ul>
                        <li><a href=""><i class="fa fa-book"></i>Menu level 3</a></li>
                        <li><a href=""><i class="fa fa-bullhorn"></i>Menu level 3</a></li>
                        <li><a href=""><i class="fa fa-coffee"></i>Menu level 3</a></li>
                        <li><a href=""><i class="fa fa-gear"></i>Menu level 3</a></li>
                    </ul>
                    </li>
                    <li class="menu-item-has-children">
                    <i class="sub-menu-toggle fa fa-chevron-down"></i><a href="">MENU LEVEL 2</a>
                    <ul>
                        <li><a href=""><i class="fa fa-book"></i>Menu level 3</a></li>
                        <li><a href=""><i class="fa fa-bullhorn"></i>Menu level 3</a></li>
                        <li><a href=""><i class="fa fa-coffee"></i>Menu level 3</a></li>
                        <li><a href=""><i class="fa fa-gear"></i>Menu level 3</a></li>
                    </ul>
                    </li>
                    <li class="menu-item-has-children">
                    <i class="sub-menu-toggle fa fa-chevron-down"></i><a href="">MENU LEVEL 2</a>
                    <ul>
                        <li><a href=""><i class="fa fa-book"></i>Menu level 3</a></li>
                        <li><a href=""><i class="fa fa-bullhorn"></i>Menu level 3</a></li>
                        <li><a href=""><i class="fa fa-coffee"></i>Menu level 3</a></li>
                        <li><a href=""><i class="fa fa-gear"></i>Menu level 3</a></li>
                    </ul>
                    </li>
                    <li class="menu-item-has-children">
                    <i class="sub-menu-toggle fa fa-chevron-down"></i><a href="">MENU LEVEL 2</a>
                    <ul>
                        <li><a href=""><i class="fa fa-book"></i>Menu level 3</a></li>
                        <li><a href=""><i class="fa fa-bullhorn"></i>Menu level 3</a></li>
                        <li><a href=""><i class="fa fa-coffee"></i>Menu level 3</a></li>
                        <li><a href=""><i class="fa fa-gear"></i>Menu level 3</a></li>
                    </ul>
                    </li>
                </ul>
            </li>
            <li><a href="">Pages</a></li>
            <li><a href="">Contact</a></li>
        </ul>
        </div>

        <div class="ht-main-navbar logo-center sticky-nav scroll-up-nav">
        <div class="container">
            <div class="inner">
                <h1 id="ht-logo"><a href="index.html"><img src="images/logo.png" alt=""/></a>Realty</h1>
                <div class="ht-main-nav-wrapper">
                    <nav id="ht-main-nav">
                    <ul>
                        <li class="current-menu-item menu-item-has-children dropdown-menu">
                            <a href="index.html">HOME</a>
                            <ul>
                                <li><a href="index.html"><i class="ht-foodie-012"></i>Home 1</a></li>
                                <li><a href="home-2.html"><i class="ht-foodie-055"></i>Home 2</a></li>
                                <li><a href="home-3.html"><i class="ht-foodie-063"></i>Home 3</a></li>
                            </ul>
                        </li>
                        <li class="menu-item-has-children dropdown-menu">
                            <a href="recipe_index.html">ALL RECIPES</a>
                            <ul>
                                <li class="menu-item-has-children">
                                <a href="#">Featured Recipes</a>
                                <ul>
                                    <li><a href="recipe_single.html"><i class="ht-foodie-055"></i>Recipe Single</a></li>
                                    <li><a href="recipe_single_video.html"><i class="ht-foodie-063"></i>Recipe Single With Video</a></li>
                                </ul>
                                </li>
                                <li><a href="recipe_submit.html">Submit your recipe</a></li>
                                <li><a href="recipes_recent.html">Recent recipes</a></li>
                                <li><a href="search_advance.html">Search Advanced</a></li>
                                <li><a href="contributor.html">Contributor</a></li>
                                <li><a href="archives.html">Recipes Archives</a></li>
                            </ul>
                        </li>
                        <li class="menu-item-has-children dropdown-menu">
                            <a href="event_list.html">EVENT</a>
                            <ul>
                                <li><a href="event_list.html">Event List</a></li>
                                <li><a href="event_single.html">Event Single</a></li>
                            </ul>
                        </li>
                        <li class="menu-item-has-children dropdown-menu">
                            <a href="post_list.html">BLOG</a>
                            <ul>
                                <li><a href="post_list.html">Post List</a></li>
                                <li><a href="post_list_with_sidebar.html">Post List With Sidebar</a></li>
                                <li><a href="post_masonry.html">Post Masonry</a></li>
                                <li><a href="post_single.html">Post Single</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul>
                        <li><a href="contact.html">CONTACT</a></li>
                        <li class="mega-menu menu-item-has-children">
                            <a href="">PAGES</a>
                            <ul>
                                <li class="menu-item-has-children">
                                <a href="">HOME</a>
                                <ul>
                                    <li><a href="home.html"><i class="ht-foodie-046"></i>Home</a></li>
                                    <li><a href="home-2.html"><i class="ht-foodie-055"></i>Home 2</a></li>
                                    <li><a href="home-3.html"><i class="ht-foodie-063"></i>Home 3</a></li>
                                </ul>
                                </li>
                                <li class="menu-item-has-children">
                                <a href="">RECIPE</a>
                                <ul>
                                    <li><a href="recipe_index.html"><i class="ht-foodie-055"></i>Recipe Index</a></li>
                                    <li><a href="recipe_single.html"><i class="ht-foodie-063"></i>Recipe Single</a></li>
                                    <li><a href="recipe_single_video.html"><i class="ht-foodie-046"></i>Recipe Single Video</a></li>
                                    <li><a href="recipe_submit.html"><i class="ht-foodie-010"></i>Recipe Submit</a></li>
                                    <li><a href="recipes_recent.html"><i class="ht-foodie-011"></i>Recipes Recent</a></li>
                                    <li><a href="search_advance.html"><i class="ht-foodie-012"></i>Search Advance</a></li>
                                    <li><a href="editors_grid.html"><i class="ht-foodie-013"></i>Editors Grid</a></li>
                                    <li><a href="archives.html"><i class="ht-foodie-014"></i>Archives</a></li>
                                    <li><a href="contributor.html"><i class="ht-foodie-015"></i>Contributor</a></li>
                                </ul>
                                </li>
                                <li class="menu-item-has-children">
                                <a href="event_list.html">EVENT</a>
                                <ul>
                                    <li><a href="event_list.html"><i class="ht-foodie-055"></i>EVENT LIST</a></li>
                                    <li><a href="event_single.html"><i class="ht-foodie-063"></i>EVENT SINGLE</a></li>
                                </ul>
                                </li>
                                <li class="menu-item-has-children">
                                <a href="">BLOG</a>
                                <ul>
                                    <li><a href="post_list.html"><i class="ht-foodie-055"></i>Post List</a></li>
                                    <li><a href="post_list_with_sidebar.html"><i class="ht-foodie-063"></i>Post List With Sidebar</a></li>
                                    <li><a href="post_masonry.html"><i class="ht-foodie-046"></i>Post Masonry</a></li>
                                    <li><a href="post_single.html"><i class="ht-foodie-068"></i>Post Single</a></li>
                                </ul>
                                </li>
                                <li class="menu-item-has-children">
                                <a href="">OTHERS</a>
                                <ul>
                                    <li><a href="contact.html"><i class="ht-foodie-055"></i>Contact</a></li>
                                    <li><a href="404.html"><i class="ht-foodie-063"></i>404</a></li>
                                    <li><a href="faq.html"><i class="ht-foodie-046"></i>FAQ</a></li>
                                    <li><a href="page_general.html"><i class="ht-foodie-068"></i>Page General</a></li>
                                </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-item-has-children dropdown-menu">
                            <a href="">OTHERS</a>
                            <ul>
                                <li><a href="contact.html"><i class="ht-foodie-055"></i>Contact</a></li>
                                <li><a href="404.html"><i class="ht-foodie-063"></i>404</a></li>
                                <li><a href="faq.html"><i class="ht-foodie-046"></i>FAQ</a></li>
                                <li><a href="page_general.html"><i class="ht-foodie-068"></i>Page General</a></li>
                            </ul>
                        </li>
                        <li><a href="register_login.html">LOGIN</a></li>
                    </ul>
                    </nav>
                </div>
            </div>
        </div>
        </div>
    </header>
        
        
    
*/


const Header = () => {
    return ( 

    <header>
            <ul>
                <li><Link to={`/`}>
                    Accueil
                </Link></li>
                <li><Link to={'/aboutus'}>A propos</Link></li>
                <li><link to={'/favorites'}>Favoris</link></li>
            </ul>
        </header>
    

 
     );
}
 
export default Header;