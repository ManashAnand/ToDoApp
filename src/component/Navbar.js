import React from 'react';

export default function Navbar(props) {

   
     
  return (
    <>
        <div className="mainBar" style={props.changeStyle} >
            <p id='heading'>{props.heading} </p>
            <p id='about' >{props.heading2}</p>
            <div className="switchContainer">
                <label className='switch'>
                <input type="checkbox" id='toogle' onClick={props.toogleMode} />
                <span className="slider round"></span>
                </label>
            </div>

        </div>
    </>
  )
}
