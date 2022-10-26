import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CalculationMode } from '../helpers/constants';
import BaseEntity from './BaseEntity';
import CreditOrder from './CreditOrder';

@Entity()
class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  @OneToOne(() => CreditOrder)
  id: string;

  @Column()
  name: string;

  @Column('decimal', { precision: 19, scale: 4 })
  minSum: number;

  @Column('decimal', { precision: 19, scale: 4 })
  maxSum: number;

  @Column({ length: 3 })
  currencyCode: string;

  @Column('decimal', { precision: 6, scale: 4 })
  minInterestRate: number;

  @Column('decimal', { precision: 6, scale: 4 })
  maxInterestRate: number;

  @Column()
  needGuarentees: boolean;

  @Column()
  deliveryInCash: boolean;

  @Column()
  earlyRepayment: boolean;

  @Column()
  needIncomeDetails: boolean;

  @Column()
  minPeriodMonths: number;

  @Column()
  maxPeriodMonths: number;

  @Column()
  isActive: boolean;

  @Column()
  details: string;

  @Column({ type: 'enum', enum: CalculationMode })
  calculationMode: CalculationMode;

  @Column()
  gracePeriodMonth: number;

  @Column()
  rateIsAdjustable: boolean;

  @Column({ length: 20 })
  rateBase: string;

  @Column('decimal', { precision: 6, scale: 4 })
  rateFixPart: number;

  @Column('decimal', { precision: 6, scale: 4 })
  increasedRate: number;
}

export default Product;
