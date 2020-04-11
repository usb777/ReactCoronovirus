import { InternalServerError } from "../errors/InternalServerError"
import { reduxClient } from "./remote-client"
import {UserRedux} from "../../model/UserRedux"

// Get User By id
export async function getUserById(userId:number|undefined):Promise<UserRedux>{    
    try{
        let response = await reduxClient.get(`/users/${userId}`)
        
        if(response.status === 200){
            return response.data
        }else {
            throw new InternalServerError()
        }
    } catch (e){
        throw new InternalServerError()
    }
}


