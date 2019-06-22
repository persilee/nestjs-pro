import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column('varchar', { unique: true })
    password: string

    @CreateDateColumn()
    created: Date

    @UpdateDateColumn()
    updated: Date

    @BeforeInsert()
    async hashPassword() {
      this.password = await bcrypt.hash(this.password, 12)
    }
}
