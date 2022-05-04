import "../styles/Navbar.css";

export const Navbar = () => {
    return (
        <div id="nav">
            <div id="nav-up">
                <div id="nav-up-image"><img src="https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png?imbypass=true" /></div>
                <div id="nav-up-right">
                    <div id="nav-settings">
                        <div>Save 3 with app</div>
                        <div>support center</div>
                        <div>ship to usd</div>
                        <div>Language</div>
                        <div>Country website</div>
                    </div>
                    <div id="nav-functions">
                        <div>
                            <input type="text" placeholder="search gadgets" />
                        </div>
                        <div>Sign In</div>
                        <div>Favorites</div>
                        <div>Cart</div>
                    </div>
                </div>
            </div>
            <div id="nav-down">
                <div>Category</div>
                <div>COUPON</div>
                <div>SUPER DEALS</div>
                <div>APP ONLY</div>
                <div>NEW ARRIVALS</div>
            </div>
        </div>
    );
};

