import { MuseumExhibitsComponent } from './components/resources/museum-exhibits/museum-exhibits.component';
import { HerbariumComponent } from './components/resources/collection/herbarium/herbarium.component';
import { CollectionComponent } from './components/resources/collection/collection.component';
import { PublicationComponent } from './components/resources/publication/publication.component';
import { CommunityOutreachComponent } from './components/extension/community-outreach/community-outreach.component';
import { TrainingsComponent } from './components/extension/trainings/trainings.component';
import { PressContentComponent } from './components/news/press-content/press-content.component';
import { PuertoComponentsSubpageComponent } from './components/facilities/puerto-gallera/puerto-components/puerto-components-subpage/puerto-components-subpage.component';
import { FloatingAssetsComponent } from './components/facilities/floating-assets/floating-assets.component';
import { PagAsaComponent } from './components/facilities/pag-asa/pag-asa.component';
import { PuertoGalleraComponent } from './components/facilities/puerto-gallera/puerto-gallera.component';
import { PuertoComponentsComponent } from './components/facilities/puerto-gallera/puerto-components/puerto-components.component';
import { ComplexSubpageComponent } from './components/facilities/bolinao/bolinao-complex/complex-subpage/complex-subpage.component';
import { DownloadableFormsComponent } from './components/education/downloadable-forms/downloadable-forms.component';
import { AboutMsiComponent } from './components/about/about-msi/about-msi.component';
import { AboutAdminComponent } from './components/about/about-admin/about-admin.component';
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
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { LaboratoriesComponent } from './components/research/laboratories/laboratories.component';
import { FacultyComponent } from './components/about/faculty/faculty.component';
import { AreasOfResearchComponent } from './components/research/areas-of-research/areas-of-research.component';
import { CoursesComponent } from './components/education/courses/courses.component';
import { BolinaoComponent } from './components/facilities/bolinao/bolinao.component';
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
import { PressComponent } from './components/news/press/press.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MuseumTabComponent } from './components/resources/museum-exhibits/museum-tab/museum-tab.component';

const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/admin-dashboard', component: AdminDashboardComponent},
  {path: 'admin/admin-home', component: AdminHomeComponent},
  {path: 'admin/admin-news', component: AdminNewsComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'About', component: AboutComponent},
  {path: 'About/admin', component: AboutAdminComponent},
  {path: 'About/about-msi', component: AboutMsiComponent},
  {path: 'About/faculty', component: FacultyComponent},
  {path: 'About/About-the-director', component: AboutTheDirectorComponent},
  {path: 'Academics', component: EducationComponent},
  {path: 'Academics/courses-offered', component: CoursesComponent},
  {path: 'Academics/downloadable-forms', component: DownloadableFormsComponent},
  {path: 'Research', component: ResearchComponent},
  {path: 'Research/areas-of-research', component: AreasOfResearchComponent},
  {path: 'Research/laboratories', component: LaboratoriesComponent},
  {path: 'Research/laboratories/:name', component: LabpageComponent},
  {path: 'Facilities', component: FacilitiesComponent},
  {path: 'Facilities/bolinao-marine-lab', component: BolinaoComponent},
  {path: 'Facilities/puerto-galera-station', component: PuertoGalleraComponent},
  {path: 'Facilities/puerto-galera-station/components', component: PuertoComponentsSubpageComponent},
  {path: 'Facilities/pag-asa-marine-station', component: PagAsaComponent},
  {path: 'Facilities/floating-assets', component: FloatingAssetsComponent},
  {path: 'Facilities/bolinao-marine-lab/bml-complex', component: ComplexSubpageComponent},
  {path: 'Extension', component: ExtensionComponent},
  {path: 'Extension/trainings', component: TrainingsComponent},
  {path: 'Extension/community-outreach', component: CommunityOutreachComponent},
  {path: 'Extension/gallery', component: GalleryComponent},
  {path: 'Extension/gallery/:name', component: ImagesTabComponent},
  {path: 'Resources', component: ResourcesComponent},
  {path: 'Resources/library', component: LibraryComponent},
  {path: 'Resources/publication', component: PublicationComponent},
  {path: 'Resources/collections', component: CollectionComponent},
  {path: 'Resources/museum-&-exhibits', component: MuseumExhibitsComponent},
  {path: 'Resources/museum-&-exhibits/:name', component: MuseumTabComponent},
  {path: 'Resources/collections/herbarium', component: HerbariumComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'News', component: NewsComponent},
  {path: 'News/content/:name', component: NewsContentComponent},
  {path: 'News/news-headlines', component: MoreNewsComponent},
  {path: 'News/Announcement', component: AnnouncementComponent},
  {path: 'News/Announcement/:name', component: AnnouncementContentComponent},
  {path: 'Research/Research-projects-and-highlights', component: ResearchProjectComponent},
  {path: 'Research/Research-projects-and-highlights/content', component: ProjectContentComponent},
  {path: 'News/vacancies-&-opportunities/:name', component: VacanciesOppComponent},
  {path: 'News/Vacancies-and-Opportunities/more', component: MoreVacanciesComponent},
  {path: 'News/press-coverage-headlines', component: PressComponent},
  {path: 'News/press-coverage-headlines/:name', component: PressContentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
