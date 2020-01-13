import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';

import {RouterModule} from '@angular/router';
import { AppErrorHandler } from './common/app-error-handler';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ProjectsService } from './services/projects.service';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { AdminProjectsComponent } from './admin/admin-projects/admin-projects.component';
import { LoginComponent } from './login/login.component';
import { JobitemComponent } from './jobitem/jobitem.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    BsNavbarComponent,
    HomeComponent,
    ClientComponent,
    MyProjectsComponent,
    AdminProjectsComponent,
    LoginComponent,
    JobitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'client', component: ClientComponent},
      {path: 'job-item', component: JobitemComponent},
      {path: 'login', component: LoginComponent},
      {path: 'admin/projects', component: AdminProjectsComponent}

    ])

  ],
  providers: [
    ProjectsService,
    {provide: ErrorHandler , useClass: AppErrorHandler} // config global error handler

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }