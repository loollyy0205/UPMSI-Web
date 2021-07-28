import { SafePipe } from './shared/SafePipe';
import { AboutMsiComponent } from './components/about/about-msi/about-msi.component';
import { InstituteObjectivesComponent } from './components/about/about-msi/institute-objectives/institute-objectives.component';
import { InstituteFocusComponent } from './components/about/about-msi/institute-focus/institute-focus.component';
import { AdminMsiStaffComponent } from './components/about/about-admin/admin-msi-staff/admin-msi-staff.component';
import { AboutAdminComponent } from './components/about/about-admin/about-admin.component';
import { AuthGuard } from './shared/auth.guard';
import { MaterialModule } from './material/material.module';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgImageSliderModule } from 'ng-image-slider';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { ExtensionComponent } from './components/extension/extension.component';
import { NewsComponent } from './components/news/news.component';
import { ContactComponent } from './components/contact/contact.component';
import { MscComponent } from './components/msc/msc.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutTheDirectorComponent } from './components/about/about-the-director/about-the-director.component';
import { AnnouncementComponent } from './components/news/announcement/announcement.component';
import { ResearchComponent } from './components/research/research.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { BolinaoComponent } from './components/facilities/bolinao/bolinao.component';
import { CoursesComponent } from './components/education/courses/courses.component';
import { AreasOfResearchComponent } from './components/research/areas-of-research/areas-of-research.component';
import { FacultyComponent } from './components/about/faculty/faculty.component';
import { LaboratoriesComponent } from './components/research/laboratories/laboratories.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminNavComponent } from './components/admin/admin-nav/admin-nav.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminNewsComponent } from './components/admin/admin-news/admin-news.component';
import { GalleryComponent } from './components/extension/gallery/gallery.component';
import { ImageDialogComponent } from './components/extension/gallery/image-dialog/image-dialog.component';
import { ImagesTabComponent } from './components/extension/gallery/images-tab/images-tab.component';
import { VacanciesOppComponent } from './components/news/vacancies-opp/vacancies-opp.component';
import { MoreVacanciesComponent } from './components/news/vacancies-opp/more-vacancies/more-vacancies.component';
import { ResearchProjectComponent } from './components/news/research-project/research-project.component';
import { MoreNewsComponent } from './components/news/more-news/more-news.component';
import { NewsContentComponent } from './components/news/news-content/news-content.component';
import { AnnouncementContentComponent } from './components/news/announcement-content/announcement-content.component';
import { LibraryComponent } from './components/resources/library/library.component';
import { FacilitiesDialogComponent } from './components/facilities/facilities-dialog/facilities-dialog.component';
import { HomepageNewsComponent } from './components/home/homepage-news/homepage-news.component';
import { ProjectContentComponent } from './components/news/research-project/project-content/project-content.component';
import { LabpageComponent } from './components/research/labpage/labpage.component';
import { BolinaoHeaderComponent } from './components/facilities/bolinao/bolinao-header/bolinao-header.component';
import { BolinaoFacilitiesComponent } from './components/facilities/bolinao/bolinao-facilities/bolinao-facilities.component';
import { BolinaoComplexComponent } from './components/facilities/bolinao/bolinao-complex/bolinao-complex.component';
import { BolinaoContactComponent } from './components/facilities/bolinao/bolinao-contact/bolinao-contact.component';
import { NewsBranchComponent } from './components/news/news-branch/news-branch.component';
import { AnnouncementBranchComponent } from './components/news/announcement-branch/announcement-branch.component';
import { PressBranchComponent } from './components/news/press-branch/press-branch.component';
import { PressComponent } from './components/news/press/press.component';
import { HomeBannerComponent } from './components/home/home-banner/home-banner.component';
import { DownloadableFormsComponent } from './components/education/downloadable-forms/downloadable-forms.component';
import { LabpageGalleryComponent } from './components/research/labpage/labpage-gallery/labpage-gallery.component';
import { LabpageContactComponent } from './components/research/labpage/labpage-contact/labpage-contact.component';
import { ComplexSubpageComponent } from './components/facilities/bolinao/bolinao-complex/complex-subpage/complex-subpage.component';
import { PuertoGalleraComponent } from './components/facilities/puerto-gallera/puerto-gallera.component';
import { PuertoComponentsComponent } from './components/facilities/puerto-gallera/puerto-components/puerto-components.component';
import { PuertoHeaderComponent } from './components/facilities/puerto-gallera/puerto-header/puerto-header.component';
import { PuertoFocusComponent } from './components/facilities/puerto-gallera/puerto-focus/puerto-focus.component';
import { PuertoLocationComponent } from './components/facilities/puerto-gallera/puerto-location/puerto-location.component';
import { PagAsaComponent } from './components/facilities/pag-asa/pag-asa.component';
import { PagAsaHeaderComponent } from './components/facilities/pag-asa/pag-asa-header/pag-asa-header.component';
import { PagAsaLocationComponent } from './components/facilities/pag-asa/pag-asa-location/pag-asa-location.component';
import { PagAsaObjectivesComponent } from './components/facilities/pag-asa/pag-asa-objectives/pag-asa-objectives.component';
import { PagOutputComponent } from './components/facilities/pag-asa/pag-output/pag-output.component';
import { FloatingAssetsComponent } from './components/facilities/floating-assets/floating-assets.component';
import { PuertoComponentsSubpageComponent } from './components/facilities/puerto-gallera/puerto-components/puerto-components-subpage/puerto-components-subpage.component';
import { PuertoOutreachComponent } from './components/facilities/puerto-gallera/puerto-components/puerto-components-subpage/puerto-outreach/puerto-outreach.component';
import { PressContentComponent } from './components/news/press-content/press-content.component';
import { TrainingsComponent } from './components/extension/trainings/trainings.component';
import { TrainingsBranchComponent } from './components/extension/trainings-branch/trainings-branch.component';
import { CommunityOutreachComponent } from './components/extension/community-outreach/community-outreach.component';
import { GalleryNavComponent } from './components/extension/gallery/gallery-nav/gallery-nav.component';
import { ShipAssetsComponent } from './components/facilities/floating-assets/ship-assets/ship-assets.component';
import { CollectionComponent } from './components/resources/collection/collection.component';
import { PublicationComponent } from './components/resources/publication/publication.component';
import { PublicationListComponent } from './components/resources/publication/publication-list/publication-list.component';
import { HerbariumComponent } from './components/resources/collection/herbarium/herbarium.component';
import { MuseumExhibitsComponent } from './components/resources/museum-exhibits/museum-exhibits.component';
import { MuseumDialogComponent } from './components/resources/museum-exhibits/museum-dialog/museum-dialog.component';
import { MuseumTabComponent } from './components/resources/museum-exhibits/museum-tab/museum-tab.component';
import { FacultyDialogComponent } from './components/about/faculty/faculty-dialog/faculty-dialog.component';
import { AcademicsComponent } from './components/education/academics/academics.component';
import { AcadFocusComponent } from './components/education/academics/acad-focus/acad-focus.component';
import { MNLPComponent } from './components/resources/collection/mnlp/mnlp.component';
import { RVAComponent } from './components/resources/collection/rva/rva.component';
import { VisionMissionComponent } from './components/about/about-msi/vision-mission/vision-mission.component';
import { MoreStudNookComponent } from './components/education/studnook/more-studnook/more-studnook.component';
import { StudNookComponent } from './components/education/studnook/studnook.component';
import { MobileNavComponent } from './components/nav/mobile-nav/mobile-nav.component';
import { ProjectBasedRAComponent } from './components/about/about-admin/admin-msi-staff/project-based-ra/project-based-ra.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    AboutComponent,
    EducationComponent,
    ExtensionComponent,
    NewsComponent,
    ContactComponent,
    MscComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    AboutTheDirectorComponent,
    AnnouncementComponent,
    ResearchComponent,
    ResourcesComponent,
    FacilitiesComponent,
    BolinaoComponent,
    CoursesComponent,
    AreasOfResearchComponent,
    FacultyComponent,
    LaboratoriesComponent,
    AdminComponent,
    AdminNavComponent,
    AdminDashboardComponent,
    AdminHomeComponent,
    AdminNewsComponent,
    GalleryComponent,
    ImageDialogComponent,
    ImagesTabComponent,
    VacanciesOppComponent,
    MoreVacanciesComponent,
    ResearchProjectComponent,
    MoreNewsComponent,
    NewsContentComponent,
    AnnouncementContentComponent,
    LibraryComponent,
    FacilitiesDialogComponent,
    HomepageNewsComponent,
    ProjectContentComponent,
    LabpageComponent,
    BolinaoHeaderComponent,
    BolinaoFacilitiesComponent,
    BolinaoComplexComponent,
    BolinaoContactComponent,
    NewsBranchComponent,
    AnnouncementBranchComponent,
    PressBranchComponent,
    PressComponent,
    HomeBannerComponent,
    AboutAdminComponent,
    AdminMsiStaffComponent,
    InstituteObjectivesComponent,
    InstituteFocusComponent,
    AboutMsiComponent,
    DownloadableFormsComponent,
    LabpageGalleryComponent,
    LabpageContactComponent,
    ComplexSubpageComponent,
    PuertoGalleraComponent,
    PuertoComponentsComponent,
    PuertoHeaderComponent,
    PuertoFocusComponent,
    PuertoLocationComponent,
    PagAsaComponent,
    PagAsaHeaderComponent,
    PagAsaLocationComponent,
    PagAsaObjectivesComponent,
    PagOutputComponent,
    FloatingAssetsComponent,
    PuertoComponentsSubpageComponent,
    PuertoOutreachComponent,
    PressContentComponent,
    TrainingsComponent,
    TrainingsBranchComponent,
    CommunityOutreachComponent,
    GalleryNavComponent,
    ShipAssetsComponent,
    CollectionComponent,
    PublicationComponent,
    PublicationListComponent,
    HerbariumComponent,
    MuseumExhibitsComponent,
    MuseumDialogComponent,
    MuseumTabComponent,
    FacultyDialogComponent,
    AcademicsComponent,
    AcadFocusComponent,
    MNLPComponent,
    RVAComponent,
    VisionMissionComponent,
    StudNookComponent,
    MoreStudNookComponent,
    MobileNavComponent,
    ProjectBasedRAComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    IvyCarouselModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireStorageModule,
    AngularFireModule,
    NgImageSliderModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC0vgMf-vXSrsIVRNUE7STpC2zcENy125s",
      authDomain: "upmsi-d03af.firebaseapp.com",
      databaseURL: "https://upmsi-d03af-default-rtdb.firebaseio.com",
      projectId: "upmsi-d03af",
      storageBucket: "upmsi-d03af.appspot.com",
      messagingSenderId: "212307385559",
      appId: "1:212307385559:web:fd78a434040853b6632492"
    }),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
