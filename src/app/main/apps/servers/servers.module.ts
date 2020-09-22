import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServersComponent } from './servers.component';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes = [
  {path:'',component:ServersComponent}
]
@NgModule({
  declarations: [ServersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ServersModule { }
