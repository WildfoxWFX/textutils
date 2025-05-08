import React, {useState}from 'react'


export default function Textform(props) {
   const handleUpClick = () =>{
    //console.log('Upper Case was clicked: '+ text)
    let newText = text.toUpperCase()
    setText(newText)
   }

   const handleLoClick = () =>{
    //console.log('Upper Case was clicked: '+ text)
    let newText = text.toLowerCase()
    setText(newText)
   }

   const handleOnChange = (event) =>{
    //console.log('Change')
    setText(event.target.value);
   }

   const [text ,setText] = useState('Enter the text here');

  return (
    <>  
    <div className='container'>
        <h2>{props.heading}</h2>
        <div className='mb-3'>
            <textarea  className='form-control'value={text} onChange={handleOnChange}id='myBox' rows='8'></textarea>
        </div>
        <div className='container my-2'>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert To Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert To Lowercase</button>
        </div>
   </div>
    <div className='container'>   
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} Words {text.length} Characters</p>
        <p>{0.006 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
