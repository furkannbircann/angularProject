import { Component } from '@angular/core';

@Component({
  selector: 'app-ctc-parent',
  templateUrl: './ctc-parent.component.html',
  styleUrls: ['./ctc-parent.component.scss']
})
export class CtcParentComponent {
  firstData: string = '';
  getData(data: any) {
    console.log(data);
    this.firstData = data;
  }
}
