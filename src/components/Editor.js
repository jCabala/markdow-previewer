import { useRef } from "react"

const Editor = ({ handleChange, handleReset }) => {
  const ref = useRef();  
  
  return (
    <div className='wrapper editor-wrapper'>
        <div className="toolbar editor-toolbar">
            <h2>Editor</h2>
            <button onClick={() => handleReset(ref)}>Reset</button>
        </div>
        <div className="editor">
            <textarea ref={ref} onChange={() => handleChange(ref)}/>
        </div>
    </div>
  )
}

export default Editor