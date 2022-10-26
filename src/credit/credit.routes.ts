import { IRouter } from 'express';
import CreditController from './credit.controller';
import CreditCardService from './credit.service';

class CreditRoutes {
 public creditController: CreditController;
 public creditCardSevice: CreditCardService

  constructor(private router: IRouter) {
    this.router = router;
    this.creditController = new CreditController(this.creditCardSevice);
    this.routes();
  }

  public routes() {
    this.router.get('/credit-cards', this.creditController.getCreditCardsInfo)
    //this.router.get('/credit-cards/:cardId', this.creditController.getCardInfo)
    this.router.get('/credits', this.creditController.getCreditsInfo)
    this.router.get('/credits/:creditId/schedule', this.creditController.getCreditSchedule)
    this.router.get('/credit-products/', this.creditController.getActiveProducts)
  }
}

export default CreditRoutes;