
const hre = require("hardhat");

async function main() {
  

  const KgToken = await hre.ethers.getContractFactory("KgToken");
  const kgToken= await KgToken.deploy();

  await kgToken.deployed();

  console.log(
    `KgToken with 1 ETH and unlock timestamp ${unlockTime} deployed to ${kgToken.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
