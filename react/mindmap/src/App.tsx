import React, { useEffect, useRef, useState } from 'react'
import './App.less'
import MindElixir from 'mind-elixir'
// import { useSearchParams } from 'react-router-dom'

const App: React.FC = () => {

    const container = useRef<any>()
    const mindmap = useRef<any>()
    const [jsonData, setJsonData] = useState<any>()

    const init = (options: any) => {
        mindmap.current = new MindElixir(options)
        const data = MindElixir.new('new topic')
        mindmap.current.init(data)
    }

    const save = async () => {
        let filename = window.location.pathname
        if (filename.startsWith('/')) {
            filename.substring(1)
        }
        if (!filename) {
            filename = `${crypto.randomUUID()}.json`
        }
        const data = mindmap.current.getData()
        const jsonString = JSON.stringify(data)
        const blob = new Blob([jsonString], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = filename
        link.style.display = 'none'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
    }

    const handleFileSelect = (event: any) => {
        const file = event.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (e: any) => {
                try {
                    const fileObj = JSON.parse(e.target.result)
                    setJsonData(fileObj)
                } catch (error) {
                    console.error('文件内容不是有效的JSON:', error);
                }
            };
            reader.readAsText(file);
        }
    }

    useEffect(() => {
        const options = {
            el: container?.current,// '#map', // or HTMLDivElement
            direction: MindElixir.RIGHT,
            draggable: true, // default true
            contextMenu: true, // default true
            toolBar: true, // default true
            nodeMenu: true, // default true
            keypress: true, // default true
            locale: 'zh_CN', // [zh_CN,zh_TW,en,ja,pt,ru] waiting for PRs
            overflowHidden: false, // default false
            mainLinkStyle: 1, // [1,2] default 1
            mouseSelectionButton: 0, // 0 for left button, 2 for right button, default 0
            contextMenuOption: {
                focus: true,
                link: true,
                extend: [
                    // {
                    //     name: 'getNodes',
                    //     onclick: () => {
                    //         console.log(mindmap.current.getData())
                    //     },
                    // },
                ],
                
            }
        }
        init(options)
    }, [])

    useEffect(() => {
        if (jsonData) {
            mindmap.current.init(jsonData)
        }
    }, [jsonData])

    return <>
        <input type="file" onChange={handleFileSelect} />
        <button className='save-btn' onClick={save}>保存</button>
        <div className='mindmap' ref={container}></div>
    </>
}

export default App;
