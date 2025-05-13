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
   
   const handleCopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
   }

   const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
        setText(newText.join(" "))

   }

   const [text ,setText] = useState('');

  return (
    <>  
    <div className='container' style={{color:props.mode === 'light'?'black':'white'}} >
        <h2>{props.heading}</h2>
        <div className='mb-3'>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'light'?'white':'grey',color:props.mode === 'light'?'black':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <div className='container my-2'>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert To Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert To Lowercase</button>
            <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear</button>
        </div>
   </div>
    <div className='container my-3' style={{color:props.mode === 'light'?'black':'white'}} >   
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} Words {text.length} Characters</p>
        <p>{0.006 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something Above In TextBox to Preview It Here"}</p>
    </div>
    </>
  )
}
