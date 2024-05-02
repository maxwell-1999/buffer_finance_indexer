import { ponder } from "@/generated";
import { zeroAddress } from "viem";

ponder.on("Options:CreateOptionsContract", async (args) => {
  const { OptionContract } = args.context.db;
  //   read call to get pool
  await OptionContract.create({
    id: args.event.log.address,
    data: {
      address: args.event.log.address,
      token0: args.event.args.token0,
      token1: args.event.args.token1,
      isPaused: false,
      poolContract: args.event.args.pool,
      routerContract: zeroAddress,
      openDown: 0n,
      openUp: 0n,
      openInterestDown: 0n,
      openInterestUp: 0n,
      category: args.event.args.category,
      pool: "DD",
      asset: args.event.args.token0 + args.event.args.token1,
    },
  });
});
