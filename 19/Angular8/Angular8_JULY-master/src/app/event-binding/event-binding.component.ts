import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }
  public greeting = "";


  ngOnInit(): void {
  }
  onClick(event){
    console.log(event);
    console.log("Button Clicked")
    this.greeting = `Welcome to Angular8 ${event.type} ${event.screenX} ${event.screenY}`;
  }

}
