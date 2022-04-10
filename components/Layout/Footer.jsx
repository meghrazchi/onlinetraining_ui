import react from "react";

export default function Footer() {
    return(
        <footer className="footer-1 gradient-bg ptb-60 footer-with-newsletter">
            <div className="container">
                <div className="row newsletter-wrap primary-bg rounded shadow-lg p-5">
                    <div className="col-md-6 col-lg-7 mb-4 mb-md-0 mb-sm-4 mb-lg-0">
                        <div className="newsletter-content text-white">
                            <h3 className="mb-0 text-white">Subscribe our Newsletter</h3>
                            <p className="mb-0">We’re a team of non-cynics who truly care for our work.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-5">
                        <form className="newsletter-form position-relative">
                            <input type="text" className="input-newsletter form-control" placeholder="Enter your email"
                                   name="email" required="" autoComplete="off" />
                                <button type="submit" className="disabled"><i className="fas fa-paper-plane"></i>
                                </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-4 mb-4 mb-md-4 mb-sm-4 mb-lg-0">
                        <a href="#" className="navbar-brand mb-2">
                            <img src="assets/img/logo-white.png" alt="logo" className="img-fluid" />
                        </a>
                        <br />
                        <p>Dynamically re-engineer high standards in functiona with alternative paradigms.
                            Conveniently monetize resource maximizing initiatives.</p>
                        <div className="list-inline social-list-default background-color social-hover-2 mt-2">
                            <li className="list-inline-item"><a className="twitter" href="#"><i
                                className="fab fa-twitter"></i></a></li>
                            <li className="list-inline-item"><a className="youtube" href="#"><i
                                className="fab fa-youtube"></i></a></li>
                            <li className="list-inline-item"><a className="linkedin" href="#"><i
                                className="fab fa-linkedin-in"></i></a></li>
                            <li className="list-inline-item"><a className="dribbble" href="#"><i
                                className="fab fa-dribbble"></i></a></li>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-8">
                        <div className="row mt-0">
                            <div className="col-sm-6 col-md-3 col-lg-3 mb-4 mb-sm-4 mb-md-0 mb-lg-0">
                                <h6 className="text-uppercase">Resources</h6>
                                <ul>
                                    <li>
                                        <a href="#">Help</a>
                                    </li>
                                    <li>
                                        <a href="#">Events</a>
                                    </li>
                                    <li>
                                        <a href="#">Live sessions</a>
                                    </li>
                                    <li>
                                        <a href="#">Open source</a>
                                    </li>
                                    <li>
                                        <a href="#">Documentation</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 mb-4 mb-sm-4 mb-md-0 mb-lg-0">
                                <h6 className="text-uppercase">Products</h6>
                                <ul>
                                    <li>
                                        <a href="#">Pricing</a>
                                    </li>
                                    <li>
                                        <a href="#">Navigation</a>
                                    </li>
                                    <li>
                                        <a href="#">AI Studio</a>
                                    </li>
                                    <li>
                                        <a href="#">Page Speed </a>
                                    </li>
                                    <li>
                                        <a href="#">Performance</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 mb-4 mb-sm-4 mb-md-0 mb-lg-0">
                                <h6 className="text-uppercase">Company</h6>
                                <ul>
                                    <li>
                                        <a href="#">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Careers</a>
                                    </li>
                                    <li>
                                        <a href="#">Customers</a>
                                    </li>
                                    <li>
                                        <a href="#">Community</a>
                                    </li>
                                    <li>
                                        <a href="#">Our Team</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3">
                                <h6 className="text-uppercase">Support</h6>
                                <ul>
                                    <li>
                                        <a href="#">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="#">Sells</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact Support</a>
                                    </li>
                                    <li>
                                        <a href="#">Network Status</a>
                                    </li>
                                    <li>
                                        <a href="#">Product Services</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}