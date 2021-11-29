import ExchangeRate from "./ExchangeRate";
import { useState } from "react"
import axios from "axios";

function CurrencyConverter() {
    
    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState ('BTC')
    const currencies = ['BTC', 'ETH', 'USD', 'EUR']
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState ('BTC')

    const [amount, setAmount] = useState(1)

    const [exchangeRate, setExchangeRate] = useState(0)
    const [result, setResult] = useState(0)
    
    const convert = () => {

        const options = {
            method: 'GET',
            url: 'https://alpha-vantage.p.rapidapi.com/query',
            params: { from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency },
            headers: {
                'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
            }
        };

        axios.request(options).then((response) => {
            setExchangeRate(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"])
            setResult(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] * amount)
        }).catch((error) => {
            console.error(error);
        });
    }
    console.log(exchangeRate)


    return (
        <div className='currency-converter'>
            <h2> CurrencyConverter </h2>

            <div className='input-box'>
                <table>
                    <tbody>
                        <tr>
                            <td> Primary Currency </td>
                            <td>
                                <input 
                                value={amount} 
                                type='number' 
                                name='currency-amount-1'
                                onChange={(e) => setAmount(e.target.value)}
                                >

                                </input>
                            </td>
                            <td>
                                <select 
                                value={chosenPrimaryCurrency} 
                                className='currency-option' 
                                name='currency-option-1'
                                onChange= {(e) => setChosenPrimaryCurrency(e.target.value)}
                                >

                                    {currencies.map((currency, index) => (<option key={index}> {currency} </option>))}

                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td> Secondary Currency </td>
                            <td>
                                <input 
                                value={result} 
                                name='currency-amount-2'
                                disabled={true}>

                                </input>
                            </td>
                            <td>
                                <select 
                                value={chosenSecondaryCurrency} 
                                className='currency-option' 
                                name='currency-option-2'
                                onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                                >

                                    {currencies.map((currency, index) => (<option key={index}> {currency} </option>))}

                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <button className='convert-button' onClick={convert}>convert </button>

                <ExchangeRate exchangeRate={exchangeRate} chosenPrimaryCurrency={chosenPrimaryCurrency} chosenSecondaryCurrency={chosenSecondaryCurrency}/>
            </div>

            
        </div>
    );
}

export default CurrencyConverter;