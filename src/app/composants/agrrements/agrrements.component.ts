import { Component, OnInit } from '@angular/core';
import { PartenaireService } from 'src/app/services/partenaire.service';

@Component({
  selector: 'app-agrrements',
  templateUrl: './agrrements.component.html',
  styleUrls: ['./agrrements.component.css']
})
export class AgrrementsComponent implements OnInit {
partenaires:any={};
  constructor(private partenaireService:PartenaireService) { 
    this.getPartenaires();
  }

  ngOnInit(): void {
    
  }
  formatDate(date: any): string {
    const formattedDate = new Date(date).toLocaleDateString('fr-FR');
    return formattedDate;
  }
  getPartenaires() {
    this.partenaireService.getAllpartenaires().subscribe((result) => {
      console.log("here", result.partenaires);
      this.partenaires = result.partenaires;
    });
  }

}
