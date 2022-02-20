import React from 'react';

 export default function Card({icon, name, desc}) {
  return (
    <div className="index-card rounded-xl inline-flex flex-col justify-center items-center p-4 m-2">
      <img src={icon} className="mb-4" />
      <span className="font-bold text-2xl mb-2">{name}</span>
      <span>{desc}</span>
    </div>
  )
}



