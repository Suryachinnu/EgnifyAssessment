export interface ProductInterface {
    id: number;
    title: string;
    description: string;
    availableSizes:string[];
    style:string;
    price: number;
    installments:number;
    currencyId: string;
    currencyFormat:string;
    isFreeShipping: boolean;
    src_1:string;
    src_2:string;
  }
  