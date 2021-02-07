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
  {path: 'Education', component: EducationComponent},
  {path: 'Extension', component: ExtensionComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'News', component: NewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
