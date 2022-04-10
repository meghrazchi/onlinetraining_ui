import react from "react";

export default function Promo() {

    return (
        <section className="promo-section ptb-100">
            <div className="container">
                <h1>Find your path</h1>
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="card border-0 single-promo-card p-2 mt-4 shadow">
                            <div className="card-body">
                                <div className="pb-2">
                                    <span className="fas fa-book icon-size-md color-secondary"></span>
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>General</h5>
                                    <p className="mb-0">All components are built to be used in combination.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card border-0 single-promo-card p-2 mt-4 shadow">
                            <div className="card-body">
                                <div className="pb-2">
                                    <span className="fas fa-chalkboard-teacher icon-size-md color-secondary"></span>
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>TOEFL</h5>
                                    <p className="mb-0">Quick is optimized to work for most devices.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card border-0 single-promo-card p-2 mt-4 shadow">
                            <div className="card-body">
                                <div className="pb-2">
                                    <span className="fas fa-university icon-size-md color-secondary"></span>
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>IELTS</h5>
                                    <p className="mb-0">Remain consistent while developing new features.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card border-0 single-promo-card p-2 mt-4 shadow">
                            <div className="card-body">
                                <div className="pb-2">
                                    <span className="fas fa-head-side-cough icon-size-md color-secondary"></span>
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>Speaking</h5>
                                    <p className="mb-0">Change a few variables and the whole theme adapts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}