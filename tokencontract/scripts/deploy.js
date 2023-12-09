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
