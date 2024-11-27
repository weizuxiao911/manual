import { Agent, AgentOptions } from 'http'
import * as net from 'net'

class UnixSocketAgent extends Agent {

    constructor(socketPath: string, options: AgentOptions = { keepAlive: true }) {
        super(options)
        this.socketPath = socketPath
    }

    createConnection(options, callback) {
        try {
            const socket = new net.Socket()
            socket.connect(this.socketPath, () => {
                callback(null, socket) // 成功连接后回调
            })

            socket.on('error', (err) => {
                console.error('socket error:', err)
                callback(err) // 发生错误时回调
            })
        } catch(error) {
            callback(error)
        }
    }
    
    private socketPath: string
}

export default UnixSocketAgent