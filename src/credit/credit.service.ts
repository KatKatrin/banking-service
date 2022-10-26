import { getRepository, createQueryBuilder} from "typeorm";
import Account from "../entity/Account";
import Card from "../entity/Card";
import { CardStatus } from "../helpers/constants";
import { CreditOrderData } from "../helpers/interface";
import Credit from "../entity/Credit";
import Agreement from "../entity/Agreement";
import CreditOrder from "../entity/CreditOrder";
import PaymentSchedule from "../entity/PaymentSchedule";
import Product from "../entity/Product";

class CreditCardService {

  public async getInfoCreditCards(creditId){
    const accountData = await getRepository(Account).findOne({ creditId })
                
    if (accountData){
      const { currencyCode } = accountData;
      const cardsData = await getRepository(Card).find({
        where: [
          { accountNumber: creditId, status: CardStatus.ACTIVE },
          { accountNumber: creditId, status: CardStatus.BLOCKED } ],
      })
      
      return cardsData.map(card => {
        const {cardNumber, balance} = card;
        return {  cardId:creditId,
                  cardNumber,
                  balance,
                  accountCurrencyCode:currencyCode }
      })
    } 
  }

  public async getCredits (clientid){
    
    const creditsOrderData =  await createQueryBuilder(CreditOrder, 'credit_order')
                                   .innerJoinAndSelect('credit_order.productId', "productId")
                                   .where({ clientid })
                                   .getMany()                         
     
    if(!creditsOrderData.length){
     return null
    } else {
  
    return await Promise.all(creditsOrderData.map(async (creditOrderData: CreditOrderData) => {
        
     const { productId, id } = creditOrderData;
         const res = await getRepository(Credit).findOne({ orderId: id, status:CardStatus.ACTIVE });
         const { creditLimit, ...creditData } = await getRepository(Credit).findOne({ orderId: id, status:CardStatus.ACTIVE });
         const creditId:any = creditData.id;
         const { principalDebt, currencyCode } = await getRepository(Account).findOne({ creditId });
         const { terminationDate } = await getRepository(Agreement).findOne({ creditId });
         const { name } = productId;
  
       return {
         creditId,
         name,
         principalDebt,
         creditLimit,
         creditCurrencyCode: currencyCode,
         terminationDate
       }
     })) 
   }}
  
   public async getCreditInfo (creditId){
     const creditInfo = await createQueryBuilder(Agreement, "agreement")
     .where("agreement.creditId = :creditId", { creditId })
       .select([
                       'credit.creditLimit',
                       'credit.interestRate',
                       'credit.currencyCode',
                       'agreement.id',
                       'agreement.creditId',
                       'agreement.agreementDate',
                       'credit.id',
                       'credit_order.productId',
                       'product.name',
                       'account.principalDebt',
                       'account.interestDebt',
                       'account.accountNumber',
                       'payment_schedule.paymentDate',
                       'payment_schedule.principal',
                       'payment_schedule.interest',
                     ])
     
     .innerJoin(Credit, 'credit', 'agreement.creditId = credit.id')
     .innerJoin(CreditOrder, 'credit_order', 'credit.orderId = credit_order.id')
     .innerJoin(Product, 'product', 'credit_order.productId = product.id')
     .innerJoin(Account, 'account', 'credit.id = account.creditId')
     .innerJoin(PaymentSchedule, 'payment_schedule', 'account.accountNumber =payment_schedule.accountNumber')
     .getRawMany()
  
     return { creditInfo }
   }
  
   public async getSchedule (creditId){
     const aggrementId = await getRepository(Agreement).findOne({ creditId })
     if(aggrementId){
       const {accountNumber, principalDebt, interestDebt} = await getRepository(Account).findOne({ creditId });
       console.log(accountNumber)
       const payments = (await getRepository(PaymentSchedule).find({ accountNumber }))
                               .map(payment => {
                                 const { interest, principal, paymentDate } = payment
                                 return { interestDebt:interest,principalDebt: principal, paymentDate }
                               })
                               console.log(payments)
                              
       return {
         accountNumber,
         agreementId: aggrementId.id,
         principalDebt,
         interestDebt,
         payments
       }
     } else {
       return null
     }
  }

  public async getProducts(){
    const status = true;   
    return await getRepository(Product).find({ isActive: status});    
  }
}

export default CreditCardService;