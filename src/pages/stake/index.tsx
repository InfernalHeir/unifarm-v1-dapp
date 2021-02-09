import React from "react";
import AppBody from "../AppBody";
import UnifarmLogo from "../../components/UnifarmLogo";
import { Connect, ShowMePools, AccountDetails } from "../../components/Buttons";
import NumberInput from "../../components/NumberInput";
import { useTriggerOpenModal } from "../../store/app/hooks";
import { useWeb3React } from "@web3-react/core";
import { shortenAddress, getConnectorLogo } from "../../utils";
import { ProviderLogo } from "../../components/Web3Modal";

const Stake = () => {
  const open = useTriggerOpenModal();

  const { account, active, connector } = useWeb3React();

  const ActiveProviderLogo = getConnectorLogo(connector);

  return (
    <AppBody>
      <div className="item_group">
        <UnifarmLogo />
        <div className="col-12 text-right pb-2 mb-5 wallate-value">
          {account && active ? (
            <AccountDetails onClick={open}>
              <ProviderLogo src={ActiveProviderLogo} alt="metamask" />
              {shortenAddress(account)}
            </AccountDetails>
          ) : (
            <Connect onClick={open}>Connect</Connect>
          )}
        </div>
        <NumberInput />
        <ShowMePools isDisable={!active}>Show Me Pools</ShowMePools>
      </div>
    </AppBody>
  );
};

export default Stake;
