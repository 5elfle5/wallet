export const EverWalletContract = {
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
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "_version",
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
                "name": "_version",
                "type": "uint256"
            }
        ]
    },
    tvc: "te6ccgECFgEAAn4AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsTBQQVAr7tRNDXScMB+GYh2zzTAAGOHYECANcYIPkBAdMAAZTT/wMBkwL4QuIg+GX5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPAwGA0rtRNDXScMB+GYi0NcLA6k4ANwhxwDjAiHXDR/yvCHjAwHbPPI8EhIGAzwgghAhkYpJuuMCIIIQaLVfP7rjAiCCEHvMlJ+64wINCQcDNDD4RvLgTPhCbuMAIZPU0dDe+kDR2zzjAPIAEQgOAUCI+EL4RSBukjBw3rry6GX4AMjPhYjOgG/PQMmBAKD7ABAEUDD4Qm7jAPhG8nPRiPhCwwDy6GWI+EL4RSBukjBw3rry6GX4ANs88gAMCwoOADpNZXNzYWdlIG5vdCBjb3JyZWN0bHkgc2lnbmVkLgAwQ29udHJhY3QgcHVia2V5IG5vdCBzZXQuAVztRNDXScIBjiNw7UTQ9AVxIYBA9A6T1wv/kXDi+GqAQPQO8r3XC//4YnD4Y+MNEQM8MPhG8uBM+EJu4wAhk9TR0N76QNMP03/R2zzjAPIAEQ8OACT4SvhD+ELIy//LP8+Dy//J7VQBXIj4QvhFIG6SMHDeuvLoZfgA+CdvECG8jhJTAsjPhYjOAfoCgGvPQMki+wDeXwMQACROb3QgQ29udHJhY3QgT3duZXIAJu1E0NP/0z/TADHT/9H4avhj+GIACvhG8uBMAgr0pCD0oRUUABRzb2wgMC41Ny4zAAA=",
    code: "te6ccgECEwEAAlEABCSK7VMg4wMgwP/jAiDA/uMC8gsQAgESAr7tRNDXScMB+GYh2zzTAAGOHYECANcYIPkBAdMAAZTT/wMBkwL4QuIg+GX5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPAkDA0rtRNDXScMB+GYi0NcLA6k4ANwhxwDjAiHXDR/yvCHjAwHbPPI8Dw8DAzwgghAhkYpJuuMCIIIQaLVfP7rjAiCCEHvMlJ+64wIKBgQDNDD4RvLgTPhCbuMAIZPU0dDe+kDR2zzjAPIADgULAUCI+EL4RSBukjBw3rry6GX4AMjPhYjOgG/PQMmBAKD7AA0EUDD4Qm7jAPhG8nPRiPhCwwDy6GWI+EL4RSBukjBw3rry6GX4ANs88gAJCAcLADpNZXNzYWdlIG5vdCBjb3JyZWN0bHkgc2lnbmVkLgAwQ29udHJhY3QgcHVia2V5IG5vdCBzZXQuAVztRNDXScIBjiNw7UTQ9AVxIYBA9A6T1wv/kXDi+GqAQPQO8r3XC//4YnD4Y+MNDgM8MPhG8uBM+EJu4wAhk9TR0N76QNMP03/R2zzjAPIADgwLACT4SvhD+ELIy//LP8+Dy//J7VQBXIj4QvhFIG6SMHDeuvLoZfgA+CdvECG8jhJTAsjPhYjOAfoCgGvPQMki+wDeXwMNACROb3QgQ29udHJhY3QgT3duZXIAJu1E0NP/0z/TADHT/9H4avhj+GIACvhG8uBMAgr0pCD0oRIRABRzb2wgMC41Ny4zAAA=",
    codeHash: "4d91d5ff4316372310abcee0f7562f482cf333019c92480ebafa78006eabd06e",
};
