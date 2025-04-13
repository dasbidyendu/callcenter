"use client";
import React, { useState,useRef } from "react";
import Link from "next/link";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const scrollref = useRef(null);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-screen z-30 lg:text-xl  bg-[#8e44ad] font-sans font-medium font-stretch-normal">
      <div className="flex lg:hidden flex-row items-center justify-between px-4 py-2  bg-opacity-50">
        <div>logo</div>
        <button onClick={toggleMenu} className="text-[#ffffff]">
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      <div className="hidden lg:flex flex-row items-center justify-between px-10 py-1 lg:h-20 bg-opacity-50">
        <div>
          <svg
            width="60"
            height="40"
            viewBox="0 0 60 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.2001 32C45.8275 32 51.2001 26.6274 51.2001 20C51.2001 13.3726 45.8275 8 39.2001 8C32.9802 8 27.8656 12.7321 27.2601 18.7925C24.8084 17.6836 22.1597 17.0209 19.4473 16.8465C20.9595 7.29911 29.2274 0 39.2001 0C50.2458 0 59.2001 8.95431 59.2001 20C59.2001 30.6428 50.887 39.344 40.4 39.9646V40H27.2195V38.2545C27.2195 35.987 26.2844 33.7821 24.5705 32.1336C22.8517 30.4804 20.4908 29.5273 18 29.5273C15.5092 29.5273 13.1483 30.4804 11.4295 32.1336C9.71564 33.7821 8.78049 35.987 8.78049 38.2545V40H0V38.2118C0 33.5371 1.94004 29.0906 5.33341 25.8398C8.61822 22.693 13.0047 20.9102 17.5711 20.805C17.7139 20.8017 17.8569 20.8 18 20.8C18.1108 20.8 18.2215 20.801 18.3322 20.803C22.9333 20.8851 27.3586 22.6707 30.6666 25.8398C32.4991 27.5953 33.9078 29.6995 34.8159 32H39.2001Z"
              fill="white"
            ></path>
            <path
              d="M21.677 34.9245C22.6521 35.7725 23.2 36.9227 23.2 38.122V40H12.8V38.122C12.8 36.9227 13.3479 35.7725 14.323 34.9245C15.2982 34.0764 16.6209 33.6 18 33.6C19.3791 33.6 20.7018 34.0764 21.677 34.9245Z"
              fill="white"
            ></path>
            <path
              d="M43.7818 18.0363C42.3358 18.0363 41.1637 16.8642 41.1637 15.4182V14.7636C41.1637 13.6792 40.2845 12.8 39.2 12.8C38.1155 12.8 37.2364 13.6791 37.2364 14.7636V15.4182C37.2364 16.8642 36.0642 18.0363 34.6182 18.0363H33.9636C32.8792 18.0363 32 18.9155 32 20C32 21.0845 32.8792 21.9636 33.9636 21.9636H34.6182C36.0642 21.9636 37.2364 23.1358 37.2364 24.5818V25.2364C37.2364 26.3209 38.1155 27.2 39.2 27.2C40.2845 27.2 41.1637 26.3209 41.1637 25.2364V24.5818C41.1637 23.1358 42.3358 21.9636 43.7818 21.9636H44.4364C45.5209 21.9636 46.4 21.0845 46.4 20C46.4 18.9155 45.5209 18.0363 44.4364 18.0363H43.7818Z"
              fill="white"
            ></path>
            <path
              d="M11.2001 3.20004C11.2001 4.96732 12.6328 6.39999 14.4001 6.39999H15.2C16.5255 6.39999 17.6 7.47451 17.6 8.79999C17.6 10.1255 16.5255 11.2 15.2 11.2H14.4001C12.6328 11.2 11.2001 12.6327 11.2001 14.3999V15.2C11.2001 16.5255 10.1256 17.6 8.80011 17.6C7.47463 17.6 6.40011 16.5255 6.40011 15.2L6.40011 14.4C6.40011 12.6327 4.96742 11.2 3.20011 11.2H2.4C1.07452 11.2 0 10.1255 0 8.79999C0 7.47451 1.07452 6.39999 2.4 6.39999H3.20012C4.96742 6.39999 6.40011 4.96731 6.40011 3.2L6.40011 2.4C6.40011 1.07452 7.47463 0 8.80011 0C10.1256 0 11.2001 1.07452 11.2001 2.4V3.20004Z"
              fill="white"
            ></path>
          </svg>
        </div>
        <div className="flex flex-1 w-full px-10 py-3 items-center gap-10 text-[#ffffff]">
          <Link
            href={"/"}
            title="home "
            className="relative group  hover:scale-110 transition-all duration-300 hover:cursor-pointer"
          >
            Home
            <div className="absolute bottom-0 left-0 w-0 h-[3px]  bg-[#ffffff] mt-1  transition-all duration-300 ease-in-out group-hover:w-full "></div>
          </Link>
          <Link
            href={"/dashboard"}
            className="relative group  hover:scale-110 transition-all  duration-300 hover:cursor-pointer"
          >
            Dashboard
            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#ffffff] mt-1 transition-all duration-300 ease-in-out group-hover:w-full"></div>
          </Link>
          <Link  href={"/leads"} className="relative group  hover:scale-110 transition-all duration-300 hover:cursor-pointer">
           Leads
            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#ffffff] mt-1 transition-all duration-300 ease-in-out group-hover:w-full"></div>
          </Link>
          
          <Link
            href={"/dashboard"}
            title="past "
            className="relative group  hover:scale-110 transition-all duration-300 hover:cursor-pointer"
          >
            Transcript
            <div className="absolute bottom-0 rounded-xl left-0 w-0 h-[3px] mt-1 bg-[#ffffff] transition-all duration-300 ease-in-out group-hover:w-full"></div>
          </Link>
          <Link
            href={"/alerts"}
            title="updates"
            className="relative group  hover:scale-110 transition-all duration-300 hover:cursor-pointer"
          >
            Alerts Center
            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#ffffff] mt-1 transition-all duration-300 ease-in-out group-hover:w-full"></div>
          </Link>

          <Link
            href={"/alerts"}
            ref={scrollref}
            title="updates"
            className="relative group  hover:scale-110 transition-all duration-300 hover:cursor-pointer"
          >
            About us
            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#ffffff] mt-1 transition-all duration-300 ease-in-out group-hover:w-full"></div>
          </Link>

          <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#ffffff] mt-1 transition-all duration-300 ease-in-out group-hover:w-full"></div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden  backdrop-blur-2xl p-4">
          <div className="flex flex-col w-[300px] h-fit py-5  absolute right-2 items-center gap-4 p-4 backdrop-blur-2xl bg-[#2a0739]  text-white">
            <Link
              href={"/"}
              title="home"
              className="hover:bg-[#8d44ad64] w-full h-fit text-center"
            >
              Home
            </Link>
            <Link href={"/dashboard"} className="hover:bg-[#8d44ad64] w-full h-fit text-center">
              Dashboard
            </Link>
            <Link href={"/leads"} className="hover:bg-[#8d44ad64] w-full h-fit text-center">
               Leads
            </Link>
            <Link
              href={"/dashboard"}
              title="past "
              className="hover:bg-[#8d44ad64] w-full h-fit text-center"
            >
              Transcript 
            </Link>
            <Link
              href={"/alerts"}
              title="home"
              className="hover:bg-[#8d44ad64] w-full h-fit text-center"
            >
              Alerts center 
            </Link>
            
            <Link
              href={"/alerts"}
              title="home"
              className="hover:bg-[#8d44ad64] w-full h-fit text-center"
            >
              Abouut us 
            </Link>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
