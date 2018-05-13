import { Component, OnInit, Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { FlashMessagesService } from 'angular2-flash-messages';
const API_URL = environment.apiURL;

@Component({
  selector: 'app-update-todo-status',
  templateUrl: './update-todo-status.component.html',
  styleUrls: ['./update-todo-status.component.css']
})
export class UpdateTodoStatusComponent implements OnInit {
  @Input() todo;
  @Input() showModal:boolean;
  @Input() editable;
  statusList;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private flashMessage: FlashMessagesService) {
    this.statusList = [{name: "New", value: 0}, {name: "In Progress", value: 1}, {name: "Done", value: 2}];
  }

  updateTodoStatus(status){
    this.showModal =false;
    this.editable =false;
    let data = { todo: { status: status.selectedValue.value } }
    this.http.put(API_URL + "/todos/"+this.todo.id, data)
      .subscribe(
        (response:Response) => {
          this.editable = false;
          this.todo.status = response["status"];
          console.log("Todo status updated successfully");
      },
       (error)=>{
        this.editable = false;
        console.log(error);
      })
  }

  ngOnInit() {
  }

}
