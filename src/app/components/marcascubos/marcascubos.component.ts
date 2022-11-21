import { Component, OnInit } from '@angular/core';
import { Cubo } from 'src/app/models/cubo';
import { CubosService } from 'src/app/services/cubos.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-marcascubos',
  templateUrl: './marcascubos.component.html',
  styleUrls: ['./marcascubos.component.css']
})
export class MarcascubosComponent implements OnInit {

  public marcas !: Array<Cubo>;

  public nombre !: string;

  constructor(
    private _service: CubosService,
    private _activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(( parametros: Params ) => { 
    
      if (parametros['nombre'] != null){
      
        this.nombre = parametros['nombre'];

        console.log(this.nombre);

        this._service.getMarcasByNombre(this.nombre).subscribe(response => {
          this.marcas = response;
        });
      
      } 
      
    }); 
  }

}
