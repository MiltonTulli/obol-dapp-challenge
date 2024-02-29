"use client";
import { FC, InputHTMLAttributes, useState } from "react";
import { Button, Input } from "@/components/atoms";
import clsx from "clsx";

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onSearch: (value?: string | null) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ className, onSearch }) => {
  const [search, setSearch] = useState("");
  return (
    <div className={clsx("flex gap-x-4 items-center", className)}>
      <span className="color-[#D9EEF3] text-2xl font-bold hidden sm:block">
        Search
      </span>
      <Input
        clearable
        onClear={() => {
          setSearch("");
          onSearch("");
        }}
        className="self-stretch"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          // Trigger onSearch if value is null
          if (!e.target.value) onSearch("");
        }}
      />
      <Button
        onClick={() => {
          onSearch(search);
        }}
      >
        Search
      </Button>
    </div>
  );
};
