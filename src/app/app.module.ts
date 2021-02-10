import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';

import { OracionesService } from './shared/oraciones';
import { OracionesComponent } from './oraciones/oraciones.component';
import { ClasificadosComponent } from './clasificados/clasificados.component';  

@NgModule({
  declarations: [
    AppComponent,
    OracionesComponent,
    ClasificadosComponent
  ],
  imports: [
    BrowserModule,
    // CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    OracionesService, 
    ClasificadosComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
https://www.positronx.io/create-angular-7-firebase-crud-app-with-angular-material-7/
https://angular-templates.io/tutorials/about/angular-crud-with-firebase
*/