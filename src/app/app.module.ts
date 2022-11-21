import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//SERVICES
import { CubosService } from './services/cubos.service';

//COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { MarcascubosComponent } from './components/marcascubos/marcascubos.component';
import { ComentarioscubosComponent } from './components/comentarioscubos/comentarioscubos.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilusuarioComponent } from './components/perfilusuario/perfilusuario.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { VercompraComponent } from './components/vercompra/vercompra.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    MarcascubosComponent,
    ComentarioscubosComponent,
    LoginComponent,
    PerfilusuarioComponent,
    RegistrarComponent,
    VercompraComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders,
    CubosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
