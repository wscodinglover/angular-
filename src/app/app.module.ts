import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  //<--NgModule lives here

import { HttpModule } from "@angular/http";  //<--http import
//Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

import { AppComponent } from './app.component';
import { HeroDetailComponent } from "./hero-detail.component"; 
import { HeroesComponent } from "./heroes.component";
import { DashboardComponent } from "./dashboard.component";
import { HeroSearchComponent } from "./hero-search.component";
import { HeroService } from "./hero.service";

//配置路由
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //import the FormsModule before binding with [(ngModel)]
    AppRoutingModule, // 导入路由
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    // RouterModule.forRoot([
    //   {
    //     path:'heroes',
    //     component:HeroesComponent
    //   },{
    //     path:'dashboard',
    //     component:DashboardComponent
    //   },{
    //     path:'detail/:id',
    //     component:HeroDetailComponent,
    //   },{
    //     path:'',
    //     redirectTo:'/dashboard',
    //     pathMatch:'full'
    //   }
    // ]) //导入路由
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
