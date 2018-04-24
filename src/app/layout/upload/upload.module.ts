import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadComponent } from './upload.component';
import { PageHeaderModule } from './../../shared';


@NgModule({
  imports: [
    CommonModule,
    UploadRoutingModule,
    PageHeaderModule
  ],
  declarations: [UploadComponent]
})
export class UploadModule { }
