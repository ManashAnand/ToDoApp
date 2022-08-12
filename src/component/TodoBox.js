import React from "react";
import { useState } from "react";
import Heading from "./Heading";
import TodoList from './TodoList'


export default function TodoBox(props) {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  const MakeList = () => {
    setItems((oldItems) => {
      return [...oldItems, inputText];
    });
    setInputText("")
  };

  const changeValue = (e) => {
    let newText = e.target.value;
    setInputText(newText);
  };

  const deleteItems = (id) => {
    console.log("Item deleted")
    setItems((oldItems)=>{
      return oldItems.filter((arr,index)=>{
       return index!==id;
      }) 
    })

}
  return (
    <>
    <div className="containers_Container" style={props.changeStyle}>

  
    <div className="mainContainer" style={props.changeStyle}>
        <Heading />
        <div className="container" >
          <input
            id="mainText"
            type="text"
            placeholder="Write plan here"
            value={inputText}
            onChange={changeValue}
            style={props.changeStyle}
          />
          <div id="btn" onClick={MakeList}>
            Add
          </div>
        </div>

        <div className="listBox">
          <div className="createdBox">
            <ul>
              {items.map((everyElement,index) => {
                return <TodoList
                id={index}
                 list={everyElement}
                  onClick={deleteItems}


                 />
              })}
            </ul>
          </div>
        </div>
      </div>

      </div>
    
    </>
  );
}
