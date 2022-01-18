import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Admin} from "../model/admin";
import {Observable} from "rxjs";
import {Etudiant} from "../model/etudiant";

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  url = "http://localhost:9002/etudiants/"
  constructor(private httpClient: HttpClient) { }
  public addEtudiant (etudiant: Etudiant): Observable<Etudiant>{
    return this.httpClient.post<Etudiant>(this.url, etudiant);
  }
  public updateEtudiant (etudiant: Etudiant): Observable<Etudiant>{
    return this.httpClient.put<Etudiant>(this.url, etudiant);
  }
  public getEtudiants (): Observable<Etudiant[]>{
    return this.httpClient.get<Etudiant[]>(this.url);
  }
  public deleteEtudiant (id: number): Observable<boolean>{
    return this.httpClient.delete<boolean>(this.url + id);
  }
}
