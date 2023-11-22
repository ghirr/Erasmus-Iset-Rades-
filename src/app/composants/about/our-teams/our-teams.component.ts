import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-our-teams',
  templateUrl: './our-teams.component.html',
  styleUrls: ['./our-teams.component.css']
})
export class OurTeamsComponent implements OnInit {
team:any=[];
  constructor(private teamS:TeamService ) { 
    this.getTeam();
  }

  ngOnInit(): void {
    console.log(this.team);
    
  }
  getTeam() {
    this.teamS.getTeam().subscribe((result:any) => {
      console.log("here", result.team);
      this.team = result.team;
    });
  }

}
