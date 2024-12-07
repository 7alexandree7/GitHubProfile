import React from "react";
import FirstChildLeft from "../Header-firstChildLeft/FirstChildLeft";
import HeaderSearch from "../HeaderSearch/HeaderSearch";
import LastChildRight from "../Header-LastChildRight/LastChildRight";
//border-[1px] border-solid border-red-500

const avatarData = [
  {
    imageUrl: "https://github.com/7alexandree7.png",
    profileUrl: "https://github.com/7alexandree7.png",
  },
];

const NavBar = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-[180px] bg-gradient-to-r from-[#A2D2FF] via-[#CDB4DB] to-[#FFC8DD] z-0"></div>

      <div className="relative z-10 flex w-full justify-between items-center pt-6 pl-6 pr-6">
        <FirstChildLeft />

        <div className="w-[400px]">
          <HeaderSearch />
        </div>

        <div className="flex gap-4 items-center">
          <LastChildRight />
        </div>
      </div>
    </>
  );
};

export default NavBar;
