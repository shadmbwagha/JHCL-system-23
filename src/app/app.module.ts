import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrganogramComponent } from './organogram/organogram.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganogramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DiagramModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
