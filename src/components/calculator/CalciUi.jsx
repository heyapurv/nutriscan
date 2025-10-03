import { useState } from "react";

export default function CalciUi() {

 const btns = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', 'C', '=', '+',
 ]

 const [inputValue, setInputValue] = useState("")

  const handleInput = (e) =>{
    let value = e.target.value;
    console.log(value);
  }

  const onButtonClick =(btn) =>{
    if(btn === 'C'){
        setInputValue("")
    }else if(btn === '='){
        const result = eval(inputValue)
        setInputValue(result)
    }else{
        const newDisplayVal = inputValue + btn;
        setInputValue(newDisplayVal)
    }
   
  }
  return (
    
   <div className="h-screen flex items-center justify-center">

    <div className="border border-gray-500 p-4 rounded-md"> 

        <div className="flex gap-3 ">

            <input type="text" className="text-gray-300 px-3 bg-gray-800 border border-gray-700" onChange={handleInput} value={inputValue} readOnly/>
            {/* <button className="bg-gray-500 p-3">AC</button> */}

        </div>

        <div className="py-4">

            <div className="grid grid-cols-4 gap-4">
                {btns.map(item => (
                    <button className="border p-1 rounded-md hover:bg-gray-900" onClick={() => onButtonClick(item)}>{item}</button>
                ))}
            </div>

        </div>

    </div>

   </div>
  );
}
