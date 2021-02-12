import React from "react";
import UnifarmLogo from "../components/UnifarmLogo";
import { useWeb3React } from "@web3-react/core";
import { shortenAddress, getConnectorLogo } from "../utils";
import { ProviderLogo } from "../components/Web3Modal";
import { Link } from "react-router-dom";
import {
  AccountDetails,
  Connect,
  MyStakesRewards,
  ButtonGroup
} from "../components/Buttons";
import { useTriggerOpenModal } from "../store/app/hooks";

const AppBody = ({
  children,
  logo
}: {
  children: React.ReactNode;
  logo?: boolean;
}) => {
  const { account, active, connector } = useWeb3React();

  const ActiveProviderLogo = getConnectorLogo(connector);

  const open = useTriggerOpenModal();

  return (
    <section className="form_signup_one home_page_list">
      <div className="container w-100">
        <div className="row">
          <div className="col-md-12 ml-auto">
            <div className="item_group">
              {logo && <UnifarmLogo />}
              <div className="col-12 text-right pb-2 mb-5 wallate-value">
                {account && active ? (
                  <>
                    <AccountDetails onClick={open}>
                      <ProviderLogo src={ActiveProviderLogo} alt="metamask" />
                      {shortenAddress(account)}
                    </AccountDetails>
                    <ButtonGroup>
                      <Link to="/staking-info">My Stakes</Link>
                    </ButtonGroup>
                  </>
                ) : (
                  <Connect onClick={open}>Connect</Connect>
                )}
              </div>

              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppBody;
