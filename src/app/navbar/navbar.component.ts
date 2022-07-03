import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  userName: string = 'admin';
  logPassword: string = 'admin';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  public isMenuCollapsed = true

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '580px',
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.username === this.userName && result.password === this.logPassword){
        this.isLogin = true
        console.log(result, 'result afterclose navbar')
      }
      
    })
  }

 

}

