import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
    title = 'Nail Lounge and Spa';

    openGraph = {
        // url: 'https://nailloungeandspa.net',
        url: 'https://nail-lounge-taupe.vercel.app',
        image: '/images/section-1/nail-lounge-logo.png',
        site_name: 'nailLoungeAndSpa',
        title: 'Nail Lounge and Spa',
        description: 'Nail Lounge and Spa description',
        type: 'website',
        locale: 'en',
    };

    render() {
        return (
            <Html>
                <Head>
                    <title>Nail Lounge and Spa</title>

                    <link rel="icon" href="/images/nail-lounge-logo.svg"/>
                    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;500&display=swap"
                          rel="stylesheet"/>

                    {/* Open Graph / Facebook */ }
                    <meta property="og:type" content={ this.openGraph.type }/>
                    <meta property="og:url" content={ this.openGraph.url }/>
                    <meta property="og:title" content={ this.openGraph.title }/>
                    <meta property="og:description" content={ this.openGraph.description }/>
                    <meta property="og:image" content={ `${ this.openGraph.url }${ this.openGraph.image }` }/>
                    <meta property="og:locale" content={ this.openGraph.locale }/>
                </Head>

                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
