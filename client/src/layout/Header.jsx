import React from 'react';
import { IoMenu } from "react-icons/io5";

export default function Header() {
  return (
    <div className="header w-screen h-[64px] bg-[#030D29] shadow-2xl flex flex-row items-center">
      <div className="small-screen">
        <IoMenu className="hidden sm:block 2xl:hidden text-3xl" />
      </div>
      <div className="normal-screen flex flex-row items-center justify-between w-full px-5 sm:hidden">
        <div className="logo">
          <h1 className="font-bold text-white text-3xl">LOGO</h1>
        </div>
        <div className="list">
          <ul className="flex flex-row space-x-3 text-white font-medium text-sm items-center">
            <li><a href="">Discover Codies</a></li>
            <li><a href="">Features</a></li>
            <li><a href="">Organizers</a></li>
            <li><a href="">Participants</a></li>
          </ul>
        </div>
        <div className="login"></div>
      </div>
    </div>
  );
}
