import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomif]',
})
export class CustomifDirective {
  constructor(
    private templateRef: TemplateRef<any>, //TemplateRef allows us to access the template of the element that uses the directive
    private viewContainerRef: ViewContainerRef //ViewContainerRef allows us to access the ViewContainer of the element that uses the directive
  ) {}
  @Input() set appCustomif(condition: boolean) {
    if (condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef); //createEmbeddedView allows us to create a view within the element that uses the directive
    } else {
      this.viewContainerRef.clear();//clear allows us to clear the view within the element that uses the directive
    }
  }
}
