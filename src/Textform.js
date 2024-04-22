import React, {useState} from 'react'

export default function Textform(prop) {
    const [text, setText] = useState('');
        const handleonchange=(event)=>{
            setText(event.target.value);
        }
    const handleU=()=>{
        let newtext = text.toUpperCase();
            setText(newtext);
    }
    const handleL=()=>{
      let newtext = text.toLowerCase();
          setText(newtext);
  }
  const handleCL=()=>{
    let newtext = '';
        setText(newtext);
  }
  
  return (
    
       <> 
       <div className='container'>
<div className="mb-3">
 <h1>  <label htmlFor="exampleFormControlTextarea1" className="form-label">{prop.head}</label></h1>
  <textarea className="form-control" value = {text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleU}>Convert to Uppercase</button>
<button className="btn btn-primary" style={{marginLeft:"10px"}} onClick={handleL}>Convert to Lowercase</button>
<button className="btn btn-primary" style={{marginLeft:"10px"}} onClick={handleCL}>Clear Text</button>
    </div>
    <div className="container">
      <h1>Your Text Summary</h1>
      <p>Words={text.split(" ").length}, Characters={text.length}</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
