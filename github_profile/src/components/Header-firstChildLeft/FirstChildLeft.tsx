import Image from "next/image";
import TypingAnimation from "../ui/typing-animation";

const FirstChildLeft = () => {
    return (
        <div className="flex items-center gap-4 w-[280px]">
            <Image
                src="/logo.png"
                width={36}
                height={36}
                alt="Picture of the testando"
            />
            <TypingAnimation text="GitHub Profile" />
        </div>
    )
}

export default FirstChildLeft;