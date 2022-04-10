import react from "react";

export default function Hero() {

    return (
        <section className="position-relative ptb-100">
            <div className="fit-cover background-image-wraper position-absolute"></div>
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-12 col-lg-6">
                        <div className="section-heading py-5">
                            <h6 className="text-uppercase color-accent mb-1">For better Experience</h6>
                            <h1 className="font-weight-bolder display-4">Find Your Way to Learn English</h1>
                            <p className="lead">Start working with that can provide everything you need to generate
                                awareness, drive traffic, connect. Efficiently transform granular value with
                                client-focused.</p>
                            <div className="action-btns mt-3">
                                <a href="#" className="btn btn-brand-01 btn-rounded mr-3">Get Started</a>
                                <a href="https://www.youtube.com/watch?v=1APwq1df6Mw"
                                   className="popup-youtube btn btn-brand-03 btn-circle btn-icon"><i
                                    className="fas fa-play"></i> </a> <span className="pl-2">Watch Now</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-5">
                        <div className="hero-image-wrap">
                            <div className="content-img-wrap">
                                <img
                                    className="fancy-radius-1 hero-img-width img-custom-width img-fluid gray-light-bg z--1"
                                    src="assets/img/phone-with-men.png" alt="modern desk" />
                                    <div className="position-absolute dot-shape">
                                        <img src="assets/img/dot-shape.png" alt="appdash" />
                                    </div>
                                    <div className="animation-item d-none d-md-block d-lg-block">
                                        <div
                                            className="position-absolute rounded-custom d-flex bg-white hero-animated-card-4">
                                            <img src="assets/img/widget-img.jpg" alt="widget"
                                                 className="rounded-custom img-fluid" />
                                        </div>
                                        <div
                                            className="position-absolute p-4 w-75 rounded-custom d-flex bg-white hero-animated-card-1">
                                            <p className="gr-text-11 mb-0 text-mirage-2">“A better way to manage your
                                                sales, team, clients.”</p>
                                            <div className="small-card-img ml-3">
                                                <img src="assets/img/client/3.jpg" alt="" width="80px"
                                                     className="rounded-circle img-fluid" />
                                            </div>
                                        </div>
                                        <div className="position-absolute hero-animated-card-3">
                                            <img src="assets/img/custom-shape.svg" alt="shape" />
                                        </div>
                                        <div
                                            className="position-absolute p-4 w-75 rounded-custom d-flex secondary-bg hero-animated-card-2">
                                            <div className="small-card-img mr-3 text-white">
                                                <img src="assets/img/client/1.jpg" alt="" width="80px"
                                                     className="rounded-circle img-fluid" />
                                            </div>
                                            <p className="gr-text-11 mb-0 text-white">“Ensuring the best return on
                                                investment for business”</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}