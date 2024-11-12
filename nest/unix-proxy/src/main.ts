import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { WsAdapter } from '@nestjs/platform-ws'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { createProxyMiddleware } from 'http-proxy-middleware'
import UnixSocketAgent from './unix-socket-agent'

async function bootstrap() {
    // cors
    const app = await NestFactory.create(AppModule, {cors: true})
    // websocket
    app.useWebSocketAdapter(new WsAdapter(app))
    // swagger documents
    const swagger = new DocumentBuilder()
        .setTitle(`API文档`)
        .setDescription(``)
        .setVersion(`0.0.1`)
        .addTag(``)
        .build()
    const document = SwaggerModule.createDocument(app, swagger)
    SwaggerModule.setup('/docs', app, document)
    // unix-socket-agent proxy
    const agent = new UnixSocketAgent(`/var/run/docker.sock`)
    app.use('/docker', createProxyMiddleware({
        target: 'http://localhost',
        changeOrigin: true,
        ws: true,
        pathRewrite: { '^/docker': '' },
        agent: agent,
    }))
    // port
    await app.listen(3000)
}
bootstrap()
