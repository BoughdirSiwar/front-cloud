import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Livre} from "../model/livre";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  url = "http://localhost:9003/livres/"
  constructor(private httpClient: HttpClient) { }
  public addLivre (livre: Livre): Observable<Livre>{
    return this.httpClient.post<Livre>(this.url, livre);
  }
  public updateLivre (livre: Livre): Observable<Livre>{
    return this.httpClient.put<Livre>(this.url, livre);
  }
  public getLivres (): Observable<Livre[]>{
    return this.httpClient.get<Livre[]>(this.url);
  }
  public deleteLivre (id: number): Observable<boolean>{
    return this.httpClient.delete<boolean>(this.url + id);
  }
}
