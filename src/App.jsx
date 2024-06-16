import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passswordGenerator = useCallback(()=>{
    let pass="";
    let passwordString="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
   
    if(numberAllowed){
      passwordString += "0123456789";
    } 
    if(characterAllowed){
      passwordString +="~!@#$%^&*()_+/{}[]?.><";
    } 
    console.log(passwordString);
    for (let i = 1; i <= length; i++) {
      let charPos= Math.floor(Math.random() * passwordString.length +1);
      pass += passwordString.charAt(charPos);
    }

    setPassword(pass);
    console.log(password +" "+passwordString+" "+numberAllowed);
  }, [length, numberAllowed, characterAllowed, ]);
/*
  const passswordGenerator = ()=>{
    let pass="";
    let passwordString="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) passwordString += "0123456789";
    if(characterAllowed) passwordString +="~!@#$%^&*()_+/{}[]?.><";

    for (let i = 1; i <= length; i++) {
      let charPos= Math.floor(Math.random() * length +1);
      
      pass += passwordString.charAt(charPos);
      console.log(pass);
    }

    setPassword(pass);
  }
    */
useEffect(() =>{
  passswordGenerator()
}, [length, numberAllowed, characterAllowed, passswordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md bg-gray-600 rounded-lg text-white px-4 my-8 pt-4'>
        <h1 className='text-center text-xl'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden my-4'>
          <input 
          type="text"
          value={password}
          className='outline-none px-3 py-1 w-full'
          placeholder='password'
          readOnly
          />

          <button className='bg-blue-700 text-white outline-none px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2 text-orange-400'>
          <div className='flex items-center gap-x-1 my-4 '>
            <input
              className='cursor-pointer'
              type="range"
              max={100}
              min={8}
              value={length}
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
            <input 
              className='ml-5 cursor-pointer' 
              type="checkbox" 
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() =>{setNumberAllowed((prev) => !prev)}}
            
            />
            <label>Number</label>

            <input 
              className='ml-5 cursor-pointer'
              type="checkbox"
              defaultChecked={characterAllowed}
              id='characterInput'
              onChange={() => {setCharacterAllowed((prev) => !prev)}}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
