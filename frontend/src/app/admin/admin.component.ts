import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
const API_URL = environment.apiURL;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  allTodos;
  projects;
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {
    this.getAllTodos();
  }

  getAllTodos(){
    this.http.get(API_URL +"/todos")
      .subscribe(
        (response) => {
        this.allTodos = response;
        this.getAllProjects(this.allTodos);
      },
        (error)=>{
        console.log(error);
    })
  }

  getAllProjects(todos){
    this.projects = todos.map(todo => todo.project_name)
  }

  filterProjectTodos(project, status){
    console.log("");
    let doneTodos =  this.allTodos.filter(function (e) {
      return e.status == status &&
       e.project_name == project
    });
    return doneTodos;
  }



  ngOnInit() {
  }

}
