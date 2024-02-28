"use client";
import { FC } from "react";
import { Button } from "@/components";
import { useModal } from "connectkit";
import { useAccount, useSignMessage } from "wagmi";
import { useToast } from "@/hooks";
import { Interface } from "ethers";
import { ZERO_ADDRESS } from "@/utils";
import ERC20 from "@/contracts/ERC20.json";

interface CollectButtonProps {
  pokemon: string;
}

export const CollectButton: FC<CollectButtonProps> = ({ pokemon }) => {
  const { toast } = useToast();
  const { setOpen } = useModal();
  const { signMessage } = useSignMessage();
  const { isConnected } = useAccount();

  function handleCollect() {
    // Random: Encoding erc20 aprooval fn
    const ERC20Contract = new Interface(ERC20.abi);
    const data = ERC20Contract.encodeFunctionData("approve", [
      ZERO_ADDRESS, // Spender
      BigInt(0), // Amount
    ]);
    // Since this exercise doesn't execute/send any tx I just display encoded data as msg to sign alongside pokemon name
    if (!isConnected) return setOpen(true);
    return signMessage(
      { message: `I am collecting ${pokemon} | ${data} ` },
      {
        onError: (error) =>
          toast((error as any).shortMessage || error.message, "error"),
        onSuccess: (signature) => {
          toast("Pokemon Succesfully Collected");
          // Nothing usefull to do with this sig for now
          console.log(signature);
        },
      }
    );
  }

  return <Button onClick={handleCollect}>Collect</Button>;
};
