import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  addTeamForm!: FormGroup
  teammate:any={};
  titre:String=''
id:any
button:any=''
  constructor(private team:TeamService,private router:Router,private AR:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.AR.snapshot.paramMap.get("id")
    if (this.id) {
      this.titre = "modifier teammate"
      this.getTeamById()
      this.button="Modifier"
    } else {
      this.titre = "Ajouter teammate"
      this.button="Ajouter"

    }
  }
  onImageSelected(event: Event) {
    
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    this.teammate.image = file;
  
    const reader = new FileReader();
    reader.readAsDataURL(file);
  }
  addEditTeam(){
    if(this.id){
      this.team.updateTeam(this.teammate,this.id).subscribe((res) => {
        console.log(res.message);
        this.router.navigate(["dashadmin"])
      })
    }
    else{
    this.team.createteammate(this.teammate);
    console.log(this.teammate);
    this.router.navigate(['dashadmin']);

  }}
  getTeamById(){
    this.team.getTeamById(this.id).subscribe((res) => {
      this.teammate = res.team
    })
  }
}
