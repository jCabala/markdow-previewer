import { useState } from 'react';

import Markdown from 'marked-react';

const Previewer = ({content}) => {
    const [isFullScreen, setFullScreen] = useState(false);
    
    const handleFullScreen = () => {
        setFullScreen(prev => !prev);
    }
  
   return (
    <div className={`wrapper preview-wrapper ${isFullScreen ? 'fullScreen' : ''}`}>
        <div className="toolbar preview-toolbar">
            <h2>Preview</h2>
            <button onClick={handleFullScreen} >Full Screen</button>
        </div>
        <div className="content-container preview">
            <Markdown>{content}</Markdown>
        </div>
    </div>
  )
}

export default Previewer