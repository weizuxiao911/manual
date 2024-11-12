import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import * as path from 'path'

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: path.join(__dirname, '../db.sqlite'), // 数据库文件路径
            entities: [path.join(__dirname, '**/*.entity.{ts,js}')], // 实体文件路径
            synchronize: true, // 自动同步数据库结构，仅用于开发环境
        }),
        AuthModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
