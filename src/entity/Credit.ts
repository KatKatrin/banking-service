import { Column, PrimaryColumn, OneToOne, JoinColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import Agreement from './Agreement';
import BaseEntity from './BaseEntity';
import CreditOrder from './CreditOrder';

@Entity()
class Credit extends BaseEntity {
  @PrimaryGeneratedColumn()
  @OneToOne(() => Agreement)
  id: string;

  @OneToOne(() => CreditOrder)
  @JoinColumn({ name: 'orderId' })
  orderId: CreditOrder;

  @Column({ length: 20 })
  type: string;

  @Column('decimal', { precision: 19, scale: 4 })
  creditLimit: number;

  @Column('decimal', { precision: 19, scale: 4 })
  interestRate: number;

  @Column('decimal', { precision: 6, scale: 4 })
  latePaymentRate: number;

  @Column({ length: 3 })
  currencyCode: string;

  @Column()
  personalGuarantees: boolean;

  @Column({ length: 30 })
  status: string;

  @Column()
  gracePeriodMonth: number;
}

export default Credit;
