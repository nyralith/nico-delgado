import { Injectable } from '@angular/core';
import { ExperienceComponent } from '../experience/experience.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  experienceComponent: ExperienceComponent;

  constructor() { }


  setExperiencia(experienceComponent: ExperienceComponent){
   this.experienceComponent = experienceComponent
  }

  addLoginExperiencia(){
    this.experienceComponent.isLogin = true
  }
}
