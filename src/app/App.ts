import express, { Application, Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import headersMiddleware from '../helpers/headers';
import CreditRoutes from '../credit/credit.routes';
//import CreditController from '../controllers/credit.controller';

class App {
  public app: Application;

  public router: Router;

  public creditRoutes: CreditRoutes;

  constructor() {
    this.app = express();
    this.router = express.Router();
    this.set_config();
    this.creditRoutes = new CreditRoutes(this.router);
  }

  private set_config() {
    this.app.use(bodyParser.json({ limit: '50mb' }));
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    this.app.use(cors());
    this.app.use(headersMiddleware);
    this.app.use(express.static('static'));
    this.app.use('/api/v1', this.router);
  }
}

export default new App().app;
