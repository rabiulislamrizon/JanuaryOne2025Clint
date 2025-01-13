import React, { useState, useEffect } from "react";
import HeaderBottom from "../HomePage/HeaderBottom";

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    // Fetching currency codes
    fetch('https://open.er-api.com/v6/latest')
      .then(response => response.json())
      .then(data => {
        setCurrencies(Object.keys(data.rates));
        setConvertedAmount(data.rates[toCurrency] * amount);
      })
      .catch(error => console.log(error));
  }, []);

  const handleConvert = () => {
    fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`)
      .then(response => response.json())
      .then(data => {
        const rate = data.rates[toCurrency];
        setConvertedAmount(rate * amount);
      })
      .catch(error => console.log(error));
  };

  return (
   <>

   <HeaderBottom></HeaderBottom>

<div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header bg-primary text-white text-center">
              <h3>Currency Converter</h3>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>Amount:</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="form-control"
                  placeholder="Enter amount"
                />
              </div>
              <div className="form-group">
                <label>From:</label>
                <select
                  className="form-control"
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                >
                  {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>To:</label>
                <select
                  className="form-control"
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                >
                  {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </div>
              <button className="btn btn-primary btn-block" onClick={handleConvert}>
                Convert
              </button>
              {convertedAmount > 0 && (
                <h5 className="mt-3 text-center">
                  {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
                </h5>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default CurrencyConverter;
