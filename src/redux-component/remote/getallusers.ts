import { InternalServerError } from "../errors/InternalServerError"
import { reduxClient } from "./remote-client"


export const getAllUsers = async () => {
    try {
        let response = await reduxClient.get('/users')
        
        if(response.status === 200){
            return response.data
        }else {
            throw new InternalServerError()
        }
    } catch (e){
        throw new InternalServerError()
    }
}


