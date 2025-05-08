import React, {useState}from 'react'


export default function Textform(props) {
   const handleUpClick = () =>{
    let newText = text.toUpperCase()
    setText(newText)
   }

   const handleLoClick = () =>{
    let newText = text.toLowerCase()
    setText(newText)
   }

   const handleClearClick = () =>{
    let newText = ''
    setText(newText)
   }

   const handleOnChange = (event) =>{
    //console.log('Change')
    setText(event.target.value);
   }
     
   const [text ,setText] = useState('');
   const [font, setFont] = useState('Arial');
   const [color, setColor] = useState('black');

  return (
    <>  
    <div className='container'>
        <h2>{props.heading}</h2>
                <div className="mb-3 d-flex flex-wrap align-items-center">
            <label className="me-2">Font:</label>
            <select className="form-select w-auto me-3" value={font} onChange={(e) => setFont(e.target.value)}>
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Georgia">Georgia</option>
            <option value="Courier New">Courier New</option>
            <option value="Verdana">Verdana</option>
            <option value="Tahoma">Tahoma</option>
            <option value="Trebuchet MS">Trebuchet MS</option>
            <option value="Lucida Console">Lucida Console</option>
            <option value="Impact">Impact</option>
            <option value="Comic Sans MS">Comic Sans MS</option>
            </select>

            <label className="me-2">Color:</label>
            <select className="form-select w-auto" value={color} onChange={(e) => setColor(e.target.value)}>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="orange">Orange</option>
            <option value="purple">Purple</option>
            <option value="brown">Brown</option>
            <option value="gray">Gray</option>
            <option value="darkblue">Dark Blue</option>
            <option value="crimson">Crimson</option>
            </select>
            </div>

        <div className='mb-3'>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ fontFamily: font, color: color }}></textarea>
        </div>
        <div className='container my-2'>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert To Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert To Lowercase</button>
            <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear</button>
        </div>
   </div>
    <div className='container'>   
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} Words {text.length} Characters</p>
        <p>{0.006 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p style={{ fontFamily: font, color: color }}>{text}</p>
    </div>
    </>
  )
}
