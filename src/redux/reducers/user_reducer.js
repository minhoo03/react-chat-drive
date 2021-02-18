import {
    SET_USER
} from '../actions/types'

const initalUserState = {
    currrentUser: null,
    isLoading: true
}

export default function(state = initalUserState, action) {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                currrentUser: action.payload,
                isLoading: false
            }
        
        default:
            return state
    }
}