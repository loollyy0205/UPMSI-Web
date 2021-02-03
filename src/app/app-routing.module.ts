import { ExtensionComponent } from './components/extension/extension.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/About', pathMatch: 'full'},
  {path: 'About', component: AboutComponent},
  {path: 'Education', component: EducationComponent},
  {path: 'Extension', component: ExtensionComponent},
  {path: 'Contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
