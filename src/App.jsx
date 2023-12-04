import { useState } from 'react';
import Inputbox from './Components/Inputbox'
import useCurrencyInfo from './Hooks/useCurrencyInfo';

function App() {

  let [usercurrency,setUsercurrency] = useState("usd");
  let [convertcurrency,setconvertcurrency] = useState("inr");
  let [uservalue,setUservalue] = useState(0);
  let [finalresult,setFinalresult] = useState(0);
   
  let data = useCurrencyInfo(usercurrency);

  let calculate_the_result = ()=>{
     setFinalresult(Number(uservalue) * Number(data[convertcurrency]));
  }
  
  let options = Object.keys(data);
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        background : 'black',
      }}
    >
      <div className="w-full">
       <h1 className="capitalize text-center text-5xl font-semibold mb-9 text-white">currency converter</h1>
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="w-full mb-1">
              <Inputbox label="From" options={options} defaulcurrency="usd" setUsercurrency={setUsercurrency} setconvertcurrency={setconvertcurrency} isdisable={false} setUservalue={setUservalue} finalresult={finalresult} uservalue={uservalue}/>
            </div>
            <div className="relative w-full h-0.5">
            
            </div>
            <div className="w-full mt-1 mb-4">
              <Inputbox label="To" options={options} defaulcurrency = "inr" setUsercurrency={setUsercurrency} setconvertcurrency={setconvertcurrency} isdisable={true} setUservalue={setUservalue} finalresult={finalresult} uservalue={uservalue}/>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              onClick={calculate_the_result}
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
