import React, { useState } from 'react';
import './index.css';

export default function Textform(prop) {
  const [text, setText] = useState('');

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleU = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  }

  const handleL = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  }

  const handleCL = () => {
    let newtext = '';
    setText(newtext);
  }

  return (
    <>
      <div className='container'>
        <div className="mb-3">
          <h1><label htmlFor="exampleFormControlTextarea1" className="form-label">{prop.head}</label></h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
            placeholder="Enter your text here..."
          ></textarea>
        </div>
        <button className="btn btn-uppercase" onClick={handleU}>Convert to Uppercase</button>
        <button className="btn btn-lowercase" onClick={handleL}>Convert to Lowercase</button>
        <button className="btn btn-clear" onClick={handleCL}>Clear Text</button>
      </div>
      <div className="container text-summary">
        <h1>Your Text Summary</h1>
        <p>Words: {text.split(" ").filter(word => word !== '').length}, Characters: {text.length}</p>
        <p>{0.008 * text.split(" ").filter(word => word !== '').length} Minutes read</p>
        <h2>Preview</h2>
        <p className="preview">{text}</p>
      </div>
    </>
  )
}
