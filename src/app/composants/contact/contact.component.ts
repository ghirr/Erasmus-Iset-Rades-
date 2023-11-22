import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 contactForm!:FormGroup
 snackBarConfig: MatSnackBarConfig;
  constructor(private formBuilder: FormBuilder,private contactServ:ContactService,private snackbar:MatSnackBar) { 
    this.snackBarConfig = new MatSnackBarConfig();
  this.snackBarConfig.panelClass = ['custom-snackbar']; // Classe CSS personnalisée pour le style
}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ["", [Validators.minLength(2), Validators.required]],
      subject: ["", [Validators.maxLength(20), Validators.required]],
      email: ["", [Validators.email, Validators.required]],
      message:[]
    });
  }
  contact(haja:any){
this.contactServ.envoiMessage(haja).subscribe((res) => {
  console.log(res.message);
  this.snackbar.open(res.message, 'OK', {
    duration: 1,
    panelClass: ['custom-snackbar'],
    ...this.snackBarConfig,
  });
  })
  }

}
