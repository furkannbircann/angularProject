import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ParentComponent } from './components/communication/parent-to-child/parent/parent.component';
import { ChildComponent } from './components/communication/parent-to-child/child/child.component';
import { ParentComponent as ParentComponent2 } from './components/communication/child-to-parent/parent/parent.component';
import { ChildComponent as ChildComponent2 } from './components/communication/child-to-parent/child/child.component';
import { CtcChildComponent } from './components/communication/child-to-child/ctc-child/ctc-child.component';
import { CtcChild2Component } from './components/communication/child-to-child/ctc-child2/ctc-child2.component';
import { CtcParentComponent } from './components/communication/child-to-child/ctc-parent/ctc-parent.component';
import { AppComponent } from './app.component';
import { ExampleDirective } from './directives/example.directive';
import { ExampleComponent } from './components/example/example.component';
import { CustomifDirective } from './directives/customif.directive';
import { CustomforDirective } from './directives/customfor.directive';
import { ExamplePipe } from './pipes/example.pipe';
import { TemplateDrivenComponent } from './components/forms/template-driven/template-driven.component';
import { ModelDrivenComponent } from './components/forms/model-driven/model-driven.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExampleDirective,
    ExampleComponent,
    CustomifDirective,
    CustomforDirective,
    ExamplePipe,
    ParentComponent,
    ChildComponent,
    ParentComponent2,
    ChildComponent2,
    CtcChildComponent,
    CtcChild2Component,
    CtcParentComponent,
    TemplateDrivenComponent,
    ModelDrivenComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
