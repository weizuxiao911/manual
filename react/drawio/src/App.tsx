import React, { useRef } from 'react';
import './App.css';
import { DrawIoEmbed, DrawIoEmbedRef } from 'react-drawio';

const App: React.FC = () => {

    const container = useRef<DrawIoEmbedRef>(null)

    return <DrawIoEmbed autosave={true} ref={container} />
}

export default App;
