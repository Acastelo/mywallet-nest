import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn({name: "user_id"})
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

}