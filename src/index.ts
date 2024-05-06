import { ponder } from "@/generated";
import { zeroAddress } from "viem";
import OptionsAbi from "../abis/OptionsAbi";
import { TestnetUSDCE } from "./RepoConfigs/TestnetUSDCE";
import erc20Abi from "../abis/erc20Abi";
import { emptyConfigContract } from "./Config/emptyConfigContract";
import emptyOptionContract from "./Options/emptyOptionContract";

ponder.on("Router:ContractRegistryUpdated", (args) => {
  const { event, context } = args;
  const { OptionContract } = context.db;
  OptionContract.create({
    id: event.args.targetContract,
    data: {
      ...emptyOptionContract(event.args.targetContract),
      register: event.args.register,
    },
  });
});

ponder.on("Options:CreateOptionsContract", async (args) => {
  const { OptionContract, Token, ConfigContract } = args.context.db;
  const { client } = args.context;
  const optionContractInstance = await OptionContract.findUnique({
    id: args.event.log.address,
  });
  if (!optionContractInstance || !optionContractInstance.register) return;

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
  await ConfigContract.upsert({
    id: args.event.args.config,
    create: emptyConfigContract(args.event.args.config),
    update: (ref) => ({
      ...ref.current,
      address: args.event.args.config,
    }),
  });
  await OptionContract.update({
    id: args.event.log.address,
    data: (ref) => ({
      ...ref.current,
      address: args.event.log.address,
      token0: args.event.args.token0,
      token1: args.event.args.token1,
      isPaused: false,
      poolContract: args.event.args.pool,
      routerContract: zeroAddress,
      openDown: 0n,
      configContract: args.event.args.config,
      openUp: 0n,
      openInterestDown: 0n,
      openInterestUp: 0n,
      category: args.event.args.category,
      pool: loadedToken.token,
      poolTokenId: loadedToken.id,
      asset: args.event.args.token0 + args.event.args.token1,
    }),
  });
});
