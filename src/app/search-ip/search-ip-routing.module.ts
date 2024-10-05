import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchIpPage } from './search-ip.page';

const routes: Routes = [
  {
    path: '',
    component: SearchIpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchIpPageRoutingModule {}
