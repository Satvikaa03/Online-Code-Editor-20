import React, { useState } from 'react';
import './App.css';

function App() {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');

  const handleHtmlChange = (event) => setHtmlCode(event.target.value);
  const handleCssChange = (event) => setCssCode(event.target.value);
  const handleJsChange = (event) => setJsCode(event.target.value);

  return (
    <div className="App">
      <h1>Online Code Editor</h1>

      <div className="editor-container">
        <div className="editor">
          <h2>HTML</h2>
          <textarea
            value={htmlCode}
            onChange={handleHtmlChange}
            placeholder="Write HTML here"
          ></textarea>
        </div>

        <div className="editor">
          <h2>CSS</h2>
          <textarea
            value={cssCode}
            onChange={handleCssChange}
            placeholder="Write CSS here"
          ></textarea>
        </div>

        <div className="editor">
          <h2>JavaScript</h2>
          <textarea
            value={jsCode}
            onChange={handleJsChange}
            placeholder="Write JavaScript here"
          ></textarea>
        </div>
      </div>

      <div className="preview-container">
        <h2>Live Preview</h2>
        <iframe
          title="Live Preview"
          srcDoc={`<html><head><style>${cssCode}</style></head><body>${htmlCode}<script>${jsCode}</script></body></html>`}
        ></iframe>
      </div>
    </div>
  );
}

export default App;
