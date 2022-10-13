import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewPassengersComponent } from './view-passengers/view-passengers.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes = [
  {
    path:"",component:ViewPassengersComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewPassengersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
