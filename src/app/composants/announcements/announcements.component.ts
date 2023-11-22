import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {

  constructor(private eventS:EventService) {
    this.getEvents();
   }
events:any=[]
  ngOnInit(): void {
    console.log(this.events);
    
  }
  formatDate(date: any): string {
    const formattedDate = format(new Date(date), 'EEE, MMM do yyyy', { locale: fr });
    return formattedDate;
  }
  getEvents() {
    this.eventS.getAlleventss().subscribe((result) => {
      console.log("here", result.events);
      this.events = result.events;
    });
  }
}
