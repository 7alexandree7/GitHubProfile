import { BellRing, Mail } from "lucide-react";
import PulsatingButton from "../ui/pulsating-button";
import AvatarCircles from "../ui/avatar-circles";

const avatarData = [
    {
        imageUrl: "https://github.com/7alexandree7.png",
        profileUrl: "https://github.com/7alexandree7.png",
    },
];

const LastChildRight = () => {
    return (
        <>
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
        </>
    )
}


export default LastChildRight;