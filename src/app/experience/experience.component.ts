import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

export interface Experiencia {
  trabajo: string,
  titulo: string,
  tiempo: any,
  descripcionAct: string
}


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  isLogin: boolean = false;
  constructor(private loginSvc: LoginService) {
    this.loginSvc.setExperiencia(this)
  }

  ngOnInit(): void {
  }

  experience: Experiencia[] = [
    { trabajo: "RollingCode Bootcamp Proyecto 1", titulo: "Frontend Developer", tiempo: "2 meses", descripcionAct: "Proyecto FrontEnd utilizando HTML, CSS y BootStrap, el proyecto se realizó en grupo simulando una metodología agil de trabajo SCRUM y se realizó un sitio web de viajes" },
    { trabajo: "RollingCode Bootcamp Proyecto 2", titulo: "Frontend Developer", tiempo: "2 meses", descripcionAct: "Proyecto FrontEnd utilizando HTML, CSS, BootStrap, JavaScript y LocalStorage, el proyecto consistió en elaborar una página web implementando el uso de lo aprendido en JavaScript y LocalStorage donde creamos una página de una tienda de libros con un Login y utilizando LocalStorage como base de datos" }

  ]



}
