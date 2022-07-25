import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { HttpService } from '../services/http.service';
import { MatDialog } from '@angular/material/dialog';
import { EditComponentComponent } from '../edit-component/edit-component.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

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

  experience: any = [];
  isLogin: boolean = false;
  editObject: any;

  async getAll() {
    await this.httpSvc.getData('https://argentina-programa-api-2.herokuapp.com/experiencia/').subscribe(result => {
      this.experience = result
    })
  }


  openDialog(id: any): void {
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
    })
  }
  deleteFunction(id: any) {
    this.httpSvc.deleteData(`https://argentina-programa-api-2.herokuapp.com/experiencia/${id}`)
    this.getAll()
  }

  createExperience(){
    const dialogRef = this.dialog.open(EditComponentComponent, {
      width: '580px',
      height: '550px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.editObject = {
        titulo: result.titulo,
        tiempo: result.tiempo,
        trabajo: result.trabajo,
        descripcion: result.descripcion,
      }

      this.httpSvc.editData('https://argentina-programa-api-2.herokuapp.com/experiencia/', this.editObject)
      this.getAll()
    })
  }
}
