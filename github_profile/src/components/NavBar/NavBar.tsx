import React from "react";
import { Input } from "../ui/input";
import { BellRing, Heart, Mail } from "lucide-react";
import PulsatingButton from "../ui/pulsating-button";
import AvatarCircles from "../ui/avatar-circles";
import Image from "next/image";
import TypingAnimation from "../ui/typing-animation";
//border-[1px] border-solid border-red-500

const avatarData = [
  {
    imageUrl: "https://github.com/7alexandree7.png",
    profileUrl: "https://github.com/7alexandree7.png",
  },
];

const NavBar = () => {
  return (
    <div className="flex w-full justify-between items-center pt-6 pl-12 pr-12">
      <div className="flex items-center gap-4 w-[280px]">
        <Image 
              src="/logo.png"
              width={36}
              height={36}
              alt="Picture of the testando"
        />
        <TypingAnimation  text="GitHub Profile"/>
      </div>

      <div className="w-[400px]">
        <Input placeholder="Search for a user..."/>
      </div>

      <div className="flex gap-4 items-center">
        <div className="flex gap-4">
          <Mail />
          <BellRing />
        </div>
        <div>
          <PulsatingButton />
        </div>
        <div>
          <AvatarCircles avatarUrls={avatarData} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
