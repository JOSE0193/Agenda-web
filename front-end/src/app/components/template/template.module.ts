import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TemplateModule { }
