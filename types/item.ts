export interface IDetail {
    category: string;
    name: string;
    description: string;
}

export interface IService {
    name: string;
    price: string;
    details?: IDetail;
}

export interface IItem {
    title: string;
    img?: any;
    items: IService[];
}
