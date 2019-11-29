import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeadComponent } from './landing-page/head/head.component';
import {MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule} from '@angular/material';
import { FooterComponent } from './landing-page/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeadComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
