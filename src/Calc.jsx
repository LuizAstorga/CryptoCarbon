import React from 'react';

import Carbon from './components/Carbon';
import Carbonfn from './components/Carbonfn';
import Header from './components/Header';
import { useState } from 'react'

 export default function Calc() {
  const [coin, changeCoin] = useState(false);
  return (
    <>
    <div className = 'pt-5'>
      <Header />
    </div>
    <main className='text-center'>
      <h1 className='text-4xl font-bold mb-4'>How Can I Contribute?</h1>
      <Carbonfn changeCoin={changeCoin} />
      { coin &&
        <Carbon coin={coin} />
      }
    </main>
    </>
  )
}