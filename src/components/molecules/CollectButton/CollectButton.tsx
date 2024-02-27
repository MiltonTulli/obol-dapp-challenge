"use client";
import { FC } from "react";
import { Text, Button } from "@/components";
import { useModal } from "connectkit";
import { useAccount } from "wagmi";
import { useSignMessage } from "wagmi";
import { useToast } from "@/hooks";

interface CollectButtonProps {}

export const CollectButton: FC<CollectButtonProps> = () => {
  const { toast } = useToast();
  const { setOpen } = useModal();
  const { signMessage } = useSignMessage();
  const { isConnected } = useAccount();

  function handleCollect() {
    if (!isConnected) return setOpen(true);
    return signMessage(
      { message: `I am collecting pikachu` },
      {
        onError: (error) =>
          toast((error as any).shortMessage || error.message, "error"),
        onSuccess: (signature) => {
          toast("Pokemon Succesfully Collected");
          console.log("signature", signature);
        },
      }
    );
  }

  return (
    <Button className="" onClick={handleCollect}>
      Collect
    </Button>
  );
};
