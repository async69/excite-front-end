export const resolveHistories = (exciteID, histories = []) => {
  return histories.filter(history => String(exciteID) === String(history.exciteID))
}

export const resolveReviews = (exciteID, reviews = []) => {
  return reviews.filter(review => String(exciteID) === String(review.exciteID))
}