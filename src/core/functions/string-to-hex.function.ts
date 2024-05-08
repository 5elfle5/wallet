export const stringToHex = (dataString) => {
    return Buffer.from(dataString, 'utf8').toString('hex');
};