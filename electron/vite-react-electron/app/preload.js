const { contextBridge, ipcRenderer } = require("electron")

// 上下文桥接器
contextBridge.exposeInMainWorld('electron', {

    async: (method, ...args) => {
        // 给每个请求加个唯一id
        const id = crypto.randomUUID().toString()?.replaceAll(/-/g, '')
        ipcRenderer.send(method, id, ...args)
        // 转成异步，并定义响应格式
        return new Promise((resovle, reject) => {
            ipcRenderer.once(`${method}-${id}-success`, (_, response) => {
                resovle(response)
            })
            ipcRenderer.once(`${method}-${id}-failed`, (_, error) => {
                reject(error)
            })
        })
    }
    
})