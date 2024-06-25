import React from "react";
import { BiCopyright, BiRightArrowAlt } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-200 ">
      <div className="flex flex-col md:flex-row gap-y-10 justify-center md:justify-evenly items-center md:p-8 px-4 py-8">
        <div className="flex flex-col text-center md:text-start gap-5 md:w-[23%]">
          <h2 className="text-lg font-semibold">Electrical Engineering Society</h2>
          <p>National Institute of Technology, Jamshedpur Jharkhand, 834839 <br /> India</p>
          <div>
            <p className="font-medium">Linkedin : <span className="font-normal">@eesnitjsr</span></p>
            <p className="font-medium">Email : <span className="font-normal">eesnitjsr@gmail.com</span></p>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <p className="text-lg font-semibold my-3">Useful Links</p>
          <ul className="flex flex-wrap md:flex-col gap-2 text-sm justify-center ">
            <Link to='/about'>
              <li className="flex items-center gap-2 cursor-pointer "><BiRightArrowAlt className="text-orange-600 hidden md:block" />About us <span className="md:hidden text-xl" >|</span></li>
            </Link>
            <Link to='/event'>
              <li className="flex items-center gap-2 cursor-pointer "><BiRightArrowAlt className="text-orange-600 hidden md:block" />Events <span className="md:hidden text-xl" >|</span></li>
            </Link>
            <Link to='/sponser'>
              <li className="flex items-center gap-2 cursor-pointer "><BiRightArrowAlt className="text-orange-600 hidden md:block" />Sponser us <span className="md:hidden text-xl" >|</span></li>
            </Link>
            <Link to='/gallery'>
              <li className="flex items-center gap-2 cursor-pointer "><BiRightArrowAlt className="text-orange-600 hidden md:block" />Gallery <span className="md:hidden text-xl" >|</span></li>
            </Link>
            <Link to='/team'>
              <li className="flex items-center gap-2 cursor-pointer "><BiRightArrowAlt className="text-orange-600 hidden md:block" />Our Team <span className="md:hidden text-xl" >|</span></li>
            </Link>
            <Link to='/contact'>
              <li className="flex items-center gap-2 cursor-pointer "><BiRightArrowAlt className="text-orange-600 hidden md:block" />Contact us <span className="md:hidden text-xl" ></span></li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start gap-5">
          <h2 className="text-lg font-semibold">Our Social Networks</h2>
          <p>Get in touch with us</p>
          <div className="flex items-center gap-5">
            <a href="" target="_blank"><FaLinkedinIn  className="border bg-orange-600 p-1 rounded-full text-white cursor-pointer text-2xl"/></a>
            <a href="" target="_blank"><FaFacebookF className="border bg-orange-600 p-1 rounded-full text-white cursor-pointer text-2xl"/></a>
            <a href="" target="_blank"><FaYoutube className="border bg-orange-600 p-1 rounded-full text-white cursor-pointer text-2xl"/></a>
            <a href="" target="_blank"><FaInstagram className="border bg-orange-600 p-1 rounded-full text-white cursor-pointer text-2xl"/></a>
          </div>
        </div>
      </div>
      <div className="bg-blue-900 text-sm md:text-base flex flex-col md:flex-row items-center justify-between md:px-20 py-4 text-white">
        <p className="flex items-center"><BiCopyright className="mx-2 mt-1 text-lg" /> Copyright EES All Rights Reserved</p>
        <p className="mt-4 md:mt-0">Design and develop by <span className="text-orange-600">Web Team </span> EES</p>
      </div>
    </footer>
  );
};

export default Footer;