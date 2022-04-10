import react from "react";
import Link from "next/link";

export default function Header() {
    return(
        <>
            <div id="preloader">
                <div class="preloader-wrap">
                    <img src="assets/img/logo-color.png" alt="logo" class="img-fluid" />
                    <div class="thecube">
                        <div class="cube c1"></div>
                        <div class="cube c2"></div>
                        <div class="cube c4"></div>
                        <div class="cube c3"></div>
                    </div>
                </div>
            </div>
            <header class="header white-bg">
                <nav class="navbar navbar-expand-lg fixed-top white-bg">
                    <div class="container">
                        <Link  href={"/"}>
                            <a class="navbar-brand">
                                <img src="assets/img/logo-color.png" alt="logo" class="img-fluid" />
                            </a>
                        </Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="ti-menu"></span>
                        </button>

                        <div class="collapse navbar-collapse h-auto" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto menu">
                                <li><Link href={"/"}><a> Home</a></Link></li>
                                <li><Link href={"/about"}><a>About</a></Link></li>
                                <li><Link href={"/features"}><a>Features</a></Link></li>
                                <li><a href="#" class="dropdown-toggle">Paths</a>
                                    <ul class="sub-menu">
                                        <li><Link href={"/paths/general"}><a>General</a></Link></li>
                                        <li><Link href={"/paths/ielts"}><a>IELTS</a></Link></li>
                                        <li><Link href={"/paths/toefl"}><a>TOEFL</a></Link></li>
                                        <li><Link href={"/paths/speaking"}><a>General</a></Link></li>
                                    </ul>
                                </li>
                                <li><Link href={"/process"}><a>Process</a></Link></li>
                                <li><Link href={"/pricing"}><a>Pricing</a></Link></li>
                                <li><Link href={"/contact"}><a>Contact</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}