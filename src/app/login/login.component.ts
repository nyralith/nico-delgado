  import { Component, Inject, OnInit } from '@angular/core';
  import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
  import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
  import { NavbarComponent } from '../navbar/navbar.component';
  import { LoginService } from '../services/login.service';

  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
  export class LoginComponent implements OnInit {



    public loginForm: FormGroup;

    user: string = 'admin';
    logPassword: string = 'admin';

    constructor(public dialogRef: MatDialogRef<NavbarComponent>,
      @Inject(MAT_DIALOG_DATA) public data: { user: string, password: string },
      private loginSvc: LoginService,
      private fb: FormBuilder

    ) {
      this.loginForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
      })
    }

    ngOnInit(): void {
    }

    continueLogin() {
      if (this.loginForm.value.username !== this.user && this.loginForm.value.password !== this.logPassword) {
        console.log('usuario incorrecto')
      }
      else {
        this.dialogRef.close(this.loginForm.value)
        this.loginSvc.addLoginExperiencia()
        this.loginSvc.addLoginEducacion()
        this.loginSvc.addLoginSkill()
        this.loginSvc.addLoginProyect()
        this.loginSvc.addLoginAbout()
      }
    }

    closeModal() {
      console.log('cerrar')
      this.dialogRef.close(this.loginForm.value)
    }

  }
