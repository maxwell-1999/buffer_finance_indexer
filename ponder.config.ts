import { createConfig } from "@ponder/core";
import { http } from "viem";

import { arbitrumSepolia } from "viem/chains";
import OptionsAbi from "./abis/OptionsAbi";
export default createConfig({
  networks: {
    // mainnet: {
    //   chainId: 1,
    //   transport: http(process.env.PONDER_RPC_URL_1),
    //   pollingInterval: 15_000,
    // },
    // base: {
    //   chainId: 8453,
    //   transport: http(process.env.PONDER_RPC_URL_8453),
    //   pollingInterval: 15_000,
    // },
    // optimism: {
    //   chainId: 10,
    //   transport: http(process.env.PONDER_RPC_URL_10),
    //   pollingInterval: 15_000,
    // },
    // polygon: {
    //   chainId: 137,
    //   transport: http(process.env.PONDER_RPC_URL_137),
    //   pollingInterval: 15_000,
    // },
    arbitrumSepolia: {
      chainId: arbitrumSepolia.id,
      transport: http(
        "https://arb-sepolia.g.alchemy.com/v2/9fhEbJ48cz1scycWVlwhftwTNezjFTVf"
      ),
      pollingInterval: 1_000,
    },
  },
  contracts: {
    Options: {
      abi: OptionsAbi,
      network: {
        arbitrumSepolia: {
          startBlock: 38753772,
        },
        // base: {
        //   startBlock: Number(latestBlockBase.number) - 60,
        // },
        // optimism: {
        //   startBlock: Number(latestBlockOptimism.number) - 60,
        // },
        // polygon: {
        //   address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
        //   startBlock: Number(latestBlockPolygon.number) - 200,
        // },
      },
      filter: {
        event: "CreateOptionsContract",
      },
    },
  },
});
