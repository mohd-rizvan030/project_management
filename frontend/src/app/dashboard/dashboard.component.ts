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
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private flashMessage: FlashMessagesService) {
    this.getMyTodos()
  }

  getMyTodos(){
    this.http.get(API_URL +"/todos?myTodos=true")
      .subscribe(
        (response) => {
        this.myTodos = response
      },
        (error)=>{
        console.log(error);
    })
  }

  updateTodo(todo){
    this.editable =true;
    this.currentTodo = todo;
    this.showModal = true;
  }

  ngOnInit() {
  }

}
