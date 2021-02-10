import { Component, OnInit } from '@angular/core';
import { OracionesService } from '../shared/oraciones';

@Component({
  selector: 'app-oraciones',
  templateUrl: './oraciones.component.html',
  styleUrls: ['./oraciones.component.css']
})
export class OracionesComponent implements OnInit {

  data = [];
  private cuanto: any;
  filtro: any;
  estado: any;

  constructor(
    private angularDB: OracionesService,
    ) { }

    
  ngOnInit() {
    
    this.data = this.angularDB.getOracionesX1('');
    this.cuanto = this.angularDB.cuantosFaltan('');
  }

  setEstado(oracion,estado) {
    oracion.estado = estado;
    this.angularDB.setOraciones(oracion);
    this.ngOnInit();
  }

}
