import { HomeComponent } from "./components/home/home.component";
import { MarcascubosComponent } from "./components/marcascubos/marcascubos.component";
import { ComentarioscubosComponent } from "./components/comentarioscubos/comentarioscubos.component";
import { LoginComponent } from "./components/login/login.component";
import { PerfilusuarioComponent } from "./components/perfilusuario/perfilusuario.component";
import { RegistrarComponent } from "./components/registrar/registrar.component";
import { VercompraComponent } from "./components/vercompra/vercompra.component";

import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

//DEFINIMOS UN ARRAY DE OBJETOS Routes
const appRoutes: Routes = [
    {
        path: "", component: HomeComponent
    },
    {
        path: "marca/:nombre", component: MarcascubosComponent
    },
    {
        path: "comentario/:idCubo", component: ComentarioscubosComponent
    },
    {
        path: "login", component: LoginComponent
    },
    {
        path: "perfilusuario", component: PerfilusuarioComponent
    },
    {
        path: "registrar", component: RegistrarComponent
    },
    {
        path: "vercompra", component: VercompraComponent
    },

]

export const appRoutingProviders: any = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);