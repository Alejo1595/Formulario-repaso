import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'personajes',
    pathMatch: 'full'
  },
  {
    path: 'personajes',
    loadChildren: () => import('./modulos/personajes/personajes.module').then(m => m.PersonajesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
