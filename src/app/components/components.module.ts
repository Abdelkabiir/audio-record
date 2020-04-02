import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordComponent } from './record/record.component';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    RecordComponent,
    MenuComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    RecordComponent,
    MenuComponent
  ]
})
export class ComponentsModule { }
