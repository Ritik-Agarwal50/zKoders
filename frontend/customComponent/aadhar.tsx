'use client';
import React, { useState } from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { Button } from '@/components/ui/button';
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
// import Input from "./display";
// import Display from "./display";
import { useStore } from '../store';

interface StepComponentProps {
  onSubmit: () => void;
}

const Aadhar: React.FC<StepComponentProps> = ({ onSubmit }) => {
  const [aadharInput, setAadharInput] = useState(0);
  const { value, setIsPublic } = useStore();

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
                  type="number"
                  name="contract"
                  onChange={(e: any) => setIsPublic(e.target.value)}
                  placeholder="e.g. 123456789012"
                />
              </div>
              {/* <p>{value}</p> */}
            </div>
          </form>

          {/* <p className="text-sm text-red-600">adddhar number was invalid </p> */}
        </CardContent>

        <CardFooter className="flex">
          <Button className="w-full" onClick={onSubmit}>
            Get OTP
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Aadhar;
