import {useState} from 'react';
import './App.css';
import Navbar from './component/Navbar'
import TodoBox from './component/TodoBox';

function App() {
  let bodyStyle = document.getElementById('root');


      const [mode,setMode] = useState("DARK");
      const [design,changeStyle] = useState({
        backgroundColor:"#7f8fa6"
       })
  let toogleMode =()=>{
    console.log("working")
    if(mode==='DARK'){
        setMode("LIGHT")
    }
    else{
      setMode("DARK")
    }
    if(mode==='LIGHT')
    {
      changeStyle({backgroundColor:"#7f8fa6"});
      bodyStyle.style.backgroundColor="#7f8fa6";
    }
    else 
    {
    changeStyle({backgroundColor:"#2f3542"});
    bodyStyle.style.backgroundColor="#2f3542";
     
    }
  }
  return (
    <>
    <Navbar 
    heading="ToDo App" 
    heading2="About Us"
    toogleMode={toogleMode}
    changeStyle = {design}
    />
    <TodoBox changeStyle = {design} /> 
    </>
  );
}

export default App;
