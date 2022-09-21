
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export function Leftside() {
    return (
        <>
            <div id="left-sidebar" className="sidebar">
                <div className="navbar-brand">
                    <Link to="/IndexPage"><img src="./assets/images/icon-dark.svg" alt="HexaBit Logo" className="img-fluid logo" /><span>HexaBit</span></Link>
                    <button type="button" className="btn-toggle-offcanvas btn btn-sm btn-default float-right"><i className="lnr lnr-menu fa fa-chevron-circle-left"></i></button>
                </div>
                <div className="sidebar-scroll">
                    <div className="user-account">
                        <div className="user_div">
                            <img src="./assets/images/user.png" className="user-photo" alt="User Profile Picture" />
                        </div>
                        <div className="dropdown">
                            <span>Welcome,</span>
                            <Link to="javascript:void(0);" className="dropdown-toggle user-name" data-toggle="dropdown"><strong>Christy Wert</strong></Link>
                            <ul className="dropdown-menu dropdown-menu-right account">
                                <li><Link to="page-profile.html"> <i className="icon-user"></i>My Profile</Link></li>
                                <li><Link to="app-inbox.html"><i className="icon-envelope-open"></i>Messages</Link></li>
                                <li><Link to="javascript:void(0);"><i className="icon-settings"></i>Settings</Link></li>
                                <li className="divider"></li>
                                <li><Link to="page-login.html"><i className="icon-power"></i>Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                    <nav id="left-sidebar-nav" className="sidebar-nav">
                        <ul id="main-menu" className="metismenu">
                            <li className="active"><Link to="/IndexPage"><i className="icon-home"></i><span>Dashboard</span></Link></li>
                            <li><Link to="/InboxPage"><i className="icon-envelope"></i><span>Inbox</span></Link></li>
                            <li><Link to="/app-chat"><i className="icon-bubbles"></i><span>Chat</span></Link></li>
                            <li>
                                <Link to="#uiElements" className="has-arrow"><i className="icon-diamond"></i><span>UI Elements</span></Link>
                                <ul>
                                    <li><Link to="ui-card.html">Card Layout</Link></li>
                                    <li><Link to="ui-helper-className.html">Helper classNamees</Link></li>
                                    <li><Link to="ui-bootstrap.html">Bootstrap UI</Link></li>
                                    <li><Link to="ui-typography.html">Typography</Link></li>
                                    <li><Link to="ui-tabs.html">Tabs</Link></li>
                                    <li><Link to="ui-buttons.html">Buttons</Link></li>
                                    <li><Link to="ui-icons.html">Icons</Link></li>
                                    <li><Link to="ui-notifications.html">Notifications</Link></li>
                                    <li><Link to="ui-colors.html">Colors</Link></li>
                                    <li><Link to="ui-dialogs.html">Dialogs</Link></li>
                                    <li><Link to="ui-list-group.html">List Group</Link></li>
                                    <li><Link to="ui-media-object.html">Media Object</Link></li>
                                    <li><Link to="ui-modals.html">Modals</Link></li>
                                    <li><Link to="ui-nestable.html">Nestable</Link></li>
                                    <li><Link to="ui-progressbars.html">Progress Bars</Link></li>
                                    <li><Link to="ui-range-sliders.html">Range Sliders</Link></li>
                                    <li><Link to="ui-treeview.html">Treeview</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="#forms" className="has-arrow"><i className="icon-pencil"></i><span>Forms</span></Link>
                                <ul>
                                    <li><Link to="forms-basic.html">Basic Elements</Link></li>
                                    <li><Link to="forms-advanced.html">Advanced Elements</Link></li>
                                    <li><Link to="forms-validation.html">Form Validation</Link></li>
                                    <li><Link to="forms-wizard.html">Form Wizard</Link></li>
                                    <li><Link to="forms-dragdropupload.html">Drag &amp; Drop Upload</Link></li>
                                    <li><Link to="forms-cropping.html">Image Cropping</Link></li>
                                    <li><Link to="forms-summernote.html">Summernote</Link></li>
                                    <li><Link to="forms-editors.html">CKEditor</Link></li>
                                    <li><Link to="forms-markdown.html">Markdown</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="#Tables" className="has-arrow"><i className="icon-tag"></i><span>Tables</span></Link>
                                <ul>
                                    <li><Link to="table-basic.html">Tables Example</Link></li>
                                    <li><Link to="table-normal.html">Normal Tables</Link></li>
                                    <li><Link to="table-jquery-datatable.html">Jquery Datatables</Link></li>
                                    <li><Link to="table-editable.html">Editable Tables</Link></li>
                                    <li><Link to="table-color.html">Tables Color</Link></li>
                                    <li><Link to="table-filter.html">Table Filter</Link></li>
                                    <li><Link to="table-dragger.html">Table dragger</Link></li>
                                </ul>
                            </li>
                            <li><Link to="app-taskboard.html"><i className="icon-list"></i><span>Taskboard</span></Link></li>
                            <li><Link to="app-calendar.html"><i className="icon-calendar"></i><span>Calendar</span></Link></li>
                            <li><Link to="app-contact.html"><i className="icon-book-open"></i><span>Contact</span></Link></li>
                            <li>
                                <Link to="#Blog" className="has-arrow"><i className="icon-globe"></i><span>Blog</span></Link>
                                <ul>
                                    <li><Link to="blog-dashboard.html">Dashboard</Link></li>
                                    <li><Link to="blog-post.html">New Post</Link></li>
                                    <li><Link to="blog-list.html">Blog List</Link></li>
                                    <li><Link to="blog-details.html">Blog Detail</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="#charts" className="has-arrow"><i className="icon-bar-chart"></i><span>Charts</span></Link>
                                <ul>
                                    <li><Link to="chart-morris.html">Morris</Link></li>
                                    <li><Link to="chart-flot.html">Flot</Link></li>
                                    <li><Link to="chart-chartjs.html">ChartJS</Link></li>
                                    <li><Link to="chart-c3.html">C3 Charts</Link></li>
                                    <li><Link to="chart-jquery-knob.html">Jquery Knob</Link></li>
                                    <li><Link to="chart-sparkline.html">Sparkline Chart</Link></li>
                                    <li><Link to="chart-peity.html">Peity</Link></li>
                                    <li><Link to="chart-gauges.html">Gauges</Link></li>
                                    <li><Link to="chart-e.html">E Chart</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="#Widgets" className="has-arrow"><i className="icon-puzzle"></i><span>Widgets</span></Link>
                                <ul>
                                    <li><Link to="widgets-statistics.html">Statistics</Link></li>
                                    <li><Link to="widgets-data.html">Data</Link></li>
                                    <li><Link to="widgets-chart.html">Chart</Link></li>
                                    <li><Link to="widgets-weather.html">Weather</Link></li>
                                    <li><Link to="widgets-social.html">Social</Link></li>
                                    <li><Link to="widgets-blog.html">Blog</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="#Authentication" className="has-arrow"><i className="icon-lock"></i><span>Authentication</span></Link>
                                <ul>
                                    <li><Link to="page-login.html">Login</Link></li>
                                    <li><Link to="page-register.html">Register</Link></li>
                                    <li><Link to="page-lockscreen.html">Lockscreen</Link></li>
                                    <li><Link to="page-forgot-password.html">Forgot Password</Link></li>
                                    <li><Link to="page-404.html">Page 404</Link></li>
                                    <li><Link to="page-403.html">Page 403</Link></li>
                                    <li><Link to="page-500.html">Page 500</Link></li>
                                    <li><Link to="page-503.html">Page 503</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="#Pages" className="has-arrow"><i className="icon-docs"></i><span>Pages</span></Link>
                                <ul>
                                    <li><Link to="page-blank.html">Blank Page</Link></li>
                                    <li><Link to="page-search-results.html">Search Results</Link></li>
                                    <li><Link to="page-profile.html">Profile </Link></li>
                                    <li><Link to="page-invoices.html">Invoices </Link></li>
                                    <li><Link to="page-gallery.html">Image Gallery</Link></li>
                                    <li><Link to="page-gallery2.html">Image Gallery </Link></li>
                                    <li><Link to="page-timeline.html">Timeline</Link></li>
                                    <li><Link to="page-timeline-h.html">Horizontal Timeline</Link></li>
                                    <li><Link to="page-pricing.html">Pricing</Link></li>
                                    <li><Link to="page-maintenance.html">Maintenance</Link></li>
                                    <li><Link to="page-testimonials.html">Testimonials</Link></li>
                                    <li><Link to="page-faq.html">FAQ</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="#Maps" className="has-arrow"><i className="icon-map"></i><span>Maps</span></Link>
                                <ul>
                                    <li><Link to="map-google.html">Google Map</Link></li>
                                    <li><Link to="map-jvectormap.html">jVector Map</Link></li>
                                    <li><Link to="map-yandex.html">Yandex Map</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        </>
    )
}