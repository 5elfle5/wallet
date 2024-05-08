import { TON_CLIENT } from "../constants/ton-client";

export const getBagOfCells = async (address: string) => {
    let qRes = await TON_CLIENT.net.query_collection({
        collection: "accounts",
        filter: {
            id: {eq: address}
        },
        result: "boc"
    });

    if (qRes.result.length != 1)
        throw "Could not get bag of cells";

    return qRes.result[0].boc;    
}
