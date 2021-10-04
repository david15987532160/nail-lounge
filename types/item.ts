interface IService {
    name: string;
    price: string;
}

export interface IItem {
    title: string;
    img?: any;
    items: IService[];
}
