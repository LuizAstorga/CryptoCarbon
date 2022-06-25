import React from 'react';

import Carbon from './components/Carbon';
import Carbonfn from './components/Carbonfn';
import Header from './components/Header';

 export default function Info() {
  return (
    <>
    <div className = 'pt-5'>
      <Header />
    </div>
    <main className='px-4 text-center'>
      
      <div className='flex flex-col'>
        <span className='text-3xl font-bold mb-8 block'>Information</span>
        <span className='text-6xl mt-8 mb-4'>🖥️ ✖ 🪙 = 🥵</span>
        <p className="text-justify text-xl mt-4"><b>The most used cryptocurrencies are the most inefficient. It has to be said.</b> While new coins are use low amounts of energy, the behemoths of Bitcoin and Ethereum use <b>hundreds of kilawatt hours per transaction.</b> This translates to a large carbon footprint for anyone using these cryptocurrencies.</p>
        
        <span className='text-6xl mt-8 mb-4'>💲 → ☀️🌳💚</span>
        <p className="text-justify text-xl">While it’s hard to change what’s already in place, there’s one prominent way to use use these cryptos mindfully: <b>carbon offsetting.</b> Through worldwide projects, you can offset your carbon by <b>paying just a little bit</b> to plant trees and install renewable energy. This way, you can better the world while continuing to reap the benefits of crypto.</p>

        <span className='text-2xl font-bold mt-8 mb-4'>How do we measure the carbon footprint of crypto?</span>
        <span className='text-6xl mt-4 mb-4'>🔍, ✖️➗, 📊</span>
        <p className="text-justify text-xl">The energy impact of most cryptocurrencies is widely available, and <b>the largest ones already have a measured carbon footprint.</b> For the ones that don’t, <b>we approximated the percent renewable energy</b> for each coin and approximated the amount of carbon using the UK’s power grid.</p>
    </div>
      
    </main>
    </>
  )
}
