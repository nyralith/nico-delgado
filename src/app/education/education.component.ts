import { Component, OnInit } from '@angular/core';

export interface Educacion {
  titulo: string,
  tiempo: any,
  institucion: string,
  inicio: number,
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  educacion: Educacion[] = [
    {titulo: "FullStack web Developer", tiempo: "7 meses", institucion: "RollingCode School", inicio: 2020},
    {titulo: "React Developer", tiempo: "2 meses", institucion: "Zero to Mastery Academy",  inicio: 2021},
    {titulo: "Web Developer", tiempo: "7 meses", institucion: "Colt Steele Web Developer Bootcamp - Udemy",  inicio: 2019},
    {titulo: "Fundamentos de la codificacion", tiempo: "1 semana", institucion: "Grasshopper",  inicio: 2021},
    {titulo: "Fundamentos de la codificacion II", tiempo: "1 semana", institucion: "Grasshopper",  inicio: 2021},
    {titulo: "Complete ReactJS Course - Basics to Advanced", tiempo: "1 mes", institucion: "Udemy",  inicio: 2021}

   ]

}
