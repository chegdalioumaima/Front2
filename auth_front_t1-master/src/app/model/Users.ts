import { Role } from "./Role"

export class Users{
    id?:number
    firstName?:string
    lastName?:string
    email:string
    fonction?:string
    password?:string
    confirmPassword?:string
    role_id?:number
    resetPaaswordToken?:string
    statut?:boolean
    
    constructor(id:number,firstName:string,lastName:string,email:string,fonction:string,password:string,confirmPassword:string,role_id:number,resetPaaswordToken:string,statut:boolean){
        this.id=id
        this.firstName=firstName
        this.lastName=lastName
        this.email=email
        this.fonction=fonction
        this.role_id=role_id
        this.confirmPassword=confirmPassword
        this.resetPaaswordToken=resetPaaswordToken
        this.statut=statut
    }
    
}