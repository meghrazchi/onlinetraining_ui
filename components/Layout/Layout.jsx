import react from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Hero from "../Hero";
import Promo from "../Promo";
import About from "../About";
import Download from "../Download";
import Feature from "../Feature";
import WorkProcess from "../WorkProcess";
import Counter from "../Counter";
import Pricing from "../Pricing";
import Faq from "../Faq";
import Testimonial from "../Testimonial";
import Team from "../Team";
import Customers from "../Customers";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            {/*<Main>*/}
                <div className="main">
                    {/*<Hero />*/}
                    { children}
                    {/*<Promo />*/}
                    {/*<About />*/}
                    {/*<Download />*/}
                    {/*<Feature />*/}
                    {/*<WorkProcess />*/}
                    {/*<Counter />*/}
                    {/*<Pricing />*/}
                    {/*<Faq />*/}
                    {/*<Testimonial />*/}
                    {/*<Team />*/}
                    {/*<Customers />*/}
                </div>
            {/*</Main>*/}
            <Footer />
        </>
    )
}