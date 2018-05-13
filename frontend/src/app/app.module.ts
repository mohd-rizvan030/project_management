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
import { TodoAssignmentComponent } from './todo-assignment/todo-assignment.component';
import { AdminComponent } from './admin/admin.component';
import { UpdateTodoStatusComponent } from './update-todo-status/update-todo-status.component';
import { FooterComponent } from './footer/footer.component';
import { GoogleChartComponent } from './google-chart/google-chart.component';
import { ProjectChartComponent } from './project-chart/project-chart.component';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
const appRoutes:Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'projects/:id/edit',
    component: UpdateProjectComponent
  },
  {
    path: 'projects/:id/new-todo',
    component: NewTodoComponent
  },
  {
    path: 'projects/:id',
    component: ProjectComponent
  },
  {
    path: 'projects-new',
    component: NewProjectComponent
  },

  {
    path: 'projects',
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
    TodoAssignmentComponent,
    AdminComponent,
    UpdateTodoStatusComponent,
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
  providers: [ ProjectsService, UserService, FlashMessagesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
