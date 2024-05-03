const RouterABI = [
  {
    inputs: [
      { internalType: "address", name: "_publisher", type: "address" },
      { internalType: "address", name: "_admin", type: "address" },
      { internalType: "contract IPyth", name: "_pyth", type: "address" },
      {
        internalType: "address",
        name: "_accountRegistrar",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenX",
        type: "address",
      },
    ],
    name: "ApproveRouter",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "queueId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "targetContract",
        type: "address",
      },
    ],
    name: "CancelTrade",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "targetContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "register",
        type: "bool",
      },
    ],
    name: "ContractRegistryUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "queueId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "FailResolve",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenX",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "FailRevoke",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "optionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "targetContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "FailUnlock",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "queueId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "targetContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isAbove",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "strike",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "contracts",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "expiration",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maxFeePerContract",
        type: "uint256",
      },
    ],
    name: "InitiateTrade",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "queueId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "optionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "targetContract",
        type: "address",
      },
    ],
    name: "OpenTrade",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenX",
        type: "address",
      },
    ],
    name: "RevokeRouter",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAXIMUM_PRICE_DELAY_FOR_RESOLVING",
    outputs: [{ internalType: "uint64", name: "", type: "uint64" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_WAIT_TIME",
    outputs: [{ internalType: "uint16", name: "", type: "uint16" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "accountRegistrar",
    outputs: [
      {
        internalType: "contract IAccountRegistrar",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "queueId", type: "uint256" }],
    name: "cancelQueuedTrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "contractRegistry",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "uint256", name: "optionId", type: "uint256" },
          {
            internalType: "address",
            name: "targetContract",
            type: "address",
          },
          {
            internalType: "bytes[]",
            name: "priceUpdateData",
            type: "bytes[]",
          },
          {
            internalType: "bytes32[]",
            name: "priceIds",
            type: "bytes32[]",
          },
        ],
        internalType: "struct IBufferRouter.CloseTradeParams[]",
        name: "optionData",
        type: "tuple[]",
      },
    ],
    name: "executeOptions",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "user", type: "address" }],
    name: "getAccountMapping",
    outputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "timestamp", type: "uint256" },
      {
        internalType: "bytes[]",
        name: "priceUpdateData",
        type: "bytes[]",
      },
      { internalType: "bytes32[]", name: "priceId", type: "bytes32[]" },
    ],
    name: "getPrice",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
    name: "getRoleAdmin",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "hasRole",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "uint256", name: "queueId", type: "uint256" },
          {
            internalType: "uint32",
            name: "queueTimestamp",
            type: "uint32",
          },
          {
            components: [
              {
                internalType: "address",
                name: "targetContract",
                type: "address",
              },
              {
                internalType: "bool",
                name: "allowPartialFill",
                type: "bool",
              },
              {
                internalType: "string",
                name: "referralCode",
                type: "string",
              },
              { internalType: "bool", name: "isAbove", type: "bool" },
              {
                internalType: "uint256",
                name: "contracts",
                type: "uint256",
              },
              {
                internalType: "uint128",
                name: "strike",
                type: "uint128",
              },
              {
                internalType: "uint32",
                name: "expiration",
                type: "uint32",
              },
              {
                internalType: "uint256",
                name: "maxFeePerContract",
                type: "uint256",
              },
            ],
            internalType: "struct IBufferRouter.TradeInitiationParamas",
            name: "tradeInitiationParamas",
            type: "tuple",
          },
          {
            components: [
              { internalType: "bytes", name: "signature", type: "bytes" },
              {
                internalType: "uint32",
                name: "timestamp",
                type: "uint32",
              },
            ],
            internalType: "struct IBufferRouter.SignInfo",
            name: "userSignInfo",
            type: "tuple",
          },
          {
            components: [
              { internalType: "address", name: "oneCT", type: "address" },
              { internalType: "bytes", name: "signature", type: "bytes" },
              {
                internalType: "bool",
                name: "shouldRegister",
                type: "bool",
              },
            ],
            internalType: "struct IBufferRouter.Register",
            name: "register",
            type: "tuple",
          },
          {
            components: [
              { internalType: "uint256", name: "value", type: "uint256" },
              {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
              {
                internalType: "bool",
                name: "shouldApprove",
                type: "bool",
              },
            ],
            internalType: "struct IApprovals.Permit",
            name: "permit",
            type: "tuple",
          },
          { internalType: "address", name: "user", type: "address" },
          {
            components: [
              { internalType: "uint256", name: "iv", type: "uint256" },
              { internalType: "uint256", name: "sf", type: "uint256" },
              {
                components: [
                  {
                    internalType: "bytes",
                    name: "signature",
                    type: "bytes",
                  },
                  {
                    internalType: "uint32",
                    name: "timestamp",
                    type: "uint32",
                  },
                ],
                internalType: "struct IBufferRouter.SignInfo",
                name: "publisherSignInfo",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "bytes",
                    name: "signature",
                    type: "bytes",
                  },
                  {
                    internalType: "uint32",
                    name: "timestamp",
                    type: "uint32",
                  },
                ],
                internalType: "struct IBufferRouter.SignInfo",
                name: "sfSignInfo",
                type: "tuple",
              },
              {
                internalType: "bytes[]",
                name: "priceUpdateData",
                type: "bytes[]",
              },
              {
                internalType: "bytes32[]",
                name: "priceIds",
                type: "bytes32[]",
              },
            ],
            internalType: "struct IBufferRouter.ResolveTradeParams",
            name: "resolveTradeParams",
            type: "tuple",
          },
        ],
        internalType: "struct IBufferRouter.TradeInitiationParamasV2[]",
        name: "trades",
        type: "tuple[]",
      },
    ],
    name: "initiateAndResolve",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "targetContract",
            type: "address",
          },
          {
            internalType: "bool",
            name: "allowPartialFill",
            type: "bool",
          },
          {
            internalType: "string",
            name: "referralCode",
            type: "string",
          },
          { internalType: "bool", name: "isAbove", type: "bool" },
          { internalType: "uint256", name: "contracts", type: "uint256" },
          { internalType: "uint128", name: "strike", type: "uint128" },
          { internalType: "uint32", name: "expiration", type: "uint32" },
          {
            internalType: "uint256",
            name: "maxFeePerContract",
            type: "uint256",
          },
        ],
        internalType: "struct IBufferRouter.TradeInitiationParamas",
        name: "params",
        type: "tuple",
      },
    ],
    name: "initiateTrade",
    outputs: [{ internalType: "uint256", name: "queueId", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "isKeeper",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastSavedQueueId",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "optionIdMapping",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    name: "prevSignature",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "publisher",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pyth",
    outputs: [{ internalType: "contract IPyth", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "queuedTrades",
    outputs: [
      { internalType: "address", name: "user", type: "address" },
      {
        internalType: "address",
        name: "targetContract",
        type: "address",
      },
      { internalType: "uint128", name: "strike", type: "uint128" },
      { internalType: "uint32", name: "expiration", type: "uint32" },
      { internalType: "uint256", name: "contracts", type: "uint256" },
      { internalType: "bool", name: "allowPartialFill", type: "bool" },
      { internalType: "bool", name: "isQueued", type: "bool" },
      { internalType: "uint256", name: "optionId", type: "uint256" },
      { internalType: "bool", name: "isAbove", type: "bool" },
      { internalType: "uint32", name: "queueTimestamp", type: "uint32" },
      {
        internalType: "uint256",
        name: "maxFeePerContract",
        type: "uint256",
      },
      { internalType: "string", name: "referralCode", type: "string" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256[]", name: "queueIds", type: "uint256[]" },
      {
        components: [
          { internalType: "uint256", name: "iv", type: "uint256" },
          { internalType: "uint256", name: "sf", type: "uint256" },
          {
            components: [
              { internalType: "bytes", name: "signature", type: "bytes" },
              {
                internalType: "uint32",
                name: "timestamp",
                type: "uint32",
              },
            ],
            internalType: "struct IBufferRouter.SignInfo",
            name: "publisherSignInfo",
            type: "tuple",
          },
          {
            components: [
              { internalType: "bytes", name: "signature", type: "bytes" },
              {
                internalType: "uint32",
                name: "timestamp",
                type: "uint32",
              },
            ],
            internalType: "struct IBufferRouter.SignInfo",
            name: "sfSignInfo",
            type: "tuple",
          },
          {
            internalType: "bytes[]",
            name: "priceUpdateData",
            type: "bytes[]",
          },
          {
            internalType: "bytes32[]",
            name: "priceIds",
            type: "bytes32[]",
          },
        ],
        internalType: "struct IBufferRouter.ResolveTradeParams[]",
        name: "resolveTradeParams",
        type: "tuple[]",
      },
    ],
    name: "resolveQueuedTrades",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "tokenX", type: "address" },
          { internalType: "address", name: "user", type: "address" },
          {
            components: [
              { internalType: "uint256", name: "value", type: "uint256" },
              {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
              {
                internalType: "bool",
                name: "shouldApprove",
                type: "bool",
              },
            ],
            internalType: "struct IApprovals.Permit",
            name: "permit",
            type: "tuple",
          },
        ],
        internalType: "struct IApprovals.RevokeParams[]",
        name: "revokeParams",
        type: "tuple[]",
      },
    ],
    name: "revokeApprovals",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "targetContract",
        type: "address",
      },
      { internalType: "bool", name: "register", type: "bool" },
    ],
    name: "setContractRegistry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_keeper", type: "address" },
      { internalType: "bool", name: "_isActive", type: "bool" },
    ],
    name: "setKeeper",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "queueId", type: "uint256" },
      {
        components: [
          { internalType: "uint256", name: "iv", type: "uint256" },
          { internalType: "uint256", name: "sf", type: "uint256" },
          {
            components: [
              { internalType: "bytes", name: "signature", type: "bytes" },
              {
                internalType: "uint32",
                name: "timestamp",
                type: "uint32",
              },
            ],
            internalType: "struct IBufferRouter.SignInfo",
            name: "publisherSignInfo",
            type: "tuple",
          },
          {
            components: [
              { internalType: "bytes", name: "signature", type: "bytes" },
              {
                internalType: "uint32",
                name: "timestamp",
                type: "uint32",
              },
            ],
            internalType: "struct IBufferRouter.SignInfo",
            name: "sfSignInfo",
            type: "tuple",
          },
          {
            internalType: "bytes[]",
            name: "priceUpdateData",
            type: "bytes[]",
          },
          {
            internalType: "bytes32[]",
            name: "priceIds",
            type: "bytes32[]",
          },
        ],
        internalType: "struct IBufferRouter.ResolveTradeParams",
        name: "params",
        type: "tuple",
      },
      { internalType: "string", name: "assetPair", type: "string" },
      {
        components: [
          { internalType: "address", name: "user", type: "address" },
          {
            internalType: "address",
            name: "targetContract",
            type: "address",
          },
          { internalType: "uint128", name: "strike", type: "uint128" },
          { internalType: "uint32", name: "expiration", type: "uint32" },
          { internalType: "uint256", name: "contracts", type: "uint256" },
          {
            internalType: "bool",
            name: "allowPartialFill",
            type: "bool",
          },
          { internalType: "bool", name: "isQueued", type: "bool" },
          { internalType: "uint256", name: "optionId", type: "uint256" },
          { internalType: "bool", name: "isAbove", type: "bool" },
          {
            internalType: "uint32",
            name: "queueTimestamp",
            type: "uint32",
          },
          {
            internalType: "uint256",
            name: "maxFeePerContract",
            type: "uint256",
          },
          { internalType: "string", name: "referralCode", type: "string" },
        ],
        internalType: "struct IBufferRouter.QueuedTrade",
        name: "queuedTrade",
        type: "tuple",
      },
    ],
    name: "verifySignatures",
    outputs: [
      { internalType: "bool", name: "", type: "bool" },
      { internalType: "string", name: "", type: "string" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
export default RouterABI;
