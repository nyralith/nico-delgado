import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {
  public editForm: FormGroup;


  constructor(private fb: FormBuilder) {
    {
      this.editForm = this.fb.group({
        trabajo: ['', Validators.required],
        titulo: ['', Validators.required],
        tiempo: ['', Validators.required],
        descripcionAct: ['', Validators.required],
      })
    }
  }

  ngOnInit(): void {
  }

  edit() {
    console.log('alo')
  }
}
