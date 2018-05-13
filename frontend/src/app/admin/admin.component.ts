import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { FlashMessagesService } from 'angular2-flash-messages';
const API_URL = environment.apiURL;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  allTodos;
  projects;
  allProjectsStatus;
  showChart:boolean;
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private flashMessage: FlashMessagesService) {
    this.allTodos = [];
    this.projects = [];
    this.showChart = false;
    this.getAllTodos();
  }

  getAllTodos(){
    this.http.get(API_URL +"/todos")
      .subscribe(
        (response) => {
        this.allTodos = response;
        this.getAllProjects(this.allTodos);
        this.getAllProjectStatus()
      },
        (error)=>{
        console.log(error);
    })
  }

  getAllProjects(todos){
    this.projects =
    Array.from(new Set(todos.map(todo => todo.project_name)))
  }

  filterProjectTodos(project, status){
    let doneTodos =  this.allTodos.filter(function (e) {
      return e.status == status &&
       e.project_name == project
    });
    return doneTodos;
  }

  getAllProjectStatus(){
    this.allProjectsStatus = [];
    for(let project of this.projects){
      let projectStatus = {};
      projectStatus["done"] = (this.filterProjectTodos(project, "Done")).length
      projectStatus["inProgress"] = (this.filterProjectTodos(project, "In progress")).length
      projectStatus["new"] = (this.filterProjectTodos(project, "New")).length
      projectStatus["projectName"] = project;
      this.allProjectsStatus.push(projectStatus);
    }
    this.showChart = true;
  }

  ngOnInit() {
  }

}
