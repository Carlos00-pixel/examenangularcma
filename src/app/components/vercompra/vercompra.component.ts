import { Component, OnInit } from '@angular/core';
import { Compras } from 'src/app/models/compras';
import { CubosService } from 'src/app/services/cubos.service';

@Component({
  selector: 'app-vercompra',
  templateUrl: './vercompra.component.html',
  styleUrls: ['./vercompra.component.css']
})
export class VercompraComponent implements OnInit {

  public compras !: Array<Compras>;

  constructor(
    private _service: CubosService
  ) { }

  ngOnInit(): void {
    this._service.verCompra().subscribe(response => {
      this.compras = response;
    })
  }

}
