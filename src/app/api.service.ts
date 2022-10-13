import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  airlineData = ()=>{
    return this.http.get("https://api.instantwebtools.net/v1/passenger?page=0&size=30")
  }

  airlineDatas = ()=>{
    return this.http.get("https://api.instantwebtools.net/v1/airlines")
  }
}
