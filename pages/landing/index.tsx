import React, { useEffect } from 'react';
import { About, Banner, Combo, FeatureService, Footer, NavBar, Other } from 'components';
import { Dashed } from 'shared';
import Aos from 'aos';
import { Booking } from 'components/booking';

const Landing = (props: { lang?: 'en' | 'vi' }) => {
    const { lang = 'en' } = props;

    useEffect(() => {
        setTimeout(() => Aos.init())
    });

    return <>
        {/* Banner */ }
        <Banner/>

        {/* Nav bar section */ }
        <NavBar lang={ lang }/>

        {/* About */ }
        <About lang={ lang }/>

        {/* Services */ }
        <FeatureService lang={ lang }/>

        {/* Divider */ }
        <Dashed lang={ lang }/>

        {/* Other */ }
        <Other lang={ lang }/>

        {/* Combo */ }
        <Combo lang={ lang }/>

        {/* Footer */ }
        <Footer lang={ lang }/>

        {/* Booking */ }
        <Booking/>
    </>
}

export default Landing;
