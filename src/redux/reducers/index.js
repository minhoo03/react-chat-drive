import user from './user_reducer'
// import chatRoom from './chatRoom_reducer'

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    user,
    // chatRoom
})

export default rootReducer