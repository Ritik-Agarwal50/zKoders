"use client";
import { Input } from "@/components/ui/input";
import { BsInfoCircle } from "react-icons/bs";
import React, { useState } from "react";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Page = () => {
  const [name, setName] = useState("");

  return (
    <>
      {" "}
      <div className="flex flex-row justify-center m-20 p-20 align-center min-h-screen">
        {/* <div className="flex flex-col">
          <div className="flex flex-row justify-end">
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
          </div>
          <div className="flex flex-row gap-5">
            <p className="text-2xl">Identity</p>
            <p className="text-sm rounded-full bg-green-600 p-1">
              Secured by indgov
            </p>
          </div>
          <div>
            <p className="text-xl">Aadhar Number</p>
            <p className="text-sm">
              Enter your 12 digit number without spaces{" "}
            </p>
          </div>
          <Input className="bg-opacity-30 bg-zinc-400" />
          <p className="text-sm text-red-600">adddhar number was invalid </p>
          <Button variant="outline">Button</Button>
        </div> */}

        <Card className="w-[550px]">
          <CardHeader>
            <div className="flex flex-row justify-end">
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
            </div>
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
          <CardFooter className="flex justify-between">
            <Button className="w-full">Deploy</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Page;
