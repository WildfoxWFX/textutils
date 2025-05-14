import React, {useState}from 'react'


export default function Textform(props) {
   const handleUpClick = () =>{
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to Uppercase!","success");
   }

   const handleLoClick = () =>{
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to Lowercase!","success");

   }

   const handleClearClick = () =>{
    let newText = ''
    setText(newText)
    props.showAlert("Message Cleared!","success");

   }

   const handleOnChange = (event) =>{
    //console.log('Change')
    setText(event.target.value);
   }
   
   const handleCopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Message Copied to Clipboard!","success");

   }

   const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed!","success");
    

   }

   const [text ,setText] = useState('');

  return (
    <>  
    <div className='container' style={{color:props.mode === 'light'?'#042743':'white'}} >
        <h2 className='mb-4'>{props.heading}</h2>
        <div className='mb-3'>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'light'?'white':'#13466e',color:props.mode === 'light'?'#042743':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <div className='container my-2'>
            <button disabled = {text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Convert To Uppercase</button>
            <button disabled = {text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handleLoClick}>Convert To Lowercase</button>
            <button disabled = {text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled = {text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handleCopy}>Copy Text</button>
            <button disabled = {text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handleClearClick}>Clear</button>
        </div>
   </div>
    <div className='container my-3' style={{color:props.mode === 'light'?'#042743':'white'}} >   
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words {text.length} Characters</p>
        <p>{0.006 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing To Preview!"}</p>
    </div>
    </>
  )
}
