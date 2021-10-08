import styles from 'styles/components/About.module.css';

export const About = (props: any) => {
    const content = `
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed d iam nonummy nibh euismod tincidunt lorem ipsum dolor sit amet, consectetuer.
    `;

    return <section id="home" className={ `py-5 sm:py-8 lg:py-20 ${ styles['bg-img-section-1'] }` }>
        <div className="container">
            <div className="flex flex-col-reverse gap-4 sm:flex-row sm:gap-0 items-center justify-between sm:mt-14">
                {/*Description*/ }
                <div
                    className={ `${ styles['flex-item'] }` }
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-once={ true }
                >
                    <img
                        src="/images/section-1/nail-lounge-logo.png"
                        alt="Nail Lounge logo"
                        width={ 424 }
                        height={ 130 }
                        className="hidden sm:block"
                    />

                    <p className="sm:pr-24 mt-10 mb-8 text-base sm:text-2xl text-deep-blue font-light">
                        { content }
                    </p>

                    <ul className="sm:mb-14">
                        <li className="mb-6">
                            <span className={ `${ styles.dot } mr-3` }/> Fusce luctus blandit nisi
                        </li>
                        <li>
                            <span className={ `${ styles.dot } mr-3` }/> Ut imperdiet dui at tincidunt mattis
                        </li>
                    </ul>

                    <a href=""
                       className="hidden py-3 px-10 sm:py-5 sm:px-14 text-lg text-white border rounded-full bg-deep-blue"
                    >
                        GET STARTED
                    </a>
                </div>

                <a href=""
                   className="sm:hidden py-3 px-10 sm:py-5 sm:px-14 text-lg text-white border rounded-full bg-deep-blue"
                   data-aos="zoom-out"
                   data-aos-once={ true }
                >
                    GET STARTED
                </a>

                {/*Image*/ }
                <div
                    className="px-7 sm:px-2 my-10 sm:my-0"
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-once={ true }
                >
                    <img src="/images/section-1/intro-img.svg" alt="Nail Lounge image"/>
                </div>
            </div>
        </div>
    </section>;
};
