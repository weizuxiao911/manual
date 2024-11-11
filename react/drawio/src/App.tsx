import React, { useRef } from 'react';
import './App.less';
import { DrawIoEmbed, DrawIoEmbedRef } from 'react-drawio';

const App: React.FC = () => {

    const container = useRef<DrawIoEmbedRef>(null)

    return <div className='container'> 
        <DrawIoEmbed
            autosave={true} 
            configuration={{
                noSaveBtn: 1,
                enabledLibraries: []
            }}
            onAutoSave={(data: any) => console.log(data)}
            ref={container} 
        />
    </div>
}

export default App;
