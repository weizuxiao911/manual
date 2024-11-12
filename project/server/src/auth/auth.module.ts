import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthorizationCode } from './authorization_code.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
    imports: [TypeOrmModule.forFeature([AuthorizationCode])],
    providers: [AuthService]
})
export class AuthModule { }
