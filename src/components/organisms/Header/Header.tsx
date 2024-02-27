import Image from "next/image";

export const Header: React.FC = () => {
  return (
    <div className="flex justify-center p-8 border-b-2 border-[#182D32]">
      <Image src="/logo.svg" alt="obol logo" width={280} height={28} />
    </div>
  );
};
