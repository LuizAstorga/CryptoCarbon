import React from 'react';
import Header from './components/Header';
import { useState } from 'react';

 export default function Report() {
  return (
    <>
    <div className = 'pt-5'>
      <Header />
    </div>
    <main className='text-center'>
      <span className='text-3xl font-bold'>Tell us about your offsets!</span>

      <center>
        <div className='w-3/4 text-left mt-6'>
          <span className='block text-2xl'>Name</span>
          <input type='text' className='block text-2xl p-2 w-full' placeholder="Marc Tessier-Lavigne" />
          <span className='block text-2xl mt-8'>Cause Donated To (URL)</span>
          <input type='text' className='block text-2xl p-2 w-full' placeholder="https://teamtrees.org" />
          <span className='block text-2xl mt-8'>How much carbon? (kg CO<sub>2</sub>)</span>
          <input type='number' className='block text-2xl p-2 w-full' placeholder="50" />

          <span className='block text-2xl mt-8'>Screenshot of receipt</span>
          <input type='file' className='block text-lg mt-2' />
          
        </div>
        <button className="join-btn p-4 rounded-xl text-3xl font-bold mt-12">Submit!</button>
      </center>
      
    </main>
    </>
  )
}