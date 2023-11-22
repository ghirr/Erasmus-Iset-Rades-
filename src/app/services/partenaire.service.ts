import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartenaireService {
  baseUrl = "http://localhost:3000/partenaire";

  constructor(private http: HttpClient) { }
  createPartenaires(partenaire: any) {
    const formData = new FormData();
    formData.append('image', partenaire.image);
    formData.append('partenaireName', partenaire.partenaireName);
    formData.append('dateDePartenariat', partenaire.dateDePartenariat);
    formData.append('nomPays', partenaire.nomPays);
    formData.append('email', partenaire.email);

    const headers = new HttpHeaders();
    // Remove the following line as it doesn't set the correct content type for multipart form data
    // headers.set('enctype', 'multipart/form-data');

    // Instead, set the headers using the 'Content-Type' key
    headers.append('Content-Type', 'multipart/form-data');

    // Use the headers in the options object
    const options = { headers: headers };

    return this.http.post<{ message: any }>(this.baseUrl, formData, options).subscribe();
  }
  getAllpartenaires(){
    return this.http.get<{ partenaires: any }>(this.baseUrl);
    
  }
  getPartenaireById(id:any){
    return this.http.get<{partenaire:any}>(this.baseUrl + '/'+id )
  }
  updatePartenaire(partenaire:any,id:any){
    console.log("here into add partenaire",partenaire);
    const formData = new FormData();
    formData.append('image', partenaire.image);
    formData.append('partenaireName', partenaire.partenaireName);
    formData.append('dateDePartenariat', partenaire.dateDePartenariat);
    formData.append('nomPays', partenaire.nomPays);
    formData.append('email', partenaire.email);

   
    return this.http.put<{message:any}>(this.baseUrl+'/'+id,formData)
  }
  deletePartenaire(id:any){
    return this.http.delete<{message:any}>(this.baseUrl+'/'+id)
  }
}
