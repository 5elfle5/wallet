export const TokenWalletContract = {
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
                "inputs": [],
                "outputs": []
            },
            {
                "name": "destroy",
                "inputs": [
                    {
                        "name": "remainingGasTo",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "burn",
                "inputs": [
                    {
                        "name": "amount",
                        "type": "uint128"
                    },
                    {
                        "name": "flags",
                        "type": "uint64"
                    },
                    {
                        "name": "remainingGasTo",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "balance",
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
                "name": "ownerAddr",
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
                "name": "ownerPK",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "root",
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
                "name": "isService",
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
                "name": "feeThreshold",
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
                "name": "tokenFees",
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
                    },
                    {
                        "name": "deployDonation",
                        "type": "uint128"
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
                "name": "transfer",
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
                "name": "acceptTransfer",
                "inputs": [
                    {
                        "name": "amount",
                        "type": "uint128"
                    },
                    {
                        "name": "serviceflags",
                        "type": "uint64"
                    },
                    {
                        "name": "senderPK",
                        "type": "uint256"
                    },
                    {
                        "name": "senderAddr",
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
                "name": "acceptMint",
                "inputs": [
                    {
                        "name": "amount",
                        "type": "uint128"
                    },
                    {
                        "name": "remainingGasTo",
                        "type": "address"
                    }
                ],
                "outputs": []
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "root_",
                "type": "address"
            },
            {
                "key": 2,
                "name": "ownerPK_",
                "type": "uint256"
            },
            {
                "key": 3,
                "name": "ownerAddr_",
                "type": "address"
            },
            {
                "key": 4,
                "name": "isService_",
                "type": "bool"
            }
        ],
        "events": [
            {
                "name": "EventTransfer",
                "inputs": [
                    {
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "EventMint",
                "inputs": [
                    {
                        "name": "_to",
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
                "name": "root_",
                "type": "address"
            },
            {
                "name": "ownerPK_",
                "type": "uint256"
            },
            {
                "name": "ownerAddr_",
                "type": "address"
            },
            {
                "name": "isService_",
                "type": "bool"
            },
            {
                "name": "balance_",
                "type": "uint128"
            },
            {
                "name": "fees_",
                "type": "uint128"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "bb7a98b0e38072463f764fd650bf58a319ad80da40cab201a9770966dbab6cbd",
};
