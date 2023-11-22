import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProjetsService } from 'src/app/services/projets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.css']
})
export class AddProjectsComponent implements OnInit {
  addProjectForm !: FormGroup
  project:any={};
  titre:String=''
  id:any
  button:any
  constructor(private projectService:ProjetsService,private router:Router,private AR:ActivatedRoute,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    
    this.id = this.AR.snapshot.paramMap.get("id")
    if (this.id) {
      this.titre = "modifier Projects"
      this.getProjectById()
      this.button="Modifier"
    } else {
      this.titre = "Ajouter Projects"
      this.button="Ajouter"

    }
  }
  onImageSelected(event: Event) {
    
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    this.project.image = file;
  
    const reader = new FileReader();
    reader.readAsDataURL(file);
  }
  
  
  addEditProject(){
    if(this.id){
this.projectService.updateProject(this.project,this.id).subscribe((res) => {
  console.log(res.message);
  this.router.navigate(["dashadmin"])
})
    }
    else{
    this.projectService.createProjects(this.project);
    console.log(this.project);
    this.router.navigate(['dashadmin']);
  }}

  getProjectById() {


    this.projectService.getProjectById(this.id).subscribe((res) => {
      this.project = res.project;
    })
  
  
  }
  transformDateFormat(date: Date): string {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
      return ''; // or handle the case when the date is invalid
    }
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const transformedDate = `${year}-${month}-${day}`;
    return transformedDate;
  }
  
  
  
  
}
