import { useState } from "react";

function Inputbox({label,options,defaulcurrency,setUsercurrency,setconvertcurrency,isdisable,setUservalue,finalresult,uservalue}) {
 
  let [currencyselect,setCurrencyselect] = useState(defaulcurrency);

  let passandchangethecurrency = (event)=>{
     setCurrencyselect(event.target.value);

     if(label == "To")
     {
       console.log("i am to")
       setconvertcurrency(event.target.value);
     }

     else if(label == "From")
     setUsercurrency(event.target.value);
  }

  let passthevalue = (event)=>{

    if(label=="From")
    setUservalue(event.target.value)
  }
  return (
      <div className={`bg-white p-3 rounded-lg text-sm flex `}>
          <div className="w-1/2">
              <label  className="text-black/40 mb-2 inline-block">
                  {label}
              </label>
              <input
                  className={`${isdisable ? 'outline-none': 'outline outline-1 p-2'} w-full bg-transparent py-1.5`}
                  type="number"
                  placeholder="Amount"
                  disabled = {isdisable}
                  onChange={passthevalue}
                  value={label == "From" ? uservalue : finalresult}
              />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p>
              <select
                  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                  value={currencyselect}
                  onChange={passandchangethecurrency}
              >
               {options.map(option => <option key={option} value={option}>{option}</option>)}
              </select>
          </div>
      </div>
  );
}

export default Inputbox;
