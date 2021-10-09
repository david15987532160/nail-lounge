import Image from 'next/image';
import { IDetail, IItem } from 'types';
import { Divider } from 'antd';
import { useState } from 'react';
import { DetailModal, PageHeader } from 'shared';
import staticData from 'static/assets/data.json';

export const FeatureService = (props: { lang?: 'en' | 'vi' }) => {
    const { lang = 'en' } = props;

    const { title, data } = staticData[lang!].SERVICES;

    const [detail, setDetail] = useState<IDetail & { price: string }>({
        category: '',
        name: '',
        description: '',
        price: ''
    });

    const [visible, setVisible] = useState(false);

    const hideModal = () => setVisible(false);

    const categories = (data as IItem[]).map(({ items, title, img }, i) => {
        const services = items.map(({ name, price, details }, idx) => {
            const showModal = () => {
                setDetail({ ...details!, price });
                setVisible(true);
            };

            const className = `flex justify-between mb-4 sm:mb-8 sm:ml-6 text-deep-blue font-light ${ details && 'cursor-pointer' }`;

            return <li
                key={ idx + 1 }
                className={ className }
                onClick={ details ? showModal : undefined }
            >
                <span>{ name }</span>
                <span>{ price }</span>
            </li>
        });

        const reverse = i % 2 === 0 ? '' : 'sm:flex-row-reverse';

        return <div
            key={ i + 1 }
            className={ `flex flex-col sm:flex-row ${ reverse } justify-around items-center mb-12 sm:mb-24` }
            data-aos={ i % 2 === 0 ? 'fade-right' : 'fade-left' }
            data-aos-once={ true }
        >
            <div key={ i + 1 } className="w-11/12 sm:w-2/5 text-lg sm:text-2xl">
                <Divider orientation="left">
                    <span className="text-4xl text-deep-blue font-poppins">
                        { title }
                    </span>
                </Divider>

                <ul className="mb-6 sm:mt-12 sm:ml-2">
                    { services }
                </ul>
            </div>

            <Image
                src={ img?.src || '' }
                alt={ title }
                width={ img?.width }
                height={ img?.height }
                data-aos={ i % 2 === 0 ? 'fade-left' : 'fade-right' }
                data-aos-once={ true }
            />
        </div>
    });

    return <section id="services" className="py-5 sm:py-8 lg:py-20">
        <div className="container">
            <PageHeader text={ title } className="text-deep-blue"/>

            { categories }
        </div>

        <DetailModal
            data={ detail }
            visible={ visible }
            hideModal={ hideModal }
        />
    </section>
};
