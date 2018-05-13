import { Component, OnInit, Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { FlashMessagesService } from 'angular2-flash-messages';
const API_URL = environment.apiURL;

@Component({
  selector: 'app-todo-assignment',
  templateUrl: './todo-assignment.component.html',
  styleUrls: ['./todo-assignment.component.css']
})
export class TodoAssignmentComponent implements OnInit {
  @Input() todo;
  @Input() showModal:boolean;
  @Input() resources;
  @Input() projectResources;
  @Input() editable;
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private flashMessage: FlashMessagesService) {
  }

  assignAResource(resource){
    this.showModal =false;
    this.editable =false;
    let data = { todo_assignment: { user_id: resource.selectedValue.id , todo_id: this.todo.id } }
    if(this.todo.resource)
      this.http.put(API_URL + "/todo_assignments/"+this.todo.todo_assignment_id, data)
        .subscribe(
          (response:Response) => {
            this.editable = false;
            console.log("Resource assined successfully");
            this.todo.resource = response["todo"].resource;
        },
         (error)=>{
          this.editable = false;
          console.log(error);
        })
    else
      this.http.post(API_URL + "/todo_assignments", data)
        .subscribe(
          (response) => {
            this.editable = false;
            console.log("Resource assined successfully");
            this.todo.resource = response["todo"].resource;
        },
         (error)=>{
          this.editable = false;
          console.log(error);
        })
  }


  ngOnInit() {
  }

}
