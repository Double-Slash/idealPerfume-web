const CHANGE_PAGE = "CHANGE_PAGE";
const SAVE_PAGE = "SAVE_PAGE";

export function handleNextPage(next_page) {
  return {
    type: CHANGE_PAGE,
    page: next_page,
  };
}

export function handleQuestionSelection(answerLocation, answer) {
  return {
    type: SAVE_PAGE,
    answerLocation: answerLocation,
    answer: answer,
  };
}
