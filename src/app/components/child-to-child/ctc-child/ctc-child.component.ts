import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ctc-child',
  templateUrl: './ctc-child.component.html',
  styleUrls: ['./ctc-child.component.scss']
})
export class CtcChildComponent implements OnInit {
  ngOnInit(): void {
    this.firstDataEvent.emit(this.firstData);
  }
  firstData:string = 'First Data';
  @Output() firstDataEvent:EventEmitter<string> = new EventEmitter<string>();

  }
