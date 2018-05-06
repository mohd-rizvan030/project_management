import { Injectable } from '@angular/core';
import { constants } from '../utils/constants'
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
const API_URL = environment.apiURL;
@Injectable()
export class ProjectsService {


  constructor(private httpClient: HttpClient) { }

// Get All Projects
  getProjects(){
  return this.httpClient.get(API_URL +"/projects")
    .subscribe(
      (response) => {
      return response;
    },
      (error)=>{
      console.log(error);
    })
  }
}
