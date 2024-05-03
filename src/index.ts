import { ponder } from "@/generated";
import { zeroAddress } from "viem";
import OptionsAbi from "../abis/OptionsAbi";
import { TestnetUSDCE } from "./Configs/TestnetUSDCE";
import erc20Abi from "../abis/erc20Abi";

ponder.on("Options:CreateOptionsContract", async (args) => {
  const { OptionContract, Token } = args.context.db;
  const { client } = args.context;
  //   read call to get pool
  const tokenX = await client.readContract({
    abi: OptionsAbi,
    address: args.event.log.address,
    functionName: "tokenX",
  });
  let loadedToken = await Token.findUnique({ id: tokenX });
  if (!loadedToken) {
    const [symbolRes, decimalsRes] = await client.multicall({
      contracts: [
        {
          abi: erc20Abi,
          address: tokenX,
          functionName: "symbol",
        },
        {
          abi: erc20Abi,
          address: tokenX,
          functionName: "decimals",
        },
      ],
    });
    let symbol = symbolRes?.result as string;
    let decimals = decimalsRes?.result as number;
    if (
      tokenX in TestnetUSDCE &&
      TestnetUSDCE[tokenX] == args.context.network.chainId
    ) {
      symbol = "USDC.e";
    }

    loadedToken = await Token.create({
      id: tokenX,
      data: {
        address: tokenX,
        token: symbol,
        decimals: decimals,
      },
    });
  }

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
      pool: loadedToken.token,
      poolTokenId: loadedToken.id,
      asset: args.event.args.token0 + args.event.args.token1,
    },
  });
});
