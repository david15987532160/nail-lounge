import { useState } from 'react';

export const Pagination = <T>(data: T[]) => {
    const [current, setCurrent] = useState(1);
    const [pages, setPages] = useState([current]);
    const [last, setLast] = useState(false);

    const loadMore = (isLast: boolean) => {
        if (isLast) {
            // Reset paging
            setCurrent(1);
            setPages([1]);
            setLast(false);

            return;
        }
        // isLast && showLess(); // Reset gallery when click on 'Show Less'

        const nextPage = current + 1;

        // last = true if next page > total pages
        (nextPage >= data.length) && setLast(true);

        // Load new page
        if (!pages.includes(nextPage) && !last) {
            setPages([...pages, nextPage]);
            setCurrent(nextPage);
        }
    };

    return {
        current, setCurrent,
        pages, setPages,
        last, setLast,
        loadMore
    };
}
