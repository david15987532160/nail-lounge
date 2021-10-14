import React from 'react';
import Landing from './landing';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
    const { locale = 'en', locales, defaultLocale, asPath } = useRouter();

    return (
        <div className="overflow-x-hidden">
            <Landing lang={ locale as 'en' | 'vi' }/>
        </div>
    );
}

export default Home
