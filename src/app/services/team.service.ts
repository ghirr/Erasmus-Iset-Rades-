import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  baseUrl = "http://localhost:3000/team";

  constructor(private http: HttpClient) { }

  createteammate(team: any) {
    const formData = new FormData();
    formData.append('image', team.image);
    formData.append('name', team.name);
    formData.append('profession', team.profession);
    formData.append('description', team.description);
    formData.append('email', team.email);

    const headers = new HttpHeaders();
    // Remove the following line as it doesn't set the correct content type for multipart form data
    // headers.set('enctype', 'multipart/form-data');

    // Instead, set the headers using the 'Content-Type' key
    headers.append('Content-Type', 'multipart/form-data');

    // Use the headers in the options object
    const options = { headers: headers };

    return this.http.post<{ message: any }>(this.baseUrl, formData, options).subscribe();
  }
  getTeam(){
    return this.http.get<{ team: any }>(this.baseUrl);
    
  }
  getTeamById(id:any){
    return this.http.get<{team:any}>(this.baseUrl + '/'+id )
  }
  updateTeam(team:any,id:any){
    console.log("here into update event",event);
    const formData = new FormData();
    formData.append('image', team.image);
    formData.append('name', team.name);
    formData.append('profession', team.profession);
    formData.append('description', team.description);
    formData.append('email', team.email);

   
    return this.http.put<{message:any}>(this.baseUrl+'/'+id,formData)
  }
  deleteTeam(id:any){
    return this.http.delete<{message:any}>(this.baseUrl+'/'+id)
  }
}
