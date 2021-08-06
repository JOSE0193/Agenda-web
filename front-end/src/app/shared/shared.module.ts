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
import { AlertModule } from 'ngx-bootstrap/alert';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

@NgModule({
  declarations: [
    AlertModalComponent,

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
    ButtonsModule.forRoot(),
    AlertModule.forRoot()
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
    ButtonsModule,
    AlertModule,
    AlertModalComponent
  ]
})
export class SharedModule { }
