
const request = async (repo) => {
    const response = await fetch(`https://open-api.cloudlab.top/repo/clone?repo=${encodeURIComponent(repo)}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "code": "P0y17r"
        })
    })
    const data = await response.json()
    console.log('data =>', data)
}

const test = () => {
    const req = []
    for (let i = 0; i < 100; i++) {
        const repo = `weizuxiao/P0y17r_${i}`
        req.push(request(repo))
    }
    Promise.all(req)
}

test()
