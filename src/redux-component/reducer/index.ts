import { combineReducers } from "redux";
import { UserRedux } from "../../model/UserRedux";
import { usersReducer } from "./users-reducer";
import { findByUserIdReducer } from "./userbyid-reducer"



export interface IUsersState{
    allUsers:UserRedux[]
    errorMessage:string
}

export interface IGetUserByIdState
{
    userById: UserRedux,
    errorMessage: string
}


//define all of the pieces of state
export interface IState{   
    allUsers:IUsersState,
    userById:IGetUserByIdState  
}

//turn all individual pieces of state into a single state
export const state = combineReducers<IState>({
   
    allUsers: usersReducer,
    userById: findByUserIdReducer
})