import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
declare var $: any; //Declare the $ variable to use Jquery
@Directive({
  selector: '[appExample]',
  //selector: '.app-example' class directive
})
export class ExampleDirective implements OnInit {
  // ElementRef allows us to access a local element within a View
  @Input() appExample: string = ''; //can use the input decorator to get a parameter to the directive

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = this.appExample; //Change the style of an html element with ElementRef
    this.elementRef.nativeElement.style.cursor = 'pointer';
    //$(this.elementRef.nativeElement).fadeOut(3000).fadeIn(3000); //Change the style of an html element with ElementRef and Jquery
  }

  @HostListener('click') //HostListener continuously listens for the html tag that uses the (appExample) directive
  onClick() {
    alert('Hello World');
  }
  
  @HostBinding('style.color') //HostBinding allows us to bind a property of the element that uses the directive
  textColor: string = 'white';
  
}
