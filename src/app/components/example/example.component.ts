import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {
  names: string[] = ['John', 'Doe', 'Jane', 'Doe'];
  name: string = 'John Doe';
  date : Date = new Date();
}
