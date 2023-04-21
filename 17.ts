import { Component } from '@angular/core';
@Component({
  selector: 'app-my-component',
  template: ` <p>{{ myVariable }}</p> `,
})
export class MyComponent {
  myVariable: string = 'Hello, world!';
}
