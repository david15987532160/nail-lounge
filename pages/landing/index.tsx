import React, { useEffect } from 'react';
import { About, Combo, FeatureService, Footer, NavBar, Other } from 'components';
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

        <div className="flex justify-center gap-6 sm:mb-24">
            <div className="dashed"/>
            <div className="dashed"/>
            <div className="dashed"/>
        </div>

        {/* Other */ }
        <Other/>

        {/* Combo */ }
        <Combo/>

        {/* Footer */ }
        <Footer/>
    </>
}

export default Landing;
