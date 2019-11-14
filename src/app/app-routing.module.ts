import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingV5Component } from 'src/app/views/landing/landing-v5/landing-v5.component';

const routes: Routes = [
  {
    path: '', component: LandingV5Component,
  },
  {
    path: '**', redirectTo: ''
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
