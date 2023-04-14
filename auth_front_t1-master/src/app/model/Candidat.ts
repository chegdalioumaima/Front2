export class Candidat{
    id:number
    civilite:string
    etatmatrimonial:string
    nom:string
    prenom:string
    mail:string
    telephone:string
    fonctionactuelle:string
    anneesdexperience:number
    salairesactuel:number
    salairesouhaite:number
    daterecrutement:Date
    titrediplome:string
    niveaudiplome:string
    competencescomportementaires_id:number
    competenceoperationnelle_id:number
    competencetechnologie_id:number
    langue_id:number
    niveaudexpertise_id:number
    typecontrat_id:number
    infossupplementaires_id:number
    
    
    
    constructor(id:number, civilite:string,etatmatrimonial:string,nom:string,prenom:string,mail:string,telephone:string,fonctionactuelle:string,
        anneesdexperience:number,salairesactuel:number,salairesouhaite:number,daterecrutement:Date, titrediplome:string,
        niveaudiplome:string,competencescomportementaires_id:number,competenceoperationnelle_id:number,competencetechnologie_id:number,
        langue_id:number, niveaudexpertise_id:number,typecontrat_id:number,infossupplementaires_id:number){
        this.id=id
        this.civilite=civilite
        this.etatmatrimonial=etatmatrimonial
        this.nom=nom
        this.prenom=prenom
        this.mail=mail
        this.telephone=telephone
        this.fonctionactuelle=fonctionactuelle
        this.anneesdexperience=anneesdexperience
        this.salairesactuel=salairesactuel
        this.salairesouhaite=salairesouhaite
        this.daterecrutement=daterecrutement
        this.titrediplome=titrediplome
        this.niveaudiplome=niveaudiplome
        this.competencescomportementaires_id=competencescomportementaires_id
        this.competenceoperationnelle_id=competenceoperationnelle_id
        this.competencetechnologie_id=competencetechnologie_id
        this.langue_id=langue_id
        this.niveaudexpertise_id=niveaudexpertise_id
        this.typecontrat_id=typecontrat_id
        this.infossupplementaires_id=infossupplementaires_id
	
    }
}