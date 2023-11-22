import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './composants/home/home.component';
import { TouristicPlacesComponent } from './composants/touristic-places/touristic-places.component';
import { OurTeamsComponent } from './composants/about/our-teams/our-teams.component';
import { AboutComponent } from './composants/about/about/about.component';
import { MissionComponent } from './composants/about/mission/mission.component';
import { ContactComponent } from './composants/contact/contact.component';
import { UniversityLifeComponent } from './composants/university-life/university-life.component';
import { CoursesComponent } from './composants/courses/courses.component';
import { ProjectsComponent } from './composants/projects/projects.component';
import { AgrrementsComponent } from './composants/agrrements/agrrements.component';
import { LoginComponent } from './composants/Admin/login/login.component';
import { AddProjectsComponent } from './composants/Admin/add-projects/add-projects.component';
import { AddPartenaireComponent } from './composants/Admin/add-partenaire/add-partenaire.component';
import { AddEventsComponent } from './composants/Admin/add-events/add-events.component';
import { DashAdminComponent } from './composants/Admin/dash-admin/dash-admin.component';
import { DocumentsComponent } from './composants/documents/documents.component';
import { AnnouncementsComponent } from './composants/announcements/announcements.component';
import { AddTeamComponent } from './composants/Admin/add-team/add-team.component';
const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"touristicPlaces",component:TouristicPlacesComponent},
  {path:"ourTeam",component:OurTeamsComponent},
  {path:"about",component:AboutComponent},
  {path:"mission",component:MissionComponent},
  {path:"contact",component:ContactComponent},
  {path:"univ",component:UniversityLifeComponent},
  {path:"event",component:CoursesComponent},
  {path:"ka1projects",component:ProjectsComponent},
  {path:"cbheprojects",component:ProjectsComponent},
  {path:"agreements",component:AgrrementsComponent},
  {path:"documents",component:DocumentsComponent},
  {path:"announcements",component:AnnouncementsComponent},
  //Admin Panel
  {path:"login",component:LoginComponent},
  {path:"addprojects",component:AddProjectsComponent},
  {path:"addprojects/:id",component:AddProjectsComponent},
  {path:"addpartenaire",component:AddPartenaireComponent},
  {path:"addpartenaire/:id",component:AddPartenaireComponent},
  {path:"addevent",component:AddEventsComponent},
  {path:"addevent/:id",component:AddEventsComponent},
  {path:"addteam",component:AddTeamComponent},
  {path:"addteam/:id",component:AddTeamComponent},
  {path:"dashadmin",component:DashAdminComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
