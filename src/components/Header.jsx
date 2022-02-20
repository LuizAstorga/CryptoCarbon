import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './header.css'

function stopProp(){
  if (window.event.stopPropogation){
    window.event.stopPropogation();
  }
  window.event.cancelBubble = true;
}

 export default function Header() {
  const [menu, useMenu] = useState(false);
  let navigate = useNavigate();
  window.addEventListener('click', e => {
    useMenu(false);
  })
  return (
    <nav className='grid grid-cols-5 text-center items-center mb-8 px-2'>
      <div className='width-full flex justify-center'>
        <img src="/assets/logo.svg" className='a w-14' onClick={() => navigate('/')} />
      </div>
      <span onClick={() => navigate('/')} className='gradient-text title font-bold text-4xl col-span-3'>CryptoCarbon</span>
      <i onClick={() => {stopProp(); useMenu(!menu)}}  className=" fa-solid fa-bars text-3xl"></i>
      <div onClick={() => stopProp()} className={'nav-menu absolute right-0 flex flex-col text-left px-6 py-2 text-2xl z-50' + (menu ? '' : ' nav-hide')}>
        <Link to='/' className='py-4'>Home</Link>
        <Link to='/info' className='py-4'>Info</Link>
        <Link to='/calculator' className='py-4'>Contribute</Link>
        <Link to='/report' className='py-4'>Report Offsets</Link>
        <Link to='/about' className='py-4'>About Us</Link>
      </div>
    </nav>
  )
}