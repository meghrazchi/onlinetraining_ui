import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <link rel="icon" href="assets/img/favicon.png" type="image/png" sizes="16x16" />
                <link rel="stylesheet" href="assets/css/main.css" />
                <title>Online Training App</title>
            </Head>
            <body>
                <Main />
                <NextScript />
                <script src="assets/js/vendors/jquery-3.5.1.min.js"></script>
                <script src="assets/js/vendors/popper.min.js"></script>
                <script src="assets/js/vendors/bootstrap.min.js"></script>
                <script src="assets/js/vendors/jquery.easing.min.js"></script>
                <script src="assets/js/vendors/owl.carousel.min.js"></script>
                <script src="assets/js/vendors/countdown.min.js"></script>
                <script src="assets/js/vendors/jquery.waypoints.min.js"></script>
                <script src="assets/js/vendors/jquery.rcounterup.js"></script>
                <script src="assets/js/vendors/magnific-popup.min.js"></script>
                <script src="assets/js/vendors/validator.min.js"></script>
                <script src="assets/js/app.js"></script>
            </body>
        </Html>
    )
}