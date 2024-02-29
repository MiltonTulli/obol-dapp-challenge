"use client";
import { FC, InputHTMLAttributes, useState } from "react";
import { Button, Input, Div, Text } from "@/components";
import clsx from "clsx";

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onSearch: (value?: string | null) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ className, onSearch }) => {
  const [search, setSearch] = useState<string>("");
  return (
    <Div className={clsx("flex gap-x-4 items-center", className)}>
      <Text
        nature="span"
        className="color-[#D9EEF3] font-bold hidden sm:block"
        size="200px"
      >
        Search
      </Text>
      <Input
        clearable
        placeholder="Search.."
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
    </Div>
  );
};
