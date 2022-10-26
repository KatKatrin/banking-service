export interface CardData {
  accountNumber?: any,
  transactionLimit?:number,
  status?:string,
  paymentSystem?:string,
  expirationDate?:Date,
  holderName?:string,
  balance?:number
}

export interface AccountData{
  principalDebt?:number, 
  currencyCode?:string, 
  accountNumber?: string
  creditId?:any
}

export interface CreditOrderData{
  productId?:any,
  id?:any
}