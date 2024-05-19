import { useState, useEffect } from "react";
import Card from './components/Card'
import Notice from "./components/Notice"
import Data from './hooks/Data'
import Fullname from "./hooks/Fullname";
function App() {

  const [amount, setAmount] = useState(Number(0))
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [currency, setCurrency] = useState("USD")
  const [convertedCurrency, setConvertedCurrency] = useState("INR")
  

  const [data, setData] = useState(null)
  const [currencyname , setCurrencyname] = useState ( null )

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`);
  //       const result = await response.json();
  //       console.log ( "fetching ")
  //       setData(result);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, [currency]);

  useEffect ( ()=> { 
    Data(currency , setData)
  },[currency])

  useEffect ( ()=>{Fullname(setCurrencyname);},[])
  
  useEffect(() => {
      if (data && data.base === currency) {
        setConvertedAmount((Number(amount) * Number (data.rates[convertedCurrency])).toFixed(2));
      } else {        
        setConvertedAmount( "00000");
      }
  }, [currency, amount, data , convertedCurrency]); 
  

  function handleButtonClick() {
    let curtem = currency
    let amounttem = amount
    setConvertedCurrency(curtem)
    setCurrency(convertedCurrency)
    setAmount(convertedAmount)
    setConvertedAmount(amounttem)
  }

  return (
    <>
      <div className="flex justify-center items-center  w-full">
        <div className=" mb-5 mt-10 p-5 rounded-2xl text-2xl text-center text-white bg-orange-600 w-1/2 font-bold">
          Currency Converter
        </div>
      </div>
      <div className="flex justify-center">
        <Notice message={ (data && data.base===currency) ? `Last Updated data on ${data.date}` : `Loading data !  Please wait` }/>
      </div>
      <div className="flex justify-center items-center  w-full"> { }
        <div className="flex justify-between mb-4 w-full max-w-5xl mx-auto"> { }
          <Card lab="From: " amount={amount} currency={currency} disabled={false} changeAmount={setAmount} currencyChange={setCurrency} options ={ data? Object.keys( data.rates): ["USD" , "INR"]} fullname = {currencyname? currencyname : {}} />

          <button onClick={handleButtonClick}
            className="mt-10 mb-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  > Swap
          </button>

          <Card lab="To: " amount={convertedAmount} currency={convertedCurrency} disabled={true} changeAmount={setConvertedAmount} currencyChange={setConvertedCurrency} options={ data? Object.keys( data.rates): ["USD" , "INR"]} fullname = {currencyname? currencyname : {}} />
        </div>
      </div>
    </>
  )
}

export default App
