import { ponder } from "@/generated";
import { getId } from "../Utils/getId";
import { State } from "../Configs/StateEnum";

ponder.on("Options:Create", async (eventArgs) => {
  const { event, context } = eventArgs;
  const { OptionContract, UserOptionData, Market } = context.db;
  const optionContractAddress = event.log.address;
  const optionContractInstance = await OptionContract.findUnique({
    id: optionContractAddress,
  });
  if (!optionContractInstance) return;

  await UserOptionData.update({
    id: getId(optionContractAddress, event.args.id),
    data: (ref) => {
      return {
        ...ref.current,
        totalFee: event.args.totalFee,
        settlementFee: event.args.settlementFee,
        amount: event.args.amount,
      };
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
  if (!optionContractInstance) return;
  try {
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
  } catch (e) {
    console.error("error in id", getId(optionContractAddress, event.args.id));
  }
  //   userOptionDataInstance.
});
ponder.on("Options:Expire", async (eventArgs) => {
  const { event, context } = eventArgs;
  const { OptionContract, UserOptionData, Market } = context.db;
  const optionContractAddress = event.log.address;
  const optionContractInstance = await OptionContract.findUnique({
    id: optionContractAddress,
  });
  if (!optionContractInstance) return;
  try {
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
  } catch (e) {
    console.error("error in id", getId(optionContractAddress, event.args.id));
  }
  //   userOptionDataInstance.
});
