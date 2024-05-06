import { zeroAddress } from "viem";

export const emptyConfigContract = (address: `0x${string}`) => ({
  address: address,
  maxSkew: 0n,
  creationWindowContract: zeroAddress,
  circuitBreakerContract: zeroAddress,
  iv: 0n,
  optionStorageContract: zeroAddress,
  platformFee: 0n,
  payout: 0n,
  sfdContract: zeroAddress,
  sf: 0n,
  traderNFTContract: zeroAddress,
  stepSize: 0n,
});
