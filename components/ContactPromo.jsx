import react from "react";

export default function ContactPromo() {

    return (
        <section class="promo-section pt-100 ">
            <div class="container">
                <div class="row justify-content-md-center justify-content-sm-center">
                    <div class="col-md-6 col-lg-4">
                        <div class="card single-promo-card shadow-sm text-center p-3 my-3">
                            <div class="card-body">
                                <div class="pb-2">
                                    <span class="fas fa-envelope icon-size-lg color-primary"></span>
                                </div>
                                <div class="pt-2 pb-3">
                                    <h5>Mail Us</h5>
                                    <p class="mb-0">Say something to start a live chat hello@yourdomain.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="card single-promo-card shadow-sm text-center p-3 my-3">
                            <div class="card-body">
                                <div class="pb-2">
                                    <span class="fas fa-headset icon-size-lg color-primary"></span>
                                </div>
                                <div class="pt-2 pb-3">
                                    <h5>24/7 Live Chat</h5>
                                    <p class="mb-0">We endeavour to answer all enquiries within 24 hours on business days.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="card single-promo-card shadow-sm text-center p-3 my-3">
                            <div class="card-body">
                                <div class="pb-2">
                                    <span class="fas fa-map-marker-alt icon-size-lg color-primary"></span>
                                </div>
                                <div class="pt-2 pb-3">
                                    <h5>Visit Us</h5>
                                    <p class="mb-0">100 Yellow House, los angeles Factory, United State, 13420.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}