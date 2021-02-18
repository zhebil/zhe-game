import { dare } from "./dare";
import { players } from "./players";
import { truth } from "./truth";

const initialState = {
  players: [],
  truth: {
    all: [],
    rest: [],
    done: [],
  },
  dare: {
    all: [],
    rest: [],
    done: [],
  },
};

const reducer = (state = initialState, action) => {
  return {
    players: players(state, action),
    truth: truth(state, action),
    dare: dare(state, action),
  };
};

export default reducer;
