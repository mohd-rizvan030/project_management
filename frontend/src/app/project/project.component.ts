import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
const API_URL = environment.apiURL;
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project_id;
  project:Object;
  projectResources;
  todos;
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient ) {
    this.project_id = this.route.params
    this.getProject(this.project_id)
    this.getProjectResources(this.project_id)
    this.getProjectTodos(this.project_id)
  }

  getProject(id){
    this.http.get(API_URL +"/projects/" + id._value.id)
      .subscribe(
        (response) => {
        this.project = response
      },
        (error)=>{
        console.log(error);
    })
  }

  getProjectResources(project_id){
    this.http.get(API_URL +"/get_project_resources?id="+project_id._value.id)
      .subscribe(
        (response) => {
        this.projectResources = response
      },
        (error)=>{
        console.log(error);
    })
  }


  getProjectTodos(project_id){
    this.http.get(API_URL +"/todos?project_id="+project_id._value.id)
      .subscribe(
        (response) => {
        this.todos = response
      },
        (error)=>{
        console.log(error);
    })
  }

  ngOnInit() {
  }

}
