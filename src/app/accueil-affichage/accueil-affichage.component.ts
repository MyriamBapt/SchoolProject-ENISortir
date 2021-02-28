import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil-affichage',
  templateUrl: './accueil-affichage.component.html',
  styleUrls: ['./accueil-affichage.component.css']
})
export class AccueilAffichageComponent implements OnInit {

  dateActuelle = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
