import { MaterialModule } from './material/material.module';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    IvyCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
