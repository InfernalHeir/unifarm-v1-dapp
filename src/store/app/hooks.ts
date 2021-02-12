import { useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, AppState } from "../index";
import {
  setOpenModal,
  setCloseModal,
  setApplicationError,
  setApplicationSuccess,
  setLoader
} from "./action";

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

export const useSetApplicationStatus = () => {
  const dispatch = useDispatch<AppDispatch>();
  const setAppError = (appError: boolean, message: string | null) => {
    return dispatch(
      setApplicationError({
        appError,
        message
      })
    );
  };
  const setAppSuccess = (appSuccess: boolean, success: string) => {
    return dispatch(
      setApplicationSuccess({
        appSuccess,
        message: success
      })
    );
  };

  const setApploader = (is: boolean) => {
    return dispatch(
      setLoader({
        loading: is
      })
    );
  };
  return {
    setAppError,
    setAppSuccess,
    setApploader
  };
};

export const useAppsStatus = () => {
  const state = useSelector<AppState>((state) => state.app);
  return state;
};
