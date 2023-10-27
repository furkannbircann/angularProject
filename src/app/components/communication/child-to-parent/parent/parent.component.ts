import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-2',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  data: string[] = [];
  getData(data: any) {
    console.log(data);
    this.data = data;
  }
}
