import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  admin: any = {}
  loginForm !: FormGroup
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  login(){
if(this.admin.email=='admin@admin.admin'&&this.admin.password=='admin02#@'){
this.router.navigate(['dashadmin']);
}else{
  this.router.navigate(['documents']);
}
  }

}
