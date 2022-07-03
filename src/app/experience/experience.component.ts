import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experience:any = [];
  isLogin: boolean = false;
  constructor(
    private loginSvc: LoginService,
    private httpSvc: HttpService
  ) {
    this.loginSvc.setExperiencia(this)
  }

  ngOnInit(): void {
    this.getAll()
  }

  async getAll() {
    await this.httpSvc.getExperiencia('https://argentina-programa-api-2.herokuapp.com/experiencia/').subscribe(result => {
      this.experience = result
    })
  }

  openEditModal(){
    console.log('hello')
  }

}
