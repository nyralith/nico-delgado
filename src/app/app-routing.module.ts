import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'editar-producto/:id', component: EditComponentComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
