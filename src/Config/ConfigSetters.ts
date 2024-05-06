import { ponder } from "@/generated";
import { emptyConfigContract } from "./emptyConfigContract";

ponder.on("Config:UpdateCreationWindowContract", async (eventArgs) => {
  const { event, context } = eventArgs;
  const { ConfigContract } = context.db;
  await ConfigContract.upsert({
    id: event.log.address,
    create: emptyConfigContract(event.log.address),
    update: (ref) => ({
      ...ref.current,
      creationWindowContract: event.args.value,
    }),
  });
});
ponder.on("Config:UpdateIV", async (eventArgs) => {
  const { event, context } = eventArgs;
  const { ConfigContract } = context.db;
  await ConfigContract.upsert({
    id: event.log.address,
    create: emptyConfigContract(event.log.address),
    update: (ref) => ({
      ...ref.current,
      iv: BigInt(event.args._iv),
    }),
  });
});
ponder.on("Config:UpdateMaxSkew", async (eventArgs) => {
  const { event, context } = eventArgs;
  const { ConfigContract } = context.db;
  await ConfigContract.upsert({
    id: event.log.address,
    create: emptyConfigContract(event.log.address),
    update: (ref) => ({
      ...ref.current,
      maxSkew: BigInt(event.args._maxSkew),
    }),
  });
});
ponder.on("Config:UpdatePayout", async (eventArgs) => {
  const { event, context } = eventArgs;
  const { ConfigContract } = context.db;
  await ConfigContract.upsert({
    id: event.log.address,
    create: emptyConfigContract(event.log.address),
    update: (ref) => ({
      ...ref.current,
      payout: BigInt(event.args.payout),
    }),
  });
});
ponder.on("Config:UpdateCircuitBreakerContract", async (eventArgs) => {
  const { event, context } = eventArgs;
  const { ConfigContract } = context.db;
  await ConfigContract.upsert({
    id: event.log.address,
    create: emptyConfigContract(event.log.address),
    update: (ref) => ({
      ...ref.current,
      circuitBreakerContract: event.args._circuitBreakerContract,
    }),
  });
});
ponder.on("Config:UpdateOptionStorageContract", async (eventArgs) => {
  const { event, context } = eventArgs;
  const { ConfigContract } = context.db;
  await ConfigContract.upsert({
    id: event.log.address,
    create: emptyConfigContract(event.log.address),
    update: (ref) => ({
      ...ref.current,
      optionStorageContract: event.args.value,
    }),
  });
});
ponder.on("Config:UpdateStrikeStepSize", async (eventArgs) => {
  const { event, context } = eventArgs;
  const { ConfigContract } = context.db;
  await ConfigContract.upsert({
    id: event.log.address,
    create: emptyConfigContract(event.log.address),
    update: (ref) => ({
      ...ref.current,
      stepSize: event.args.strikeStepSize,
    }),
  });
});
ponder.on("Config:UpdatetraderNFTContract", async (eventArgs) => {
  const { event, context } = eventArgs;
  const { ConfigContract } = context.db;
  await ConfigContract.upsert({
    id: event.log.address,
    create: emptyConfigContract(event.log.address),
    update: (ref) => ({
      ...ref.current,
      traderNFTContract: event.args.value,
    }),
  });
});
ponder.on("Config:UpdateSf", async (eventArgs) => {
  const { event, context } = eventArgs;
  const { ConfigContract } = context.db;
  await ConfigContract.upsert({
    id: event.log.address,
    create: emptyConfigContract(event.log.address),
    update: (ref) => ({
      ...ref.current,
      sf: event.args.sf,
    }),
  });
});
ponder.on("Config:UpdateSettlementFeeDisbursalContract", async (eventArgs) => {
  const { event, context } = eventArgs;
  const { ConfigContract } = context.db;
  await ConfigContract.upsert({
    id: event.log.address,
    create: emptyConfigContract(event.log.address),
    update: (ref) => ({
      ...ref.current,
      sfdContract: event.args.value,
    }),
  });
});
ponder.on("Config:UpdatePlatformFee", async (eventArgs) => {
  const { event, context } = eventArgs;
  const { ConfigContract } = context.db;
  await ConfigContract.upsert({
    id: event.log.address,
    create: emptyConfigContract(event.log.address),
    update: (ref) => ({
      ...ref.current,
      platformFee: event.args._platformFee,
    }),
  });
});
