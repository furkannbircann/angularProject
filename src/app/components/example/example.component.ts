import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnChanges {

  @Input() title: string = 'Default Title';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Life Cycle 1.step -> ngOnChanges', changes); //@Input() value change detection
  }
  names: string[] = ['John', 'Doe', 'Jane', 'Doe'];
  name: string = 'John Doe';
  date : Date = new Date();
}
