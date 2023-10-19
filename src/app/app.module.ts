import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleDirective } from './directives/example.directive';
import { ExampleComponent } from './components/example/example.component';
import { CustomifDirective } from './directives/customif.directive';
import { CustomforDirective } from './directives/customfor.directive';
import { ExamplePipe } from './pipes/example.pipe';
import { ParentComponent } from './components/parent-to-child/parent/parent.component';
import { ChildComponent } from './components/parent-to-child/child/child.component';
import { ParentComponent as ParentComponent2 } from './components/child-to-parent/parent/parent.component';
import { ChildComponent as ChildComponent2 } from './components/child-to-parent/child/child.component';
import { CtcChildComponent } from './components/child-to-child/ctc-child/ctc-child.component';
import { CtcChild2Component } from './components/child-to-child/ctc-child2/ctc-child2.component';
import { CtcParentComponent } from './components/child-to-child/ctc-parent/ctc-parent.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
