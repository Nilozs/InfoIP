import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchIpPageRoutingModule } from './search-ip-routing.module';

import { SearchIpPage } from './search-ip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchIpPageRoutingModule
  ],
  declarations: [SearchIpPage]
})
export class SearchIpPageModule {}
