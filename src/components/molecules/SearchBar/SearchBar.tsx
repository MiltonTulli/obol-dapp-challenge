"use client";
import { FC, InputHTMLAttributes, useState } from "react";
import { Button, Input } from "@/components/atoms";
import clsx from "clsx";

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const SearchBar: FC<SearchBarProps> = ({ className }) => {
  const [search, setSearch] = useState("");
  return (
    <div className={clsx("flex gap-x-4 items-center", className)}>
      <span className="color-[#D9EEF3] text-2xl font-bold hidden sm:block">
        Search
      </span>
      <Input
        className="h-[100%]"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button
        onClick={() => {
          console.log(search);
        }}
      >
        Search
      </Button>
    </div>
  );
};
