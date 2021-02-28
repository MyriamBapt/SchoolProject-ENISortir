import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilAffichageComponent } from './accueil-affichage/accueil-affichage.component';
import { AdminFiltrerSitesComponent } from './admin-filtrer-sites/admin-filtrer-sites.component';
import { AdminGererVillesComponent } from './admin-gerer-villes/admin-gerer-villes.component';
import { CreerSortieComponent } from './creer-sortie/creer-sortie.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilAffichageComponent},
  { path: 'admin-gestion-villes', component: AdminGererVillesComponent},
  { path: 'admin-filtrer-sites', component: AdminFiltrerSitesComponent},
  { path: 'creer-sortie', component: CreerSortieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
