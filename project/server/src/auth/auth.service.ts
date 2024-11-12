import { Injectable } from '@nestjs/common'

@Injectable()
export class AuthService {

    // 获取token
    async token(appid: string, secret: string, code?: string): Promise<any> {
        if (code) {
            return this.authorizationCode(appid, secret, code)
        } else {
            return this.clientCredentials(appid, secret)
        }
    }

    // 刷新token
    async tokenWithRefresh(refreshToken: string): Promise<any> {
        return this.refreshToken(refreshToken)
    }

    private async authorizationCode(appid: string, secret: string, code: string): Promise<any> {
        // 授权码模式的实现
    }

    private async clientCredentials(appid: string, secret: string): Promise<any> {
        // 客户端模式的实现
    }

    private async refreshToken(refreshToken: string): Promise<any> {
        // 刷新模式的实现
    }
}