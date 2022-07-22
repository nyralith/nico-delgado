import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {
  public editForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { id: any },
    public dialogRef: MatDialogRef<ExperienceComponent>,
  ) {
    {
      this.editForm = this.fb.group({
        trabajo: ['', Validators.required],
        titulo: ['', Validators.required],
        tiempo: ['', Validators.required],
        descripcion: ['', Validators.required],
      })
    }
  }

  ngOnInit(): void {
  }

  edit() {

    console.log(this.data.id)
    this.dialogRef.close(this.editForm.value)
  }
}
