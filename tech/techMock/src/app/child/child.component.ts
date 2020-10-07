import { Component, Input } from '@angular/core';

@Component({
  selector: 'child-component',
  template: `
      Hi {{ childProperty }}
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() childProperty: string;

  constructor() { }

}