import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import * as crypto from 'crypto'


@Entity()
export class AuthorizationCode {

    @PrimaryGeneratedColumn()
    id: number

    // 授权码
    @Column()
    code: string

    // 用户id
    @Column()
    userid: string

    // 应用id
    @Column()
    appid: string

    // 过期时间
    @Column()
    expire: number

}
