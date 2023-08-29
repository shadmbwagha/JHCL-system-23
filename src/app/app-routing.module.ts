import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganogramComponent } from './organogram/organogram.component';

const routes: Routes = [
  {
    path: '/organo',
    component: OrganogramComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
