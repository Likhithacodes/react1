import React,{useState} from 'react';


export default function Textform(props){
    let my={
        height:'100vh'
    }
    const handleonchange=(event)=>{
        console.log("on change");
        setText(event.target.value)
    }
    const Handleupclick=()=>{
        console.log("uppercase was clicked");
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showalert("coverted to uppercase","success");
    }
    const Handlelowclick=()=>{
        console.log("lowercase was clicked");
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showalert("coverted to lowercase","success");
    }
    const Handleclick=()=>{
        console.log("clear was clicked");
        let newtext="";
        setText(newtext);
    }
    const hadleextraspaces=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "))
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent === "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML === "Speak"){
                window.speechSynthesis.cancel()
            }
        }
    }
    const [text,setText]=useState("");
    if(text==="null"){
        text.split(" ").length=0;
    }
    return(
        <div className={`bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} style={my}>
        <div className="container"><h1>{props.heading}</h1>
        <div className="my-3">
            <textarea className="form-control"  onChange={handleonchange} rows="8"value={text}placeholder='Enter your text'></textarea>
        </div>
        <button className='btn btn-warning border-dark  shadow' onClick={Handleupclick}>Convert to uppercase</button>
        <button className='btn btn-warning m-1 border-dark shadow ' onClick={Handlelowclick}>Convert to lowercase</button>
        <button className='btn btn-warning m-1 border-dark shadow ' onClick={Handleclick}>clear</button>
        <button className='btn btn-warning m-1 border-dark shadow ' id="toggle" onClick={speak}>speak</button>
        <button className='btn btn-warning m-1 border-dark shadow ' id="toggle" onClick={hadleextraspaces}>remove extra spaces</button>

        </div>
        <div className="container py-4">
            <h1>Text summary</h1>
            <p>{text===""?text.split(" ").length=0:text.split(/\s+/).filter(Boolean).length} words and {text.length} characters</p>
            <p>{0.008*text===""?text.split(" ").length=0:text.split(/\s+/).filter(Boolean).length} time taken to read the words</p>
            <h2>preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preivew it"}</p>
        </div>
        </div>
    );
}