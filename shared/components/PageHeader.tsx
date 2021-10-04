import { IPageHeaderProps } from 'types';

export const PageHeader = ({ style, className = '', text }: IPageHeaderProps) => {
    return <h1
        style={ style }
        className={ `section-head font-poppins font-bold text-center text-white mb-6 lg:mb-16 ${ className }` }
    >
        { text }
    </h1>;
};
