import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { CubosService } from 'src/app/services/cubos.service';

@Component({
  selector: 'app-perfilusuario',
  templateUrl: './perfilusuario.component.html',
  styleUrls: ['./perfilusuario.component.css']
})
export class PerfilusuarioComponent implements OnInit {

  public usuario !: Usuario;

  constructor(
    private _service: CubosService
  ) { }

  ngOnInit(): void {
    this._service.getUsuario().subscribe(response => {
      this.usuario = response;
    });
  }

}
