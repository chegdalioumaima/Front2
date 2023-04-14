import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatServiceService {
  url: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getTypeContrats(){ 
    return this.http.get('http://localhost:8080/api/typeContrats')
  }

  getNiveauDexpertises(){ 
    return this.http.get('http://localhost:8080/api/NiveauDexpertises')
  }

 

 /* getData(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/typeContrats')
      .pipe(
        map((response: any[]) => {
          return response.map(item => {
            console.log(item.libelle)
            return { item_id: item.id, item_text: item.libelle };
            
          });
        })
      );
  }

  getData2(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/NiveauDexpertises')
      .pipe(
        map((response: any[]) => {
          return response.map(item => {
            console.log(item.libelle)
            return { item_id: item.id, item_text: item.libelle };
            
          });
        })
      );
  }*/

  getData3(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/CompetencesOperationnelles')
      .pipe(
        map((response: any[]) => {
          return response.map(item => {
            console.log(item.libelle)
            return { item_id: item.id, item_text: item.libelle };
            
          });
        })
      );
  }

  getData4(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/CompetenceTechnologies')
      .pipe(
        map((response: any[]) => {
          return response.map(item => {
            console.log(item.libelle)
            return { item_id: item.id, item_text: item.libelle };
            
          });
        })
      );
  }

  getData5(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/CompetencesComportementaires')
      .pipe(
        map((response: any[]) => {
          return response.map(item => {
            console.log(item.libelle)
            return { item_id: item.id, item_text: item.libelle };
            
          });
        })
      );
  }

  getData6(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/Langues')
      .pipe(
        map((response: any[]) => {
          return response.map(item => {
            console.log(item.libelle)
            return { item_id: item.id, item_text: item.libelle };
            
          });
        })
      );
  }

  getData7(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/InfosSupplementaires')
      .pipe(
        map((response: any[]) => {
          return response.map(item => {
            console.log(item.libelle)
            return { item_id: item.id, item_text: item.libelle };
            
          });
        })
      );
  }
}
