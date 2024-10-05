import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyipPage } from './myip.page';

const routes: Routes = [
  {
    path: '',
    component: MyipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyipPageRoutingModule {}
