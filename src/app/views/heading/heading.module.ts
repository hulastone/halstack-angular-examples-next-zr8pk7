import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultHeadingsModule } from './default-headings/default-headings.module';
import { HeadingsWithDifferentWeightsModule } from './headings-with-different-weights/headings-with-different-weights.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DefaultHeadingsModule,
    HeadingsWithDifferentWeightsModule

  ]
})
export class HeadingModule { }
