import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

export interface tasks {
  id: number;
  name: string;
  toDo: number;
  estimate: number;
}

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"]
})
export class TasksComponent implements OnInit {
  constructor() {}

  dataSourceMock: tasks[] = [
    { id: 1, name: "task 1", toDo: 1, estimate: 2 },
    { id: 2, name: "task 2", toDo: 1, estimate: 2 },
    {
      id: 3,
      name: "this is a lot od text designed to test the table's ability to wrap text",
      toDo: 1,
      estimate: 2
    },
    { id: 4, name: "task 4", toDo: 1, estimate: 2 },
    { id: 5, name: "task 5", toDo: 1, estimate: 2 }
  ];

  dataSource = new MatTableDataSource(this.dataSourceMock);
  displayedColumns: string[] = ["id", "name", "toDo", "estimate", "actions"];
  ngOnInit() {}
}
