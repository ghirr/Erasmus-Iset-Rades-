import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { PartenaireService } from 'src/app/services/partenaire.service';
import { ProjetsService } from 'src/app/services/projets.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-dash-admin',
  templateUrl: './dash-admin.component.html',
  styleUrls: ['./dash-admin.component.css']
})
export class DashAdminComponent implements OnInit {
  partenaires:any=[];
projects:any=[];
events:any=[];
team:any=[];
new: any;
  constructor(private projectService:ProjetsService,private parenaireService:PartenaireService,private eventS:EventService,private teamS:TeamService,private router:Router) {

    this.getProjects();
    this.getPartenaires();
    this.getEvents();
    this.getTeam();
   }

  ngOnInit(): void {
    
    
  }
  formatDate(date: any): string {
    const formattedDate = new Date(date).toLocaleDateString('fr-FR');
    return formattedDate;
  }
  //Block Projects
  getProjects() {
    this.projectService.getAllprojects().subscribe((result) => {
      console.log("here", result.projects);
      this.projects = result.projects;
    });
  }
  editProject(id:any){
    this.router.navigate(['addprojects/'+id])
  }
  deleteProject(id:any){
    this.projectService.deleteProject(id).subscribe((res)=>{
      console.log(res.message);
      this.getProjects()
      
    })
  }
 //Block Partenaires
  getPartenaires() {
    this.parenaireService.getAllpartenaires().subscribe((result) => {
      console.log("here", result.partenaires);
      this.partenaires = result.partenaires;
    });
  }
  editPartenaire(id:any){
    this.router.navigate(['addpartenaire/'+id])
  }
  deletePartenaire(id:any){
    this.parenaireService.deletePartenaire(id).subscribe((res)=>{
      console.log(res.message);
      this.getPartenaires()
      
    })
  }
   //Block events
  getEvents() {
    this.eventS.getAlleventss().subscribe((result) => {
      console.log("here", result.events);
      this.events = result.events;
    });
  }
  editEvent(id:any){
    this.router.navigate(['addevent/'+id])
  }
  deleteEvent(id:any){
    this.eventS.deleteEvent(id).subscribe((res)=>{
      console.log(res.message);
      this.getEvents()
      
    })
  }
   //Block team
  getTeam() {
    this.teamS.getTeam().subscribe((result:any) => {
      console.log("here", result.team);
      this.team = result.team;
    });
  }
  editTeam(id:any){
    this.router.navigate(['addteam/'+id])
  }
  deleteTeam(id:any){
    this.teamS.deleteTeam(id).subscribe((res)=>{
      console.log(res.message);
      this.getTeam()
      
    })
  }

}
