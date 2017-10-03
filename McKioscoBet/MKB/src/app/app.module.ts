import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';

//Routing
import {app_routing} from './app.routes';

//services
//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/sheard/navbar/navbar.component';
import { AnimalesComponent } from './components/bets/animales/animales.component';
import { TiketsComponent } from './components/venta/tikets/tikets.component';
import { ReportesComponent } from './components/reportes/reportes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnimalesComponent,
    TiketsComponent,
    ReportesComponent
  ],
  imports: [
    BrowserModule, app_routing, FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
