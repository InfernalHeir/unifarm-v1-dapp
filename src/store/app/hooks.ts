import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, AppState } from "../index";
import { ModalTypes } from "./reducer";

import { setOpenModal, setCloseModal, setLoader } from "./action";

// this hooks will call internally.
export const useModalStatus = (whichOne: ModalTypes): boolean => {
  const openModal: ModalTypes = useSelector((state: AppState) => {
    return state.app.openModal;
  });
  return openModal === whichOne;
};

// this hook can ask which modal type you want to open
export const useSetOpenModal = (whichOne?: ModalTypes) => {
  const dispatch = useDispatch<AppDispatch>();
  return useCallback(() => {
    dispatch(
      setOpenModal({
        openModal: whichOne
      })
    );
  }, [dispatch]);
};

// use open the PENDING_TX Modal.
export const useOpenPendingTxModal = () => {
  return useSetOpenModal(ModalTypes.PENDING_TX);
};

// open the wallet
export const useOpenWalletModal = () => {
  return useSetOpenModal(ModalTypes.WALLET);
};

// use to close Modal to close specific wallet
export const useCloseModal = () => {
  const dispatch = useDispatch<AppDispatch>();
  return useCallback(() => {
    dispatch(
      setCloseModal({
        openModal: null
      })
    );
  }, [dispatch]);
};

// use to set global loader on screen.
export const useSetGlobalLoader = () => {
  const dispatch = useDispatch();
  return useCallback((what: boolean) => {
    dispatch(
      setLoader({
        globalLoader: what
      })
    );
  }, []);
};

// use to Check Global Loader.
export const useGlobalLoader = () => {
  return useSelector((state: AppState) => state.app.globalLoader);
};
