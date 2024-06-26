import { createSchema } from "@ponder/core";
import { register } from "module";

export default createSchema((p) => ({
  Token: p.createTable({
    id: p.hex(),
    address: p.hex(),
    token: p.string(),
    decimals: p.int(),
  }),
  OptionContract: p.createTable({
    id: p.hex(),
    register: p.boolean(),
    address: p.hex(),
    token0: p.string(),
    token1: p.string(),
    isPaused: p.boolean(),
    poolContract: p.hex(),
    routerContract: p.hex(),
    configContractId: p.hex().optional().references("ConfigContract.id"),
    configContract: p.one("configContractId"),
    openUp: p.bigint(),
    openDown: p.bigint(),
    openInterestUp: p.bigint(),
    openInterestDown: p.bigint(),
    pool: p.string(),
    poolTokenId: p.hex().optional().references("Token.id"),
    poolToken: p.one("poolTokenId"),
    category: p.int(),
    asset: p.string(),
  }),
  QueuedOptionData: p.createTable({
    id: p.string(),
    optionContractId: p.hex().references("OptionContract.id"),
    optionContract: p.one("optionContractId"),
    strike: p.bigint(),
    user: p.hex(),
    state: p.int(),
    isAbove: p.boolean(),
    queueID: p.bigint(),
    depositToken: p.string(),
    reason: p.string(),
    queueTimestamp: p.bigint(),
    cancelTimestamp: p.bigint(),
    lag: p.bigint(),
    maxFeePerContract: p.bigint(),
    processTime: p.bigint(),
    expirationTime: p.bigint(),
    numberOfContracts: p.bigint(),
  }),
  ConfigContract: p.createTable({
    id: p.hex(),
    address: p.hex(),
    maxSkew: p.bigint(),
    creationWindowContract: p.hex(),
    circuitBreakerContract: p.hex(),
    iv: p.bigint(),
    optionStorageContract: p.hex(),
    platformFee: p.bigint(),
    payout: p.bigint(),
    sfdContract: p.hex(),
    sf: p.bigint(),
    traderNFTContract: p.hex(),
    stepSize: p.bigint(),
  }),
  UserOptionData: p.createTable({
    id: p.string(),
    optionContractId: p.hex().references("OptionContract.id"),
    optionContract: p.one("optionContractId"),
    optionID: p.bigint(),
    strike: p.bigint(),
    totalFee: p.bigint(),
    user: p.hex(),
    creationTime: p.bigint(),
    queuedTimestamp: p.bigint(),
    expirationPrice: p.bigint(),
    payout: p.bigint(),
    state: p.int(),
    amount: p.bigint(),
    expirationTime: p.bigint(),
    isAbove: p.boolean(),
    queueID: p.bigint(),
    settlementFee: p.bigint(),
    lag: p.bigint(),
  }),
  Market: p.createTable({
    id: p.string(),
    skew: p.bigint(),
    strike: p.bigint(),
    expiration: p.bigint(),
    optionContractId: p.hex().references("OptionContract.id"),
    optionContract: p.one("optionContractId"),
    marketId: p.string(),
  }),
}));
