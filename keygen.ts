import { Keypair } from "@solana/web3.js";

//Generate a new keypair
let kp = Keypair.generate()

console.log(`You've generated a new Solana wallet:
    ${kp.publicKey.toBase58()} 
    [${kp.secretKey}]`)
    
    
    
//QXfcEf2FHrD9KaFBDC1r55WvmuPrUDk41kQByzYc3CM 
    