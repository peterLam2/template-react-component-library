import React from "react";



export function Rightside() {
    return (
        <>
        <div id="rightbar" className="rightbar">
        <ul className="nav nav-tabs-new">
            <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#setting">Settings</a></li>
            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#chat">Chat</a></li>            
        </ul>
        <div className="tab-content">
            <div className="tab-pane active" id="setting">
                <div className="slim_scroll">
                    <div className="card">
                        <h6>Choose Theme</h6>
                        <ul className="choose-skin list-unstyled mb-0">
                            <li data-theme="purple"><div className="purple"></div></li>
                            <li data-theme="green"><div className="green"></div></li>
                            <li data-theme="orange" className="active"><div className="orange"></div></li>
                            <li data-theme="blue"><div className="blue"></div></li>
                            <li data-theme="blush"><div className="blush"></div></li>
                            <li data-theme="cyan"><div className="cyan"></div></li>
                        </ul>
                    </div>
                    <div className="card">
                        <h6>General Settings</h6>
                        <ul className="setting-list list-unstyled mb-0">
                            <li>
                                <label className="fancy-checkbox">
                                    <input type="checkbox" name="checkbox"/>
                                    <span>Report Panel Usag</span>
                                </label>
                            </li>
                            <li>
                                <label className="fancy-checkbox">
                                    <input type="checkbox" name="checkbox" checked/>
                                    <span>Email Redirect</span>
                                </label>
                            </li>
                            <li>
                                <label className="fancy-checkbox">
                                    <input type="checkbox" name="checkbox" checked/>
                                    <span>Notifications</span>
                                </label>                      
                            </li>
                            <li>
                                <label className="fancy-checkbox">
                                    <input type="checkbox" name="checkbox"/>
                                    <span>Auto Updates</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="card">
                        <h6>Account Settings</h6>
                        <ul className="setting-list list-unstyled mb-0">
                            <li>
                                <label className="fancy-checkbox">
                                    <input type="checkbox" name="checkbox"/>
                                    <span>Offline</span>
                                </label>
                            </li>
                            <li>
                                <label className="fancy-checkbox">
                                    <input type="checkbox" name="checkbox" checked/>
                                    <span>Location Permission</span>
                                </label>
                            </li>
                            <li>
                                <label className="fancy-checkbox">
                                    <input type="checkbox" name="checkbox" checked/>
                                    <span>Notifications</span>
                                </label>                      
                            </li>
                        </ul>
                    </div>                    
                </div>                
            </div>       
            <div className="tab-pane right_chat" id="chat">
                <div className="slim_scroll">
                    <form>
                        <div className="input-group m-b-20">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="icon-magnifier"></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="Search..."/>
                        </div>
                    </form>
                    <div className="card">
                        <h6>Recent</h6>                        
                        <ul className="right_chat list-unstyled mb-0">
                            <li className="online">
                                <a href="javascript:void(0);">
                                    <div className="media">
                                        <img className="media-object " src="./assets/images/xs/avatar4.jpg" alt=""/>
                                        <div className="media-body">
                                            <span className="name">Ava Alexander <small className="float-right">Just now</small></span>
                                            <span className="message">Lorem ipsum Veniam aliquip culpa laboris minim tempor</span>
                                            <span className="badge badge-outline status"></span>
                                        </div>
                                    </div>
                                </a>                            
                            </li>
                            <li className="online">
                                <a href="javascript:void(0);">
                                    <div className="media">
                                        <img className="media-object " src="./assets/images/xs/avatar5.jpg" alt=""/>
                                        <div className="media-body">
                                            <span className="name">Debra Stewart <small className="float-right">38min ago</small></span>
                                            <span className="message">Many desktop publishing packages and web page editors</span>
                                            <span className="badge badge-outline status"></span>
                                        </div>
                                    </div>
                                </a>                            
                            </li>
                            <li className="offline">
                                <a href="javascript:void(0);">
                                    <div className="media">
                                        <img className="media-object " src="./assets/images/xs/avatar2.jpg" alt=""/>
                                        <div className="media-body">
                                            <span className="name">Susie Willis <small className="float-right">2hr ago</small></span>
                                            <span className="message">Contrary to belief, Lorem Ipsum is not simply random text</span>
                                            <span className="badge badge-outline status"></span>
                                        </div>
                                    </div>
                                </a>                            
                            </li>
                            <li className="offline">
                                <a href="javascript:void(0);">
                                    <div className="media">
                                        <img className="media-object " src="./assets/images/xs/avatar1.jpg" alt=""/>
                                        <div className="media-body">
                                            <span className="name">Folisise Chosielie <small className="float-right">2hr ago</small></span>
                                            <span className="message">There are many of passages of available, but the majority</span>
                                            <span className="badge badge-outline status"></span>
                                        </div>
                                    </div>
                                </a>                            
                            </li>
                            <li className="online">
                                <a href="javascript:void(0);">
                                    <div className="media">
                                        <img className="media-object " src="./assets/images/xs/avatar3.jpg" alt=""/>
                                        <div className="media-body">
                                            <span className="name">Marshall Nichols <small className="float-right">1day ago</small></span>
                                            <span className="message">It is a long fact that a reader will be distracted</span>
                                            <span className="badge badge-outline status"></span>
                                        </div>
                                    </div>
                                </a>                            
                            </li>                        
                        </ul>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
    </>
    )
}