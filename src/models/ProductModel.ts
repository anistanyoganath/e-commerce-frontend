export type Product = {
    sku: string;
    quantity: number;
    name: string;
    price: number;
    images: File[];
    description: string;
    isFavourite?: boolean;
}