"use client";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { BsInfoCircle } from "react-icons/bs";
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

export default function App() {
  const [otp, setOtp] = useState("");

  return (
    <>
      <div className="flex flex-col justify-center">
        {" "}
        <Card className="w-[550px] rounded-full">
          <CardHeader>
            <div className="flex flex-row justify-between items-center gap-1">
              {" "}
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
                  width: "80px",
                  height: "60px",
                  padding: "200px",
                  background: "purple",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "60px",
                }}
                inputStyle={{
                  width: "40px",
                  height: "40px",
                  border: "3px solid green",
                  padding: "30px",
                }}
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
              />
              <p>{otp}</p>
              <button className="p-2 text-2xl bg-green-400">
                Get Verified
              </button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
