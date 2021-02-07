export function handleNextPage(page) {
  return {
    type: "changePage",
    page: page,
  };
}

export function handleQuestionSelection(answerLocation, answer) {
  return {
    type: true,
    answerLocation: answerLocation,
    answer: answer,
  };
}

