import {useCallback, useEffect, useRef, useState } from "react"

function App() {

  const [length,setLength]=useState(8);
  const[numberAllowed,setNumberAllowed]=useState(false);
  const[splCharAllowed,setSplCharAllowed]=useState(false);
  const[password,setPassword]=useState("");
  const passwordRef=useRef(null);


  const passwordGenerator=useCallback(()=>{

    let pass="";
    let reserviorPass="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed){
      reserviorPass+="0123456789"
    }
    if(splCharAllowed){
      reserviorPass+="!@#$%^&*()"
    }

    for(let i=1;i<=length;i++){
      let ranIndex=Math.floor(Math.random()*reserviorPass.length +1);
      pass+=reserviorPass.charAt(ranIndex);

    }
    setPassword(pass);





  },[length,numberAllowed,splCharAllowed,setPassword]);
  
  const copyToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    

    window.navigator.clipboard.writeText(password);


  },[password])



  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,splCharAllowed,passwordGenerator])




  return (
    <>
      <h1 className="text-5xl text-center text-white pt-7">Password Generator</h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 pt-5 my-8 bg-gray-800 text-gray-300">
          <div className="flex shadow rounded-lg overflow-hidden mb-4 border-gray-700 border-2">
              <input type="text" value={password} placeholder="Password.." className="outline-none w-full py-1 px-3 text-2xl read-only" ref={passwordRef}/>
              <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyToClipboard}>Copy</button>
          </div>
          <div className="flex text-sm gap-x-2">
              <div className="flex items-center gap-x-1">
                  <input className="cursor-pointer" type="range" min={8} max={20} value={length} onChange={(e)=>{setLength(e.target.value)}}/>
                  <label className="font-bold text-base">Length:{length}</label>
              </div>
              <div className="flex items-center gap-x-1">
                  <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=>{setNumberAllowed((prev)=>!prev)}}/>
                  <label htmlFor="numberInput" className="font-semibold text-base">Numbers</label>
              </div>
              <div className="flex items-center gap-x-1">
                  <input type="checkbox" defaultChecked={splCharAllowed} id="characterInput" onChange={()=>{setSplCharAllowed((prev)=>!prev)}}/>
                  <label htmlFor="characterInput" className="font-semibold text-base">Spl Char</label>
              </div>

          </div>
      </div>
     
    </>
  )
}

export default App
