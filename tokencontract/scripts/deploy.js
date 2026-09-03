const hre = require('hardhat');
require('dotenv').config({ path: '.env' });

async function main() {
  console.log(process.env.SCROLL_TESTNET_URL);
  const bhtTokenFactory = await hre.ethers.getContractFactory('Bharat');
  const bhtTOkenDeploy = await bhtTokenFactory.deploy();
  console.log('Putting to sleep');
  await sleep(120000);

  console.log(
    'BharatToken contract is deployed here',
    bhtTOkenDeploy.getAddress()
  );
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// Contract address 0xaF51CeaE9Ba64973006598ee460e9077263C8022
// 0xf89d6c371d783c8294b0bfc812ce855c44003f72

/*
saurabh@Saurabhs-MacBook-Pro-2 tokencontract % npx hardhat verify --network scrollSepolia 0x9728a64e38a0F0451222aB566081Ee86e45b2F87
[INFO] Sourcify Verification Skipped: Sourcify verification is currently disabled. To enable it, add the following entry to your Hardhat configuration:

sourcify: {
  enabled: true
}

Or set 'enabled' to false to hide this message.

For more information, visit https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-verify#verifying-on-sourcify
The contract 0x9728a64e38a0F0451222aB566081Ee86e45b2F87 has already been verified on Etherscan.
https://sepolia.scrollscan.com/address/0x9728a64e38a0F0451222aB566081Ee86e45b2F87#code
*/
