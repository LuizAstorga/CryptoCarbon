import React from 'react';
import { useState, useEffect } from 'react';

export default function Data()  {
  const [data, editData] = useState([]);
  useEffect(() => {
    let isMounted = true;

    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  .then(response => response.json())
  .then(datac => {
      if (isMounted){
        editData(datac);
      }
    });
    
    return () => { isMounted = false };
  })

  return (
    <div>
      {data.map((crypto) => (
        <div className="p-4 bg-gray-300 text-white text-2xl rounded-lg flex flex-col">
          <span>{crypto.id}</span>
          <span>{crypto.market_cap}</span>
        </div>))
      }      
    </div>
  )
  }


//// btc
// energy(222134, 2264);

// eth
// energy(2750, 11000000000, 238);

// btc marketcap 760330334130
// price of btc 40095
// Number of bitcoins = 760330334130 / 40095

// eth marketcap 329134117687

// market cap = total bitcoins * price of 1 bitcoin
// energy consumption = kwh per transaction of 1 unit of crypto

// solana
// per trans = 0.166
// price = 90
// market cap = 28800896909

// console.log((760330334130 / 40095) * 2264);


// console.log((329134117687 / 2750) * 238);


// console.log((28800896909 / 90) * 0.166);








  
