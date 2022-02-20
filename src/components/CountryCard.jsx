import React from 'react';

 export default function CountryCard({name, percent, img, inits}) {
  return (
    <div className="country-card rounded-xl inline-flex flex-col justify-start items-center p-4 m-2">
      <span className="font-bold text-2xl mb-2">{name}<br />{percent}</span>
      <img src={img} alt={'planting trees in ' + name} className="mb-4 w-full" />
      <ul>
        {
        inits.map((init) => (<li key={init.name} className='text-xl my-2'><a href={init.link} className='underline'>{init.name}</a></li>))
        }
      </ul>
    </div>
  )
}