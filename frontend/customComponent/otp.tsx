"use client";
import React, { useState } from "react";
import OtpInput from "react18-input-otp";
interface StepComponentProps {
  onSubmit: () => void;
}

const Otp: React.FC<StepComponentProps> = ({ onSubmit }) => {
  const [otp, setOtp] = useState<number>(0);
  const handleChange = (enteredOtp: number) => {
    setOtp(enteredOtp);
  };
  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>Email Verification</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
                <p>We have sent a code to your email ba**@dipainhouse.com</p>
              </div>
            </div>

            <div>
              <form action="" method="post">
                <div className="flex flex-col space-y-16">
                  <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                    <div className="w-32 h-32 ">
                      <input
                        className="p-5 h-8 w-8 flex flex-col items-center justify-center text-center  outline-none rounded-xl border border-red-600 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="number"
                        name=""
                        id=""
                        maxLength="1"
                      />
                    </div>
                    <div className="w-16 h-16 ">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border-1 border-red-600 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="number"
                        name=""
                        id=""
                        maxLength={1}
                      />
                    </div>
                    <div className="w-16 h-16 ">
                      <input type="number" name="" id="" maxLength={1} />
                    </div>
                    <div className="w-16 h-16 ">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-red-600 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="number"
                        name=""
                        id=""
                        maxLength={1}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-5">
                    <div>
                      <button
                        onClick={onSubmit}
                        className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none  text-sm shadow-sm"
                      >
                        Verify Account
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
