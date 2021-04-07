import { AuthGuard } from './shared/auth.guard';
import { MaterialModule } from './material/material.module';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgImageSliderModule } from 'ng-image-slider';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { HttpClientModule } from '@angular/common/http';

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
import { SubpageComponent } from './components/subpage/subpage.component';
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

@NgModule({
  declarations: [
    AppComponent,
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
    SubpageComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    IvyCarouselModule,
    NgImageSliderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireStorageModule,
    AngularFireModule,
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
