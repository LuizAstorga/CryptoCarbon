import React from 'react';

import Carbon from './components/Carbon';
import Carbonfn from './components/Carbonfn';
import Header from './components/Header';
import AboutCard from './components/AboutCard';

 export default function About() {
  return (
    <>
    <div className = 'pt-5'>
      <Header />
    </div>
    <main className='text-center'>
      <span className='text-3xl font-bold mb-8'>About The Team</span>
      <div className='px-8 mt-8 md:grid grid-cols-4'>
       <AboutCard name="Ethan Horowitz" img="/images/ethan.jpg" alt='Ethan hanging from a tree like a monkey' link='https://github.com/ethaniel0' desc="Hi! I'm a freshman at Duke University studying computer science and engineering, and I love software and website development. This is my 21st hackathon!" />
        <AboutCard name="Chinmay Bhelke" alt="just chilling" img="/images/Chinmay.JPG" link='https://www.linkedin.com/in/chinmay-bhelke-2717a6178/' desc="Hello World! I am currently a Full Stack Developer and DevOps Engineer and I love Software Development. :) This is my first Hackathon and it has been an amazing experience , excited to keep learning!" />
        <AboutCard name="Luiz Astorga" img="/images/luizSq.jpg" link='https://www.linkedin.com/in/luiz-astorga-4720791a5/' alt='Luiz feeding a super sugary pink-popsicle to a wild squirrel while he smiles with excitement' desc="Hey Ya'll! I'm a CS major at UT-Dallas. I'm an incoming intern at USAA, and teach kids how to code on the side. I'm aspiring to become a data science consultant, let's work on a project together!" />
        <AboutCard name="Ariel Taylor" img="/images/ariel2.jpg" alt='Having a good time on a summer day' link='' desc="Hey there! I attend an institution called STEM where I was able to represent my country at two international robotics competitions. This is my first hackathon." />
        
      </div>
    </main>
    </>
  )
}