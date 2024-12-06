

// // Initialize Moralis
// Moralis.start({
//     apiKey: "YOUR_API_KEY"  // Replace with your actual API key from Moralis
//   });
//   const Moralis = require('moralis').default;
  
//   // Define elements for each cryptocurrency
//   const btc = document.getElementById("bitcoin");
//   const eth = document.getElementById("ethereum");
//   const dog = document.getElementById("dogecoin");
//   const sol = document.getElementById("solana");
//   const xrm = document.getElementById("monero");
//   const bnb = document.getElementById("bnb");
  
//   // Token addresses for each cryptocurrency on Ethereum (or specify appropriate chains)
//   const tokenAddresses = {
//     bitcoin: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", // WBTC address
//     ethereum: "0x0000000000000000000000000000000000000000", // ETH
//     dogecoin: "0xba2ae424d960c26247dd6c32edc70b295c744c43", // Dogecoin on Binance Smart Chain
//     solana: "0x0000000000000000000000000000000000000000",  // Adjust as needed
//     monero: "0x0000000000000000000000000000000000000000", // Placeholder for Monero
//     bnb: "0xB8c77482e45F1F44dE1745F52C74426C631bdd52"  // BNB on Binance Smart Chain
//   };
  
//   // Fetch and update prices
//   async function updatePrices() {
//     try {
//       const responses = await Promise.all(Object.entries(tokenAddresses).map(async ([token, address]) => {
//         const response = await Moralis.EvmApi.token.getTokenPrice({
//           address: address,
//           chain: "eth",  // Adjust for specific chain (e.g., "bsc" for Binance Smart Chain)
//         });
//         return { token, price: response.raw.usdPrice };
//       }));
  
//       // Update innerHTML for each element
//       responses.forEach(({ token, price }) => {
//         switch (token) {
//           case "bitcoin": btc.innerHTML = price; break;
//           case "ethereum": eth.innerHTML = price; break;
//           case "dogecoin": dog.innerHTML = price; break;
//           case "solana": sol.innerHTML = price; break;
//           case "monero": xrm.innerHTML = price; break;
//           case "bnb": bnb.innerHTML = price; break;
//         }
//       });
//     } catch (error) {
//       console.error("Error fetching prices:", error);
//     }
//   }
  
//   // Call the function to update prices
//   updatePrices();
  




// var setting = {
//   "async": true,
//   "scrossDomain": true,
//   "url": "https//api.coingecko.com/api/v3/simple/price?ids=bitcoin%Cethereum%Cdogecoin%Csolana%CBNB%Cmonero&vs_currencies=usd",
//   "method":"GET",
// "headers":{}
// };
// $.ajax(setting).done(function(response){
//     console.log(response);
// })

// url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin,solana,bnb,monero&vs_currencies=usd",

const btc = document.getElementById("bitcoin");
const eth = document.getElementById("ethereum");
const dog = document.getElementById("dogecoin");
const sol = document.getElementById("solana");
const xrm = document.getElementById("monero");
const trx = document.getElementById("trx");

var setting = {
  async: true,
  crossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin,solana,tron,monero&vs_currencies=usd",
  method: "GET",
  headers: {},
};



$.ajax(setting).done(function (response) {
  btc.innerHTML = response.bitcoin.usd;
  eth.innerHTML = response.ethereum.usd;
  dog.innerHTML = response.dogecoin.usd;
  sol.innerHTML = response.solana.usd;
  trx.innerHTML = response.tron.usd;     // corrected BNB to `bnb`
  xrm.innerHTML = response.monero.usd;  // corrected monero to `xrm`
});
