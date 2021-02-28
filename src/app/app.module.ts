import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilFiltresComponent } from './accueil-filtres/accueil-filtres.component';
import { AccueilAffichageComponent } from './accueil-affichage/accueil-affichage.component';
import { AdminGererVillesComponent } from './admin-gerer-villes/admin-gerer-villes.component';
import { AdminFiltrerSitesComponent } from './admin-filtrer-sites/admin-filtrer-sites.component';
import { CreerSortieComponent } from './creer-sortie/creer-sortie.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AccueilFiltresComponent,
    AccueilAffichageComponent,
    AdminGererVillesComponent,
    AdminFiltrerSitesComponent,
    CreerSortieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
