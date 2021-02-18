import { LaboratoriesComponent } from './components/research/laboratories/laboratories.component';
import { FacultyComponent } from './components/about/faculty/faculty.component';
import { AreasOfResearchComponent } from './components/research/areas-of-research/areas-of-research.component';
import { CoursesComponent } from './components/education/courses/courses.component';
import { BolinaoComponent } from './components/facilities/bolinao/bolinao.component';
import { SubpageComponent } from './components/subpage/subpage.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { ResourcesComponent } from './components/resources/resources.component';
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
  {path: 'About/faculty', component: FacultyComponent},
  {path: 'About/About-the-director', component: AboutTheDirectorComponent},
  {path: 'Academics', component: EducationComponent},
  {path: 'Academics/courses-offered', component: CoursesComponent},
  {path: 'Research', component: ResearchComponent},
  {path: 'Research/areas-of-research', component: AreasOfResearchComponent},
  {path: 'Research/laboratories', component: LaboratoriesComponent},
  {path: 'Facilities', component: FacilitiesComponent},
  {path: 'Facilities/bolinao-marine-lab', component: BolinaoComponent},
  {path: 'Extension', component: ExtensionComponent},
  {path: 'Resources', component: ResourcesComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'News', component: NewsComponent},
  {path: 'News/Announcement', component: AnnouncementComponent},
  {path: 'subpage', component: SubpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
