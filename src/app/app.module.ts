import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { ExperienceComponent } from './experience/experience.component';
import { AcademyComponent } from './academy/academy.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    SocialLinksComponent,
    ExperienceComponent,
    AcademyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
