// @ts-ignore
import Gallery from 'react-grid-gallery';
import { AnimationType, IPagination } from 'types';
import { CSSProperties, useEffect } from 'react';
import { ImageOptions } from 'typings';
import { matchScreen, MIN_WIDTH_640 } from 'utils';

interface IGridGalleryProps {
    data: IPagination[];
    pages: number[];
}

export const GridGallery = ({ data, pages }: IGridGalleryProps) => {
    const IMAGES = data
        .filter(({ page }) => pages.includes(page)) // Filter only on showing pages
        .flatMap(({ data }) => // Map images to show in gallery
            data.map(work => (
                {
                    src: work,
                    thumbnail: work,
                    thumbnailWidth: 270,
                    thumbnailHeight: 270,
                }
            ))
        ) as unknown as ImageOptions[];

    const tileViewportStyle = () => {
        if (matchScreen(MIN_WIDTH_640)) {
            return {
                width: '270px',
                height: '270px',
                margin: 'auto'
            } as CSSProperties;
        }

        return {
            width: '110px',
            height: '110px',
            margin: 'auto'
        } as CSSProperties
    };

    const thumbnailStyle = () => {
        if (matchScreen(MIN_WIDTH_640)) {
            return {
                width: '250px',
                height: '250px',
                borderWidth: '4px',
            } as CSSProperties;
        }

        return {
            width: '110px',
            height: '110px',
            margin: 'auto',
            borderWidth: '2px',
        } as CSSProperties
    };

    useEffect(() => {
        document.querySelectorAll('.ReactGridGallery_tile')
            .forEach((ele, key) => {
                    ele.setAttribute('data-aos', 'zoom-in' as AnimationType);
                    ele.setAttribute('data-aos-delay', `${ (key % 4) * 100 }`);
                    ele.setAttribute('data-aos-once', 'true');
                }
            );
    });

    return <Gallery
        images={ IMAGES }
        enableImageSelection={ false }
        thumbnailStyle={ thumbnailStyle }
        tileViewportStyle={ tileViewportStyle }
        backdropClosesModal={ true }
    />
}
