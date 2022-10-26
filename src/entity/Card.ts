import { Column, PrimaryColumn, ManyToOne, Entity } from 'typeorm';
import { CardStatus } from '../helpers/constants';
import Account from './Account';
import BaseEntity from './BaseEntity';

@Entity()
class Card extends BaseEntity {
  @PrimaryColumn()
  cardNumber: string;

  @ManyToOne(() => Account, (account) => account.cards)
  accountNumber: Account;

  @Column({ length: 50 })
  holderName: string;

  @Column()
  expirationDate: Date;

  @Column({ length: 30 })
  paymentSystem: string;

  @Column('decimal', { precision: 19, scale: 4 })
  balance: number;

  @Column('decimal', { precision: 19, scale: 4 })
  transactionLimit: number;

  @Column({ type: 'enum', enum: CardStatus })
  status: CardStatus;

  @Column({ length: 30 })
  deliveryPoint: string;

  @Column({ length: 30 })
  coBrand: string;

  @Column()
  isDigitalWallet: boolean;

  @Column()
  isDigital: boolean;
}

export default Card;
