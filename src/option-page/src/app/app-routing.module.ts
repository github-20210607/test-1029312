import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './../frame/middle/index/index.component';
import { UpdateComponent } from './../frame/middle/update/update.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'update', component: UpdateComponent },
  { path: '**', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
