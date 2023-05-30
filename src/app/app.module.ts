import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedesSocialesComponent } from './redes-sociales/redes-sociales.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { EnlacesComponent } from './enlaces/enlaces.component';

@NgModule({
  declarations: [
    AppComponent,
    RedesSocialesComponent,
    NavegacionComponent,
    BuscadorComponent,
    EnlacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
