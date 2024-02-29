import Image from "next/image";
import { Div } from "@/components";

export const Header: React.FC = () => {
  return (
    <Div className="flex justify-center p-8 border-b-2 border-[#182D32]">
      <Image src="/logo.svg" alt="obol logo" width={280} height={28} />
    </Div>
  );
};
