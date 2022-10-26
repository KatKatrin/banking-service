import { Column, ManyToOne, Entity, PrimaryGeneratedColumn } from 'typeorm';
import Account from './Account';
import BaseEntity from './BaseEntity';

@Entity()
class PaymentSchedule extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Account, (account) => account.paymentSchediles)
  accountNumber: Account;

  @Column()
  paymentDate: Date;

  @Column('decimal', { precision: 19, scale: 4 })
  principal: number;

  @Column('decimal', { precision: 19, scale: 4 })
  interest: number;
}

export default PaymentSchedule;
