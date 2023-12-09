'use client';
import React, { useState } from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { Button } from '@/components/ui/button';
import { abi } from '../constants/index';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ethers, Contract } from 'ethers';

interface StepComponentProps {
  onSubmit: () => void;
}

const Aadhar: React.FC<StepComponentProps> = ({ onSubmit }) => {
  const [aadharInput, setAadharInput] = useState('');
  /* Below code Is for interacting with contract*/
  const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
  // Create wallet instance
  const wallet = new ethers.Wallet(`0x${privateKey}`);
  // Create provider
  const provider = ethers.getDefaultProvider('https://sepolia-rpc.scroll.io');
  // Connect signer to provider
  const signer = wallet.connect(provider);

  const contract = new Contract(`0x${contractAddress}`, abi, signer);

  async function getNameOftoken() {
    const own = await contract.owner();
    console.log(own);
  }
  /* Above code Is for interacting with contract */

  return (
    <div className="flex flex-col justify-center">
      {' '}
      <Card className="w-[550px]">
        <CardHeader>
          <div className="flex flex-row justify-between items-center gap-1">
            {' '}
            <CardTitle>Identity</CardTitle>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <BsInfoCircle />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Secured by Government of Bharat</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <p className="text-m font-bold pt-10 ">Aadhar Number</p>

          <CardDescription>
            Enter your 12 digit number without spaces
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                {/* <Input id="name" placeholder="e.g. 123456789012" /> */}
                <input
                  className='` flex-1 w-full border-2 border-stone-900 placeholder:font-sans font-mono px-2 py-1 rounded-md shadow-md bg-transparent text-stone-200 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-500/50 ${
                  error !== "" && "!border-red-400/25"
                }`'
                  type="text"
                  name="contract"
                  onChange={(e) => setAadharInput(e.target.value)}
                  placeholder="e.g. 123456789012"
                />
              </div>
            </div>
          </form>

          {/* <p className="text-sm text-red-600">adddhar number was invalid </p> */}
        </CardContent>
        <CardFooter className="flex">
          <Button className="w-full" onClick={getNameOftoken}>
            Deploy
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Aadhar;
