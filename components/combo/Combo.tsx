import { PageHeader } from 'shared';
import staticData from 'static/assets/data.json';
import styles from 'styles/components/Combo.module.css';

export const Combo = (props: { lang?: 'en' | 'vi' }) => {
    const { lang = 'en' } = props;
    const { title, data } = staticData[lang!].COMBOS;

    const item = data.map((text, index) =>
        <li
            key={ index + 1 }
            className="mb-10"
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-once={ true }
        >
            { text }
        </li>
    );

    return <section id="combo" className={ `py-5 sm:py-8 lg:py-20 bg-white ${ styles['bg-img-section-4'] }` }>
        <div className="container">
            <PageHeader text={ title } className="text-deep-blue"/>

            <ul className="text-center text-2xl text-deep-blue mx-3 sm:my-20 sm:mx-7">
                { item }
            </ul>
        </div>
    </section>;
};
