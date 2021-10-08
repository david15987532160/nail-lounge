import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import { MenuFoldOutlined } from '@ant-design/icons';
import staticData from 'static/assets/data.json';
import { Dropdown, Menu } from 'antd';

export const NavBar = (props: any) => {
    const { locale, locales, defaultLocale, asPath } = useRouter();
    const navItems: string[] = staticData.NAV_BAR_ITEMS[locale as ('en' | 'vi')];

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

    const menu = (
        <Menu>
            { navItems.map((item, index) =>
                <Menu.Item key={ index + 1 } className="pr-16">
                    <a href={ `#${ item.toLowerCase() }` } className="font-poppins text-lg">
                        { item }
                    </a>
                </Menu.Item>)
            }
        </Menu>
    );

    return <>
        {/*Mobile*/ }
        <div className="relative sm:hidden">
            <Dropdown overlay={ menu } placement="bottomLeft" arrow>
                <MenuFoldOutlined
                    className="fixed right-3 text-2xl text-white"
                />
            </Dropdown>
        </div>

        {/*Web*/ }
        <div className="hidden sm:block sm:fixed sm:top-6 sm:right-36">
            <ul className="flex justify-center py-4 gap-6 sm:gap-16 text-deep-blue sm:text-white sm:bg-transparent">
                { item }
            </ul>

            {/*<div className="flex items-center gap-4 text-white">*/}
            {/*    <div*/}
            {/*        style={ {*/}
            {/*            padding: '4px',*/}
            {/*            marginRight: '4px',*/}
            {/*        } }*/}
            {/*    >*/}
            {/*        <span>Current Language: </span>*/}
            {/*        <span*/}
            {/*            style={ {*/}
            {/*                borderRadius: '3px',*/}
            {/*                backgroundColor: 'blue',*/}
            {/*                color: 'white',*/}
            {/*                padding: '2px',*/}
            {/*            } }*/}
            {/*        >*/}
            {/*  { locale }*/}
            {/*</span>*/}
            {/*    </div>*/}

            {/*    <Link*/}
            {/*        href={ asPath }*/}
            {/*        locale="en"*/}
            {/*    >*/}
            {/*        EN*/}
            {/*    </Link>*/}

            {/*    <Link*/}
            {/*        href={ asPath }*/}
            {/*        locale="vi"*/}
            {/*    >*/}
            {/*        VI*/}
            {/*    </Link>*/}
            {/*</div>*/}
        </div>
    </>
};
