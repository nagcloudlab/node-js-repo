import { Field, Int, ObjectType } from "@nestjs/graphql"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@ObjectType()
@Entity()
export class Todo {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number
    @Field()
    @Column()
    title: string
    @Field()
    @Column()
    completed: false
}