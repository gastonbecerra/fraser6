import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OracionesComponent } from './oraciones/oraciones.component'
import { ClasificadosComponent } from './clasificados/clasificados.component'

const routes: Routes = [
  { path: '', component: OracionesComponent },
  { path: 'filtros', component:ClasificadosComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
