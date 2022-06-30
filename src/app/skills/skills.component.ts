import { Component, OnInit } from '@angular/core';


export interface SkillValue {
  skill: string,
  valor: number
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})



export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  habilidades: SkillValue[] = [
    { skill: "Angular", valor: 80 },
    { skill: "React", valor: 80 },
    { skill: "JavaScript", valor: 85 },
    { skill: "HTML", valor: 100 },
    { skill: "CSS", valor: 90 },
    { skill: "NodeJS", valor: 65 },
    { skill: "ExpressJS", valor: 60 },
    { skill: "CSS", valor: 90 },
    { skill: "Java", valor: 15 },
    { skill: "SpringBoot", valor: 15 },
    { skill: "MongoDB", valor: 40 },
    { skill: "MySQL", valor: 40 },

  ]
}
