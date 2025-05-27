import { VersionedTransaction, Connection, Keypair } from "@solana/web3.js";
import bs58 from "bs58";
import axios from "axios";

/////////////////////////////// CONFIG //////////////////////////////////////
const API_KEY = process.env.PUMPVIAL_API_KEY;
const RPC_URL = ""; // Visit Helius.dev
const connection = new Connection(RPC_URL, "confirmed");
const RECIPIENT_PRIVATE_KEY = "Enter token recipient's private key.";
const recipient = Keypair.fromSecretKey(bs58.decode(RECIPIENT_PRIVATE_KEY));

const payload = {
  recipient: recipient.publicKey,
  ca: "7iagMTDPfNSR5zVcERT1To7A9eaQoz58dJAh42EMHcCC",
  solIn: "0.35",
};
//////////////////////////////// END ////////////////////////////////////////

const buyDexSingle = async () => {
  const URL = "https://pumpvial.com/api/dex-single-buy";

  try {
    const request = await axios.post(URL, payload, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
      },
    });

    const { serializedTransaction } = request.data;
    const transaction = VersionedTransaction.deserialize(
      Uint8Array.from(Buffer.from(serializedTransaction, "base64"))
    );
    transaction.sign([recipient]);

    const signature = await connection.sendTransaction(transaction);
    console.log(`Success: https://solscan.io/tx/${signature}`);
  } catch (error) {
    console.error("Error:", error);
  }
};

buyDexSingle();
