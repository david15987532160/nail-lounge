import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
    openGraph = {
        url: 'https://nailloungeandspa.net',
        image: '/images/nail-lounge-logo.svg',
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
                    <link rel="icon" href="/images/nail-lounge-logo.svg"/>
                    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;500&display=swap"
                          rel="stylesheet"/>

                    <meta property="og:url" content={ this.openGraph.url } key="ogurl"/>
                    <meta property="og:image" content={ this.openGraph.image } key="ogimage"/>
                    <meta property="og:site_name" content={ this.openGraph.site_name } key="ogsitename"/>
                    <meta property="og:title" content={ this.openGraph.title } key="ogtitle"/>
                    <meta property="og:description" content={ this.openGraph.description } key="ogdesc"/>
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
