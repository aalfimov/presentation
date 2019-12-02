import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeadComponent } from './landing-page/head/head.component';
import {
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import { FooterComponent } from './landing-page/footer/footer.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeadComponent,
    FooterComponent,
    MainNavComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatGridListModule,
        MatToolbarModule,
        LayoutModule,
        MatListModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
