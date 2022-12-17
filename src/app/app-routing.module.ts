import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { FormIngresoComponent } from './components/form-ingreso/form-ingreso.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';


const routes: Routes =[
  { path: 'Portfolio', component: PortfolioComponent},
  { path: 'iniciarSesion', component: FormIngresoComponent},
  { path: '' , redirectTo: 'Portfolio', pathMatch: 'full'},
  { path: 'nuevaExperiencia', component: NewExperienciaComponent },
  { path: 'editarExperiencia/:id', component: EditExperienciaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
