import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstCompComponent } from './myapp/first-comp/first-comp.component';
import { SecondCompComponent } from './myapp/second-comp/second-comp.component';
import { ThirdCompComponent } from './myapp/third-comp/third-comp.component';
import { CenterDirective } from './directives/center.directive';
import { YellowDirective } from './directives/yellow.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { SpecDirective } from './spec.directive';
import { ValidationBorderDirective } from './directives/validation-border.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    SecondCompComponent,
    ThirdCompComponent,
    CenterDirective,
    YellowDirective,
    HighlightDirective,
    SpecDirective,
    ValidationBorderDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
