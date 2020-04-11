import { UserRedux } from "../../model/UserRedux"
import { IGetUserByIdState } from "."

import { AnyAction } from "redux"
import { FindByUserIdTypes } from "../action-mapper/UserById-action-mapper"

export const initialState:IGetUserByIdState = {
    userById: new UserRedux(0,'','',''),
    errorMessage:''
}

//we make a reduce for updating this piece of state
export const findByUserIdReducer = (state = initialState, action:AnyAction) => {
    // whatever this reducer returns, becomes the state for this piece of state
    switch (action.type) {
        // each case for a different kind of action
        case FindByUserIdTypes.SUCCESSFUL:{
            // if you do not return a new object
            //react will not trigger a render
            return {
                ...state,
                userById: action.payload.user,
                errorMessage: 'User found'
            }
       }
        case FindByUserIdTypes.USER_NOT_FOUND:{
            return {
                ...state,
                errorMessage:'User not found'
            }
        }
        case FindByUserIdTypes.INTERNAL_SERVER:{
            return {
                ...state,
                errorMessage:'Please Provide an existing User Id'
            }
        }
        default:
            return state;
    }
}
