import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddProjectComponent } from './components/addProject/addProject.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ 
      BrowserModule, 
      MaterialModule,
      FormsModule
    ],
  declarations: [ 
      AppComponent,
      NavbarComponent,
      AddProjectComponent,
      FooterComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
