import { ponder } from "@/generated";
import { zeroAddress } from "viem";
import OptionsAbi from "../../abis/OptionsAbi";
import { TestnetUSDCE } from "../RepoConfigs/TestnetUSDCE";
import erc20Abi from "../../abis/erc20Abi";
import { State } from "../RepoConfigs/StateEnum";
import { getId } from "../Utils/getId";

ponder.on("Router:InitiateTrade", async (eventArgs) => {
  const { event, context } = eventArgs;
  const { QueuedOptionData } = context.db;
  const optionContract = event.args.targetContract;
  const queueId = event.args.queueId;
  //   console.log(`saving to db: `, optionContract + queueId);
  await QueuedOptionData.create({
    id: getId(optionContract, queueId),
    data: {
      optionContract: optionContract,
      queueID: queueId,
      user: event.args.user,
      lag: 0n,
      state: State.queued,
      strike: event.args.strike,
      reason: "UNKNOWN",
      expirationTime: BigInt(event.args.expiration),
      maxFeePerContract: event.args.maxFeePerContract,
      isAbove: event.args.isAbove,
      processTime: 0n,
      depositToken: "UNKNOWN",
      cancelTimestamp: 0n,
      queueTimestamp: event.args.timestamp,
      numberOfContracts: event.args.contracts,
    },
  });
});
ponder.on("Router:OpenTrade", async (eventArgs) => {
  const { event, context } = eventArgs;
  const { QueuedOptionData, OptionContract, UserOptionData } = context.db;
  const queuedOptionData = await QueuedOptionData.update({
    id: getId(event.args.targetContract, event.args.queueId),
    data: (ref) => {
      return {
        lag: event.block.timestamp - ref.current.queueTimestamp,
        processTime: event.block.timestamp,
        state: State.opened,
      };
    },
  });
  await UserOptionData.update({
    id: getId(event.args.targetContract, event.args.optionId),
    data: (ref) => {
      return {
        ...ref.current,

        optionID: event.args.optionId,
        user: queuedOptionData.user,

        queueID: queuedOptionData.queueID,
        state: State.active,
        expirationTime: queuedOptionData.expirationTime,
        isAbove: queuedOptionData.isAbove,
        creationTime: queuedOptionData.queueTimestamp,
        queuedTimestamp: queuedOptionData.queueTimestamp,
        lag: queuedOptionData.lag,
        strike: queuedOptionData.strike,
        optionContract: queuedOptionData.optionContract,
      };
    },
  });
});
