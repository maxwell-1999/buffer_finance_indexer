import { ponder } from "@/generated";
import { getId } from "../Utils/getId";
import { State } from "../RepoConfigs/StateEnum";
import { zeroAddress } from "viem";

ponder.on("Options:Create", async (eventArgs) => {
  const { event, context } = eventArgs;
  const { OptionContract, UserOptionData, Market } = context.db;
  const optionContractAddress = event.log.address;
  const optionContractInstance = await OptionContract.findUnique({
    id: optionContractAddress,
  });
  if (!optionContractInstance || !optionContractInstance.register) return;
  console.log("CreationTime id", getId(optionContractAddress, event.args.id));
  await UserOptionData.create({
    id: getId(optionContractAddress, event.args.id),
    data: {
      totalFee: event.args.totalFee,
      settlementFee: event.args.settlementFee,
      amount: event.args.amount,
      queueID: 0n,
      user: zeroAddress,
      state: State.active,
      expirationTime: 0n,
      isAbove: false,
      creationTime: 0n,
      queuedTimestamp: 0n,
      lag: 0n,
      strike: 0n,
      optionContract: zeroAddress,
      payout: 0n,
      expirationPrice: 0n,
      optionID: 0n,
    },
  });
  const marketId = getId(event.args.marketId, optionContractAddress);
  await Market.update({
    id: marketId,
    data: (ref) => {
      return {
        ...ref.current,
        skew: event.args.skew,
      };
    },
  });
  //   userOptionDataInstance.
});
ponder.on("Options:Exercise", async (eventArgs) => {
  const { event, context } = eventArgs;
  const { OptionContract, UserOptionData, Market } = context.db;
  const optionContractAddress = event.log.address;
  const optionContractInstance = await OptionContract.findUnique({
    id: optionContractAddress,
  });
  if (!optionContractInstance || !optionContractInstance.register) return;

  await UserOptionData.update({
    id: getId(optionContractAddress, event.args.id),
    data: (ref) => {
      return {
        ...ref.current,
        state: State.exercised,
        payout: event.args.profit,
        expirationPrice: event.args.priceAtExpiration,
      };
    },
  });
  //   userOptionDataInstance.
});
ponder.on("Options:Expire", async (eventArgs) => {
  const { event, context } = eventArgs;
  const { OptionContract, UserOptionData, Market } = context.db;
  const optionContractAddress = event.log.address;
  const optionContractInstance = await OptionContract.findUnique({
    id: optionContractAddress,
  });
  if (!optionContractInstance || !optionContractInstance.register) return;

  await UserOptionData.update({
    id: getId(optionContractAddress, event.args.id),
    data: (ref) => {
      return {
        ...ref.current,
        state: State.expired,
        expirationPrice: event.args.priceAtExpiration,
      };
    },
  });
  //   userOptionDataInstance.
});
