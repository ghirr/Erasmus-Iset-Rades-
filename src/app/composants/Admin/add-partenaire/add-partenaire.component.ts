import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PartenaireService } from 'src/app/services/partenaire.service';

@Component({
  selector: 'app-add-partenaire',
  templateUrl: './add-partenaire.component.html',
  styleUrls: ['./add-partenaire.component.css']
})
export class AddPartenaireComponent implements OnInit {
  addPartenaireForm !: FormGroup
partenaire:any={};
titre:String=''
id:any
button:any
  constructor(private partenaireService:PartenaireService,private router:Router,private AR:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.AR.snapshot.paramMap.get("id")
    if (this.id) {
      this.titre = "modifier Partenaires"
      this.getPartenaireById()
      this.button="Modifier"
    } else {
      this.titre = "Ajouter Partenaires"
      this.button="Ajouter"

    }
  }
  onImageSelected(event: Event) {
    
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    this.partenaire.image = file;
  
    const reader = new FileReader();
    reader.readAsDataURL(file);
  }
  addEditPartenaire(){
    if(this.id){
      this.partenaireService.updatePartenaire(this.partenaire,this.id).subscribe((res) => {
        console.log(res.message);
        this.router.navigate(["dashadmin"])
      })
    }
    else{
    this.partenaireService.createPartenaires(this.partenaire);
    console.log(this.partenaire);
    this.router.navigate(['dashadmin']);
  }}
  getPartenaireById(){
    this.partenaireService.getPartenaireById(this.id).subscribe((res) => {
      this.partenaire = res.partenaire
    })
  
  }

}
