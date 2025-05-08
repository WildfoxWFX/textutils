import React, {useState}from 'react'


export default function Textform(props) {
   const handleUpClick = () =>{
    //console.log('Upper Case was clicked: '+ text)
    let newText = text.toUpperCase()
    setText(newText)
   }

   const handleOnChange = (event) =>{
    //console.log('Change')
    setText(event.target.value);
   }

   const [text ,setText] = useState('Enter the text here');

  return (
    <div>
        <h2>{props.heading}</h2>
        <div className='mb-3'>
            <textarea  className='form-control'value={text} onChange={handleOnChange}id='myBox' rows='8'></textarea>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert To Uppercase</button>
        </div>
    </div>
  )
}
