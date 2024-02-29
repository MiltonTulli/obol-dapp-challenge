"use client";
import { FC } from "react";
import { Button } from "@/components";
import { useToast, useCollect } from "@/hooks";

interface CollectButtonProps {
  pokemon: string;
}

export const CollectButton: FC<CollectButtonProps> = ({ pokemon }) => {
  const { toast } = useToast();
  const collect = useCollect({
    onError: (error) => toast(error),
    onSuccess: (signature) => {
      toast("Pokemon Succesfully Collected");
      // TODO: For this excercise I just log this.
      console.log(signature);
    },
  });

  async function handleCollect() {
    collect(pokemon);
  }

  return <Button onClick={handleCollect}>Collect</Button>;
};
