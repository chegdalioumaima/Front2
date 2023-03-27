export class Users{
    id?:number
    firstName?:string
    lastName?:string
    email:string
    phone?:string
    password:string
    confirmPassword?:string
    constructor(id:number,firstName:string,lastName:string,email:string,phone:string,password:string,confirmPassword:string){
        this.id=id
        this.firstName=firstName
        this.lastName=lastName
        this.email=email
        this.phone=phone
        this.password=password
        this.confirmPassword=confirmPassword
    }
}