export class Role{
    id:number
    nom_role:string
    description:string
    etat:boolean
    constructor(id:number,nom_role:string,description:string,etat:boolean){
        this.id=id
        this.nom_role=nom_role
        this.description=description
        this.etat=etat
    }
}
