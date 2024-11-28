import { spawn } from 'node-pty'

const file  = `zsh`
const args = []
const options = {}

const exec = spawn(file, args, options)

exec.onData((data: string) => {
    console.log(data)
})

exec.onExit((e:{exitCode: number, signal?: number}) => {
    console.log(e.exitCode, e?.signal)
})
