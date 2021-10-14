import React from 'react';
import Head from 'next/head';
import Landing from './landing';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
    const title = 'Nail Lounge and Spa';
    const { locale = 'en', locales, defaultLocale, asPath } = useRouter();

    const openGraph = {
        url: 'https://nailloungeandspa.net',
        image: '/images/nail-lounge-logo.svg',
        site_name: 'nailLoungeAndSpa',
        title: 'Nail Lounge and Spa',
        description: 'Nail Lounge and Spa description',
        type: 'website',
        locale: 'en',
    };

    return (
        <div className="overflow-x-hidden">
            <Head>
                <title>{ title }</title>
                <link rel="icon" href="/images/nail-lounge-logo.svg"/>

                <meta property="og:url" content={ openGraph.url } key="ogurl"/>
                <meta property="og:image" content={ openGraph.image } key="ogimage"/>
                <meta property="og:site_name" content={ openGraph.site_name } key="ogsitename"/>
                <meta property="og:title" content={ openGraph.title } key="ogtitle"/>
                <meta property="og:description" content={ openGraph.description } key="ogdesc"/>
            </Head>

            <Landing lang={ locale as 'en' | 'vi' }/>
        </div>
    );
}

export default Home
