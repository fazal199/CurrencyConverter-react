import { useEffect, useState } from "react"

const useCurrencyInfo = (currency) => {

   let [data, setData] = useState([]);

   useEffect(() => {
      fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
         .then(response => response.json()).then(data => setData(data[currency]));
   }, [currency])

   console.log(data);
   return data;

}

export default useCurrencyInfo;