import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './../services/projects.service';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
const API_URL = environment.apiURL;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  title = "Project List"
  projects;
  self = this
  constructor(service: ProjectsService, private http: HttpClient, private router: Router) {
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

  ngOnInit() {
  }

}
