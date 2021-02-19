export function handleNextPage(next_page) {
  return {
    type: "changePage",
    page: next_page,
  };
}

export function handleQuestionSelection(answerLocation, answer) {
  return {
    type: true,
    answerLocation: answerLocation,
    answer: answer,
  };
}

