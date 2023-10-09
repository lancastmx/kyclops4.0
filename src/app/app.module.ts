import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { RadioComponent } from './componentes/radio/radio.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CardsComponent } from './componentes/cards/cards.component';
import { CardFormComponent } from './componentes/card-form/card-form.component';
import { CarProgramasComponent } from './componentes/car-programas/car-programas.component';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ReproductorComponent } from './componentes/reproductor/reproductor.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { BandasComponent } from './componentes/bandas/bandas.component';
import { MarcasComponent } from './componentes/marcas/marcas.component';
import { WhatButtonComponent } from './componentes/what-button/what-button.component';
import { AcordeonComponent } from './componentes/acordeon/acordeon.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { EquipoComponent } from './componentes/equipo/equipo.component';
import { ChatComponent } from './componentes/chat/chat.component';
import { environment } from '../environments/environment';
import { PruebasComponent } from './componentes/pruebas/pruebas.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    MenuComponent,
    RadioComponent,
    NosotrosComponent,
    ContactoComponent,
    CardsComponent,
    CardFormComponent,
    CarProgramasComponent,
    ReproductorComponent,
    FooterComponent,
    BandasComponent,
    MarcasComponent,
    WhatButtonComponent,
    AcordeonComponent,
    EquipoComponent,
    ChatComponent,
    PruebasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    CommonModule,
    SlickCarouselModule,
    MdbAccordionModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
