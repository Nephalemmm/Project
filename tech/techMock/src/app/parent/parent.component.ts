import { Component } from '@angular/core';

@Component({
  selector: 'parent-component',
  template: `
    <child-component [childProperty]="parentProperty"></child-component>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent{
  parentProperty = "I come from parent"
  constructor() { }
}