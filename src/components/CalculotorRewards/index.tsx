import React, { useState, useEffect } from "react";
import one from "../../assests/images/Tokens/oro.png";
import two from "../../assests/images/Tokens/cntr.png";
import three from "../../assests/images/Tokens/reef.png";
import four from "../../assests/images/Tokens/frontier.png";
import five from "../../assests/images/Tokens/matic.png";
import ProgressBar from "react-customizable-progressbar";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import { CircularProgress, StepLabel } from "@material-ui/core";
import styled from "styled-components";
import useTokenContract, {
  useUnifarmV2Contract
} from "../../hooks/useTokenContract";
import { useOnChange, useSelectedTokens } from "../../store/stake/hooks";
import { useWeb3React } from "@web3-react/core";
import { UnifarmV2Address } from "../../constants";
import { formatEther, parseUnits } from "@ethersproject/units";
import { Redirect } from "react-router-dom";
import { isAddress } from "@ethersproject/address";

const StyledAlert = styled.div`
  display: flex;
  margin-top: 20px;
  border-radius: 8px;
  border-color: red;
  text-align: center;
  width: 100%;
  border: 2px solid red;
  padding: 11px;
  font-weight: 800;
`;

const HeaderReturn = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 22px;
  text-align: center;
`;

const ReturnsWrapper = styled.div`
  max-width: 550px;
  margin-top: 1.5rem !important;
  border-radius: 10px;
  padding: 20px;
  background: white;
  margin: auto;
  border: 1px solid #9f9f9f4a;
`;

const DaysStart = styled.span`
  position: absolute;
  right: 46px;
  top: -20px;
`;

const DaysTitle = styled.span`
  position: absolute;
  right: 40px;
  top: 10px;
  font-size: 20px;
`;

function CalculotorRewards() {
  const selectedToken = useSelectedTokens();
  const [oro, setOro] = useState(200);
  const [matic, setMatic] = useState(100);
  const [cntr, setCntr] = useState(0.5336);
  const [reef, setReef] = useState(0.905);
  const [front, setFront] = useState(200);
  const [day, setDay] = useState(0);
  const [value, setValue] = useState(0);
  const [step, setStep] = useState(0);
  const [stack, setStack] = useState(false);
  const [aprove, setAprove] = useState(false);
  const [btnDisabled, setbtnDisabled] = useState(false);

  const [loading, setLoading] = useState<boolean>(false);

  const [error, setError] = useState<{ err: boolean; message: string | null }>({
    err: false,
    message: null
  });

  const { onApprove, onStake } = useOnChange();

  useEffect(() => {
    const timer = setInterval(() => {
      setDay((day) => day + 1);
      setOro((oro) => oro + 2);
      setMatic((matic) => matic + 5);
      setCntr((cntr) => cntr + 3);
      setReef((reef) => reef + 2);
      setFront((front) => front + 4);
    }, 100);
    if (day === 90) {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [day]);
  function approve() {
    setStep(1);
    setAprove(true);
    setStack(true);
    setbtnDisabled(true);
  }

  const { active, account, library } = useWeb3React();
  const instance = useTokenContract(selectedToken.tokenAddress);

  useEffect(() => {
    if (!instance || !active || !account) return null;
    instance.methods
      .allowance(account, UnifarmV2Address)
      .call()
      .then((result) => {
        const etherAmount = library.utils.fromWei(result.toString());
        console.log(etherAmount);
        if (selectedToken.stakingAmount > etherAmount) {
          //setAprove(true);
          setStack(true);
        }
      })
      .catch((err) => {
        setError({
          err: true,
          message: err.message
        });
      });
  }, [selectedToken]);

  const unifarmInstance = useUnifarmV2Contract();

  useEffect(() => {
    if (!unifarmInstance || !active || !account) return null;
    unifarmInstance.methods
      .whiteList(account)
      .call()
      .then((result) => {
        if (!result) {
          setError({
            err: true,
            message: "The Address you 're using is not Whitelisted."
          });
        } else {
          setError({
            err: false,
            message: null
          });
        }
      })
      .catch((err) => {
        setError({
          err: true,
          message: err.message
        });
      });
  }, [selectedToken]);

  const ApproveCallback = async () => {
    try {
      setLoading(true);
      const parseTokens = library.utils.toWei(
        selectedToken.stakingAmount.toString()
      );
      await instance.methods.approve(UnifarmV2Address, parseTokens).send({
        from: account
      });
      // dispatch applciation success here.
      alert("Approved Sucessfully");
      setLoading(false);
      setStack(true);
    } catch (err) {
      // dispatch an application error.
      alert(err.message);
      setLoading(false);
    }
  };

  const StakeCallback = async () => {
    const stakeAmount = selectedToken.stakingAmount;
    // but first we have to check referal address
    const amount = library.utils.toWei(stakeAmount.toString());

    const refer = "0xF6C172dd45ABd82E1F067801B309A7fFC4977971";
    try {
      const tokenDetails = await unifarmInstance.methods
        .tokenDetails(selectedToken.tokenAddress)
        .call();
      const useMaxStake = tokenDetails[2];

      const etherValuesMAx = library.utils.fromWei(useMaxStake);

      await unifarmInstance.methods.stake(refer, account, amount).send({
        from: account
      });

      return (
        <Redirect
          to={{
            pathname: "/staking-history"
          }}
        />
      );
    } catch (err) {
      return null;
    }
  };

  const RenderDyanmicElement = () => {
    if (error.err) {
      return <StyledAlert>{error.message}</StyledAlert>;
    } else {
      return (
        <>
          {loading ? (
            <button
              style={{ backgroundColor: "green", padding: "2px" }}
              className="btn btn_sm_primary br-10 bg-dark-purple approve-btn c-white btn-not-allowed rounded-4 link-btn btn-hover btn-approved"
              disabled
            >
              <CircularProgress style={{ color: "#fff" }} />
            </button>
          ) : !aprove ? (
            <button
              onClick={() => onApprove("v1")}
              className="btn btn_sm_primary br-10 bg-dark-purple approve-btn c-white btn-not-allowed rounded-4 link-btn btn-hover btn-approved"
              disabled={stack}
            >
              Approve
              <span>
                <i className="tio chevron_right mr-1 align-middle font-s-16">
                  {" "}
                </i>
              </span>
            </button>
          ) : (
            ""
          )}

          {stack ? (
            <button
              //to="/Balance5"
              className="btn btn_sm_primary br-10 bg-dark-purple approve-btn c-white rounded-4 ml-4 link-btn btn-hover btn-approved"
              onClick={() => onStake("v1")}
            >
              Stake
              <span>
                <i className="tio chevron_right mr-1 align-middle font-s-16">
                  {" "}
                </i>
              </span>
            </button>
          ) : null}
          <Stepper activeStep={step} alternativeLabel>
            <Step style={{ width: 10 }}>
              <StepLabel></StepLabel>
            </Step>
            <Step style={{ width: 10 }}>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </>
      );
    }
  };
  return (
    <div>
      <ReturnsWrapper className="row">
        <div className="col-12 mt-1 mb-4 pb-2">
          <HeaderReturn>Return</HeaderReturn>
        </div>
        <div className="calculate_yield_list">
          <div className="progessba" style={{ width: 350 }}>
            <ProgressBar
              radius={40}
              progress={day}
              strokeWidth={5}
              strokeLinecap="square"
              trackStrokeWidth={5}
              steps={90}
              strokeColor="#197bc2"
            >
              <div className="indicator custom-progres-bar">
                <div>
                  <DaysStart>{day}</DaysStart>
                  <br></br>
                  <DaysTitle>Days</DaysTitle>
                </div>
              </div>
            </ProgressBar>
          </div>
          <div className="return-table">
            <div style={{ textAlign: "center" }}>
              <div>
                <div className="return-table-head">
                  {/* <th  scope="col" style={{textAlign:'left',fontSize:20}}><DateRangeIcon style={{marginTop:-4,fontSize:25}}/><span style={{paddingLeft:7,paddingTop:10,display:'inline-block'}}>Day</span></th> */}
                  <div className="value">
                    <img src={one} width="20" />
                    <br />
                    ORO
                  </div>
                  <div className="value">
                    <img src={two} width="20" />
                    <br />
                    MATIC
                  </div>
                  <div className="value">
                    <img src={three} width="20" />
                    <br />
                    CNTR
                  </div>
                  <div className="value">
                    <img src={four} width="20" />
                    <br />
                    REEF
                  </div>
                  <div className="value">
                    <img src={five} width="20" />
                    <br />
                    FRONT
                  </div>
                </div>
              </div>
              <div>
                <div className="return_value">
                  <div className="value">{oro}</div>
                  <div className="value">{matic}</div>
                  <div className="value">{cntr}</div>
                  <div className="value">{reef}</div>
                  <div className="value">{front}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {day === 90 ? (
          <div className="col-12 text-center mt-4 pb-2 mb-2 ">
            <RenderDyanmicElement />
          </div>
        ) : null}
      </ReturnsWrapper>
    </div>
  );
}
export default CalculotorRewards;
