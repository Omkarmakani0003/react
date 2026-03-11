

function Inputcard({
    label,
    amount,
    onChangeAmount,
    selectedcurrency = 'usd',
    onChangeCurrency,
    currencyOptions = [],
    disable = false
}){

    return (
    <div className="card">
        <label>{label}</label>
        <div className="input-group">
            <input type="number" placeholder="Enter amount" value={amount} onChange={((e)=>{ onChangeAmount(!(e.target.value <= 0 ) ? e.target.value : 0) })} disabled={disable} />

            <select value={selectedcurrency} onChange={(e)=>{ onChangeCurrency(e.target.value) }}>
                {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>

        </div>
    </div>
    )
}

export default Inputcard 