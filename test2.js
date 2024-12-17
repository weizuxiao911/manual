
const request = async (index) => {
    const t = new Date().getTime()
    const res = await fetch(`https://open-api.oscollege.net/repo/detail/P0y17r`, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    console.log(`第${index}请求耗时: ${new Date().getTime() - t} ms, status = ${res.status}`)
}

const test = async() => {
    const list = []
    for (let i = 0; i < 100; i++) {
        list.push(request(i))
    }
    await Promise.all(list)
}

test()