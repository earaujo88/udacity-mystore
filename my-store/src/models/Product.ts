export class Product{
    id?: number;
    name?: string;
    price?: number;
    url?: string;
    description?: string


    constructor(id: number, name: string, price: number, url: string, descrition: string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.url = url;
        this.description = descrition

    }

}