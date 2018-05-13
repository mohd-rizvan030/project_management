import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { FlashMessagesService } from 'angular2-flash-messages';
const API_URL = environment.apiURL;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardTitle = "Welcome to Dashboard"
  myTodos;
  editable;
  currentTodo;
  showModal;
  statusList;
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private flashMessage: FlashMessagesService) {
    this.statusList = [{name: "New", value: 0}, {name: "In Progress", value: 1}, {name: "Done", value: 2}];
    this.myTodos = [];
    this.editable = false;
    this.currentTodo = {};
    this.showModal = false;
    this.getMyTodos()
  }

  getMyTodos(){
    this.http.get(API_URL +"/todos?myTodos=true")
      .subscribe(
        (response) => {
        this.myTodos = response
      },
        (error)=>{
          this.flashMessage.show('Error! Some Error occured', { cssClass: 'alert-danger', timeout: 4000 });
    })
  }

  showUpdateTodoModal(todo){
    this.currentTodo = todo;
    this.showModal = true;
  }

  closeModal(){
    this.showModal = false;
  }

  updateTodoStatus(status){
    this.showModal =false;
    let data = { todo: { status: status.selectedValue.value } }
    this.http.put(API_URL + "/todos/"+this.currentTodo.id, data)
      .subscribe(
        (response:Response) => {
          this.currentTodo.status = response["status"];
          this.flashMessage.show('Status updated Successfully!', { cssClass: 'alert-success', timeout: 4000 });
      },
       (error)=>{
        this.flashMessage.show('Error! ' + error["error"]["error"], { cssClass: 'alert-danger', timeout: 4000 });
      })
  }



  ngOnInit() {
  }

}
