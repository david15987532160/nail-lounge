import React from 'react';
import staticData from 'static/assets/data.json';

export const NavBar = (props: any) => {
    const navItems: string[] = staticData.NAV_BAR_ITEMS;

    const item = navItems.map((item, i) => {
        const href = `#${ item.toLowerCase() }`;

        return <li
            key={ i + 1 }
            data-aos="fade-right"
            data-aos-delay={ (navItems.length - i) * 100 }
            data-aos-once={ true }
        >
            <a href={ href } className="font-poppins text-lg">
                { item }
            </a>
        </li>;
    });

    return <div className="sm:absolute sm:top-6 sm:right-44">
        <ul className="flex justify-center py-4 gap-6 sm:gap-20 text-deep-blue sm:text-white sm:bg-transparent">
            { item }
        </ul>
    </div>
};
