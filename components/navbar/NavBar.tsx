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

    return <div className="absolute top-6 right-44">
        <ul className="flex justify-center gap-20 text-white bg-transparent">
            { item }
        </ul>
    </div>
};
