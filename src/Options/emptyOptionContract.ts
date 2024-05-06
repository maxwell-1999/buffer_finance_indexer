import { zeroAddress } from "viem";

const emptyOptionContract = (optionsAddress: `0x${string}`) => ({
  register: false,
  address: optionsAddress,
  token0: "",
  token1: "",
  isPaused: false,
  poolContract: zeroAddress,
  routerContract: zeroAddress,
  openUp: 0n,
  openDown: 0n,
  openInterestUp: 0n,
  openInterestDown: 0n,
  pool: "",
  category: 0,
  asset: "",
});

export default emptyOptionContract;
