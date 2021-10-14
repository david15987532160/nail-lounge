import React from 'react';
import Head from 'next/head';
import Landing from './landing';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
    const title = 'Nail Lounge and Spa';
    const { locale = 'en', locales, defaultLocale, asPath } = useRouter();

    return (
        <div className="overflow-x-hidden">
            <Head>
                <title>{ title }</title>
            </Head>

            <Landing lang={ locale as 'en' | 'vi' }/>
        </div>
    );
}

export default Home
