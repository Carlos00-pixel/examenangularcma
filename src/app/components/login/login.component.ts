import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CubosService } from 'src/app/services/cubos.service';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild("email") email !: ElementRef;
  @ViewChild("password") password !: ElementRef;

  public user !: Login;

  constructor(
    private _service: CubosService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  login(): void {

    var user = new Login(
      this.email.nativeElement.value, 
      this.password.nativeElement.value
    );

    this._service.login(user).subscribe(data => {
      localStorage.setItem("token", data.response);
      console.log(localStorage.getItem("token"));
      this._router.navigate(["/perfilusuario"]);
    });
  }

}
