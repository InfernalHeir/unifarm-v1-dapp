import React, { useState } from "react";
import one from "../../assests/images/Tokens/oro.png";
import two from "../../assests/images/Tokens/Nord.png";
import three from "../../assests/images/Tokens/ROUTE.png";
import four from "../../assests/images/Tokens/TVK.png";
import Tooltip from "@material-ui/core/Tooltip";
import Avatar from "@material-ui/core/Avatar";

const Refer = () => {
  return (
    <div
      className="row"
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "flex-end",
        paddingRight: "1.5rem"
      }}
    >
      <div>
        <img className="gift-box-image mb-0" />
        <p>
          <b>
            Refer Freinds
            <br />
            and earn Rewards
          </b>
        </p>
      </div>

      <div className="row">
        <div className="stake-token">
          {/* <h6 className="btn scale btn_lg_primary  br-10 effect-letter rounded-4">My Stack: <b>100</b> Matic</h6> */}
        </div>
        <div className="custom-scroll" id="style-7">
          <div className="mb-3">
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className="my-stack-list total-stack-point box-shadow blue-border-hover">
                  <h3 className="mb-0 mt-1">Wallet</h3>
                  <div
                    className="d-flex mt-1"
                    style={{ justifyContent: "space-evenly" }}
                  >
                    <Avatar style={{ width: 30, height: 32 }} />
                    <h6 className=" btn scale btn_lg_primary1 br-10 effect-letter rounded-4">
                      0X49...8575
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 mb-4 mt-0">
                <div className="card p-3 reward-card-list total-stack-list2 refer-card box-shadow br-10 unstake_margin_top unstake_margin_top">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="row align-items-center user-reward-list">
                        <div className="col-md-12 text-left">
                          {/* <h6>Stake Tokens: <b>100</b> Matic</h6> */}
                          <div className="">
                            <div className="row  my-coin-list claimed-rewards">
                              <div className="col-lg-12">
                                <div className="row">
                                  <div className="col-md-3">
                                    <div>
                                      <img src={one} width="30" />
                                      <br />
                                      <span>0.09</span>
                                    </div>
                                  </div>
                                  <div className="col-md-3">
                                    <div>
                                      <img src={two} width="30" />
                                      <br />
                                      <span>0.08</span>
                                    </div>
                                  </div>
                                  <div className="col-md-3">
                                    <div>
                                      <img src={three} width="30" />
                                      <br />
                                      <span>0.07</span>
                                    </div>
                                  </div>
                                  <div className="col-md-3">
                                    <div>
                                      <img src={four} width="30" />
                                      <br />
                                      <span>0.06</span>
                                    </div>
                                  </div>
                                  {/* <div className="col-md-4"><div><b>Max Staking Limit</b><br/><span>1500</span></div></div><div className="col-md-4"><div><img src={one} width="20"/><br/><span>20 ORO</span></div></div>
                                                          <div className="col-md-4"><div><b>Network</b><br/><span>View On Etherurn</span></div></div>     */}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            {/* <h6 className="pt-3">Days Staked: <b>10</b></h6> */}
                          </div>
                        </div>
                        <div className="col-md-12  text-lg-right select-unstaike-button">
                          <a
                            href="#"
                            className="btn scale btn_lg_primary unstake-claim bg-dark-purple br-10 c-white effect-letter rounded-4"
                            style={{ fontSize: 12, marginTop: -16 }}
                          >
                            Unstake & Claim
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className="my-stack-list  total-stack-point box-shadow blue-border-hover">
                  <h3 className="mb-0 mt-1">Wallet</h3>
                  <div
                    className="d-flex mt-1"
                    style={{ justifyContent: "space-evenly" }}
                  >
                    <Avatar style={{ width: 30, height: 32 }} />{" "}
                    <h6 className=" btn scale btn_lg_primary1 br-10 effect-letter rounded-4">
                      0X49...8575
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 mb-4 mt-0">
                <div className="card p-3 reward-card-list total-stack-list2 refer-card box-shadow br-10 unstake_margin_top unstake_margin_top">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="row align-items-center user-reward-list">
                        <div className="col-md-12 text-left">
                          {/* <h6>Stake Tokens: <b>100</b> Matic</h6> */}
                          <div className="">
                            <div className="row  my-coin-list claimed-rewards">
                              <div className="col-lg-8">
                                <div className="row">
                                  <div className="col-md-3">
                                    <div>
                                      <img src={one} width="30" />
                                      <br />
                                      <span>0.09</span>
                                    </div>
                                  </div>
                                  <div className="col-md-3">
                                    <div>
                                      <img src={two} width="30" />
                                      <br />
                                      <span>0.08</span>
                                    </div>
                                  </div>
                                  <div className="col-md-3">
                                    <div>
                                      <img src={three} width="30" />
                                      <br />
                                      <span>0.07</span>
                                    </div>
                                  </div>
                                  <div className="col-md-3">
                                    <div>
                                      <img src={four} width="30" />
                                      <br />
                                      <span>0.06</span>
                                    </div>
                                  </div>
                                  {/* <div className="col-md-4"><div><b>Max Staking Limit</b><br/><span>1500</span></div></div><div className="col-md-4"><div><img src={one} width="20"/><br/><span>20 ORO</span></div></div>
                                                          <div className="col-md-4"><div><b>Network</b><br/><span>View On Etherurn</span></div></div>     */}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            {/* <h6 className="pt-3">Days Staked: <b>10</b></h6> */}
                          </div>
                        </div>
                        <div
                          className="col-md-12  text-lg-right select-unstaike-button"
                          style={{ marginTop: -69 }}
                        >
                          <h2 className="Claimed mb-0">CLIAMED</h2>
                          <p className="text-muted " style={{ fontSize: 14 }}>
                            {" "}
                            2021/1/16
                          </p>
                          <Tooltip
                            title={<h5>0123456789abcdef789abcdef</h5>}
                            placement="bottom-end"
                            arrow
                          >
                            <p
                              className="text-muted mt-2"
                              style={{ fontSize: 14 }}
                            >
                              TXXXXXXXXXXXXX
                            </p>
                          </Tooltip>
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
    </div>
  );
};

export default Refer;
