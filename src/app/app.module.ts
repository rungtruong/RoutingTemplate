import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './modules/home/home.module';
import { AdminModule } from './modules/admin/admin.module';

import { HttpClientModule } from "@angular/common/http";

const appRoutes: Routes = [
  { path: 'home', loadChildren: () => HomeModule },
  { path: '', loadChildren: () => HomeModule },
  { path: 'admin', loadChildren: () => AdminModule },
  { path: '**', loadChildren: () => HomeModule }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
