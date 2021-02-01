const currentPage_initialState = {
  page: "pageHome",
};

const questionSelection_initialState = {
  results: [
    { page: "page0-0", result: null },
    { page: "page0-1", result: null },
    { page: "page1", result: null },
  ],
  // 추후 추가
};

const userData_initialState = {};

// 건물 도착 이벤트 관련 reducer
export const currentPageReducer = (
  state = currentPage_initialState,
  action
) => {
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
      const index = state.results.findIndex((data) => data.page === action.answerLocation);
      let results = [...state.results];
      results[index].result = action.answer;
      return {
        results,
      };
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
