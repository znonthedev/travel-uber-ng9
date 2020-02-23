import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './gaurds/module-import.guard';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import {MatToolbarModule} from '@angular/material/toolbar';




@NgModule({
  imports: [
    // angular
    CommonModule,
    HttpClientModule,

    // Material
    MatSnackBarModule,
    MatToolbarModule,
  ],
  exports: [
    // angular

    // material
    MatToolbarModule,
    MatSnackBarModule,

    // 3rd party
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
 }
