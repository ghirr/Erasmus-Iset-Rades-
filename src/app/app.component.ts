import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'education';
  showHeader = false;
  showFooter = false;
constructor(private router: Router) {
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      const currentPath = event.urlAfterRedirects.split('?')[0];
      console.log(currentPath);
      
      if ([ '','/home','/touristicPlaces','/ourTeam','/about','/mission','/contact','/univ','/event','/ka1projects','/cbheprojects','/agreements','/documents','/announcements','/'].includes(currentPath)) {
        this.showHeader = true;
        this.showFooter = true;
      } else{
        this.showHeader = false;
        this.showFooter = false;
      }
    }
  });
}
}
