import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { LocalizedDatePipe } from '../pipes/localized-date.pipe';

@NgModule({
  declarations: [LocalizedDatePipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxSpinnerModule,
    TranslateModule,
    LocalizedDatePipe,
  ],
  providers: [],
})
export class SharedModule {}
