export const RootOwnerContract = {
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
                        "name": "rt",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setRoot",
                "inputs": [
                    {
                        "name": "rt",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "send",
                "inputs": [
                    {
                        "name": "rcpt",
                        "type": "address"
                    },
                    {
                        "name": "flags",
                        "type": "uint16"
                    },
                    {
                        "name": "amnt",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "killContract",
                "inputs": [
                    {
                        "name": "to",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "transferOwnership",
                "inputs": [
                    {
                        "name": "newOwner",
                        "type": "address"
                    },
                    {
                        "name": "gas",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "deployWallet",
                "inputs": [
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
                        "name": "gasDonate",
                        "type": "uint128"
                    }
                ],
                "outputs": []
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
                        "name": "gas",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "takeSurplusGas",
                "inputs": [
                    {
                        "name": "gas",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setBurnPaused",
                "inputs": [
                    {
                        "name": "paused",
                        "type": "bool"
                    },
                    {
                        "name": "gas",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "deployWalletCallback",
                "inputs": [
                    {
                        "name": "newWallet",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setBurnPausedCallback",
                "inputs": [
                    {
                        "name": "paused",
                        "type": "bool"
                    }
                ],
                "outputs": []
            },
            {
                "name": "root",
                "inputs": [],
                "outputs": [
                    {
                        "name": "root",
                        "type": "address"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "randomNonce_",
                "type": "uint256"
            }
        ],
        "events": [],
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
                "name": "randomNonce_",
                "type": "uint256"
            },
            {
                "name": "root",
                "type": "address"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "6ae9d0166a2c7764d67aa2248c56cb0d7151bd113b856e2a14c6796765306e4e",
};
