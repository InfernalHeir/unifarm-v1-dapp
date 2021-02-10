import React, { useState, useEffect } from "react";
import one from "../../assests/images/Tokens/oro.png";
import two from "../../assests/images/Tokens/cntr.png";
import three from "../../assests/images/Tokens/reef.png";
import four from "../../assests/images/Tokens/frontier.png";
import five from "../../assests/images/Tokens/matic.png";
import ProgressBar from "react-customizable-progressbar";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import { StepLabel } from "@material-ui/core";
import styled from "styled-components";

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

  return (
    <div>
      <ReturnsWrapper className="row">
        <div className="col-12 mt-1 mb-4 pb-2">
          <h2 style={{ textAlign: "center" }}>Return</h2>
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
            {btnDisabled ? (
              <button
                style={{ backgroundColor: "green" }}
                className="btn btn_sm_primary br-10 bg-dark-purple approve-btn c-white btn-not-allowed rounded-4 link-btn btn-hover btn-approved"
                disabled
              >
                Approved
                <span>
                  <i className="tio chevron_right mr-1 align-middle font-s-16">
                    {" "}
                  </i>
                </span>
              </button>
            ) : (
              <button
                onClick={approve}
                className="btn btn_sm_primary br-10 bg-dark-purple approve-btn c-white btn-not-allowed rounded-4 link-btn btn-hover btn-approved"
              >
                Approve
                <span>
                  <i className="tio chevron_right mr-1 align-middle font-s-16">
                    {" "}
                  </i>
                </span>
              </button>
            )}

            {stack ? (
              <button
                //to="/Balance5"
                className="btn btn_sm_primary br-10 bg-dark-purple approve-btn c-white rounded-4 ml-4 link-btn btn-hover btn-approved"
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
          </div>
        ) : null}
      </ReturnsWrapper>
    </div>
  );
}
export default CalculotorRewards;
