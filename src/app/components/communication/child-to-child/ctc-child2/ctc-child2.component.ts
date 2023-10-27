import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ctc-child2',
  templateUrl: './ctc-child2.component.html',
  styleUrls: ['./ctc-child2.component.scss']
})
export class CtcChild2Component {
  @Input() firstData: string = '';
}
