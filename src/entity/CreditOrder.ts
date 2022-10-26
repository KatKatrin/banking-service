import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { OrderStatus } from '../helpers/constants';
import BaseEntity from './BaseEntity';
import Credit from './Credit';
import Product from './Product';

@Entity()
class CreditOrder extends BaseEntity {
  @PrimaryGeneratedColumn()
  @OneToOne(() => Credit)
  id: string;

  @Column()
  clientid: string;

  @OneToOne(() => Product)
  @JoinColumn({ name: 'productId' })
  productId: Product;

  @Column('decimal', { precision: 19, scale: 4 })
  amount: number;

  @Column('decimal', { precision: 19, scale: 4 })
  monthlyIncome: number;

  @Column('decimal', { precision: 19, scale: 4 })
  monthlyExpenditure: number;

  @Column({ type: 'enum', enum: OrderStatus })
  status: OrderStatus;

  @Column()
  periodMonth: number;

  @Column()
  creationDate: Date;

  @Column({ length: 10 })
  employerIdentificationNumber: string;
}

export default CreditOrder;
