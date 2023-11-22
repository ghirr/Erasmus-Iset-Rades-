import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ProjetsService } from 'src/app/services/projets.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
title='Our Projects';
projects:any=[];
  
  constructor(private router:Router,private projectServive:ProjetsService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentPath = event.urlAfterRedirects.split('?')[0];
        console.log(currentPath);
        
        if ([ '/cbheprojects'].includes(currentPath)) {
          this.title='CBHE Projects';
          this.getcbheProjects();
        } 
        if ([ '/ka1projects'].includes(currentPath)) {
          this.title='Ka1 Projects';
        this.getKa1Projects();
        } 
      }
    });
   }

  ngOnInit(): void {
  }
  getKa1Projects() {
    this.projectServive.getKa1projects().subscribe((result: any) => {
      console.log("here", result.projects);
      this.projects = result.projects;
    });
  }
  
  getcbheProjects() {
    this.projectServive.getcbheprojects().subscribe((result: any) => {
      console.log("here", result.projects);
      this.projects = result.projects;
    });
  }
  
}
