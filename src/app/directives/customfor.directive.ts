import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomfor]',
})
export class CustomforDirective {
  constructor(
    private templateRef: TemplateRef<any>, //TemplateRef allows us to access the template of the element that uses the directive
    private viewContainerRef: ViewContainerRef //ViewContainerRef allows us to access the ViewContainer of the element that uses the directive
  ) {}
  @Input() set appCustomfor(arr: string[]) {
    for (let i = 0; i < arr.length; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef,{$implicit:arr[i],index:i});// implicit is a reserved keyword that allows us to access the current item in the array . so that we can send the values of any array sent to us one by one to the template
    }
  }
}
