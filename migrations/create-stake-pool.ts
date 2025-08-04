import { Program, web3 } from "@project-serum/anchor";
import { createStakePool, setProgram, setStakePoolRewards } from "../app/program/instructions";
import { WMP_STAKING_PROGRAM_ID } from "../app/program/program-id";
import { tokenAmount } from "../app/program/utils";
import * as artifacts from "../target/types/wmp_staking";
import * as anchor from "@project-serum/anchor";
import { setupProvider } from "./setup";
import { getNextId } from "../app/program/state";
import { getCreateStakePoolAccounts } from "../app/program/accounts";


async function main() {
    let stakeToken = new web3.PublicKey("G68uHoZ3BTsWAdfn2mqi8UT7ift8u6kRD81SQDPkENps");
    let rewardToken = new web3.PublicKey("2CFxTnJSTq4H5k2tk9yB5t9vK6pEyRgs37bEPwMMbSYZ");
    
    let {signer, provider} = await setupProvider();
    let program = new Program<artifacts.WmpStaking>(artifacts.IDL, WMP_STAKING_PROGRAM_ID, provider);
    setProgram(program);

    // let stakePool = await createStakePool(signer, stakeToken, rewardToken, new anchor.BN(0));
    let stakePool = new web3.PublicKey("AkCUzEQUKFC5Cdedr9wrXLHX8U72BLWGuEPsCcbAvGV2")
    await setStakePoolRewards(stakePool, signer, tokenAmount(0.00085), new anchor.BN(601200));

    console.log("Stake pool: " + stakePool.toBase58());
}

main()
    .then(() => console.log("ok!"))
    .catch(err => console.error(err));