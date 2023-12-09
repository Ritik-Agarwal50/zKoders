"use client";

import React, { useState } from "react";
import Aadhar from "@/customComponent/aadhar";
import Otp from "@/customComponent/otp";
import Qr from "@/customComponent/qr";

const Page = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleSubmit = () => {
    setActiveStep((step) => step + 1);
  };

  let component;

  switch (activeStep) {
    case 1:
      component = <Aadhar onSubmit={handleSubmit} />;
      break;
    case 2:
      component = <Otp onSubmit={handleSubmit} />;
      break;
    case 3:
      component = <Qr />;
      break;
    default:
      component = null;
  }
  return (
    <>
      {" "}
      <div className="flex justify-center align-center min-h-screen">
        {component}
      </div>
    </>
  );
};

export default Page;
