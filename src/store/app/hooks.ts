import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, AppState } from "../index";
import { setOpenModal, setCloseModal } from "./action";

export const useModalChecker = (): boolean => {
  const state: boolean = useSelector((state: AppState) => {
    return state.app.openModal;
  });
  return state;
};

export const useTriggerOpenModal = () => {
  const dispatch = useDispatch<AppDispatch>();

  return useCallback(() => {
    dispatch(
      setOpenModal({
        openModal: true
      })
    );
  }, [dispatch]);
};

export const useCloseModal = () => {
  const dispatch = useDispatch<AppDispatch>();
  return useCallback(() => {
    dispatch(
      setCloseModal({
        openModal: false
      })
    );
  }, [dispatch]);
};
