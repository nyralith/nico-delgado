import { Component, OnInit } from '@angular/core';

export interface Proyectos {
  titulo: string,
  descripcion: string,
}

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  proyectos: Proyectos[] = [
    { titulo: "Proyecto Rolling Travel", descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, voluptatum repellat est reprehenderit quibusdam aperiam, placeat laudantium sapiente eligendi nihil voluptatibus ex deserunt facere vel, molestiae dolorum! Ipsum, sunt sequi." },
    { titulo: "Proyecto Rolling BookStore", descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, voluptatum repellat est reprehenderit quibusdam aperiam, placeat laudantium sapiente eligendi nihil voluptatibus ex deserunt facere vel, molestiae dolorum! Ipsum, sunt sequi." },
    { titulo: "Proyecto Rolling GameStore", descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, voluptatum repellat est reprehenderit quibusdam aperiam, placeat laudantium sapiente eligendi nihil voluptatibus ex deserunt facere vel, molestiae dolorum! Ipsum, sunt sequi." },
    { titulo: "Proyecto ReactStore", descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, voluptatum repellat est reprehenderit quibusdam aperiam, placeat laudantium sapiente eligendi nihil voluptatibus ex deserunt facere vel, molestiae dolorum! Ipsum, sunt sequi." },

  ]
}
