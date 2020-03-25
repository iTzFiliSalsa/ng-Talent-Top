import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/create/create.component';
import { ShowComponent } from './components/show/show.component';
import { LunesComponent } from './components/lunes/lunes.component';
import { MartesComponent } from './components/martes/martes.component';
import { MiercolesComponent } from './components/miercoles/miercoles.component';
import { JuevesComponent } from './components/jueves/jueves.component';

const appRoutes:Routes = [

    { path: "", component: UserComponent},
    { path: 'login', component: UserComponent },
    { path: 'logout/:sure', component: UserComponent },
    { path: 'home', component: HomeComponent},
    { path: 'create', component: CreateComponent},
    { path: 'create/monday', component: LunesComponent},
    { path: 'create/tuesday', component: MartesComponent},
    { path: 'create/wednesday', component: MiercolesComponent},
    { path: 'create/thursday', component: JuevesComponent},
    { path: 'show', component: ShowComponent}
];

export const appRoutingProviders:any[] = [];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);