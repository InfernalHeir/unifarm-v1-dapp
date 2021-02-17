import React, { Fragment } from "react";
import logo from "../../assests/images/brand/logo.svg";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const Slogan = styled.div`
  color: #222;
  font-weight: 800;
  font-size: 14px;
  font-style: italic;
`;

const UnifarmLogoWraper = styled.div`
  display: flex;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  justify-content: center;
`;

const AvatarStyled = styled(Avatar)`
  width: 53%;
  height: 54%;
  background: white;
  color: black;
`;

const UnifarmLogo = () => {
  return (
    <Fragment>
      <UnifarmLogoWraper>
        <AvatarStyled variant="square" src={logo}>
          UnifarmLogo
        </AvatarStyled>
      </UnifarmLogoWraper>
      <Typography style={{ textAlign: "center" }} variant="body1" gutterBottom>
        "Stake one token, and earn Multiple tokens."
      </Typography>
    </Fragment>
  );
};

export default UnifarmLogo;
