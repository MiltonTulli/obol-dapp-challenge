"use client";
import { FC } from "react";
import { Button } from "@/components";
import { useModal } from "connectkit";
import { useAccount, useSignMessage } from "wagmi";
import { useToast } from "@/hooks";
import { Interface } from "ethers";
import { parseEther, serializeTransaction, parseGwei } from "viem";
import { ZERO_ADDRESS, cap } from "@/utils";
import ERC20 from "@/contracts/ERC20.json";

interface CollectButtonProps {
  pokemon: string;
}

export const CollectButton: FC<CollectButtonProps> = ({ pokemon }) => {
  const { toast } = useToast();
  const { setOpen } = useModal();
  const { signMessage } = useSignMessage();
  const { isConnected } = useAccount();

  async function handleCollect() {
    // Since this exercise doesn't execute/send any tx I just display encoded data as msg to sign alongside pokemon name
    // Just to showcase I display randomly one of 2 posible hashes.
    if (!isConnected) return setOpen(true);

    // Random call: Encoding erc20 aprooval fn
    const ERC20Contract = new Interface(ERC20.abi);
    const approvalCall = ERC20Contract.encodeFunctionData("approve", [
      ZERO_ADDRESS, // Spender
      BigInt(0), // Amount
    ]);

    // Random call: Hash of tx
    const transferCall = serializeTransaction({
      chainId: 1,
      gas: parseGwei("21"),
      maxFeePerGas: parseGwei("20"),
      maxPriorityFeePerGas: parseGwei("2"),
      nonce: 69,
      to: "0x3346987E123Ffb154229F1950981d46E9F5C90dE",
      value: parseEther("0"),
    });
    const randomIdx = Math.ceil(Math.random() * 2) - 1;
    const data = [approvalCall, transferCall][randomIdx];
    const txLabel = ["ERC20 Approval Call", "Transfer Call"][randomIdx];

    return signMessage(
      {
        message: `By signing this message, I am collecting a ${cap(
          pokemon
        )} pokemon and a\n${txLabel}: ${data}\nRest assured, the signature will not be stored anywhere; this is solely an exercise.`,
      },
      {
        onError: (error) =>
          toast((error as any).shortMessage || error.message, "error"),
        onSuccess: (signature) => {
          toast("Pokemon Succesfully Collected");
          // TODO: For this excercise I just log this.
          console.log(signature);
        },
      }
    );
  }

  return <Button onClick={handleCollect}>Collect</Button>;
};
