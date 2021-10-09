import React from 'react';
import { useRouter } from 'next/router';
import { MenuFoldOutlined } from '@ant-design/icons';
import staticData from 'static/assets/data.json';
import { Dropdown, Menu } from 'antd';

export const NavBar = (props: { lang?: 'en' | 'vi' }) => {
    const { lang = 'en' } = props;
    const { asPath } = useRouter();
    const navItems: string[] = staticData[lang!].NAV_BAR_ITEMS;

    const hrefs = ['home', 'blogs', 'services', 'contacts'];

    const item = navItems.map((item, i) => {
        return <li
            key={ i + 1 }
            data-aos="fade-right"
            data-aos-delay={ (navItems.length - i) * 100 }
            data-aos-once={ true }
        >
            <a href={ `#${ hrefs[i] }` } className="font-poppins text-lg">
                { item }
            </a>
        </li>;
    });

    const menu = (
        <Menu>
            { navItems.map((item, i) =>
                <Menu.Item key={ i + 1 } className="pr-16">
                    <a href={ `#${ hrefs[i] }` } className="font-poppins text-lg">
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
        <div className="hidden sm:block sm:absolute sm:top-6 sm:right-44">
            <ul className="flex justify-center py-4 gap-6 sm:gap-16 text-deep-blue sm:text-white sm:bg-transparent">
                { item }
            </ul>

            {/*Lang switch*/}
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
            {/*  { lang }*/}
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
