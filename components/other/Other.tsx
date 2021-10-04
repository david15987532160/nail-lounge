import { PageHeader } from 'shared';
import { IItem } from 'types';
import { Divider } from 'antd';
import staticData from 'static/assets/data.json';
import styles from 'styles/components/Other.module.css';

export const Other = (props: any) => {
    const title = 'OTHERS';
    const data: IItem[] = staticData.OTHERS;

    const item = data.map((ele, i) => {
        const services = ele.items.map((service, idx) => {
            return <li key={ idx + 1 } className="flex justify-between sm:mb-8 sm:ml-6 text-deep-blue font-light">
                <span>{ service.name }</span>
                <span>{ service.price }</span>
            </li>
        });

        return <div
            key={ i + 1 }
            className="w-10/12 mx-auto text-2xl"
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
