import { Component, OnInit } from '@angular/core';
import { OracionesService } from '../shared/oraciones';

@Component({
  selector: 'app-clasificados',
  templateUrl: './clasificados.component.html',
  styleUrls: ['./clasificados.component.css']
})
export class ClasificadosComponent implements OnInit {

  data = [];
  private cuanto: any;
  private sub: any;
  filtro: any;
  estado: any;

  constructor(
    private angularDB: OracionesService,
  ) { }
  
  ngOnInit() {
  }

  setEstado(oracion,estado) {
    oracion.estado = estado;
    this.angularDB.setOraciones(oracion);
  }

  setFiltro(estado) {
    this.data.length=0;
    this.data = this.angularDB.getOracionesX9(estado);
    this.cuanto = this.angularDB.cuantosFaltan(estado);
  }
  
}
