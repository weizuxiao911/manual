const { ipcMain, } = require('electron')

// 示例
ipcMain.on('test', async (event, id, message, ...args) => {
    try {
        event.sender.send(`test-${id}-success`, { message, args})
    } catch (error) {
        event.sender.send(`test-${id}-failed`, error?.message)
    }
})

// 自定义更多处理方法
