import { useState } from 'react';

import Editor from './components/Editor';
import Previewer from './components/Previewer';

import './style.css';

function App() {
  const [content, setContent] = useState();

  const handleContentChange = ref => {
    const newContent = ref.current.value;
    setContent(newContent);
  }

  const handleContentReset = ref => {
    ref.current.value = '';
    setContent('');
  }

  return (
    <div className="app">
    <h1>Markdow Previewer</h1>
      <div className='app-container'>
        <Editor handleReset={handleContentReset} handleChange={handleContentChange}/>
        <Previewer content={content}/>
      </div>
    </div>
  );
}

export default App;
