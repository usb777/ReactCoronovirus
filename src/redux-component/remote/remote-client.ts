import axios from 'axios'
import { environment } from './environment'

//set up our base environment for our webflicks connection
export const reduxClient = axios.create({    //Axios
    baseURL:environment.webflicksBaseUrl, //the base network address with no URI's on 
    headers:{ 'Content-Type': 'application/json' }
})