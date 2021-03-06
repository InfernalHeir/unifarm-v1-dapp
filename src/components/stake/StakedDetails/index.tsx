import React, { useEffect, useState } from "react";
import ReefIcon from "../../../assests/images/tokens/reef.png";
import CNTR from "../../../assests/images/tokens/cntr.png";
import Matic from "../../../assests/images/tokens/matic.png";
import OROIcon from "../../../assests/images/tokens/oro.png";
import FrontIcon from "../../../assests/images/tokens/frontier.png";
import { useWeb3React } from "@web3-react/core";
import { useUnifarmV2Contract } from "../../../hooks/useTokenContract";
// this is reusable componnet
<<<<<<< HEAD
import firebase from '../../../firebaseConfig'
import { useStakingDataOnLoadOrPropsReceive } from '../../../store/info/hooks'
import NotConnected from '../../NotConnected'
=======
import firebase from "../../../firebaseConfig";
import { useStakingDataOnLoadOrPropsReceive } from "../../../store/info/hooks";
import NotConnected from "../../NotConnected";
>>>>>>> b372e57e5d43d74ccdb35fb65dfb404c8d8842dc

const StakedDetails = () => {
  const [rewardPunish, setRewardPunish] = useState<boolean>(false);

  const [stakingDetails, setStakingDetails] = useState<any[] | null>();

<<<<<<< HEAD
  const { active, library, account } = useWeb3React()
=======
  const { active, library, account } = useWeb3React();
>>>>>>> b372e57e5d43d74ccdb35fb65dfb404c8d8842dc

  const [config, setConfig] = useState<{
    isLoading: boolean;
    error: string | null;
  }>();

  useStakingDataOnLoadOrPropsReceive();

  const RenderingLoaderWhenPageFetchData = () => {
    if (!active || !account) {
      return <NotConnected />;
    } else {
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
    }
  };

  return <RenderingLoaderWhenPageFetchData />;
};

export default StakedDetails;
