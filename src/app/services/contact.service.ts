import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  baseUrl = "http://localhost:3000/contact";
  constructor(private http: HttpClient) { }

  envoiMessage(contact:any){
    console.log(contact)
    return this.http.post<{ message: any }>(this.baseUrl, contact)
    
  }
}
