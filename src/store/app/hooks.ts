import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, AppState } from "../index";
import { setOpenModal } from "./action";

export const useModalChecker = () => {
  const state = useSelector<AppState>(({ appReducer }) => appReducer.openModal);
  return state;
};

export const useTriggerModal = () => {
  const dispatch = useDispatch<AppDispatch>();
  const state = useModalChecker();
  dispatch(
    setOpenModal({
      openModal: !state,
    })
  );
};
