import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './../services/projects.service';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
const API_URL = environment.apiURL;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  title = "Project List"
  projects;
  constructor(service: ProjectsService, private http: HttpClient, private router: Router, private flashMessage: FlashMessagesService) {
    this.getAllProjects()
  }

  getAllProjects(){
    this.http.get(API_URL +"/projects")
      .subscribe(
        (response) => {
        this.projects = response
      },
        (error)=>{
        console.log(error);
      })
  }

  goToProject(projectId){
    this.router.navigate(['projects/' + projectId]);
  }

  newProject(){
    this.router.navigate(['projects-new']);
  }

  editProject(projectId){
    this.router.navigate(['projects/' + projectId+"/edit"]);
  }

  deleteProject(projectId){
    if (confirm("Are you sure?"))
      this.http.delete(API_URL +"/projects/" + projectId)
        .subscribe(
          (response) => {
          this.flashMessage.show('Project deleted Successfully!', { cssClass: 'alert-success', timeout: 4000 });
          this.getAllProjects()
        },
          (error)=>{
          this.flashMessage.show('Error! ' + error["error"]["error"], { cssClass: 'alert-danger', timeout: 4000 });
        })

  }

  ngOnInit() {
  }

}
