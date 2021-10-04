import { Modal } from 'shared';
import { useState } from 'react';
import { Settings } from 'typings';
import Slider from '@ant-design/react-slick';
import { IBaseProps, IFeatureProduct, ISlickData } from 'types';

export interface ISlickProps extends IBaseProps {
    data: ISlickData[];
    settings?: Settings;
}

interface ISubData {
    title: string;
    subTitle?: string;
    content: Partial<IFeatureProduct[]>;
}

export const Slick = (
    { data, settings = {}, elementClassName = 'mx-auto ', containerClassName = '' }: ISlickProps
) => {
    const [visible, setVisible] = useState(false);
    const [subData, setSubData] = useState<ISubData>({
        title: '',
        subTitle: '',
        content: []
    });
    const setVisibleCallback = (visible: boolean) => setVisible(visible);

    const items: ISlickData[] = data;
    const defaultSettings: Settings = {
        className: 'mb-4',
        autoplay: true,
        dots: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
        arrows: false,
        lightBox: true
    };
    const sliderSettings: Settings = { ...defaultSettings, ...settings };

    const itemClick = (item: ISlickData) => {
        if (sliderSettings.lightBox) {
            setVisible(true);
            setSubData({
                title: item.title,
                subTitle: item.subTitle,
                content: item.submenu || []
            });
        }
    };

    const sliderItem = items.map((item, index) => {
        return <div key={ index + 1 }
                    className="px-2 mb-3 sm:px-4"
                    data-aos="flip-left"
                    data-aos-duration="600"
                    data-aos-once={ true }
        >
            <div
                className={ `mx-auto ${ containerClassName }` }
                onClick={ () => itemClick(item) }>
                <img
                    src={ item.img }
                    alt={ item.title }
                    className={ `${ elementClassName }` }
                />
            </div>

            <h2 className="sm:text-lg text-red-600 mt-2">
                { item.title }
            </h2>
        </div>;
    });

    return (
        <>
            <Slider { ...sliderSettings }>
                { sliderItem }
            </Slider>

            <Modal visible={ visible } data={ subData } setVisible={ setVisibleCallback }/>
        </>
    );
};
