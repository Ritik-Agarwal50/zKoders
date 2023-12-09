"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { BsInfoCircle } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
interface StepComponentProps {
  onSubmit: () => void;
}

const Aadhar: React.FC<StepComponentProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");

  return (
    <div className="flex flex-col justify-center">
      {" "}
      <Card className="w-[550px]">
        <CardHeader>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <BsInfoCircle />
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <div className="flex flex-row justify-between items-center gap-1">
            {" "}
            <CardTitle>Create project</CardTitle>
            <p className="text-sm rounded-full bg-green-600 p-1">
              Secured by indgov
            </p>
          </div>
          <p className="text-xl">Aadhar Number</p>

          <CardDescription>
            Enter your 12 digit number without spaces
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Enter No.</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
            </div>
          </form>

          <p className="text-sm text-red-600">adddhar number was invalid </p>
        </CardContent>
        <CardFooter className="flex">
          <Button className="w-full" onClick={onSubmit}>
            Deploy
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Aadhar;
