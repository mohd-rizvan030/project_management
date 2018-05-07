import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
const API_URL = environment.apiURL;

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {
  project;
  project_id;
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient ) {
    this.project_id = this.route.params
    this.getProject(this.project_id)
  }

  getProject(id){
    this.http.get(API_URL +"/projects/" + id._value.id)
      .subscribe(
        (response) => {
        this.project = response
      },
        (error)=>{
        console.log(error);
    })
  }

  updateProject(projectParams){
    this.http.put(API_URL + "/projects/" + this.project_id._value.id, {project: { name: projectParams.name , description: projectParams.description } })
      .subscribe(
        (response) => {
          console.log("Project Created Successfully")
          this.router.navigate(['projects']);
      },
       (error)=>{
        console.log(error);
      })
  }
  ngOnInit() {
  }

}
