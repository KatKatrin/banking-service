import { Column, OneToOne, PrimaryColumn, Entity } from 'typeorm';
import BaseEntity from './BaseEntity';
import Operation from './Operation';

@Entity()
class OperationType extends BaseEntity {
  @PrimaryColumn()
  @OneToOne(() => Operation)
  type: string;

  @Column()
  isDebt: boolean;
}

export default OperationType;
