import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
const API_URL = environment.apiURL;

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {
  project_id;
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private flashMessage: FlashMessagesService ) {
    this.project_id = this.route.params
  }

  createTodo(projectParams){
    this.http.post(API_URL + "/todos", {todo: { summary: projectParams.summary , description: projectParams.description, project_id: this.project_id._value.id } })
      .subscribe(
        (response) => {
          console.log("Project Created Successfully")
          this.router.navigate(['projects/' + this.project_id._value.id]);
      },
       (error)=>{
        console.log(error);
      })
  }

  ngOnInit() {
  }

}
