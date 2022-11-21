import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { CubosService } from 'src/app/services/cubos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  @ViewChild("nombre") nombre !: ElementRef;
  @ViewChild("email") email !: ElementRef;
  @ViewChild("password") password !: ElementRef;

  public user !: Usuario;
  public idUsuario: 0;

  constructor(
    private _service: CubosService,
    private _router: Router
  ) { 
    this.idUsuario = 0;
  }

  ngOnInit(): void {
  }

  registrar(): void {
    var user = new Usuario(
      this.idUsuario,
      this.nombre.nativeElement.value,
      this.email.nativeElement.value, 
      this.password.nativeElement.value
    );

    console.log(user);

    this._service.registrarUsuario(user).subscribe(data => {
      this._router.navigate(["/login"]);
    });
  }
}
