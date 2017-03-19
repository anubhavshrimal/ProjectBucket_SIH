import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ 
      BrowserModule, 
      MaterialModule 
    ],
  declarations: [ 
      AppComponent,
      NavbarComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
