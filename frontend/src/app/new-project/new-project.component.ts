import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
const API_URL = environment.apiURL;

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private flashMessage: FlashMessagesService ) {

  }

  createProject(projectParams){
    this.http.post(API_URL + "/projects", {project: { name: projectParams.name , description: projectParams.description } })
      .subscribe(
        (response) => {
          console.log("Project Created Successfully")
          this.flashMessage.show('Project Created Successfully!', { cssClass: 'alert-success', timeout: 5000 });
          this.router.navigate(['projects']);
      },
       (error)=>{
        this.flashMessage.show('Error! ' + error["error"]["error"], { cssClass: 'alert-danger', timeout: 4000 });
      })
  }

  ngOnInit() {
  }

}
