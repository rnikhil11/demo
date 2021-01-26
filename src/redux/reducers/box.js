import { SET_VALUE } from "../actionTypes";
import pics from "../../pics/index";

const initialState = {
  value: [pics[1], pics[2], pics[3], pics[4]],
};

const box = (state = initialState, action) => {
  switch (action.type) {
    case SET_VALUE: {
      return {
        ...state,
        value: [...state.value?.slice(1), pics[action.value]],
      };
    }
    default: {
      return state;
    }
  }
};

export default box;
