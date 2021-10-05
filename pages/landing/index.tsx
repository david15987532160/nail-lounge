import React, { useEffect } from 'react';
import { About, Combo, FeatureService, Footer, NavBar, Other } from 'components';
import { Dashed } from 'shared';
import Aos from 'aos';

const Landing = (props: any) => {
    useEffect(() => {
        setTimeout(() => Aos.init())
    });

    return <>
        {/* Nav bar section */ }
        <NavBar/>

        {/* About */ }
        <About/>

        {/* Services */ }
        <FeatureService/>

        <Dashed/>

        {/* Other */ }
        <Other/>

        {/* Combo */ }
        <Combo/>

        {/* Footer */ }
        <Footer/>
    </>
}

export default Landing;
