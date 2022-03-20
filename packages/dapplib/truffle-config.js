require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remain exchange gloom clip bone slender'; 
let testAccounts = [
"0x715d5bdbbc2733f8187ea923bb077d8b0a4f6d40ac15015d9a1f13362178e27e",
"0xcc752dd3ca6a3c7bf79ca99d2489de38dbc475452bf7251ef4b8341f5b810edb",
"0xb8ea0bbb66115372e384a1077979b357b6d005faa6157d7d616f2ef97b904822",
"0x631a1c4c704b7ccc3e65ef88f86c436c2d2d4fb42195b4f9ebc6ee0e1e04f86a",
"0x2086989a4bed351c31a57be78d25a20b21e957896e85225a5cc310792bfc2461",
"0xd984c3c9184f3c1e880bd2dea49919fcba2f09c9230956ee6914b52e1cd6cdc4",
"0x7642d8b9c224b33ae9e1926d99295ab3cdefba0b37a81084e19e4de7037bbfae",
"0x3866e6b26818528ebb956df1a269350ebfc1c43f3cb783a6f1e7faea98f7e6e4",
"0xab607465228c4dafc5775384a509d87e0897ac0b53399fb9674beaa1dc88f5ee",
"0xd4897b25a967fff4f7a817d88a373d2e83806b558d17172b30c0b92a3587b2d0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


