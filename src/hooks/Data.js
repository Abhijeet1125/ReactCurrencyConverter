
function Data (currency , setData){
    fetch ( `https://api.exchangerate-api.com/v4/latest/${currency}`)
    .then( (e)=> (e.json()))
    .then ( (e)=> ( setData ( e ) ))      
}
export default Data 