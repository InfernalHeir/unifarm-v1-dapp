import { blue } from "@material-ui/core/colors"
import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { useOnChange } from "../../store/stake/hooks"

const StyledPoolIcon = styled.img`
  width: 30px;
  margin-left: 5px;
`

const StyledPoolName = styled.h5`
  font-weight: 800;
`

const PoolComponent = ({ showRewards }: { showRewards: any }) => {
  const { onStake }: any = useOnChange()
  return (
    <div>
      {showRewards
        ? showRewards.map((item, index) => {
            return (
              <div className="row align-items-center" key={index}>
                <div className="col-lg-3">
                  <div
                    className="my-stack-list total-stack-point box-shadow blue-border-hover"
                    style={{ backgroundColor: "white" }}
                  >
                    <StyledPoolIcon src={item.poolIcon} alt={item.poolName} />
                    <br />
                    <StyledPoolName className="btn scale btn_lg_primary1 br-10 effect-letter rounded-4">
                      {item.poolName}
                    </StyledPoolName>
                  </div>

                  <div
                    className="my-stack-list total-stack-point box-shadow blue-border-hover"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="btn scale btn_lg_primary1  br-10 effect-letter rounded-4">
                      {item.rewardsSequenceSrc.map((img) => {
                        return <img src={img} width="30" alt={index} />
                      })}
                    </div>
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
                                        <b>APY</b>
                                        <br />
                                        <span>{item.Apy}</span>
                                      </div>
                                    </div>
                                    <div className="col-md-2">
                                      <div>
                                        <b>Lock In</b>
                                        <br />
                                        <span>
                                          {item.lockIn ? item.lockIn : "0"} Days
                                        </span>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div>
                                        <b>Max Staking Limit</b>
                                        <br />
                                        <span>
                                          {item.maxStakingLimit} Tokens
                                        </span>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div>
                                        <b>Network</b>
                                        <br />
                                        <span>{item.network}</span>
                                      </div>
                                    </div>
                                    {/* <div className="col-md-4"><div><b>Max Staking Limit</b><br/><span>1500</span></div></div><div className="col-md-4"><div><img src={one} width="20"/><br/><span>20 ORO</span></div></div>
                        <div className="col-md-4"><div><b>Network</b><br/><span>View On Etherurn</span></div></div>     */}
                                  </div>
                                </div>

                                <div className="col-lg-3 mt-3">
                                  <div>
                                    <div>
                                      <img width="20" />
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
                                      {/*Here is start */}
                                      <div>
                                        <img width="20" />
                                        <p>
                                          <b>FRONT</b>
                                        </p>
                                        <hr className="line" />
                                      </div>
                                      {/*Here is start */}
                                      <div className="ml-3 ">
                                        <img width="20" className="ml-2" />
                                        <p>
                                          <b>CNTR</b>
                                        </p>
                                        <hr className="line" />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/*You can create new col*/}
                                <div className="col-md-4 select-unstaike-button">
                                  <Link
                                    style={{
                                      background: "transparent",
                                      color: "blue"
                                    }}
                                    to={item.moreDetailsRoute}
                                  >
                                    More info
                                  </Link>

                                  <button
                                    onClick={() => onStake(item.typeFor)}
                                    className="btn scale btn_lg_primary unstake-claim bg-dark-purple br-10 c-white effect-letter rounded-4"
                                    style={{
                                      fontSize: 12
                                    }}
                                  >
                                    Stake Now
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div>
                              {/* <h6 className="pt-3">Days Staked: <b>10</b></h6> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        : ""}
    </div>
  )
}
export default PoolComponent
