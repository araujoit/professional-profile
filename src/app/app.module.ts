import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { ExperienceComponent } from './experience/experience.component';
import { AcademyComponent } from './academy/academy.component';
import { SkillComponent } from './skill/skill.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    SocialLinksComponent,
    ExperienceComponent,
    AcademyComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
