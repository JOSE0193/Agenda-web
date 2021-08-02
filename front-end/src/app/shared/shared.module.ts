import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  exports:[
    CommonModule,
    RouterModule,
    BsDropdownModule,
    TooltipModule,
    ModalModule,
    CollapseModule,
    CarouselModule,
    BrowserAnimationsModule,
    AccordionModule,
    ButtonsModule
  ]
})
export class SharedModule { }
