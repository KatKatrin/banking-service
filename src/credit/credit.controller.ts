/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ErrorMessage } from '../helpers/constants';
import CreditCardService from './credit.service';


class CreditController {
  constructor(public creditCardService:CreditCardService ) {
    this.creditCardService = new CreditCardService()
  }

  public getCreditCardsInfo = async (req: Request, res: Response) => {
    try {
      const { clientId } = req.query;
      const result = await this.creditCardService.getInfoCreditCards(clientId)

      if (!result){
        return res.status(StatusCodes.NOT_FOUND).json({ message: ErrorMessage.NOT_FOUND_CARDS })
      }
      return res.status(StatusCodes.OK).json({ cards: result });
    } catch (error) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: error.message });
    }
  }

  public getCreditsInfo = async (req: Request, res: Response) => {
    try{
      const { clientId } = req.query;
      const { creditId } = req.query;
      let result = null;
      let errInfo = null;
  
      if (clientId) {
        result = await this.creditCardService.getCredits(clientId)
        !result ? errInfo = ErrorMessage.NOT_FOUND_CREDITS+ " " + clientId : null;     
      } else
      if(creditId) {
        result = await this.creditCardService.getCreditInfo(creditId);
        !result ? errInfo = ErrorMessage.NOT_FOUND_CREDIT_INFO+ " " + creditId : null;
      }
      
      if(!result){
        return res.status(StatusCodes.NOT_FOUND).json({ message: errInfo ? errInfo : ErrorMessage.INCORRECT_QUERY_PARAMS })
      }
      return res.status(StatusCodes.OK).json({ result });
    }
    catch (error) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: error.message });
    }
  }
  
  public getCreditSchedule = async (req: Request, res: Response) => {
    try{
      const { creditId } = req.params;
  
      
      const result = await this.creditCardService.getSchedule(creditId);
  
      if (!result){
        return res.status(StatusCodes.NOT_FOUND).json({ message: ErrorMessage.NOT_FOUND_SCHEDULES + " " + creditId })
      }
      return res.status(StatusCodes.OK).json({ schedule: result });
  
    } catch (error) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: error.message });
    }
  }

  public getActiveProducts = async (req: Request, res: Response) => {
    try{  
      
      const result = await this.creditCardService.getProducts();
  
      if (!result){
        return res.status(StatusCodes.NOT_FOUND).json({ message: ErrorMessage.NOT_FOUND_ACTIVE_CREDIT })
      }
      return res.status(StatusCodes.OK).json({ products: result });
  
    } catch (error) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: error.message });
    }
  }
}

export default CreditController;