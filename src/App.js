import './App.css';
import Nav from './components/Nav.js'
import Textform from './components/Textform';
//import About from './components/About';
import Alert from './components/Alert';
import React,{useState} from 'react';
function App() {
  const [mode,setmode]=useState("light");
  const [t,setT]=useState("Enable darkmode");
  const [alert,setalert]=useState("");
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    },
    setTimeout(() => {
      setalert(null)
    }, 3600));
  }

  let handleset=()=>{
    if(mode==="light"){
      setmode("dark")
      document.body.style.backgroundColor="dark";
      setT("Enable lightmode")
      showalert("switched to darkmode","success");
      document.title=("|-ext: darkmode");
    }
    else{
      setmode("light")
      document.body.style.backgroundColor="light";
      setT("Enable darkmode")
      showalert("switched to lightmode","success");
      document.title=("|-ext: lightmode");
    }
  }
  
  return (
    <>
    <Nav about="ABOUT" mode={mode} toggle={handleset} t={t}></Nav>
    <Alert alert={alert}/>
    <div ><Textform mode={mode} toggle={handleset} showalert={showalert} title="Enter your text here:" heading="Text to Analyze"></Textform></div>
    {/*<About></About>*/}
    </>
  );
}

export default App;
