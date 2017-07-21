import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})

export class MyComponentComponent implements OnInit {


  x: number = 7;
  y: number = 9;
  myStr: string = "abc";

  user1 = {
    firstname : "Darth",
    lastname : "Vader"
  }

  today = new Date();

  myBoolean = true;

  myArray = [1,2,3,4,5];

  num: number = 1;

  logNum(){
    console.log('num is: ', this.num)
  };

  user2 = {
    firstName: '',
    lastName: ''
  }

  onSubmit() {
   console.log("hello")
   console.log(this.user2)
   this.user2 = {
     firstName: '',
     lastName: ''
   }
  }

  constructor() { }

  ngOnInit() {
  }

}
