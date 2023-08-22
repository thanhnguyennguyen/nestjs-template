import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { IConfigModel } from './config.model'

@Entity('configs')
export class Config implements IConfigModel {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'varchar',
        nullable: false,
    })
    key: string

    @Column({
        type: 'text',
        nullable: false,
    })
    value: string

    @Column({
        name: 'created_at',
        type: 'timestamp',
        precision: null,
        default: () => 'CURRENT_TIMESTAMP',
    })
    created_at?: Date

    @Column({
        name: 'updated_at',
        type: 'timestamp',
        precision: null,
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    })
    updated_at?: Date
}
