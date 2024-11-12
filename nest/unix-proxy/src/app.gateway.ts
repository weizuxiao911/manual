import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { Server, WebSocket } from 'ws'
import * as net from 'net'

const dockerHost = '/var/run/docker.sock';

@WebSocketGateway({ path: '/terminal' })
export class AppGateway {

    constructor(
    ) { }

    @WebSocketServer() server: Server

    afterInit() {
        this.server.on('connection', (ws: WebSocket, request: any) => {

            const url = request?.url
            console.log(url)
            const execId = url.match(/containerId=(.+?)(&|$)/)?.[1]
            console.log(execId)

            const execStartBuffer = Buffer.from(JSON.stringify({
                Detach: false,
                Tty: true,
                Stream: true
            }), 'utf8');
            const execStartHeader = `POST /exec/${execId}/start HTTP/1.1\r\nHost: localhost\r\nContent-Type: application/json\r\nContent-Length: ${execStartBuffer.length}\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==\r\nSec-WebSocket-Version: 13\r\n\r\n`;

            const execStartClient = net.connect(dockerHost, () => {
                execStartClient.write(execStartHeader);
                execStartClient.write(execStartBuffer);
            });

            execStartClient.on('data', (data) => {
                console.log(data.toString())
                ws.send(data.toString());
            });

            execStartClient.on('end', () => {
                console.log('exec 会话结束');
                ws.close();
            });

            execStartClient.on('error', (err) => {
                console.error('exec 会话错误:', err);
                ws.close();
            });

            ws.on('message', (message: any) => {
                if (execStartClient.writable) {
                    const length = Buffer.byteLength(message);
                    const header = `stdin:${length}\r\n`;
                    const footer = `\r\n`;
                    execStartClient.write(header);
                    execStartClient.write(message);
                    execStartClient.write(footer);
                } else {
                    console.error('无法发送数据，会话已关闭');
                }
            });

            ws.on('close', () => {
                console.log('WebSocket 连接关闭');
                execStartClient.end();
            });
        })
    }
}
