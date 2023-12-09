/** @format */ import { ethers } from "ethers";
import { EthersAdapter, SafeAccountConfig } from "@safe-global/protocol-kit";
import dotenv from "dotenv";
console.log("hello");
import { SafeFactory } from "@safe-global/protocol-kit";
dotenv.config();
const web3Provider =
  "https://eth-goerli.g.alchemy.com/v2/J0NIKWJvIReBdrnYwfA1j2TN39poEuF-";
const provider = new ethers.JsonRpcProvider(web3Provider);
// const owner1Signer = new ethers.Wallet(
//   process.env.OWNER_1_PRIVATE_KEY!,
//   provider

//);
// const safeOwner = provider.getSigner(0);
// const ethAdapterOwner1 = new EthersAdapter({
//   ethers,
//   signerOrProvider: owner1Signer,
// });
// const safeFactory = await SafeFactory.create({ ethAdapter: ethAdapterOwner1 });
// const safeAccountConfig: SafeAccountConfig = {
//   owners: [await owner1Signer.getAddress()],
//   threshold: 1,
// };
// const saltNonce = "hello";
// const safeSdk = await safeFactory.deploySafe({ safeAccountConfig, saltNonce });
// const add = await safeSdk.getAddress();
// console.log("done");
// console.log(add);
async function main() {
  console.log("hello");
  const OWNER_1_PRIVATE_KEY = process.env.OWNER_1_PRIVATE_KEY!;
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
  const saltNonce = "2134123424";
  const safeSdk = await safeFactory.deploySafe({
    safeAccountConfig,
    saltNonce,
  });
  const add = await safeSdk.getAddress();
  console.log("done");
  console.log(add);
}
main();
