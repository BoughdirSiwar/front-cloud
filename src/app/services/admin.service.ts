import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Admin} from "../model/admin";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url = "http://localhost:9001/admins/"
  constructor(private httpClient: HttpClient) { }
  public addAdmin (admin: Admin): Observable<Admin>{
    return this.httpClient.post<Admin>(this.url, admin);
  }
  public updateAdmin (admin: Admin): Observable<Admin>{
    return this.httpClient.put<Admin>(this.url, admin);
  }
  public getAdmins (): Observable<Admin[]>{
    return this.httpClient.get<Admin[]>(this.url);
  }
  public deleteAdmin (id: number): Observable<boolean>{
    return this.httpClient.delete<boolean>(this.url + id);
  }
}
