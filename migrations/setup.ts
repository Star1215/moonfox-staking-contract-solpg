import { AnchorProvider, web3 } from "@project-serum/anchor";
import { Wallet } from "@coral-xyz/anchor";
import { bs58 } from "@project-serum/anchor/dist/cjs/utils/bytes";

export async function setupProvider() {
    // let connection = new web3.Connection('https://mainnet.helius-rpc.com/?api-key=5db8c362-82b2-485b-8479-c7070537e638');
    // // let privateKeyBuffer: Uint8Array = require(process.env.WALLET);
    // let signer = web3.Keypair.fromSecretKey(bs58.decode('5FZLQscKkTF1UJtjZw5FEEd2jCLGFti56ynNGx7nbhk1RhcLQkT97NGeNKbftgZGYvadHiVYhXvviGK7A9G5JX8E'));

    let connection = new web3.Connection("https://mainnet.helius-rpc.com/?api-key=931af0a6-d54d-4613-be59-29d197a94efc");
    let privateKeyBuffer: Uint8Array = require(process.env.WALLET);
    let signer = web3.Keypair.fromSecretKey(new Uint8Array(privateKeyBuffer));
    console.log('#wallet :', signer.publicKey.toBase58());
    let wallet = new Wallet(signer);
    let provider = new AnchorProvider(connection, wallet, {});
    return {signer, provider};
}