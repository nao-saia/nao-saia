import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;

  rj = 'RJ';
  sp = 'SP';
  df = 'DF';

  supermercado = 'Supermercado';
  farmacia = 'Farmácia';
  restaurante = 'Restaurante';

  constructor() { }

  ngOnInit() {}

}
