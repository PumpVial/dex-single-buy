# 🧪 Dex Single Buy 🧪

Buy any token that's listed on a decentralized exchange i.e. Raydium, Orca, Jupiter.

---

## Prerequisites

- Get your free API key from https://pumpvial.com

---

## Install Dependencies

`npm i axios bs58 @solana/web3.js`

---

## Request

##### [required] [object]

`recipient`: Public key object of the token recipient.

##### [required] [string]

`ca`: Contract address of the pump.fun token to buy.

##### [required] [string]

`solIn`: SOL amount to buy.

##### [optional] [string]

`prioFee`: Priority fee to speed up transactions. Default is medium.  
`string`: Accepted values: 'medium' | 'high' | 'veryHigh'.

---

## Response

`string: serializedTransaction`: Unsigned base64 encoded transaction.

---

Need help? Hop in our Discord: https://discord.gg/WBmZss3jQq  
Official Docs: https://pumpvial.com/https/dex-single-buy

---

**Tags:** solana, solana-wallet, solana-wallet-funding, solana-tokens, solana-sdk, solana-web3, solana-transactions, solana-api, pumpfun, pumpvial, crypto-wallet, crypto-funding, blockchain, blockchain-wallet, crypto, cryptocurrency, defi, decentralized-finance, solana-developer, solana-devtools, solana-nft, solana-program, solana-sdk-js, solana-dapp, solana-smart-contracts, solana-bots, solana-automation, solana-trading, solana-token-transfer, solana-sol, web3, web3js, crypto-development, crypto-api, solana-tools, solana-sol-transfer, solana-multisig, solana-transaction-builder, solana-wallet-security, solana-payer, solana-base64, bs58, solana-sdk-tools, solana-transaction-signing, solana-pumpfun, solana-funding-tool
