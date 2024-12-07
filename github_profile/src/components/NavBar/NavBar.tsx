"use client";
import React from "react";
import dynamic from "next/dynamic";
import FirstChildLeft from "../Header-firstChildLeft/FirstChildLeft";
import HeaderSearch from "../HeaderSearch/HeaderSearch";
import LastChildRight from "../Header-LastChildRight/LastChildRight";

const NavBar = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-[180px] z-0 overflow-hidden">
      </div>

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
