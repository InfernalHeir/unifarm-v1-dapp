import React from "react";
import logo from "../../assests/images/logo.svg";
import styled from "styled-components";

const Slogan = styled.div`
color: #222,
font-weight:800;
font-size:14px;
font-style:italic;
`;

const UnifarmLogo = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="title_sign text-center">
          <img src={logo} width="50%" className="mb-2" />
          <Slogan>"Stake one token, and earn Multiple tokens."</Slogan>
        </div>
      </div>
    </div>
  );
};

export default UnifarmLogo;
