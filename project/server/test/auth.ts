import { AuthService } from "../src/auth/auth.service";

const service = new AuthService()

service.token('appid', 'secret', 'code')
service.token('appid', 'secret')
service.tokenWithRefresh('refreshToken')