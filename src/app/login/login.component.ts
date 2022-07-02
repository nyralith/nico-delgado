import { ThisReceiver } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavbarComponent } from '../navbar/navbar.component';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: string;
  password: string;


  public loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),

  });

  userName: string = 'admin';
  logPassword: string = 'admin';

  constructor(public dialogRef: MatDialogRef<NavbarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: string, password: string },
    private loginSvc: LoginService,
  ) {

  }

  ngOnInit(): void {
  }

  continueLogin() {
    console.log(this.loginForm.value.userName, this.loginForm.value.password)
    console.log(this.loginForm.value.userName, this.userName)
    if(this.loginForm.value.userName !== this.userName && this.loginForm.value.password !== this.password) {
      console.log('usuario incorrecto')
    }
    else{
      this.dialogRef.close(this.loginForm.value)
      this.loginSvc.addLoginExperiencia()
    }
  }

  closeModal() {
    console.log('cerrar')
    this.dialogRef.close('hola')
  }

}
