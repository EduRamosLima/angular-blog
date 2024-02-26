import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'newsletter',
    component: NewsletterComponent,
  },
  {
    path: 'blog/:id',
    component: BlogComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
