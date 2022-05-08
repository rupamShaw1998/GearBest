import "../styles/Navbar.css";
import {Link} from 'react-router-dom'
import {CartPage} from '../components/CartPage'

export const Navbar = () => {
    return (
        <div id="nav">
            <div id="nav-up">
                <div id="nav-up-image">
                    <a href="https://www.gearbest.com/">
                        <img src="https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png?imbypass=true" />
                    </a>
                </div>
                <div id="nav-up-right">
                    <div id="nav-settings">
                        <div id="save-app">
                            <div style={{display: "flex"}}>
                                <img src="https://pixsector.com/cache/753f2096/avb4326d4ac628bc1c307.png" />
                                <p>Save $3 with App</p> 
                            </div>                                    
                            <div className="dropdown" id="save-App">
                                <h4 style={{textAlign: "left", margin: "25px 0 -10px 20px"}}>Download App!</h4>
                                <p style={{textAlign: "left", marginLeft: "20px"}}>Save $3 with App & New User Only</p>
                                <div style={{display: "flex"}}>
                                    <img style={{width: "100px", height: "100px", marginLeft: "20px"}} src="https://images.all-free-download.com/images/graphiclarge/qr_code_198897.jpg" alt="" />
                                    <div id="download">
                                        <img style={{width: "125px", height: "45px", marginLeft: "5px"}} src="https://www.pikpng.com/pngl/m/506-5064409_apple-ios-download-on-apple-store-clipart.png" alt="" />
                                        <img style={{width: "120px", height: "40px", marginLeft: "5px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/640px-Google_Play_Store_badge_EN.svg.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Support Center</p>
                        </div>
                        <div>
                            <p>Ship to US/USD</p>
                        </div>
                        <div id="lang">
                            <p>Language</p>
                            <div className="dropdown languages">
                                <p>Global(English)</p>
                                <p>France</p>
                                <p>Espana</p>
                                <p>Portugal</p>
                                <p>Italia</p>
                                <p>Duetschland</p>
                                <p>Brasil</p>
                                <p>Tukiye</p>
                                <p>Polska</p>
                                <p>Japan</p>
                            </div>
                        </div>
                        <div id="country">
                            <p>Country Website</p>
                            <div className="dropdown languages">
                                <p>Global(English)</p>
                                <p>France</p>
                                <p>Espana</p>
                                <p>Portugal</p>
                                <p>Italia</p>
                                <p>Duetschland</p>
                                <p>Brasil</p>
                                <p>Tukiye</p>
                                <p>Polska</p>
                                <p>Japan</p>
                            </div>
                        </div>
                    </div>
                    <div id="nav-functions">
                        <div id="input-box">
                            <input type="text" placeholder="Search Gadgets" />
                            <img src="https://cdn.iconscout.com/icon/free/png-256/search-1768073-1502246.png" alt="" />
                        </div>
                        <div id="signIn">                          
                            <div style={{display: "flex"}}>
                                <img style={{width: "19px", height: "19px"}} src="http://cdn.onlinewebfonts.com/svg/img_212095.png" alt="" />
                                <div>Sign In</div>
                            </div>
                            <div className="dropdown" id="sign-box">
                                <p>Welcome to Gearbest</p>
                                <button id="yellow-btn">Sign In</button>
                                <div id="google">
                                    <div style={{color: "grey"}}>or connect via</div>
                                    <img src="https://freepngimg.com/download/google/66903-google-pay-gboard-platform-logo-cloud.png" alt="" />
                                </div>
                                <p style={{paddingTop: "22px", borderTop: "1px solid rgb(196, 196, 196)"}}>Register on Gearbest: Earn 10 points</p>
                                <button id="blue-btn">Register</button>
                            </div>
                        </div>
                        <div id="favorites">
                            <div style={{display: "flex"}}>
                                <img style={{width: "19px", height: "19px"}} src="https://cdn-icons-png.flaticon.com/512/73/73814.png" alt="" />
                                <div>Favorites</div>
                            </div>
                            <div className="dropdown">
                                
                            </div>
                        </div>
                        <div id="cart">
                            <div style={{display: "flex"}}>
                                <img style={{width: "19px", height: "19px"}} src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />
                                <Link to={'/productDetails/cart/:id'} style={{textDecoration: "none", color: "black"}}>
                                <div>Cart</div>
                                </Link>
                            </div>
                            {/* <div className="dropdown">
                                
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div id="nav-down">
                <div id="category">
                    <p style={{marginTop: "5px", fontWeight: "bold"}}>Category</p>
                    <div className="languages" style={{position: "absolute", opacity: "0.8", backgroundColor: "white", color: "black", margin: "-6px 0 0 -70px", width: "210px", height: "500px"}}>
                        <p style={{marginLeft: "5px"}}>Consumer Electronics</p>
                        <p style={{marginLeft: "5px"}}>Industrial & Scientific</p>
                        <p style={{marginLeft: "5px"}}>Cell Phones & Accessories</p>
                        <p style={{marginLeft: "5px"}}>Appliances</p>
                        <p style={{marginLeft: "5px"}}>Outdoors, Fitness & Sports</p>
                        <p style={{marginLeft: "5px"}}>Computer, Tablets & Office</p>
                        <p style={{marginLeft: "5px"}}>Health & Personal Care</p>
                        <p style={{marginLeft: "5px"}}>Home Improvement & Tools</p>
                        <p style={{marginLeft: "5px"}}>Drones, Toys & Hobbies</p>
                        <p style={{marginLeft: "5px"}}>Home & Garden</p>
                        <p style={{marginLeft: "5px"}}>Motor & Car Electronics</p>
                        <p style={{marginLeft: "5px"}}>Watches & Jewelry</p>
                        <p style={{marginLeft: "5px"}}>Gearbest Promotion</p>
                    </div>
                </div>
                <div style={{fontWeight: "bold"}}>COUPON</div>
                <div style={{fontWeight: "bold"}}>SUPER DEALS</div>
                <div style={{fontWeight: "bold"}}>APP ONLY</div>
                <div style={{fontWeight: "bold"}}>NEW ARRIVALS</div>
            </div>
        </div>
    );
};

