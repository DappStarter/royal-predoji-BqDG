require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include knock flame success strike decrease night mistake heavy end army general'; 
let testAccounts = [
"0xcb1b16710e678fb6e5522efbd18aff47b645ac43766c4fcdbf1895a9ccd4b0c5",
"0xa1d0a0f4d7538921a5de323524c155b05c0bf7e754c27742a2f5f919495c3185",
"0xcb7130e97ef68c07e81e722ff556e3f29710e1cebfd8db53f2b4a177d490a202",
"0xeb851fcdc2ac82a8c6eae175e27d6f2b0d640aad3ddbbee79b2560961211154b",
"0x492c9da9c69cd681865a6b642a75671761729a6735fd21ca49a75e5b5e89e9ab",
"0x19df3082f71a825b2b01d7cfda1b4616f5585a167618f268b5c108054fae3c1a",
"0x388349c7e621525327c0487208e6a987e7e5c41b4f6e60184873fe4313c32462",
"0xe660857b88ee04ad8cba8bfc5614b9f40507c9ad4f0a54e135cc2184f086c661",
"0x42916c10db4a18b6f4fbed58085c0b5dfd72d48e6f1066fe5d9aa0e24d296439",
"0x46d1b15bde9e7ac8ffbd4559e1dec8640a1eb1a15048bef3c3ef5eadc15674bc"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

