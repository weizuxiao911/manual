import React, { useRef } from 'react';
import './App.less';
import { DrawIoEmbed, DrawIoEmbedRef } from 'react-drawio';

const App: React.FC = () => {

    const container = useRef<DrawIoEmbedRef>(null)

    return <div className='container'> 
        <DrawIoEmbed autosave={true} ref={container} />
    </div>
}

export default App;
