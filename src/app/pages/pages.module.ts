import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { RecordComponent } from './record/record.component';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
      path: 'record',
      component: RecordComponent
  }
];

@NgModule({
  declarations: [HomeComponent, RecordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PagesModule { }
