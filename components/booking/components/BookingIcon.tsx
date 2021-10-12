import { CalendarOutlined } from '@ant-design/icons';
import styles from 'styles/components/Booking.module.css';

export const BookingIcon = (props: any) => {
    return <span
        className="w-14 h-14 sm:w-20 sm:h-20 absolute right-2 sm:left-0 bottom-full mb-3 flex justify-center items-center bg-deep-blue border border-white rounded-full"
    >
        <CalendarOutlined className={ `${ styles['icon-size'] } pb-0.5 text-white` }/>
    </span>
};
