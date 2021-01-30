export function handleCurrentPage(page) {
  return {
    type: "changePage",
    page: page,
  };
}

export function handleQuestionSelection(answerLocation, answer) {
  return {
    answerLocation: answerLocation,
    answer: answer,
  };
}
