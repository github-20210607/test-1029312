import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './../frame/middle/index/index.component';
import { UpdateComponent } from './../frame/middle/update/update.component';
import { NavigationGlobalComponent } from './../frame/navigation-global/navigation-global.component';
import { HeaderComponent } from './../frame/header/header.component';
import { LeftComponent } from './../frame/left/left.component';
import { RightComponent } from './../frame/right/right.component';
import { MiddleComponent } from './../frame/middle/middle.component';
import { FooterComponent } from './../frame/footer/footer.component';
import { FreeAComponent } from './../frame/free-a/free-a.component';
import { FreeBComponent } from './../frame/free-b/free-b.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    UpdateComponent,
    NavigationGlobalComponent,
    HeaderComponent,
    LeftComponent,
    RightComponent,
    MiddleComponent,
    FooterComponent,
    FreeAComponent,
    FreeBComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
