import React, { useEffect, useState } from "react";
import ReefIcon from "../../../assests/images/Tokens/reef.png";
import CNTR from "../../../assests/images/Tokens/cntr.png";
import Matic from "../../../assests/images/Tokens/matic.png";
import OROIcon from "../../../assests/images/Tokens/oro.png";
import FrontIcon from "../../../assests/images/Tokens/frontier.png";
import { useWeb3React } from "@web3-react/core";
import { useUnifarmV2Contract } from "../../../hooks/useTokenContract";
// this is reusable componnet
import firebase from "../../../firebaseConfig";

const StakedDetails = () => {
  const defaults = {
    confetti: {
      type: "confetti",
      fakingRequest: false,
      angle: 90,
      decay: 0.91,
      spread: 100,
      startVelocity: 30,
      elementCount: 360,
      elementSize: 5,
      lifetime: 130,
      zIndex: 10,
      springAnimation: true,
      showMyToken: false,
      open: false,
      unstakBtn: false
    }
  };

  const [rewardPunish, setRewardPunish] = useState<boolean>(false);

  const [stakingDetails, setStakingDetails] = useState<any[] | null>();

  const { active, library, account } = useWeb3React();

  const unifarmInstance = useUnifarmV2Contract();

  const [config, setConfig] = useState<{
    isLoading: boolean;
    error: string | null;
  }>();

  useEffect(() => {
    async () => {
      try {
        if (!active || !library || !account) return null;

        // app will be loading here
        setConfig({
          isLoading: true,
          error: null
        });

        const stakeDetails = unifarmInstance.methods
          .viewStakingDetails(account)
          .call();

        const tokenNames = [];
        const renderObject = [];

        const tokenAddress = stakeDetails[0];
        const isActive = stakeDetails[1];
        const stakeIDs = stakeDetails[2];
        const stakeAmount = stakeDetails[3];
        const startTime = stakeDetails[4];

        const sequenceListEveryStake = {};
        const rewardEachStake = {};
        const sequenceListImages = {};
        // console.log('stakeIDs', stakeIDs);

        for (let i = 0; i < stakeIDs.length; i++) {
          let sequenceList = [];
          for (let k = 0; k < 9; k++) {
            const sequence = await unifarmInstance.methods
              .tokensSequenceList(tokenAddress[i], k)
              .call();
            sequenceList.push(sequence.toLowerCase());
          }
          // debugger
          sequenceListEveryStake[stakeIDs[i]] = sequenceList;

          let rewardsAmt = [];

          for (let item of sequenceListEveryStake[stakeIDs[i]]) {
            if (isActive[i]) {
              const avaliableRewards = await unifarmInstance.methods
                .viewAvailableRewards(account, stakeIDs[i], item)
                .call();
              rewardsAmt.push(avaliableRewards);
            } else {
              rewardsAmt = [0.0, 0.0, 0.0, 0.0, 0.0];
            }
          }

          rewardEachStake[stakeIDs[i]] = rewardsAmt;
        }

        for (let i = 0; i < tokenAddress.length; i++) {
          let obj = {};
          obj["tokenName"] = tokenNames[i];
          obj["tokenAddress"] = tokenAddress[i];
          obj["tokenStatus"] = isActive[i];
          obj["stakeID"] = stakeIDs[i];
          obj["stakeAmount"] = stakeAmount[i];
          obj["startTime"] = startTime[i];
          // obj['refreshTime'] = refereshTime[i];
          obj["rewards"] = rewardEachStake[stakeIDs[i]];
          obj["rewarsTokenSrc"] = sequenceListImages[stakeIDs[i]];
          renderObject.push(obj);
        }
        // console.log('render object', renderObject);
        const unStakeData = [];

        const ref = firebase.database().ref("blockHashTable");
        ref.on("value", (snapshot) => {
          // console.log('firebase response here', snapshot);
          if (snapshot && snapshot.exists()) {
            const obj = snapshot.val();
            for (let id in obj) {
              unStakeData.push(obj[id]);
            }
          }
        });

        setConfig({
          isLoading: false,
          error: null
        });

        console.log(renderObject);
        setStakingDetails(renderObject);
      } catch (err) {
        setConfig({
          isLoading: false,
          error: err.message
        });
      }
    };
  }, [library, active]);

  return (
    <div className="row">
      <div className="custom-scroll" id="style-7">
        <div className="mb-3">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="my-stack-list total-stack-point box-shadow blue-border-hover">
                <img src={Matic} alt="matic" width="30" />
                <br />
                <h6 className=" btn scale btn_lg_primary1 br-10 effect-letter rounded-4">
                  My Stake:&nbsp;<b>100</b>
                </h6>
              </div>
              <div className="my-stack-list total-stack-point box-shadow blue-border-hover">
                <br />
                <h6 className="btn scale btn_lg_primary1  br-10 effect-letter rounded-4">
                  Days Staked: <b>10</b>
                </h6>
              </div>
            </div>
            <div className="col-lg-9 mb-4 mt-0">
              <div className="card p-3 reward-card-list total-stack-list2 box-shadow br-10 unstake_margin_top unstake_margin_top">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row align-items-center user-reward-list">
                      <div className="col-md-12 text-left">
                        {/* <h6>Stake Tokens: <b>100</b> Matic</h6> */}
                        <div className="">
                          <div className="row  my-coin-list claimed-rewards">
                            <div className="col-lg-12">
                              <div className="row">
                                <div className="col-md-2">
                                  <div>
                                    <b>APR</b>
                                    <br />
                                    <span>49%</span>
                                  </div>
                                </div>
                                <div className="col-md-2">
                                  <div>
                                    <b>Lock In</b>
                                    <br />
                                    <span>Open</span>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div>
                                    <b>Max Stking Limit</b>
                                    <br />
                                    <span>Open</span>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div>
                                    <b>Network</b>
                                    <br />
                                    <span>View on Ethererun</span>
                                  </div>
                                </div>
                                {/* <div className="col-md-4"><div><b>Max Staking Limit</b><br/><span>1500</span></div></div><div className="col-md-4"><div><img src={one} width="20"/><br/><span>20 ORO</span></div></div>
                                                          <div className="col-md-4"><div><b>Network</b><br/><span>View On Etherurn</span></div></div>     */}
                              </div>
                            </div>
                            <div className="col-lg-3 mt-3">
                              <div>
                                <div>
                                  <img src={OROIcon} alt="oro" width="20" />
                                </div>
                                <div className="">
                                  <p style={{ marginBottom: 0 }}>
                                    <b>ORO</b>
                                  </p>
                                  <hr className="line" />
                                </div>
                                <div>
                                  <p>0.9</p>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-5 mt-3">
                              <div>
                                <div className="d-flex">
                                  <div>
                                    <img
                                      src={FrontIcon}
                                      alt="front"
                                      width="20"
                                    />
                                    <p>
                                      <b>FRONT</b>
                                    </p>
                                    <hr className="line" />
                                  </div>
                                  <div className="ml-3 ">
                                    <img
                                      src={CNTR}
                                      alt="cntr"
                                      width="20"
                                      className="ml-2"
                                    />
                                    <p>
                                      <b>CNTR</b>
                                    </p>
                                    <hr className="line" />
                                  </div>
                                </div>
                                <div>
                                  <span className="text-blink upcoming_reward">
                                    <b>Upcomming Reward</b>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          {/* <h6 className="pt-3">Days Staked: <b>10</b></h6> */}
                        </div>
                      </div>
                      <div className="col-md-12  text-lg-right select-unstaike-button">
                        <button
                          className="btn scale btn_lg_primary unstake-claim bg-dark-purple br-10 c-white effect-letter rounded-4 btn-not-allowed"
                          style={{ fontSize: 12 }}
                          disabled
                        >
                          Unstake & Claim
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakedDetails;
