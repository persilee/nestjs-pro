
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany } from 'typeorm';

@Entity()
export class Category {
	@PrimaryGeneratedColumn() id: number;

	@Column() name: string;

	@Column() alias: string;

	@CreateDateColumn() created: Date;

	@UpdateDateColumn() updated: Date;
}
