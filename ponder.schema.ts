import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  OptionContract: p.createTable({
    id: p.hex(),
    address: p.hex(),
    token0: p.string(),
    token1: p.string(),
    isPaused: p.boolean(),
    poolContract: p.hex(),
    routerContract: p.hex(),
    openUp: p.bigint(),
    openDown: p.bigint(),
    openInterestUp: p.bigint(),
    openInterestDown: p.bigint(),
    pool: p.string(),
    category: p.int(),
    asset: p.string(),
  }),
}));
