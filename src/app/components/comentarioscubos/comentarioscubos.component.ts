import { Component, OnInit } from '@angular/core';
import { Cubo } from 'src/app/models/cubo';
import { CubosService } from 'src/app/services/cubos.service';
import { Comentario } from 'src/app/models/comentario';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-comentarioscubos',
  templateUrl: './comentarioscubos.component.html',
  styleUrls: ['./comentarioscubos.component.css']
})
export class ComentarioscubosComponent implements OnInit {

  public comentarios !: Array<Comentario>;

  public cubo !: Cubo;

  public idCubo !: number;

  constructor(
    private _service: CubosService,
    private _activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(( parametros: Params ) => { 
    
      if (parametros['idCubo'] != null){
      
        this.idCubo = parseInt(parametros['idCubo']);

        console.log(this.idCubo);

        this._service.getCubosById(this.idCubo).subscribe(response => {
          this.cubo = response;
        });

        this._service.getComentarios(this.idCubo).subscribe(response => {
          this.comentarios = response;
        });
      } 
    }); 
  }

}
