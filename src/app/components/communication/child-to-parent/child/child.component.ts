import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-2',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  ngOnInit(): void {
    this.dataEvent.emit(this.data);
  }
  @Output() dataEvent: EventEmitter<string[]> = new EventEmitter<string[]>();
  data : string[] = ['a','b','c','d','e','f','g','h','i','j']
}
