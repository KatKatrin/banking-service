import { Column, OneToOne, JoinColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import BaseEntity from './BaseEntity';
import Credit from './Credit';

@Entity()
class Agreement extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @OneToOne(() => Credit)
  @JoinColumn({ name: 'creditId' })
  creditId: Credit;

  @Column()
  agreementDate: Date;

  @Column()
  terminationDate: Date;

  @Column()
  isActive: boolean;

  @Column({ length: 20 })
  responsibleSpecialistId: string;
}

export default Agreement;
