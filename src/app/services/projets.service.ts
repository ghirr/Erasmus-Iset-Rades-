import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjetsService {
  baseUrl = "http://localhost:3000/project";

  constructor(private http: HttpClient) { }

  createProjects(project: any) {
    const formData = new FormData();
    formData.append('image', project.image);
    formData.append('projectName', project.projectName);
    formData.append('catagorie', project.catagorie);
    formData.append('description', project.description);
    formData.append('dateDebutProject', project.dateDebutProject);
    formData.append('dateFinProject', project.dateFinProject);

    const headers = new HttpHeaders();
    // Remove the following line as it doesn't set the correct content type for multipart form data
    // headers.set('enctype', 'multipart/form-data');

    // Instead, set the headers using the 'Content-Type' key
    headers.append('Content-Type', 'multipart/form-data');

    // Use the headers in the options object
    const options = { headers: headers };

    return this.http.post<{ message: any }>(this.baseUrl, formData, options).subscribe();
  }
  getAllprojects(){
    return this.http.get<{ projects: any }>(this.baseUrl);
    
  }
  getKa1projects(){
    return this.http.get<{ projects: any }>(this.baseUrl+'/ka1');
  }
  getcbheprojects(){
    return this.http.get<{ projects: any }>(this.baseUrl+'/cbhe');
  }
  getProjectById(id:any){
    return this.http.get<{project:any}>(this.baseUrl + '/'+id )
  }
  updateProject(project:any,id:any){
    console.log("here into add project",project);
    const formData = new FormData();
    formData.append('image', project.image);
    formData.append('projectName', project.projectName);
    formData.append('catagorie', project.catagorie);
    formData.append('description', project.description);
    formData.append('dateDebutProject', project.dateDebutProject);
    formData.append('dateFinProject', project.dateFinProject);

   
    return this.http.put<{message:any}>(this.baseUrl+'/'+id,formData)
  }
  deleteProject(id:any){
    return this.http.delete<{message:any}>(this.baseUrl+'/'+id)
  }
}
