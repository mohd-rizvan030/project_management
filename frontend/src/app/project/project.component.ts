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
  projectId;
  project:Object;
  projectResources;
  availableResources;
  todos;
  currentTodo;
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient ) {
    this.projectId = this.route.params;
    this.getProject(this.projectId._value.id);
    this.getProjectResources(this.projectId._value.id);
    this.getProjectTodos(this.projectId._value.id);
  }

  getProject(id){
    this.http.get(API_URL +"/projects/" + id)
      .subscribe(
        (response) => {
        this.project = response
      },
        (error)=>{
        console.log(error);
    })
  }

  getProjectResources(projectId){
    this.http.get(API_URL +"/get_project_resources?project_id="+projectId)
      .subscribe(
        (response) => {
        this.projectResources = response
      },
        (error)=>{
        console.log(error);
    })
  }

  getAvailableResourcesForProject(){
    this.http.get(API_URL +"/get_available_resources?project_id="+this.projectId._value.id)
      .subscribe(
        (response) => {
        this.availableResources = response
      },
        (error)=>{
        console.log(error);
    })
  }

  getProjectTodos(projectId){
    this.http.get(API_URL +"/todos?project_id="+projectId)
      .subscribe(
        (response) => {
        this.todos = response
      },
        (error)=>{
        console.log(error);
    })
  }

  newTodo(projectId){
    this.router.navigate(['projects/'+projectId+"/new-todo"]);
  }

  deleteTodo(todoId, projectId){
    if (confirm("Are you sure?"))
      this.http.delete(API_URL +"/todos/" + todoId)
        .subscribe(
          (response) => {
          console.log("deleted");
          this.getProjectTodos(projectId)
        },
          (error)=>{
          console.log(error);
      })
  }

  addResource(resouce){
    this.http.post(API_URL + "/project_resources", { project_resource: { user_id: resouce.selectedValue.id , project_id: this.projectId._value.id } })
      .subscribe(
        (response) => {
          this.getProjectResources(this.projectId._value.id);
          console.log("Resource added successfully")
      },
       (error)=>{
        console.log(error);
      })
  }

  removeResourceFromProject(resourceId, projectId){
    if (confirm("Are you sure?"))
      this.http.get(API_URL +"/remove_project_resource/?user_id=" + resourceId+"&project_id="+projectId)
        .subscribe(
          (response) => {
          console.log("deleted");
          this.getProjectResources(projectId)
        },
          (error)=>{
          console.log(error);
      })
  }

  getResourcesForTodo(projectId,todo){
    this.getProjectResources(projectId);
    this.currentTodo = todo;
  }

  assignAResource(resource, todo){
    this.http.post(API_URL + "/todo_assignments", { todo_assignment: { user_id: resource.selectedValue.id , todo_id: this.currentTodo.id } })
      .subscribe(
        (response) => {
          this.getProjectResources(this.projectId._value.id);
          console.log("Resource assined successfully")
      },
       (error)=>{
        console.log(error);
      })
  }


  ngOnInit() {
  }

}
