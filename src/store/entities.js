import { combineReducers } from "redux"
import { reducer as BufferReducer, stateName as buffer } from "./States/Buffer"
import { stateName as excite_user, reducer as ExciteUserReducer } from "./States/ExciteUsers"
import { stateName as review, reducer as ReviewReducer } from "./States/Review"
import { stateName as history, reducer as HistoryReducer } from "./States/History"

export default combineReducers({
  [buffer]: BufferReducer,
  [excite_user]: ExciteUserReducer,
  [review]: ReviewReducer,
  [history]: HistoryReducer
});