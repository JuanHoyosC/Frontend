import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-private-task',
  templateUrl: './private-task.component.html',
  styleUrls: ['./private-task.component.css']
})
export class PrivateTaskComponent implements OnInit {

  tasks = [];
  constructor(private _task: TaskService) { }

  ngOnInit(): void {
    this._task.getTaskPrivate().subscribe(
      res=>{
        this.tasks = res
      },
      err => console.log(err)
    )
  }
}
