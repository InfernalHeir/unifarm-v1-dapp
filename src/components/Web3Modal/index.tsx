import React, { Fragment } from "react";
import Modal from "../Modal";
import { WALLETS } from "../../constants";
import { injected } from "../../connectors";
import { DialogTitle } from "@material-ui/core";

interface IWeb3Modal {
  isOpen: boolean;
  close: () => void;
}

declare const window: any;

const Web3Modal = ({ isOpen, close }: IWeb3Modal) => {
  /* const WALLET_SCREENS = {
    PENDING: "pending",
    ERROR: "error",
    ACCOUNT: "account",
 }; */
  const getWallets = () => {
    // iterate the WALLET loop here
    Object.keys(WALLETS).map((key) => {
      const wallet = WALLETS[key];
      // install metamask if not
      if (wallet.connector === injected) {
        // check if user have metamask or not.
        if (window.ethereum === undefined) {
          // set the description
          wallet.description = "Install Metamask.";
          console.log("metamask not available");
        }
      }
      return (
        <>
          <p key={key}>{wallet.name}</p>
        </>
      );
    });
  };
  const getConnectorScreen = () => {
    // this is default case.
    return (
      <>
        <DialogTitle>Connect Wallet</DialogTitle>
        {getWallets()}
      </>
    );
  };
  return (
    <Fragment>
      <Modal isOpen={isOpen} close={close}>
        {getConnectorScreen()}
      </Modal>
    </Fragment>
  );
};

export default Web3Modal;
