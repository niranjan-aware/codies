import React from 'react';
import coderImage from '../assets/coder-img.jpeg';

export default function Home() {
  return (
    <div className="home ">
      <div className="coder-img  h-[500px] ml-8 mt-1  overflow-hidden relative">
        <img className="absolute w-screen  top-[350px] left-1/2 transform -translate-x-1/2 -translate-y-1/2" src={coderImage} alt="Coder" />
      </div>
      <div className="hero-1">
      <div className="hero1-title text-white text-4xl font-extrabold ml-36 mt-16">
        <h1 classname="">Empower Your <br /> Coding Skills with <br /> Testify</h1>
      </div>
      </div>
    </div>
  );
}
