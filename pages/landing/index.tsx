import React, { useEffect } from 'react';
import { About, Combo, FeatureService, Footer, NavBar, Other } from 'components';
import { Dashed } from 'shared';
import Aos from 'aos';

const Landing = (props: { lang?: 'en' | 'vi' }) => {
    const { lang } = props;

    useEffect(() => {
        setTimeout(() => Aos.init())
    });

    return <>
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
    </>
}

export default Landing;
