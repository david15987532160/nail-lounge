import { useEffect, useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import styles from 'styles/components/Banner.module.css';

export const Banner = (props: any) => {
    const [show, setShow] = useState(false);

    const close = () => setShow(false);

    useEffect(() => {
        setTimeout(() => setShow(true), 500);
    }, []);

    return <div className={ `${ styles.modal } ${ show ? 'block' : 'hidden' }` }>
        <div
            className={ `${ styles['banner-centered'] } w-full sm:w-auto px-3 sm:px-0` }
        >
            <CloseOutlined
                className="absolute sm:top-2 right-4 text-base sm:text-xl text-white"
                onClick={ close }
            />

            <img src="/images/banner.webp" alt="App banner" className=""/>
        </div>
    </div>
}
