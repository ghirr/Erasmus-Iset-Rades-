import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent implements OnInit {
event:any={};
addProjectForm !: FormGroup
project:any={};
titre:String=''
id:any
button:any=''
constructor(private eventS:EventService,private router:Router,private AR:ActivatedRoute) { }

ngOnInit(): void {
  this.id = this.AR.snapshot.paramMap.get("id")
    if (this.id) {
      this.titre = "modifier Events"
      this.getEventById()
      this.button="Modifier"
    } else {
      this.titre = "Ajouter Events"
      this.button="Ajouter"

    }
}
onImageSelected(event: Event) {
  
  const target = event.target as HTMLInputElement;
  const file: File = (target.files as FileList)[0];
  this.event.image = file;

  const reader = new FileReader();
  reader.readAsDataURL(file);
}


addEditEvent(){
  if(this.id){
    this.eventS.updateEvent(this.event,this.id).subscribe((res) => {
      console.log(res.message);
      this.router.navigate(["dashadmin"])
    })
  }
  else{
 this.eventS.createEventss(this.event);
  console.log(this.event);
  this.router.navigate(['dashadmin']);
}}
getEventById(){
this.eventS.getEventById(this.id).subscribe((res) => {
  this.event = res.event
})

}
}
