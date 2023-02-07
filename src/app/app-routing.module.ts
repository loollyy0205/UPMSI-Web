// import { SearchComponent } from './components/search/search.component';
import { RVAComponent } from './components/resources/collection/rva/rva.component';
import { MNLPComponent } from './components/resources/collection/mnlp/mnlp.component';
import { AcademicsComponent } from './components/education/academics/academics.component';
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
import { LaboratoriesComponent } from './components/research/laboratories/laboratories.component';
import { FacultyComponent } from './components/about/faculty/faculty.component';
import { AreasOfResearchComponent } from './components/research/areas-of-research/areas-of-research.component';
import { CoursesComponent } from './components/education/courses/courses.component';
import { BolinaoComponent } from './components/facilities/bolinao/bolinao.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ResearchComponent } from './components/research/research.component';
import { AnnouncementComponent } from './components/news/announcement/announcement.component';
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
import { MoreStudNookComponent } from './components/education/studnook/more-studnook/more-studnook.component';
import { StudNookComponent } from './components/education/studnook/studnook.component';
import { MoreScicommComponent } from './components/news/more-scicomm/more-scicomm.component';
import { ScicommContentComponent } from './components/news/scicomm-content/scicomm-content.component';
import { WebinarComponent } from './components/resources/webinar/webinar.component';
import { WebinarContentComponent } from './components/resources/webinar-content/webinar-content.component';
import { AlanContentComponent } from './components/news/alan-content/alan-content.component';
import { MoreAlanComponent } from './components/news/more-alan/more-alan.component';
import { EddyContentComponent } from './components/news/eddy-content/eddy-content.component';
import { CharlonContentComponent } from './components/news/charlon-content/charlon-content.component';
import { HerbariumContentComponent } from './components/news/herbarium-content/herbarium-content.component';
import { ReportContentComponent } from './components/news/report-content/report-content.component';
import { MastersFormsComponent } from './components/education/masters/masters-forms.component';
import { PhdFormsComponent } from './components/education/phd/phd-forms.component';
import { PmtmemFormsComponent } from './components/education/pmtmem/pmtmem-forms.component';
import { SeaContentComponent } from './components/news/sea-content/sea-content.component';
import { MoreSeaComponent } from './components/news/more-sea/more-sea.component';
import { BlueBeatComponent } from './components/Blue-Beat-Initiative/blue-beat.component';





const routes: Routes = [
  // {path: '', redirectTo: '/Home', pathMatch: 'full'},
  // {path: 'admin', component: AdminComponent},
  // {path: 'admin/admin-dashboard', component: AdminDashboardComponent},
  // {path: 'admin/admin-home', component: AdminHomeComponent},
  // {path: 'admin/admin-news', component: AdminNewsComponent},
  {path: '', component: HomeComponent},
  // {path: 'Search', component: SearchComponent},
  {path: 'About', component: AboutComponent},
  {path: 'About/admin', component: AboutAdminComponent},
  {path: 'About/about-msi', component: AboutMsiComponent},
  {path: 'About/faculty', component: FacultyComponent},
  // {path: 'About/About-the-director', component: AboutTheDirectorComponent},
  {path: 'Academics', component: EducationComponent},
  {path: 'Academics/msi-academics', component: AcademicsComponent},
  {path: 'Academics/courses-offered', component: CoursesComponent},
  {path: 'Academics/downloadable-forms', component: DownloadableFormsComponent},
  {path: 'Academics/studnook/more', component: MoreStudNookComponent},
  {path: 'Academics/studnook/:name', component: StudNookComponent},
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
  {path: 'Resources/collections/marine-natural-products-legacy-collection', component: MNLPComponent},
  {path: 'Resources/collections/RVA-Marine-Microalgal-Culture-collection-RVA-MMCC', component: RVAComponent},
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
  {path: 'News/scicomm/:name', component: ScicommContentComponent},
  {path: 'News/scicomm-headlines', component: MoreScicommComponent},
  {path: 'Resources/webinar', component: WebinarComponent},
  {path: 'Resources/webinar/:name', component: WebinarContentComponent},
  {path: 'News/alan/:name', component: AlanContentComponent},
  {path: 'News/alan-headlines', component: MoreAlanComponent},
  {path: 'News/eddy/:name', component: EddyContentComponent},
  {path: 'News/charlon/:name', component: CharlonContentComponent},
  {path: 'News/herbarium/:name', component: HerbariumContentComponent},
  {path: 'News/report/:name', component: ReportContentComponent},
  {path: 'Academics/masters', component: MastersFormsComponent},
  {path: 'Academics/phd', component: PhdFormsComponent},
  {path: 'Academics/pmtmem', component: PmtmemFormsComponent},
  {path: 'News/sea/:name', component: SeaContentComponent},
  {path: 'News/sea-headlines', component: MoreSeaComponent},
  {path: 'Blue-Beat-Initiative', component: BlueBeatComponent},
 
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
