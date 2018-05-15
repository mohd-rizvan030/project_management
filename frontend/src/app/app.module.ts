import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsService } from './services/projects.service';
import { UserService } from './services/user.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ProjectComponent } from './project/project.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { AdminComponent } from './admin/admin.component';
import { FooterComponent } from './footer/footer.component';
import { GoogleChartComponent } from './google-chart/google-chart.component';
import { ProjectChartComponent } from './project-chart/project-chart.component';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { ResourceAuthGuard } from './resource-auth.guard';
import { AdminAuthGuard } from './admin-auth.guard';
const appRoutes:Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    canActivate: [ResourceAuthGuard],
    component: DashboardComponent
  },
  {
    path: 'admin',
    canActivate: [AdminAuthGuard],
    component: AdminComponent
  },
  {
    path: 'projects/:id/edit',
    canActivate: [AdminAuthGuard],
    component: UpdateProjectComponent
  },
  {
    path: 'projects/:id/new-todo',
    canActivate: [AdminAuthGuard],
    component: NewTodoComponent
  },
  {
    path: 'projects/:id',
    canActivate: [AdminAuthGuard],
    component: ProjectComponent
  },
  {
    path: 'projects-new',
    canActivate: [AdminAuthGuard],
    component: NewProjectComponent
  },

  {
    path: 'projects',
    canActivate: [AdminAuthGuard],
    component: ProjectsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    ProjectsComponent,
    LoginComponent,
    ProjectComponent,
    NewProjectComponent,
    UpdateProjectComponent,
    NewTodoComponent,
    AdminComponent,
    FooterComponent,
    GoogleChartComponent,
    ProjectChartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ ProjectsService, UserService, FlashMessagesService, ResourceAuthGuard, AdminAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
