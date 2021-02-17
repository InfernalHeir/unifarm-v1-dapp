import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assests/images/brand/logo-white.svg";
import { Connect } from "../Buttons";
import { shortenAddress, getConnectorLogo } from "../../utils";
import { useWeb3React } from "@web3-react/core";
import { ProviderLogo } from "../Web3Modal";
import { useOpenWalletModal } from "../../store/app/hooks";

const StyledAppbar = styled(AppBar)`
  background: linear-gradient(to right, #ec3e70, #0089ff);
  box-shadow: none;
  border-bottom: 1px solid #ffffff5e;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 12px;
  font-weight: 800;
  font-size: 16px;
`;
const LogoWrapper = styled.div`
  padding: 10px;
`;

const UnifarmLogo = styled.img`
  width: 80px;
`;

const List = styled.div`
  display: flex;
  margin: 0 1rem 0 1rem;
  align-items: center;
`;

const ConnectWalletWrapper = styled.div`
  padding: 10px;
  margin-left: auto;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  headerbar: {
    display: "flex",
    flexDirection: "row"
  },
  DialogTitleclass: {
    color: "#EA3F72"
  },
  DialogActionsClass: {
    background: "#EA3F72",
    color: "white",
    borderRadius: "15px"
  },
  headerlist: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  btnStyle: {
    color: "white",
    background: "red",
    height: 27,
    width: 114,
    borderRadius: 15,
    paddingTop: 8
  }
}));

const Dappbar = () => {
  const classes = useStyles();
  const { active, account, connector } = useWeb3React();
  const ActiveProviderLogo = getConnectorLogo(connector);
  const open = useOpenWalletModal();

  return (
    <div className={classes.root}>
      <StyledAppbar position="static">
        <Toolbar className={classes.headerbar}>
          <LogoWrapper>
            <UnifarmLogo src={logo} alt="Unifarm" />
          </LogoWrapper>
          <List>
            <NavLink to="/stake">Stake</NavLink>
            <NavLink to="/stake">My Stakes</NavLink>
            <NavLink to="/stake">Claim History</NavLink>
            <NavLink to="/stake">Refferal Rewards</NavLink>
          </List>
          <ConnectWalletWrapper>
            <Connect color="inherit" variant="outlined" onClick={open}>
              {active && account ? (
                <>
                  <ProviderLogo src={ActiveProviderLogo} alt="wallet" />
                  {shortenAddress(account)}
                </>
              ) : (
                <>Connect Wallet</>
              )}
            </Connect>
          </ConnectWalletWrapper>
        </Toolbar>
      </StyledAppbar>
    </div>
  );
};

export default Dappbar;
