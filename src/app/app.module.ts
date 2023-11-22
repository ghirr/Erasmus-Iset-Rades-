import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './composants/header/header.component';
import { FooterComponent } from './composants/footer/footer.component';
import { HomeComponent } from './composants/home/home.component';
import { TouristicPlacesComponent } from './composants/touristic-places/touristic-places.component';
import { OurTeamsComponent } from './composants/about/our-teams/our-teams.component';
import { AboutComponent } from './composants/about/about/about.component';
import { MissionComponent } from './composants/about/mission/mission.component';
import { ContactComponent } from './composants/contact/contact.component';
import { UniversityLifeComponent } from './composants/university-life/university-life.component';
import { ProjectsComponent } from './composants/projects/projects.component';
import { AgrrementsComponent } from './composants/agrrements/agrrements.component';
import { LoginComponent } from './composants/Admin/login/login.component';
import { AddProjectsComponent } from './composants/Admin/add-projects/add-projects.component';
import { AddPartenaireComponent } from './composants/Admin/add-partenaire/add-partenaire.component';
import { AddEventsComponent } from './composants/Admin/add-events/add-events.component';
import { DashAdminComponent } from './composants/Admin/dash-admin/dash-admin.component';
import { DocumentsComponent } from './composants/documents/documents.component';
import { AnnouncementsComponent } from './composants/announcements/announcements.component';
import { HeaderAdminComponent } from './composants/Admin/header-admin/header-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddTeamComponent } from './composants/Admin/add-team/add-team.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TouristicPlacesComponent,
    OurTeamsComponent,
    AboutComponent,
    MissionComponent,
    ContactComponent,
    UniversityLifeComponent,
    ProjectsComponent,
    AgrrementsComponent,
    LoginComponent,
    AddProjectsComponent,
    AddPartenaireComponent,
    AddEventsComponent,
    DashAdminComponent,
    DocumentsComponent,
    AnnouncementsComponent,
    HeaderAdminComponent,
    AddTeamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
