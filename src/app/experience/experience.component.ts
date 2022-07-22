import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { HttpService } from '../services/http.service';
import { MatDialog } from '@angular/material/dialog';
import { EditComponentComponent } from '../edit-component/edit-component.component';

export interface editExperience {
  titulo: string;
  trabajo: string;
  tiempo: string;
  descripcion: string;
  id: number;
}


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {


  experience: any = [];
  isLogin: boolean = false;
  editObject: editExperience;

  constructor(
    private loginSvc: LoginService,
    private httpSvc: HttpService,
    public dialog: MatDialog
  ) {
    this.loginSvc.setExperiencia(this)
  }

  ngOnInit(): void {
    this.getAll()
  }

  async getAll() {
    await this.httpSvc.getData('https://argentina-programa-api-2.herokuapp.com/experiencia/').subscribe(result => {
      this.experience = result
    })
  }


  openDialog(id: any): void {
    console.log(id)
    const dialogRef = this.dialog.open(EditComponentComponent, {
      data: { id: id },
      width: '580px',
      height: '550px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.editObject = {
          titulo: result.titulo,
          tiempo: result.tiempo,
          trabajo: result.trabajo,
          descripcion: result.descripcion,
          id: id
      }

      this.httpSvc.editData('https://argentina-programa-api-2.herokuapp.com/experiencia/', this.editObject)
      this.getAll()
      console.log(this.editObject)
      console.log('Terminamos')
    })
  }
  deleteFunction(id: any){
    this.httpSvc.deleteData(`https://argentina-programa-api-2.herokuapp.com/experiencia/${id}`)
  }
}
