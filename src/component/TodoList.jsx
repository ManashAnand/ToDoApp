import React from 'react'

export default function TodoList(props) {
  
 
    return (
    <>
    <div className="listStyle">
        <li>{props.list}</li>
        <div className="listBtn" onClick={()=>{
            props.onClick(props.id);
        }}>
        Delete
        </div>
    </div>
    </>
  )
}
