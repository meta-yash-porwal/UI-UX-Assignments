import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.css']
})
export class TaskComponentComponent implements OnInit {

  constructor() { }

  @Input() taskItem: Object | undefined;

  tempItem: any;

  ngOnChanges(){
    this.addTaskToArr()
  }

  ngOnInit(): void {
  }
  updateBtnStatus = true;

  newTask: any = [{
    taskTitle: "New 1",
    taskDescription: "n1 This is sample description and you can check from this.......",
    taskPriority: "High",
    taskStatus: "New"
  }];

  inProgressTask: any = [{
    taskTitle: "In Progress 1",
    taskDescription: "ip1 This is sample description and you can check from this.......",
    taskPriority: "High",
    taskStatus: "In Progress"
  }, {
    taskTitle: "In Progress 2",
    taskDescription: "ip2 This is sample description and you can check from this.......",
    taskPriority: "Medium",
    taskStatus: "In Progress"
  }];

  completedTask: any = [{
    taskTitle: "Completed 1",
    taskDescription: "c1 This is sample description and you can check from this.......",
    taskPriority: "High",
    taskStatus: "Completed"
  }];

  addTaskToArr() {
    if (this.taskItem !== undefined) {
      this.tempItem = this.taskItem;

      if (this.tempItem.taskStatus == "New") {
        this.newTask.push(this.taskItem);
      } else if (this.tempItem.taskStatus == "In Progress") {
        this.inProgressTask.push(this.taskItem);
      } else if (this.tempItem.taskStatus == "Completed") {
        this.completedTask.push(this.taskItem);
      }
      this.tempItem = {};
      this.taskItem = undefined;
      console.log("Status ", this.tempItem.taskStatus);
      console.log("New ", this.newTask);
      console.log("In Progress ", this.inProgressTask);
      console.log("Completed ", this.completedTask);
    }
  }

  deleteNewTask(i: any) {
    this.newTask.splice(i, 1);
    console.log("Deleted New task: ", i);
  }

  deleteInProgressTask(i: any) {
    this.inProgressTask.splice(i, 1);
    console.log("Deleted In Progress task: ", i);
  }

  deleteCompletedTask(i: any) {
    this.completedTask.splice(i, 1);
    console.log("Deleted Completed task: ", i);
  }
  updateTaskItem: any = {}
  updatePrevIndex: any;
  updateTaskPrevStatus: any;

  // on clicking the edit button
  editTask(i: any, type: String) {
    this.updatePrevIndex = i;
    this.updateTaskPrevStatus = type == "new" ? "New" : "In Progress";
    console.log("XX", this.updateTaskItem);

    console.log("XXId:", this.updatePrevIndex, " Status:", this.updateTaskPrevStatus, " Item: ", this.updateTaskItem);
    if (type == "new") {
      this.updateTaskItem.taskTitle = this.newTask[i].taskTitle;
      this.updateTaskItem.taskDescription = this.newTask[i].taskDescription;
      this.updateTaskItem.taskCreationDate = this.newTask[i].taskCreationDate;
      this.updateTaskItem.taskCompletionDate = this.newTask[i].taskCompletionDate;
      this.updateTaskItem.taskStatus = this.newTask[i].taskStatus;
      this.updateTaskItem.taskPriority = this.newTask[i].taskPriority;
      console.log("Task", this.updateTaskItem);
      this.updatePrevIndex = i;
      this.updateTaskPrevStatus = "New";
    } else if (type = "inProgress") {
      this.updateTaskItem.taskTitle = this.inProgressTask[i].taskTitle;
      this.updateTaskItem.taskDescription = this.inProgressTask[i].taskDescription;
      this.updateTaskItem.taskCreationDate = this.inProgressTask[i].taskCreationDate;
      this.updateTaskItem.taskCompletionDate = this.inProgressTask[i].taskCompletionDate;
      this.updateTaskItem.taskStatus = this.inProgressTask[i].taskStatus;
      this.updateTaskItem.taskPriority = this.inProgressTask[i].taskPriority;
      console.log("Task", this.updateTaskItem);
      this.updatePrevIndex = i;
      this.updateTaskPrevStatus = "In Progress";
    }
  }

  // on clicking the update button
  updateTask() {
    this.updateBtnStatus = !this.updateBtnStatus;
    console.log("Id:", this.updatePrevIndex, " Status:", this.updateTaskPrevStatus, " Item: ", this.updateTaskItem);
    //removing previous
    if (this.updateTaskPrevStatus == "New") {
      this.deleteNewTask(this.updatePrevIndex)
    } else if (this.updateTaskPrevStatus = "In Progress") {
      this.deleteInProgressTask(this.updatePrevIndex)
    }
    //adding new
    if (this.updateTaskItem.taskStatus == "New") {
      this.newTask.push(this.updateTaskItem)
    } else if (this.updateTaskItem.taskStatus == "In Progress") {
      this.inProgressTask.push(this.updateTaskItem)
    } else if (this.updateTaskItem.taskStatus == "Completed") {
      this.completedTask.push(this.updateTaskItem)
    }
  }
}
