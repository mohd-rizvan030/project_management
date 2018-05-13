import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { FlashMessagesService } from 'angular2-flash-messages';
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
  editable;
  currentTodo;
  showModal;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private flashMessage: FlashMessagesService) {
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
        this.flashMessage.show('Error! ' + error["error"]["error"], { cssClass: 'alert-danger', timeout: 4000 });
    })
  }

  getProjectResources(projectId){
    this.http.get(API_URL +"/get_project_resources?project_id="+projectId)
      .subscribe(
        (response) => {
        this.projectResources = response
      },
        (error)=>{
        this.flashMessage.show('Error! ' + error["error"]["error"], { cssClass: 'alert-danger', timeout: 4000 });
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
          this.flashMessage.show('Todo deleted Successfully!', { cssClass: 'alert-success', timeout: 4000 });
          this.getProjectTodos(projectId)
        },
          (error)=>{
          this.flashMessage.show('Error! ' + error["error"]["error"], { cssClass: 'alert-danger', timeout: 4000 });
      })
  }

  addResource(resouce){
    this.http.post(API_URL + "/project_resources", { project_resource: { user_id: resouce.selectedValue.id , project_id: this.projectId._value.id } })
      .subscribe(
        (response) => {
          this.getProjectResources(this.projectId._value.id);
          this.flashMessage.show('Resource added Successfully!', { cssClass: 'alert-success', timeout: 4000 });
      },
       (error)=>{
        this.flashMessage.show('Error! ' + error["error"]["error"], { cssClass: 'alert-danger', timeout: 4000 });
      })
  }

  removeResourceFromProject(resourceId, projectId){
    if (confirm("Are you sure?"))
      this.http.get(API_URL +"/remove_project_resource/?user_id=" + resourceId+"&project_id="+projectId)
        .subscribe(
          (response) => {
          this.flashMessage.show('Resource removed from project Successfully!', { cssClass: 'alert-success', timeout: 4000 });
          this.getProjectResources(projectId)
        },
          (error)=>{
          this.flashMessage.show('Error! ' + error["error"]["error"], { cssClass: 'alert-danger', timeout: 4000 });
      })
  }

  getResourcesForTodo(projectId,todo){
    this.getProjectResources(projectId);
  }

  showTodoAssignmentModal(todo){
    this.currentTodo = todo;
    this.showModal = true;
  }

  closeModal(){
    this.showModal = false;
  }

  assignAResource(resource){
    this.showModal =false;
    let data = { todo_assignment: { user_id: resource.selectedValue.id , todo_id: this.currentTodo.id } }
    if(this.currentTodo.resource)
      this.http.put(API_URL + "/todo_assignments/"+this.currentTodo.todo_assignment_id, data)
        .subscribe(
          (response:Response) => {
            this.flashMessage.show('Todo assigned to resource Successfully!', { cssClass: 'alert-success', timeout: 4000 });
            this.currentTodo.resource = response["todo"].resource;
        },
         (error)=>{
          this.flashMessage.show('Error! ' + error["error"]["error"], { cssClass: 'alert-danger', timeout: 4000 });
        })
    else
      this.http.post(API_URL + "/todo_assignments", data)
        .subscribe(
          (response) => {
            this.flashMessage.show('Todo assigned to resource Successfully!', { cssClass: 'alert-success', timeout: 4000 });
            this.currentTodo.resource = response["todo"].resource;
        },
         (error)=>{
          this.flashMessage.show('Error! ' + error["error"]["error"], { cssClass: 'alert-danger', timeout: 4000 });
        })
  }

  ngOnInit() {
  }

}
