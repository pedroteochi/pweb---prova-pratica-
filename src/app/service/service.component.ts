import { Component, OnInit } from '@angular/core';
import { ToDo } from '../service';
import { ToDoService } from '../service';

@Component({
  selector: 'app-to-do',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {


  todo: Service[]=[];

  constructor(private todoService: ToDoService) { }

  ngOnInit(): void {
    this.todoService.getToDos()
      .subscribe(todo => this.todo = todo);
  }

}