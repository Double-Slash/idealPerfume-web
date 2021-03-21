const currentPage_initialState = {
  page: "pageHome",
};

const questionSelection_initialState = {
  results:
    // {
    //   page0: null,
    //   page1: null,
    //   page2: null,
    //   page3: null,
    //   page4: null,
    //   page5: null,
    //   page6: null,
    //   page7: null,
    //   page8: null,
    //   page9: null,
    // },

    // example
    {
      page0: 1,
      page1: 2,
      page2: 2,
      page3: 1,
      page4: 1,
      page5: 2,
      page6: 1,
      page7: 1,
      page8: 1,
      page9: 1,
    },
};

//const userData_initialState = {};

// 건물 도착 이벤트 관련 reducer
export const nextPageReducer = (state = currentPage_initialState, action) => {
  switch (action.type) {
    case "changePage":
      return {
        ...state,
        page: action.page,
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

// // 유저 정보 관련 reducer
// export const userinfoReducer = (state = userData_initialState, action) => {
//   switch (action.type) {
//     case "ID":
//       return { ...state, id: true };
//     default:
//       return state;
//   }
// };
