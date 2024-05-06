import { ponder } from "@/generated";
import { getId } from "../Utils/getId";

ponder.on("Options:CreateMarket", async (eventArgs) => {
  const { event, context } = eventArgs;
  const { OptionContract, Market } = context.db;
  const optionContractAddress = event.log.address;
  const optionContractInstance = await OptionContract.findUnique({
    id: optionContractAddress,
  });
  if (!optionContractInstance || !optionContractInstance.register) return;

  const marketId = getId(event.args.marketId, optionContractAddress);

  Market.create({
    id: marketId,
    data: {
      optionContractId: optionContractAddress,
      skew: 0n,
      marketId: event.args.marketId,
      strike: event.args.strike,
      expiration: BigInt(event.args.expiration),
    },
  });
});
