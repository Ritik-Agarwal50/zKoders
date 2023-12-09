/** @format */

// src/server.ts
import express, { Request, Response } from "express";
import { ethers } from "ethers";
import { EthersAdapter, SafeAccountConfig } from "@safe-global/protocol-kit";
import { SafeFactory } from "@safe-global/protocol-kit";
import * as dotenv from "dotenv";

dotenv.config();

const web3Provider =
  "https://eth-goerli.g.alchemy.com/v2/J0NIKWJvIReBdrnYwfA1j2TN39poEuF-";
const provider = new ethers.JsonRpcProvider(web3Provider);
async function main(salt: string) {
  console.log("hello");
  const OWNER_1_PRIVATE_KEY =process.env.PRIVATE_KEY ;
  const owner1Signer = new ethers.Wallet(OWNER_1_PRIVATE_KEY, provider);
  const ethAdapterOwner1 = new EthersAdapter({
    ethers,
    signerOrProvider: owner1Signer,
  });
  console.log("hello");
  const safeFactory = await SafeFactory.create({
    ethAdapter: ethAdapterOwner1,
  });
  console.log(123);
  //const safeOwner = provider.getSigner(0);
  const adder = await owner1Signer.getAddress();
  const safeAccountConfig: SafeAccountConfig = {
    owners: [adder],
    threshold: 1,
  };
  const saltNonce = salt;
  const safeSdk = await safeFactory.deploySafe({
    safeAccountConfig,
    saltNonce,
  });
  const add = await safeSdk.getAddress();
  console.log("done");
  console.log(add);

  return add;
}

const app = express();
const port = 5000;

// app.get("/demo/:id", (req: Request, res: Response) => {
//   const id: string = req.params.id; // Assuming aadharId is of type string
//   const data = main(id);
//   console.log(id);
//   res.json({ message: "ok", status: 200, data: data });
// });

app.get("/demo/:id", async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id; // Assuming aadharId is of type string
    const data = await main(id);
    console.log(id);
    res.json({ message: "ok", status: 200, data: data });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error", status: 500 });
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
