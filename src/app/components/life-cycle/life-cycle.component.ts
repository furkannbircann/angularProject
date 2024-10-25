import { Component , OnChanges, OnInit, DoCheck, SimpleChanges, Input, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
 /* Life Cycle Hooks */
 @Input() title: string = 'Default Title';

 constructor() {
   console.log('Life Cycle 0.step -> constructor'); //Component is created
 }

 ngOnChanges(changes: SimpleChanges): void {
   console.log('Life Cycle 1.step -> ngOnChanges', changes); //@Input() value change detection
 }

 ngOnInit(): void {
   console.log('Life Cycle 2.step -> ngOnInit'); //Component is created
 }

 ngDoCheck(): void {
   console.log('Life Cycle 3.step -> ngDoCheck'); //Change detection
 }

  ngAfterContentInit(): void {
    console.log('Life Cycle 4.step -> ngAfterContentInit'); //Component content is initialized
  }

  ngAfterContentChecked(): void {
    console.log('Life Cycle 5.step -> ngAfterContentChecked'); //Component content is checked
  }

  ngAfterViewInit(): void {
    console.log('Life Cycle 6.step -> ngAfterViewInit'); //Component view is initialized
  }

  ngAfterViewChecked(): void {
    console.log('Life Cycle 7.step -> ngAfterViewChecked'); //Component view is checked
  }

  ngOnDestroy(): void {
    console.log('Life Cycle 8.step -> ngOnDestroy'); //Component is destroyed
  }


 /* --------------------------- */
}
