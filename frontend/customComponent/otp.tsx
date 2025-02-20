'use client';
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { BsInfoCircle } from 'react-icons/bs';
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

export default function App() {
  const [otp, setOtp] = useState('');

  async function addHash(mintedHash: any) {
    const response = await fetch('http://localhost:3000/api/addTrnxHash', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        transactionHash: mintedHash,
      }),
    });
    if (!response.ok) {
      throw new Error('Failed to insert data');
    }
  }

  async function getVerified() {
    const response = await fetch('http://localhost:3000/api/getAdandOtp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        frontEndAadharNumber: 123456789012, // Aadhar number will come from frontend
        otp: 1234, // OTP will come from frontend
      }),
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const result = await response.json();
    callingMint();
  }

  /* Below code Is for interacting with contract */
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

  async function callingMint() {
    await mintTokenIfVerified(
      1,
      1,
      '0x03C6FcED478cBbC9a4FAB34eF9f40767739D1Ff7', // Account will come from safe API
      1,
      '0x00'
    );
    getNameOftoken();
  }

  async function mintTokenIfVerified(
    hashedFID: number,
    hashedBID: number,
    account: string | any,
    id: number,
    bytesData: string
  ) {
    const minted = await contract.areEqual(
      hashedFID,
      hashedBID,
      account,
      id,
      bytesData
    );
    console.log('Here........');
    console.log(minted.hash);
    addHash(minted.hash);
    console.log('Token has been minted and added to database !!');
  }

  // async function getTokenCount(address: string) {
  //   const count = await contract.balanceOf(address, 0);
  //   console.log(count.toString());
  // }

  /* Above code Is for interacting with contract */

  return (
    <>
      <div className="flex flex-col justify-center">
        {' '}
        <Card className="w-[550px] rounded-full">
          <CardHeader>
            <div className="flex flex-row justify-between items-center gap-1">
              {' '}
              <CardTitle className="text-4xl mb-6">Identity</CardTitle>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="mb-6">
                    <BsInfoCircle />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Secured by Government of Bharat</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <p className="text-2xl p-2 font-bold pt-10 ">OTP</p>

            <CardDescription className="font-semibold">
              Check your registered mobile no. for OTP
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* <p className="text-sm text-red-600">adddhar number was invalid </p> */}
          </CardContent>
          <CardFooter className="flex">
            <div className="flex flex-col justify-center items-center space-y-3">
              <OtpInput
                containerStyle={{
                  width: '80px',
                  height: '60px',
                  padding: '200px',
                  background: 'purple',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '60px',
                }}
                inputStyle={{
                  width: '40px',
                  height: '40px',
                  border: '3px solid green',
                  padding: '30px',
                }}
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
              />
              <p>{otp}</p>
              <button
                className="p-2 text-2xl bg-green-400"
                onClick={getVerified}
              >
                Get Verified
              </button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
