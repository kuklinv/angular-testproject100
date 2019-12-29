import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SandboxComponent } from './pages/sandbox/sandbox.component';
import {MultiItemCarouselComponent } from './pages/skills/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SkillsComponent,
    BlogComponent,
    PortfolioComponent,
    ProjectsComponent,
    SandboxComponent,
    MultiItemCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  exports: [MultiItemCarouselComponent],
  providers: [MultiItemCarouselComponent],
  bootstrap: [AppComponent, MultiItemCarouselComponent]
})
export class AppModule { }