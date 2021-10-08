import Image from 'next/image';
import moment from 'moment';

export const Footer = (props: any) => {
    const weekDays = [
        { date: 'Monday', open: 'Closed', abbr: 'Mon' },
        { date: 'Tuesday', open: '09:30 - 19:30', abbr: 'Tue' },
        { date: 'Wednesday', open: '09:30 - 19:30', abbr: 'Wed' },
        { date: 'Thursday', open: '09:30 - 19:30', abbr: 'Thu' },
        { date: 'Friday', open: '09:30 - 19:30', abbr: 'Fri' },
        { date: 'Saturday', open: '09:30 - 19:30', abbr: 'Sat' },
        { date: 'Sunday', open: '12:00 - 18:00', abbr: 'Sun' },
    ];
    const today = moment().format('ddd');
    const item = weekDays.map(({ date, open, abbr }, index) => {
        return <div
            key={ index + 1 }
            className={ `flex justify-between p-2 ${ today === abbr ? 'border' : '' }` }
        >
            <span>{ date }</span>
            <span>{ open }</span>
        </div>
    });

    return <footer id="contacts" className="bg-deep-blue">
        <div className="vnp-bg-primary text-white pt-6 pb-6">
            <div className="container">
                <div className="sm:flex justify-between">
                    <div className="sm:flex items-center gap-10">
                        {/*App Logo*/ }
                        <img
                            width="214"
                            src="/images/nail-lounge-logo.svg"
                            alt="Nails Kute Logo"
                            className="mx-auto mb-6"
                            data-aos="zoom-in"
                            data-aos-once={ true }
                        />

                        {/*Business Info*/ }
                        <div
                            className="ant-col-md"
                            data-aos="fade-right"
                            data-aos-once={ true }
                        >
                            <div className="flex gap-6">
                                <span>
                                    <Image
                                        src="/icons/place-icon.svg"
                                        alt="Place icon"
                                        width={ 31 }
                                        height={ 45 }
                                    />
                                </span>

                                <div className="pt-3">
                                    <p className="flex mb-4">
                                        <a className="hover:text-white"
                                           href="https://g.page/nailskutespa32003?share"
                                           target="_blank"
                                           rel="noreferrer"
                                        >
                                            4685 US-17 Suite 1, Fleming Island, FL 32003
                                        </a>
                                    </p>

                                    <p className="flex mb-6">
                                        <span>+1 (904) 375 2061</span>
                                    </p>
                                </div>


                            </div>


                            {/*Social Icons*/ }
                            <div id="social-links" className="flex gap-14 mb-10">
                                <div
                                    className="social-icon flex justify-center border-2 rounded-full"
                                    data-aos="fade-right"
                                    data-aos-delay="200"
                                    data-aos-once={ true }
                                >
                                    <Image
                                        src="/icons/twitter-icon.svg"
                                        alt="Twitter icon"
                                        width={ 27 }
                                        height={ 23 }
                                        className="border rounded-full"

                                    />
                                </div>

                                <div
                                    className="social-icon flex justify-center border-2 rounded-full"
                                    data-aos="fade-right"
                                    data-aos-delay="100"
                                    data-aos-once={ true }
                                >
                                    <Image
                                        src="/icons/facebook-icon.svg"
                                        alt="Facebook icon"
                                        width={ 15 }
                                        height={ 34 }
                                        className="border rounded-full"
                                    />
                                </div>

                                <Image
                                    src="/icons/instagram-icon.svg"
                                    alt="Instagram icon"
                                    width={ 50 }
                                    height={ 50 }
                                    data-aos="fade-right"
                                    data-aos-delay=""
                                    data-aos-once={ true }
                                />

                                {/*<a href={ FB_LINK }*/ }
                                {/*   target="_blank"*/ }
                                {/*   rel="noreferrer"*/ }
                                {/*   data-aos="fade-right"*/ }
                                {/*   data-aos-delay="300"*/ }
                                {/*   data-aos-once={ true }*/ }
                                {/*>*/ }
                                {/*    <FacebookFilled className="text-4xl text-red-600"/>*/ }
                                {/*</a>*/ }
                            </div>
                        </div>
                    </div>

                    {/*Business Hours*/ }
                    <div
                        className="ant-col-md-8"
                        data-aos="fade-left"
                        data-aos-once={ true }
                    >
                        <h5 className="flex items-end gap-3 text-white text-2xl font-medium mb-5">
                            <span>Business Hours</span>
                        </h5>

                        { item }

                        <div className="py-8 block md:hidden">
                            <div className="sep"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>;
};
