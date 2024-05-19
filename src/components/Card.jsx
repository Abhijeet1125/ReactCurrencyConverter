// Card.jsx
function Card({
    lab,
    amount,
    currency,
    disabled = false,
    changeAmount,
    currencyChange,
    currencyDiabled = false ,
    options = ["USD" , "INR"],
    fullname ,
}) {
    return (
        <>
            <div className=" ml-5 mr-5 mb-5 bg-white rounded-lg mt-4 p-5 inline-flex justify-center items-center border  shadow-xl" > {}
                <div className="w-3/5">
                    <div className="ml-1 text-2xl text-red-600 inline ">{lab}</div>                    
                    <div className="w-full">
                        <label htmlFor="jaiho">
                            <div className="text-2xl text-blue-600 inline ml-1">{currency}</div>
                        </label>
                        <input
                            id="jaiho"
                            className=" w-full bg-transparent mt-4 shadow-md" 
                            type="number"
                            placeholder="Amount"
                            disabled = {disabled}
                            value={amount}
                            onChange={(e)=>{ changeAmount ( e.target.value)}}
                        >                            
                        </input>
                    </div>
                </div>
                <div className="w-2/5">
                    <div className="ml-1 text-xl w-full text-red-600 inline ">Currency Type</div>    
                    <select 
                        className="w-full overflow-auto whitespace-normal" 
                        value={currency}
                        onChange={(e)=>{currencyChange(e.target.value)}}
                        disabled = {currencyDiabled}
                    >                         
                        {
                            options.map((e)=>(
                                <option key={e} value={e}>{`${e}-${fullname[e] || '---'}`}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </>
    )
}
export default Card;