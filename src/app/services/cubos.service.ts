import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class CubosService {
    constructor(private _http: HttpClient) {}

    getCubos(): Observable<any> {
        var request = "/api/Cubos";
        var url = environment.urlApiCubos + request;

        return this._http.get(url);
    }

    getCubosById(id: number): Observable<any> {

        var request = "/api/Cubos/"+id;
        var url = environment.urlApiCubos + request;

        return this._http.get(url);
    }

    getMarcas(): Observable<any> {
        var request = "/api/Cubos/Marcas";
        var url = environment.urlApiCubos + request;

        return this._http.get(url);
    }

    getMarcasByNombre(nombre: string): Observable<any> {
        var request = "/api/Cubos/CubosMarca/"+nombre;
        var url = environment.urlApiCubos + request;

        return this._http.get(url);
    }

    getComentarios(id: number): Observable<any> {
        var request = "/api/ComentariosCubo/GetComentariosCubo/"+id;
        var url = environment.urlApiCubos + request;

        return this._http.get(url);
    }

    login(user: any): Observable<any> {
        var request = "/api/Manage/Login";
        var url = environment.urlApiCubos + request;

        return this._http.post(url, user);
    }

    getUsuario(): Observable<any> {

        var token = localStorage.getItem("token");

        var header = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        })

        var request = "/api/Manage/PerfilUsuario"
        var url = environment.urlApiCubos + request;

        return this._http.get(url, {headers: header});
    }

    registrarUsuario(user: any): Observable<any> {
        var request = "/api/Manage/RegistroUsuario";
        var url = environment.urlApiCubos + request;

        return this._http.post(url, user);
    }

    realizarCompra(id: number): Observable<any> {

        var token = localStorage.getItem("token");

        var header = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        })

        var request = "/api/Compra/InsertarPedido/" + id;
        var url = environment.urlApiCubos + request;

        return this._http.post(url, "", {headers: header});
    }

    verCompra(): Observable<any> {

        var token = localStorage.getItem("token");

        var header = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        })

        var request = "/api/Compra/ComprasUsuario";
        var url = environment.urlApiCubos + request;

        return this._http.get(url, {headers: header});
    }
}