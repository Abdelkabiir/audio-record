import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { RecordComponent } from '../components/record/record.component';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule,
    ComponentsModule
  ],
  exports: []
})
export class PagesModule { }
