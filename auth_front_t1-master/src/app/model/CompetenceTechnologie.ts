export class CompetenceTechnologie{
    id:number
    libelle:string
    code:string
    actif:string
    categoriecompetence_id:number
    constructor(id:number,libelle:string,code:string,actif:string,categoriecompetence_id:number){
        this.id=id
        this.libelle=libelle
        this.code=code
        this.actif=actif
        this.categoriecompetence_id=categoriecompetence_id
    }
}