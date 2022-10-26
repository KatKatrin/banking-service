import { Column, ManyToOne, OneToOne, JoinColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import Account from './Account';

import BaseEntity from './BaseEntity';
import OperationType from './OperationType';

@Entity()
class Operation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Account, (account) => account.operations)
  accounNumber: Account;

  @OneToOne(() => OperationType)
  @JoinColumn({ name: 'operationTypeId' })
  operationTypeId: string;

  @Column('decimal', { precision: 19, scale: 4 })
  sum: number;

  @Column()
  details: string;

  @Column({ length: 3 })
  currencyCode: string;

  @Column({ type: 'timestamp with time zone' })
  completedAt: Date;
}

export default Operation;
