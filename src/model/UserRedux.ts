/**
 * 
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
 */


// a model is just an object for holding data, generally it will reflect data from our database
export class UserRedux {
    id:number// a unique number for identification
    name:string
    username:string
    //password:string  we should never send a password to a user
    email:string   
   
    constructor( id:number, name:string,  username:string,  email:string   ){
            this.id = id
            this.name = name
            this.email = email
            this.username = username
          
          
        }
}