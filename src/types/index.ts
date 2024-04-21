export interface City {
    value: string;
    label: string;
}

export interface Cities extends Array<City> { }
interface Cateogry {
    img: any;
    name: string;
}

export interface Categories extends Array<Cateogry> { }
