export const TokenRootContract = {
    abi: {
        "ABI version": 2,
        "version": "2.2",
        "header": [
            "pubkey",
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [
                    {
                        "name": "burnPaused",
                        "type": "bool"
                    },
                    {
                        "name": "remainingGasTo",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "deployWallet",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    },
                    {
                        "name": "rcpSrvc",
                        "type": "bool"
                    },
                    {
                        "name": "rcpOwnerPK",
                        "type": "uint256"
                    },
                    {
                        "name": "rcpOwnerAddr",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "burnPaused",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "bool"
                    }
                ]
            },
            {
                "name": "setBurnPaused",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    },
                    {
                        "name": "paused",
                        "type": "bool"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "bool"
                    }
                ]
            },
            {
                "name": "transferOwnership",
                "inputs": [
                    {
                        "name": "newOwner",
                        "type": "address"
                    },
                    {
                        "name": "remainingGasTo",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "name",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "symbol",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "decimals",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint8"
                    }
                ]
            },
            {
                "name": "totalSupply",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "walletCode",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "rootOwner",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "walletOf",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    },
                    {
                        "name": "rcpSrvc",
                        "type": "bool"
                    },
                    {
                        "name": "rcpOwnerPK",
                        "type": "uint256"
                    },
                    {
                        "name": "rcpOwnerAddr",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "mint",
                "inputs": [
                    {
                        "name": "amount",
                        "type": "uint128"
                    },
                    {
                        "name": "rcpSrvc",
                        "type": "bool"
                    },
                    {
                        "name": "rcpOwnerPK",
                        "type": "uint256"
                    },
                    {
                        "name": "rcpOwnerAddr",
                        "type": "address"
                    },
                    {
                        "name": "remainingGasTo",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "acceptBurn",
                "inputs": [
                    {
                        "name": "amount",
                        "type": "uint128"
                    },
                    {
                        "name": "burnflags",
                        "type": "uint64"
                    },
                    {
                        "name": "ownerPK",
                        "type": "uint256"
                    },
                    {
                        "name": "ownerAddr",
                        "type": "address"
                    },
                    {
                        "name": "remainingGasTo",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "sendSurplusGas",
                "inputs": [
                    {
                        "name": "to",
                        "type": "address"
                    }
                ],
                "outputs": []
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "name_",
                "type": "string"
            },
            {
                "key": 2,
                "name": "symbol_",
                "type": "string"
            },
            {
                "key": 3,
                "name": "decimals_",
                "type": "uint8"
            },
            {
                "key": 4,
                "name": "rootOwner_",
                "type": "address"
            },
            {
                "key": 5,
                "name": "walletCode_",
                "type": "cell"
            },
            {
                "key": 6,
                "name": "randomNonce_",
                "type": "uint256"
            },
            {
                "key": 7,
                "name": "deployer_",
                "type": "address"
            }
        ],
        "events": [
            {
                "name": "EventBurn",
                "inputs": [
                    {
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            }
        ],
        "fields": [
            {
                "name": "_pubkey",
                "type": "uint256"
            },
            {
                "name": "_timestamp",
                "type": "uint64"
            },
            {
                "name": "_constructorFlag",
                "type": "bool"
            },
            {
                "name": "name_",
                "type": "string"
            },
            {
                "name": "symbol_",
                "type": "string"
            },
            {
                "name": "decimals_",
                "type": "uint8"
            },
            {
                "name": "rootOwner_",
                "type": "address"
            },
            {
                "name": "walletCode_",
                "type": "cell"
            },
            {
                "name": "totalSupply_",
                "type": "uint128"
            },
            {
                "name": "burnPaused_",
                "type": "bool"
            },
            {
                "name": "randomNonce_",
                "type": "uint256"
            },
            {
                "name": "deployer_",
                "type": "address"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "7a443d3b4ee55914c7f7c2eb3882813384ef849e2f3884b0c9a8fad9030e68ed",
};
