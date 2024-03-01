"use client";
import { FC, InputHTMLAttributes, useEffect, useState } from "react";
import { Button, Input, Div, Text } from "@/components";
import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const SearchBar: FC<SearchBarProps> = ({ className }) => {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState<string>(searchParams?.get("q") ?? "");
  const router = useRouter();

  useEffect(() => {
    const prefetch = async () => {
      router.prefetch(`/?q=${search}`);
    };
    prefetch();
  }, [search]);
  function onSearch(value: string | null) {
    router.push(value ? `/?q=${value}` : "/");
  }
  return (
    <Div className={clsx("flex gap-x-4 items-center", className)}>
      <Text
        nature="span"
        className="color-[#D9EEF3] font-bold hidden sm:block text-[32px]"
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
