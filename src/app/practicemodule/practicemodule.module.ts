import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticemoduleRoutingModule } from './practicemodule-routing.module';
import { PracticecomponentComponent } from './practicecomponent/practicecomponent.component';
import {RouterModule, Routes } from '@angular/router'

const appRoutes: Routes= [
  
    {
      path: '',
      component: PracticecomponentComponent
    }
  ]



@NgModule({
  declarations: [PracticecomponentComponent],
  imports: [
    CommonModule,
    PracticemoduleRoutingModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class PracticemoduleModule { }
