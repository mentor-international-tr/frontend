import { useReducer } from "react";
interface Action {
  type: string;
  [key: string]: any;
}

const initialState = {
  searchText: "",
  chatText: "",
};
const msgReducer = (state: object, action: Action) => {
  switch (action.type) {
    case "SET_TEXT": {
      return {
        ...state,
        [action.name]: action.text,
      };
    }
    default: {
      throw Error(
        `msgReducer got an unknown action. Error: ${JSON.stringify(
          action,
          undefined,
        )}`,
      );
    }
  }
};

export default useReducer.bind(
  //@ts-ignore
  this,
  msgReducer,
  initialState,
);
