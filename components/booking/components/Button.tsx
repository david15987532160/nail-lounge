import { BookingIcon, CheckinIcon } from '.';

export const Button = ({ href, type }: { href: string, type: 'Booking' | 'Checkin' }) => {
    return <a
        href={ href }
        target="_blank"
        rel="noreferrer"
        className="relative flex items-center px-3 py-1 mx-3 sm:mx-3 text-deep-blue sm:border-2 border-black rounded-2xl bg-white"
    >
        { type === 'Booking' ? <BookingIcon/> : <CheckinIcon/> }

        <span className="hidden sm:block">{ type }</span>
    </a>
}
