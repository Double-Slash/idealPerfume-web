const currentPage_initialState = {
  page: "pageHome",
};

const questionSelection_initialState = {
  answer0_0: null,
  answer0_1: null,
  answer1: null
  // 추후 수정
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
        ...state,page: action.page,
      };
    default:
      return state;
  }
};

export const questionSelectionReducer = (
  state = questionSelection_initialState,
  action
) => {
  switch (action.answerLocation) {
    // const answerLocation = action.answerLocation;
    // const answer = action.answer;
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
