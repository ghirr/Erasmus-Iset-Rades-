import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  baseUrl = "http://localhost:3000/event";

  constructor(private http: HttpClient) { }
  createEventss(event: any) {
    const formData = new FormData();
    formData.append('image', event.image);
    formData.append('name', event.name);
    formData.append('dateDebut', event.dateDebut);
    formData.append('dateFin', event.dateFin);
    formData.append('description', event.description);

    const headers = new HttpHeaders();
    // Remove the following line as it doesn't set the correct content type for multipart form data
    // headers.set('enctype', 'multipart/form-data');

    // Instead, set the headers using the 'Content-Type' key
    headers.append('Content-Type', 'multipart/form-data');

    // Use the headers in the options object
    const options = { headers: headers };

    return this.http.post<{ message: any }>(this.baseUrl, formData, options).subscribe();
  }
  getAlleventss(){
    return this.http.get<{ events: any }>(this.baseUrl);
  }
  getEventById(id:any){
    return this.http.get<{event:any}>(this.baseUrl + '/'+id )
  }
  updateEvent(event:any,id:any){
    console.log("here into update event",event);
    const formData = new FormData();
    formData.append('image', event.image);
    formData.append('name', event.name);
    formData.append('dateDebut', event.dateDebut);
    formData.append('dateFin', event.dateFin);
    formData.append('description', event.description);

   
    return this.http.put<{message:any}>(this.baseUrl+'/'+id,formData)
  }
  deleteEvent(id:any){
    return this.http.delete<{message:any}>(this.baseUrl+'/'+id)
  }
}
