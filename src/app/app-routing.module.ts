import { ResearchComponent } from './components/research/research.component';
import { AnnouncementComponent } from './components/news/announcement/announcement.component';
import { AboutTheDirectorComponent } from './components/about/about-the-director/about-the-director.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { ExtensionComponent } from './components/extension/extension.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'About', component: AboutComponent},
  {path: 'About/About-the-director', component: AboutTheDirectorComponent},
  {path: 'Education', component: EducationComponent},
  {path: 'Research', component: ResearchComponent},
  {path: 'Extension', component: ExtensionComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'News', component: NewsComponent},
  {path: 'News/Announcement', component: AnnouncementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
