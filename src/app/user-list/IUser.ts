export class IUser{
   public data!:IUser;
}

export interface userdata{

    firstName:string;
    lastName:string;
    hobbies:string;
    gender:string;
    city:string;
    image:string;
    age:number;
    _id:string;
}

export interface City{
    name:string;
    code:string;
}