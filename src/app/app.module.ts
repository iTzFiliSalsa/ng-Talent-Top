import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/create/create.component';
import { ShowComponent } from './components/show/show.component';
import { LunesComponent } from './components/lunes/lunes.component';
import { MartesComponent } from './components/martes/martes.component';
import { MiercolesComponent } from './components/miercoles/miercoles.component';
import { JuevesComponent } from './components/jueves/jueves.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    CreateComponent,
    ShowComponent,
    LunesComponent,
    MartesComponent,
    MiercolesComponent,
    JuevesComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
