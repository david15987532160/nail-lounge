import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
    title = 'Nail Lounge and Spa';

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
                    <title>{ this.title }</title>
                    <link rel="icon" href="/images/nail-lounge-logo.svg"/>
                    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;500&display=swap"
                          rel="stylesheet"/>

                    <meta property="og:url" content={ this.openGraph.url } key="ogurl"/>
                    <meta property="og:image"
                          content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg"/>
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
