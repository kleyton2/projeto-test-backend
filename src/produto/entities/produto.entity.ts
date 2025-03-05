import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  codigo: string;

  @Column()
  nome: string;

  @Column({ nullable: true })
  codigo_barras: string;

  @Column('decimal', { precision: 10, scale: 2 })
  quantidade: number;

  @Column('decimal', { precision: 10, scale: 2 })
  preco: number;
}