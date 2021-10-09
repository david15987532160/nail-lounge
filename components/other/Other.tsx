import { PageHeader } from 'shared';
import { IItem } from 'types';
import { Divider } from 'antd';
import staticData from 'static/assets/data.json';
import styles from 'styles/components/Other.module.css';

export const Other = (props: { lang?: 'en' | 'vi' }) => {
    const { lang = 'en' } = props;
    const { title, data } = staticData[lang!].OTHERS;

    const item = (data as IItem[]).map((ele, i) => {
        const services = ele.items.map((service, idx) => {
            return <li key={ idx + 1 } className="flex justify-between mb-4 sm:mb-8 sm:ml-6 text-deep-blue font-light">
                <span>{ service.name }</span>
                <span>{ service.price }</span>
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
    </section>;
};
