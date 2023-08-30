import React from 'react'
import DropdownMenu from './DropdownMenu';
import Image from 'next/image';
import logo from '../../assets/images/menu/logo/1.jpg';
const accountMenuItems = [
    { label: 'My Account', link: 'login-register.html' },
    { label: 'Checkout', link: 'checkout.html' },
    { label: 'Sign In', link: 'login-register.html' },
];

const currencyMenuItems = [
    { label: 'EUR €', link: '#' },
    { label: 'USD $', link: '#' },
];

const languageMenuItems = [
    { label: 'English', link: '#' },
    { label: 'Français', link: '#' },
];

function Header() {

    const images = {
        logo: logo
    }

    return (
        <header>

            <div className="header-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-4">
                            <div className="header-top-left">
                                <ul className="phone-wrap">
                                    <li><span>Telephone Enquiry:</span><a href="#">(+123) 123 321 345</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-9 col-md-8">
                            <div className="header-top-right">
                                <ul className="ht-menu">
                                    <DropdownMenu title="Setting" items={accountMenuItems} />
                                    <DropdownMenu title="Currency :" items={currencyMenuItems} />
                                    <DropdownMenu title="Language :" items={languageMenuItems} />
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="header-middle pl-sm-0 pr-sm-0 pl-xs-0 pr-xs-0">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3">
                            <div className="logo pb-sm-30 pb-xs-30">
                                <a href="index.html">
                                    {/* <img src="images/menu/logo/1.jpg" alt="" /> */}
                                    <Image src={images.logo} alt="" width={190} height={45} />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-9 pl-0 ml-sm-15 ml-xs-15">

                            <form action="#" className="hm-searchbox">
                                <select className="nice-select select-search-category">
                                    <option value="0">All</option>
                                    <option value="10">Laptops</option>

                                </select>
                                <input type="text" placeholder="Enter your search key ..." />
                                <button className="li-btn" type="submit"><i className="fa fa-search"></i></button>
                            </form>

                            <div className="header-middle-right">
                                <ul className="hm-menu">

                                    <li className="hm-wishlist">
                                        <a href="wishlist.html">
                                            <span className="cart-item-count wishlist-item-count">0</span>
                                            <i className="fa fa-heart-o"></i>
                                        </a>
                                    </li>

                                    <li className="hm-minicart">
                                        <div className="hm-minicart-trigger">
                                            <span className="item-icon"></span>
                                            <span className="item-text">£160
                                                <span className="cart-item-count">2</span>
                                            </span>
                                        </div>
                                        <span></span>
                                        <div className="minicart">
                                            <ul className="minicart-product-list">
                                                <li>
                                                    <a href="single-product.html" className="minicart-product-image">
                                                        <img src="images/product/small-size/3.jpg" alt="cart products" />
                                                    </a>
                                                    <div className="minicart-product-details">
                                                        <h6><a href="single-product.html">Aenean eu tristique</a></h6>
                                                        <span>£80 x 1</span>
                                                    </div>
                                                    <button className="close">
                                                        <i className="fa fa-close"></i>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="single-product.html" className="minicart-product-image">
                                                        <img src="images/product/small-size/4.jpg" alt="cart products" />
                                                    </a>
                                                    <div className="minicart-product-details">
                                                        <h6><a href="single-product.html">Aenean eu tristique</a></h6>
                                                        <span>£80 x 1</span>
                                                    </div>
                                                    <button className="close">
                                                        <i className="fa fa-close"></i>
                                                    </button>
                                                </li>
                                            </ul>
                                            <p className="minicart-total">SUBTOTAL: <span>£160</span></p>
                                            <div className="minicart-button">
                                                <a href="checkout.html" className="li-button li-button-dark li-button-fullwidth li-button-sm">
                                                    <span>View Full Cart</span>
                                                </a>
                                                <a href="checkout.html" className="li-button li-button-fullwidth li-button-sm">
                                                    <span>Checkout</span>
                                                </a>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className="header-bottom header-sticky d-none d-lg-block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="hb-menu hb-menu-2 d-xl-block">
                                <nav>
                                    <ul>
                                        <li className="dropdown-holder"><a href="index.html">Home</a>
                                            <ul className="hb-dropdown">
                                                <li><a href="index.html">Home One</a></li>
                                                <li className="active"><a href="index-2.html">Home Two</a></li>
                                                <li><a href="index-3.html">Home Three</a></li>
                                                <li><a href="index-4.html">Home Four</a></li>
                                            </ul>
                                        </li>
                                        <li className="megamenu-holder"><a href="shop-left-sidebar.html">Shop</a>
                                            <ul className="megamenu hb-megamenu">
                                                <li><a href="shop-left-sidebar.html">Shop Page Layout</a>
                                                    <ul>
                                                        <li><a href="shop-3-column.html">Shop 3 Column</a></li>
                                                        <li><a href="shop-4-column.html">Shop 4 Column</a></li>
                                                        <li><a href="shop-left-sidebar.html">Shop Left Sidebar</a></li>
                                                        <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                                        <li><a href="shop-list.html">Shop List</a></li>
                                                        <li><a href="shop-list-left-sidebar.html">Shop List Left Sidebar</a></li>
                                                        <li><a href="shop-list-right-sidebar.html">Shop List Right Sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="single-product-gallery-left.html">Single Product Style</a>
                                                    <ul>
                                                        <li><a href="single-product-carousel.html">Single Product Carousel</a></li>
                                                        <li><a href="single-product-gallery-left.html">Single Product Gallery Left</a></li>
                                                        <li><a href="single-product-gallery-right.html">Single Product Gallery Right</a></li>
                                                        <li><a href="single-product-tab-style-top.html">Single Product Tab Style Top</a></li>
                                                        <li><a href="single-product-tab-style-left.html">Single Product Tab Style Left</a></li>
                                                        <li><a href="single-product-tab-style-right.html">Single Product Tab Style Right</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="single-product.html">Single Products</a>
                                                    <ul>
                                                        <li><a href="single-product.html">Single Product</a></li>
                                                        <li><a href="single-product-sale.html">Single Product Sale</a></li>
                                                        <li><a href="single-product-group.html">Single Product Group</a></li>
                                                        <li><a href="single-product-normal.html">Single Product Normal</a></li>
                                                        <li><a href="single-product-affiliate.html">Single Product Affiliate</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-holder"><a href="blog-left-sidebar.html">Blog</a>
                                            <ul className="hb-dropdown">
                                                <li className="sub-dropdown-holder"><a href="blog-left-sidebar.html">Blog Grid View</a>
                                                    <ul className="hb-dropdown hb-sub-dropdown">
                                                        <li><a href="blog-2-column.html">Blog 2 Column</a></li>
                                                        <li><a href="blog-3-column.html">Blog 3 Column</a></li>
                                                        <li><a href="blog-left-sidebar.html">Grid Left Sidebar</a></li>
                                                        <li><a href="blog-right-sidebar.html">Grid Right Sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li className="sub-dropdown-holder"><a href="blog-list-left-sidebar.html">Blog List View</a>
                                                    <ul className="hb-dropdown hb-sub-dropdown">
                                                        <li><a href="blog-list.html">Blog List</a></li>
                                                        <li><a href="blog-list-left-sidebar.html">List Left Sidebar</a></li>
                                                        <li><a href="blog-list-right-sidebar.html">List Right Sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li className="sub-dropdown-holder"><a href="blog-details-left-sidebar.html">Blog Details</a>
                                                    <ul className="hb-dropdown hb-sub-dropdown">
                                                        <li><a href="blog-details-left-sidebar.html">Left Sidebar</a></li>
                                                        <li><a href="blog-details-right-sidebar.html">Right Sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li className="sub-dropdown-holder"><a href="blog-gallery-format.html">Blog Format</a>
                                                    <ul className="hb-dropdown hb-sub-dropdown">
                                                        <li><a href="blog-audio-format.html">Blog Audio Format</a></li>
                                                        <li><a href="blog-video-format.html">Blog Video Format</a></li>
                                                        <li><a href="blog-gallery-format.html">Blog Gallery Format</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="megamenu-static-holder"><a href="index.html">Pages</a>
                                            <ul className="megamenu hb-megamenu">
                                                <li><a href="blog-left-sidebar.html">Blog Layouts</a>
                                                    <ul>
                                                        <li><a href="blog-2-column.html">Blog 2 Column</a></li>
                                                        <li><a href="blog-3-column.html">Blog 3 Column</a></li>
                                                        <li><a href="blog-left-sidebar.html">Grid Left Sidebar</a></li>
                                                        <li><a href="blog-right-sidebar.html">Grid Right Sidebar</a></li>
                                                        <li><a href="blog-list.html">Blog List</a></li>
                                                        <li><a href="blog-list-left-sidebar.html">List Left Sidebar</a></li>
                                                        <li><a href="blog-list-right-sidebar.html">List Right Sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="blog-details-left-sidebar.html">Blog Details Pages</a>
                                                    <ul>
                                                        <li><a href="blog-details-left-sidebar.html">Left Sidebar</a></li>
                                                        <li><a href="blog-details-right-sidebar.html">Right Sidebar</a></li>
                                                        <li><a href="blog-audio-format.html">Blog Audio Format</a></li>
                                                        <li><a href="blog-video-format.html">Blog Video Format</a></li>
                                                        <li><a href="blog-gallery-format.html">Blog Gallery Format</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="index.html">Other Pages</a>
                                                    <ul>
                                                        <li><a href="login-register.html">My Account</a></li>
                                                        <li><a href="checkout.html">Checkout</a></li>
                                                        <li><a href="compare.html">Compare</a></li>
                                                        <li><a href="wishlist.html">Wishlist</a></li>
                                                        <li><a href="shopping-cart.html">Shopping Cart</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="index.html">Other Pages 2</a>
                                                    <ul>
                                                        <li><a href="contact.html">Contact</a></li>
                                                        <li><a href="about-us.html">About Us</a></li>
                                                        <li><a href="faq.html">FAQ</a></li>
                                                        <li><a href="404.html">404 Error</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="contact.html">Contact</a></li>

                                        <li className="hb-info f-right p-0 d-sm-none d-lg-block">
                                            <span>6688 London, Greater London BAS 23JK, UK</span>
                                        </li>

                                    </ul>
                                </nav>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="mobile-menu-area d-lg-none d-xl-none col-12">
                <div className="container">
                    <div className="row">
                        <div className="mobile-menu">
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header