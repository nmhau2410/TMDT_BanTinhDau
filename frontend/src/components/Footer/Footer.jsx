import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="site-footer">

            <div className="footer-container">

                {/* Brand */}
                <div className="footer-brand">

                    <a
                        href="/"
                        className="footer-logo"
                    >
                        <span className="footer-logo__icon"></span>
                        <span>Oilia</span>
                    </a>

                    <p>
                        Welcome to Estrella, where brilliance
                        <br />
                        meets innovation!
                        <br />
                        We are a leading company dedicated
                        <br />
                        to delivering exceptional products
                        <br />
                        and services to cater to your needs.
                    </p>

                </div>

                {/* Categories */}
                <div className="footer-column">

                    <h3>Categories</h3>

                    <a href="/fashion">Fashion</a>
                    <a href="/jewelry">Jewelry</a>
                    <a href="/sports">Sports</a>
                    <a href="/electronics">
                        Electronics
                    </a>
                    <a href="/indoor">Indoor</a>

                </div>

                {/* Shopping */}
                <div className="footer-column">

                    <h3>Shopping</h3>

                    <a href="/payments">Payments</a>
                    <a href="/delivery">
                        Delivery options
                    </a>
                    <a href="/buyer-protection">
                        Buyer protection
                    </a>

                </div>

                {/* Customer care */}
                <div className="footer-column">

                    <h3>Customer care</h3>

                    <a href="/help-center">
                        Help center
                    </a>

                    <a href="/terms">
                        Terms &amp; Conditions
                    </a>

                    <a href="/privacy">
                        Privacy policy
                    </a>

                    <a href="/returns">
                        Returns &amp; refund
                    </a>

                    <a href="/feedback">
                        Survey &amp; feedback
                    </a>

                </div>

                {/* Pages */}
                <div className="footer-column">

                    <h3>Pages</h3>

                    <a href="/about">About Us</a>
                    <a href="/shop">Shop</a>
                    <a href="/contact">
                        Contact Us
                    </a>
                    <a href="/services">
                        Services
                    </a>
                    <a href="/blog">Blog</a>

                </div>

                {/* Subscribe */}
                <div className="footer-subscribe">

                    <h3>Subscribe Now</h3>

                    <div className="subscribe-form">

                        <input
                            type="email"
                            placeholder="Your email"
                        />

                        <button type="button">
                            Submit
                        </button>

                    </div>

                    <div className="footer-social">

                        <a href="#" aria-label="Facebook">
                            f
                        </a>

                        <a href="#" aria-label="Twitter">
                            𝕏
                        </a>

                        <a href="#" aria-label="Instagram">
                            ◎
                        </a>

                        <a href="#" aria-label="LinkedIn">
                            in
                        </a>

                    </div>

                </div>

            </div>

            <div className="footer-bottom">
        <span>
          © 2023 oilia Inc. All rights reserved
        </span>
            </div>

        </footer>
    );
}