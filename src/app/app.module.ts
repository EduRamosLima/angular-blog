import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { MediumCardComponent } from './components/medium-card/medium-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';
import { BottomCardComponent } from './components/bottom-card/bottom-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';
import { SubscribeNewsComponent } from './components/subscribe-news/subscribe-news.component';
import { AboutTextComponent } from './components/about-text/about-text.component';
import { BigBottomCardComponent } from './components/big-bottom-card/big-bottom-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTitleComponent,
    BigCardComponent,
    MediumCardComponent,
    SmallCardComponent,
    HomeComponent,
    BottomCardComponent,
    FooterComponent,
    PaginationComponent,
    BlogComponent,
    ProjectsComponent,
    AboutComponent,
    NewsletterComponent,
    SubscribeNewsComponent,
    AboutTextComponent,
    BigBottomCardComponent
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
