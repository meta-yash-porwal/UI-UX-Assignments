import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-custom-navbar',
  templateUrl: './custom-navbar.component.html',
  styleUrls: ['./custom-navbar.component.css']
})

export class CustomNavbarComponent implements OnInit {

  taskItem: Object | undefined;

  public show: boolean = false;
  public buttonName: any = 'Add Task';

  taskTemp: any;
  taskForm: FormGroup;
  submitBtnStatus = true;

  constructor(private formBuilder: FormBuilder) {
    //creating group of form elements
    this.taskForm = formBuilder.group({
      taskTitle: new FormControl(),
      taskDescription: new FormControl(),
      taskStatus: new FormControl(),
      taskCreationDate: new FormControl(),
      taskCompletionDate: new FormControl(),
      taskPriority: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show)
      this.buttonName = "Hide Form";
    else
      this.buttonName = "Add Task";
  }

  addTask() {
    this.submitBtnStatus = !this.submitBtnStatus;
    this.taskItem = this.taskForm.value
    this.taskTemp = this.taskItem
    if (this.taskTemp.taskTitle == undefined) {
      alert("Add task details!")
    }
    else if (this.taskTemp.taskStatus == undefined) {
      alert("Add task status !")
    }
    else {
      this.taskForm.reset();
      alert("Task Added")
    }
  }

}

