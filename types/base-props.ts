import { CSSProperties, HTMLProps } from 'react';

export interface IBaseProps extends Omit<HTMLProps<any>, 'data'> {
    lang?: 'en' | 'vi';

    elementStyle?: CSSProperties;
    elementClassName?: string;

    containerStyle?: CSSProperties;
    containerClassName?: string;
}
