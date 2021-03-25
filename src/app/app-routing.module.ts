import { LabpageComponent } from './components/research/labpage/labpage.component';
import { ProjectContentComponent } from './components/news/research-project/project-content/project-content.component';
import { LibraryComponent } from './components/resources/library/library.component';
import { AnnouncementContentComponent } from './components/news/announcement-content/announcement-content.component';
import { NewsContentComponent } from './components/news/news-content/news-content.component';
import { MoreNewsComponent } from './components/news/more-news/more-news.component';
import { ResearchProjectComponent } from './components/news/research-project/research-project.component';
import { MoreVacanciesComponent } from './components/news/vacancies-opp/more-vacancies/more-vacancies.component';
import { VacanciesOppComponent } from './components/news/vacancies-opp/vacancies-opp.component';
import { ImagesTabComponent } from './components/extension/gallery/images-tab/images-tab.component';
import { GalleryComponent } from './components/extension/gallery/gallery.component';
import { AdminNewsComponent } from './components/admin/admin-news/admin-news.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AuthGuard } from './shared/auth.guard';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { AdminNavComponent } from './components/admin/admin-nav/admin-nav.component';
import { AdminComponent } from './components/admin/admin.component';
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
  {path: 'admin', component: AdminComponent},
  {path: 'admin/admin-dashboard', component: AdminDashboardComponent},
  {path: 'admin/admin-home', component: AdminHomeComponent},
  {path: 'admin/admin-news', component: AdminNewsComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'About', component: AboutComponent},
  {path: 'About/faculty', component: FacultyComponent},
  {path: 'About/About-the-director', component: AboutTheDirectorComponent},
  {path: 'Academics', component: EducationComponent},
  {path: 'Academics/courses-offered', component: CoursesComponent},
  {path: 'Research', component: ResearchComponent},
  {path: 'Research/areas-of-research', component: AreasOfResearchComponent},
  {path: 'Research/laboratories', component: LaboratoriesComponent},
  {path: 'Research/laboratories/:name', component: LabpageComponent},
  {path: 'Facilities', component: FacilitiesComponent},
  {path: 'Facilities/bolinao-marine-lab', component: BolinaoComponent},
  {path: 'Extension', component: ExtensionComponent},
  {path: 'Extension/gallery', component: GalleryComponent},
  {path: 'Extension/gallery/images', component: ImagesTabComponent},
  {path: 'Resources', component: ResourcesComponent},
  {path: 'Resources/library', component: LibraryComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'News', component: NewsComponent},
  {path: 'News/content', component: NewsContentComponent},
  {path: 'News/more', component: MoreNewsComponent},
  {path: 'News/Announcement', component: AnnouncementComponent},
  {path: 'News/Announcement/content', component: AnnouncementContentComponent},
  {path: 'News/Research-projects-and-highlights', component: ResearchProjectComponent},
  {path: 'News/Research-projects-and-highlights/content', component: ProjectContentComponent},
  {path: 'News/Vacancies-and-Opportunities', component: VacanciesOppComponent},
  {path: 'News/Vacancies-and-Opportunities/more', component: MoreVacanciesComponent},
  {path: 'About/admin', component: SubpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
