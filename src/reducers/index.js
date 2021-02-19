import { dare } from "./dare";
import { never } from "./never";
import { players } from "./players";
import { questions } from "./questions";
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
  never: {
    all: [],
    rest: [],
    done: [],
  },
  questions: {
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
    never: never(state, action),
    questions: questions(state, action),
  };
};

export default reducer;
