
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany, OneToMany } from 'typeorm';
import { Post } from '../post/post.entity';

@Entity()
export class Category {
	@PrimaryGeneratedColumn() id: number;

	@Column() name: string;

	@Column() alias: string;

	@CreateDateColumn() created: Date;

  @UpdateDateColumn() updated: Date;
  
  @OneToMany(type => Post, post => post.category)
  posts: Post[]
}
