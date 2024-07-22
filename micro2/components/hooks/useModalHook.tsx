import { useReducer } from "react";
import { Product } from "@/components/types";

interface ModalState {
  isOpen: boolean;
  toDelete: Product | null;
}

interface ToggleModalAction {
  type: "TOGGLE_MODAL";
}

interface SetProductToDeleteAction {
  type: "SET_PRODUCT_TO_DELETE";
  product: Product;
}

type ModalAction = ToggleModalAction | SetProductToDeleteAction;

const initialState: ModalState = {
  isOpen: false,
  toDelete: null,
};

const reducer = (state: ModalState, action: ModalAction): ModalState => {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return { ...state, isOpen: !state.isOpen };
    case "SET_PRODUCT_TO_DELETE":
      return { ...state, toDelete: action.product };
    default:
      return state;
  }
};

export default function useModal() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeOpenCloseState = () => {
    dispatch({ type: "TOGGLE_MODAL" });
  };

  const setProductToDelete = (product: Product) => {
    dispatch({ type: "SET_PRODUCT_TO_DELETE", product: product });
  };

  return { isOpen: state.isOpen, toDelete: state.toDelete, changeOpenCloseState, setProductToDelete };
}
