import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import {Icons} from "./Menus"

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white">
      <div className="lg:ml-36 text-center">
      <ItemsContainer />
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>Made with love by EES  WEB-TEAM.</span>
       
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;