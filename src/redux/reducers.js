const currentPage_initialState = {
  page: "8",
};

const questionSelection_initialState = {
  results: {
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
  },

  // example
  // {
  //   0: 1,
  //   1: 4,
  //   2: 2,
  //   3: 1,
  //   4: 4,
  //   5: 2,
  //   6: 1,
  //   7: 1,
  //   8: 1,
  //   9: 1,
  // },
};

export const nextPageReducer = (state = currentPage_initialState, action) => {
  switch (action.type) {
    case "changePage":
      return {
        ...state,
        page: `${action.page}`,
      };
    default:
      return state;
  }
};

export const questionSelectionReducer = (
  state = questionSelection_initialState,
  action
) => {
  switch (action.type) {
    case true:
      const page = action.answerLocation;
      state.results[page] = action.answer;
    default:
      return state;
  }
};
