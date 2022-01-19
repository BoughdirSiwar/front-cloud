import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Emprunt} from "../model/emprunt";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmpruntService {
  url = "http://localhost:9003/emprunts/"
  constructor(private httpClient: HttpClient) { }
  public addEmprunt (emprunt: Emprunt, idLivre: number, idEtd : number): Observable<Emprunt>{
    console.log(emprunt)
    emprunt.dateRetour.setDate(emprunt.empruntPK.dateEmprunt.getDate()+30);
    emprunt.dateRetourRee.setDate(emprunt.empruntPK.dateEmprunt.getDate()-1);
    return this.httpClient.post<Emprunt>(this.url+idLivre+"&"+idEtd,emprunt);
  }
  public updateEmprunt (emprunt: Emprunt, idLivre: number, idEtd : number): Observable<Emprunt>{

    console.log("tst")
    return this.httpClient.put<Emprunt>(this.url,emprunt);
  }
  public getEmprunts (): Observable<Emprunt[]>{
    return this.httpClient.get<Emprunt[]>(this.url);
  }
  public deleteEmprunt (emprunt:Emprunt): Observable<boolean>{

    return this.httpClient.put<boolean>(this.url+emprunt.empruntPK.idLivre,emprunt);
  }
}
