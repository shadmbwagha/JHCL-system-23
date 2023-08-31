import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DiagramAllModule } from '@syncfusion/ej2-angular-diagrams';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrganogramNgxComponent } from './organogram-ngx/organogram-ngx.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganogramNgxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DiagramAllModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
