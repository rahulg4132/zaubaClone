import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  getDB():Observable<any>{
    return this.http.get(baseURL+"/db");
  }

  savetoDB(x):Observable<any>{
    return this.http.post(baseURL+"/db",{"name": x});
  }

}
