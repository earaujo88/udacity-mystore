export class Cart{
    id?: number;
    userId?: number;
    productId?: number;
    productName?: string;
    productPrice?: number;
    productUrl?: string;
    qty?: number;


    constructor(id: number, userId: number, productId: number, productName: string, productPrice: number, productUrl: string, qty: number){
        this.id = id;
        this.userId = userId;
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productUrl = productUrl;
        this.qty = qty
    }

}