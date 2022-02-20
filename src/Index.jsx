import React from 'react';
import Card from './components/IndexCard';
import Header from './components/Header';

 export default function Index({icon, name, desc}) {
  return (
    <>
    <div className = 'pt-5'>
      <Header />
    </div>
    <main className='px-2 text-center'>
      {/* intro text */}
      <span className='text-2xl font-bold block mb-4'>Pay with your favorite coins. Without paying the price of a <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-600'>hotter planet.</span></span>

      <span className='text-xl block px-8'>A comprehensive platform that helps you make informed decisions when it comes to cryptocurrencies and their environmental impacts.</span>

      {/* why cryptocarbon */}
      <span className='text-3xl font-bold block mt-8 mb-4'>Why CryptoCarbon?</span>

      <div className='grid grid-cols-2'>
        <Card icon="/assets/tree.svg" name="Eco-Friendly" desc="All money goes to carbon offsetting" />
        <Card icon="/assets/snap.svg" name="Easy" desc="We do the research so you don't have to" />
        <Card icon="/assets/relief.svg" name="Relieving" desc="You're doing the world a needed service" />
        <Card icon="/assets/group.svg" name="Large" desc="Join hundreds of people on our platform" />
      </div>

      {/* tons of carbon offset */}
      <div className="mt-12 h-48 flex">
        {/* tons of carbon offset */}
        <div className='relative h-48 w-48'>
          <img src='/assets/cloud.svg' id='cloud1' className="absolute h-24" />
          <img src='/assets/cloud.svg' id='cloud2' className="absolute h-24" />
        </div>
        {/* number */}
        <div className='flex flex-col'>
          <span className='block text-3xl font-bold'>0 tons</span>
          <span className='block text-2xl w-3/4 place-self-center'>of carbon offset in the past year</span>
        </div>
      </div>

      <button className="join-btn p-4 rounded-xl text-3xl font-bold mb-8">Join Us Today!</button>
    </main>
    </>
  )
}