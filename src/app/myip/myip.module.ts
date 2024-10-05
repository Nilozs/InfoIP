import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyipPageRoutingModule } from './myip-routing.module';

import { MyipPage } from './myip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyipPageRoutingModule
  ],
  declarations: [MyipPage]
})
export class MyipPageModule {}
