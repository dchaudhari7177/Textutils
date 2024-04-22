import React, {useState} from 'react'

export default function Textform(prop) {
    const [text, setText] = useState('');
        const handleonchange=(event)=>{
            setText(event.target.value);
        }
    const handle=()=>{
        let newtext = text.toUpperCase();
            setText(newtext);
    }
  return (
    <div>
       
<div className="mb-3">
 <h1>  <label htmlFor="exampleFormControlTextarea1" className="form-label">{prop.head}</label></h1>
  <textarea className="form-control" value = {text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handle}>Convert</button>
    </div>
  )
}
