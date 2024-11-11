import React, { useEffect, useRef } from 'react'
import './App.less'
import MindElixir from 'mind-elixir'

const App: React.FC = () => {

    const container = useRef<any>()
    const mindmap = useRef<any>()

    const init = (options: any) => {
        mindmap.current = new MindElixir(options)
        const data = MindElixir.new('new topic')
        mindmap.current.init(data)
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
                    {
                        name: 'getNodes',
                        onclick: () => {
                            console.log(mindmap.current.getData())
                        },
                    },
                ],
                
            }
        }
        init(options)
    }, [])

    return <div className='mindmap' ref={container}></div>
}

export default App;
