// Arguments: hashrate(dynamic),
//            crytoValue (usd)(dynamic),
//            minerFees(usd)(dynamic),
//            difficulty (dynamic) {this is reffering to how difficult the hash puzzle was},
//            cryptoMarketPrice (dynamic),
//            miningEquipment (J/Gh) (static),
//                - there is no good way to know this, but we can assume best case, worse case, & avg case
//            Electricity Cost ($/kWh) (static)
//            powerUsageEffectiveness (static)
//            S7hashrate (this is the algorithm the s7 miner uses)(dynamic),
//            S9hashRate (dynamic)
// Equation: 



import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


function getCoinName(name){
  if (name.trim() == '' || name.includes('"') || name.includes('<')){
    return false;
  }
  return name;
}


export default function Carbonfn({changeCoin}) {
  
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={cryptoInput}
      sx={{ padding:'10px' ,width: '100vw', background: '#414F3B', color: '#f9ffed;', border: 'none' }}
      renderInput={(params) => <TextField {...params}  label="Cryptocurrency" />}
      onChange={(e) => changeCoin(getCoinName(e.target.innerHTML))}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const cryptoInput = [
  { label: 'Bitcoin', year: 1994 },
  { label: 'Ethereum', year: 1972 },
  { label: 'DogeCoin', year: 2008 },
  { label: 'Solana', year: 1957 },
  { label: "Tether", year: 1993 },
  { label: 'ShibaInu', year: 1994 },
  {
    label: 'XRP',
    year: 2003,
  },
  
  { label: 'Terra', year: 1999 },
  { label: 'Stellar', year: 1999 }
];
