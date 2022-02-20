import React from 'react';
import CountryCard from './CountryCard';
import Percents from './Percents'
import { coins, countries } from './Sources';
// Arguments: hashrate(dynamic),
//            crytoValue (usd)(dynamic),
//            minerFees(usd)(dynamic),
//            difficulty (dynamic) {this is reffering to how difficult the hash puzzle was},
//            cryptoMarketPrice (dynamic),
//            miningEquipment (J/Gh) (static),
//                - there is no good way to know this, but we can assume best case, worse case, & avg case
//            Electricity Cost ($/kWh) (static)
//            pwerUsageEffectiveness
function getCryptos(){
  return coins;
}
function getCountry(country){
  return countries[country];
}

 export default function Carbon({coin}) {
  let cryptos = getCryptos();
  let cur_countries = [];
  let carbon = 0;
  if (coin in cryptos){
    carbon = cryptos[coin].carbon;
    cur_countries = cryptos[coin].countries;
  }
  else return (<span></span>);
   
  return (
    <div className='mt-8 overflow-x-hidden'>

      {/* show tons of co2 per transaction */}
      <span className='text-2xl block mb-8 px-4'>One transaction on {coin} generates <b>~{carbon} kg of CO<sub>2</sub></b></span>

      <span className='text-2xl block mb-8 px-4'>{cryptos[coin].fact}</span>

      {/* offset projects */}
      
      <div class="p-4 m-4 max-w-sm bg-white rounded-lg border shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700">
  <h3 class="mb-3 text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
    Countries Impact towards Carbon Emmissions
  </h3>
  <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
    Breakdown of the top contributors
  </p>
  
    <ul class="my-4 space-y-3">
      {
              cur_countries.map((c , i) => {
                let data = getCountry(c[0]);
                if (!data) data={projects: [], picture: ''}
                if (i===0) return <Percents key={c[0]} name={c[0]} percent={c[1]} top={true} flag={data.flagCode}  />
                return (<Percents key={c[0]} name={c[0]} percent={c[1]} top={false} flag={data.flagCode}/>);
            })
          }
    </ul>
  
    <div>
      <a
        href="#"
        class="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
      >
        <svg
          class="mr-2 w-3 h-3"
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="question-circle"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"
          ></path>
        </svg>
        Interested in a more detailed breakdown?
      </a>
    </div>
    </div>
      <h1 className='text-3xl font-bold mt-8 mb-4'>How To Offset From Top Carbon Contributors:</h1>
<div>Donate to the following projects to help offset the carbon footprint!  </div>
      <div className='grid grid-cols-2 px-2'>
        
          {
            cur_countries.map((c) => {
              let data = getCountry(c[0]);
              if (!data) data={projects: [], picture: ''}
              
              return (<CountryCard key={c[0]} name={c[0]} percent={c[1]} img={data.picture} inits={data.projects} />);
          })
        }
      </div>
      
    </div>
  )
}

