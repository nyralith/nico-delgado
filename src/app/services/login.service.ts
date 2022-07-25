import { Injectable } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { EducationComponent } from '../education/education.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProyectsComponent } from '../proyects/proyects.component';
import { SkillsComponent } from '../skills/skills.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  experienceComponent: ExperienceComponent;
  educacionComponent: EducationComponent;
  skillComponent: SkillsComponent;
  proyectComponent: ProyectsComponent;
  aboutComponent: AboutComponent;

  constructor() { }


  setExperiencia(experienceComponent: ExperienceComponent) {
    this.experienceComponent = experienceComponent
  }

  addLoginExperiencia() {
    this.experienceComponent.isLogin = true
  }

  setEducacion(educacionComponent: EducationComponent) {
    this.educacionComponent = educacionComponent
  }

  addLoginEducacion() {
    this.educacionComponent.isLogin = true
  }

  setSkill(skillComponent: SkillsComponent) {
    this.skillComponent = skillComponent
  }

  addLoginSkill(){
    this.skillComponent.isLogin = true
  }

  setProyect(proyectComponent: ProyectsComponent){
    this.proyectComponent = proyectComponent
  }

  addLoginProyect(){
    this.proyectComponent.isLogin = true
  }

  setAbout(aboutComponent: AboutComponent){
    this.aboutComponent = aboutComponent
  }

  addLoginAbout(){
    this.aboutComponent.isLogin = true
  }
}
