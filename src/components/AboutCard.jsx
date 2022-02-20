import React from 'react';
import { useNavigate } from "react-router-dom";

 export default function AboutCard({name, alt, img, desc, link}) {
   let navigate = useNavigate();
   
   if (!img) img = 'https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0=';
  return (
    <div onClick={() => {if(link){window.location.href=link}}} className="country-card rounded-xl inline-flex flex-col justify-start items-center p-4 m-2">
      <img src={img} alt={alt} className="mb-4 w-full rounded-full" />
      <span className="font-bold text-3xl mb-2">{name}</span>
      <span className="text-xl">{desc}</span>
    </div>
  )
}