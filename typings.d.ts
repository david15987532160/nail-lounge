import { Settings as SlickSettings } from '@ant-design/react-slick';

export interface Settings extends SlickSettings {
    lightBox?: boolean;
}

export interface Props {
    images: ImageOptions[];
    id?: string;
    enableImageSelection?: boolean;
    onSelectImage?: () => void;
    rowHeight?: number;
    maxRows?: number;
    margin?: number;
    enableLightbox?: boolean;
    onClickThumbnail?: () => void;
    lightboxWillOpen?: () => void;
    lightboxWillClose?: () => void;
    tagStyle?: object;
    tileViewportStyle?: () => void;
    thumbnailStyle?: () => void;
    backdropClosesModal?: boolean;
}

export interface ImageOptions {
    src: string;
    thumbnail: string;
    thumbnailWidth: number;
    thumbnailHeight: number;
    thumbnailCaption?: number;
    tags?: string[] | { value: string; title: string }[];
    isSelected?: boolean;
    caption?: string;
    srcSet?: string[];
    customOverlay?: any;
    orientation?: number;
}

