import ExchangeRate from "./ExchangeRate";

function CurrencyConverter() {

    const currencies = ['BTC', 'ETH', 'USD', 'EUR']
    return (
        <div className='currency-converter'>
            <h2> CurrencyConverter </h2>

            <div className='input-box'>
                <table>
                    <tbody>
                        <tr>
                            <td> Primary Currency </td>
                            <td>
                                <input value={''} type='number' name='currency-amount-1'>

                                </input>
                            </td>
                            <td>
                                <select value={''} className='currency-option' name='currency-option-1'>

                                    {currencies.map(currency => (<option> {currency} </option>))}

                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td> Secondary Currency </td>
                            <td>
                                <input value={''} type='number' name='currency-amount-2'>

                                </input>
                            </td>
                            <td>
                                <select value={''} className='currency-option' name='currency-option-2'>

                                    {currencies.map(currency => (<option> {currency} </option>))}

                                </select>
                            </td>

                        </tr>
                    </tbody>
                </table>
                <ExchangeRate />
            </div>

            
        </div>
    );
}

export default CurrencyConverter;