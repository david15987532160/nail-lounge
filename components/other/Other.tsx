import { Divider } from 'antd';
import { useState } from 'react';
import { IDetail, IItem } from 'types';
import { DetailModal, PageHeader } from 'shared';
import staticData from 'static/assets/data.json';
import styles from 'styles/components/Other.module.css';

export const Other = (props: { lang?: 'en' | 'vi' }) => {
    const { lang = 'en' } = props;

    const { title, data } = staticData[lang!].OTHERS;

    const [detail, setDetail] = useState<IDetail & { price: string }>({
        category: '',
        name: '',
        description: '',
        price: ''
    });

    const [visible, setVisible] = useState(false);

    const hideModal = () => setVisible(false);

    const item = (data as IItem[]).map((ele, i) => {
        const services = ele.items.map(({ name, price, details }, idx) => {
            const showModal = () => {
                setDetail({ ...details!, price });
                setVisible(true);
            };

            return <li
                key={ idx + 1 }
                className="flex justify-between mb-4 sm:mb-8 sm:ml-6 text-deep-blue font-light"
                onClick={ details ? showModal : undefined }
            >
                <span>{ name }</span>
                <span>{ price }</span>
            </li>
        });

        return <div
            key={ i + 1 }
            className="w-11/12 sm:w-10/12 mx-auto mb-10 text-lg sm:text-2xl"
            data-aos={ i % 2 === 0 ? 'fade-right' : 'fade-left' }
            data-aos-once={ true }
        >
            <Divider orientation="left">
                <span className="text-4xl text-deep-blue font-poppins">
                    { ele.title }
                </span>
            </Divider>

            <ul className="sm:mt-8 sm:ml-2">
                { services }
            </ul>
        </div>;
    });

    return <section id="others" className={ `py-5 sm:py-8 lg:py-10 ${ styles['bg-img-section-3'] }` }>
        <div className="container">
            <PageHeader text={ title } className="text-deep-blue"/>

            <div className="sm:grid grid-cols-2 text-lg text-deep-blue mb-4 sm:px-18">
                { item }
            </div>
        </div>

        <DetailModal
            data={ detail }
            visible={ visible }
            hideModal={ hideModal }
        />
    </section>;
};
