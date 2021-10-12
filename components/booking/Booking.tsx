import { Button } from '.';
import { BOOKING } from 'utils';
import styles from 'styles/components/Booking.module.css';

export const Booking = (props: any) => {
    return <div className={ `${ styles['floating-booking-btn'] } text-center` }>
        <div className="flex justify-end items-center mr-4 sm:mr-40">
            <Button href={ BOOKING } type="Booking"/>
        </div>
    </div>;
};
