import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://ip-api.com/json/';
  private myIp = 'https://api.ipify.org?format=json';

  constructor(private http: HttpClient) {}

  getIpInfo(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${query}`);
  }

  getMyIp(): Observable<any> {
    return this.http.get<any>(this.myIp);
  }
}

