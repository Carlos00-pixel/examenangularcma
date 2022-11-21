import { Component, OnInit } from '@angular/core';
import { Cubo } from 'src/app/models/cubo';
import { CubosService } from 'src/app/services/cubos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cubos !: Array<Cubo>;

  constructor(private _service: CubosService) { }

  ngOnInit(): void {
    this._service.getCubos().subscribe(response => {
      this.cubos = response;
    });
  }

  realizarCompras(id: number): void {
    this._service.realizarCompra(id).subscribe(response => {
      console.log(response);
    });
  }

}
