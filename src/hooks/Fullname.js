function Fullname( setCurrencyname ){
    fetch("https://openexchangerates.org/api/currencies.json")
    .then ((e)=>(e.json()))
    .then ( (e)=> (setCurrencyname(e)))
}
export default Fullname