import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url = 'http://localhost:3000'
  constructor(private _http: HttpClient) { }

  getTask(){
    return this._http.get<any>(this.url + '/task')
  }

  getTaskPrivate(){
    return this._http.get<any>(this.url + '/private-task')
  }

}
