import { NgModule, Optional, SkipSelf } from "@angular/core";
import { throwIfAlreadyLoaded } from "./gaurds/module-import.guard";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatToolbarModule } from "@angular/material/toolbar";
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "@app/core.state";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "@env";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { CustomSerializer } from "./router/custom-serializer.service";

@NgModule({
  imports: [
    // angular
    CommonModule,
    HttpClientModule,

    // Material
    MatSnackBarModule,
    MatToolbarModule,

    // Ngrx
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreRouterConnectingModule.forRoot({ serializer: CustomSerializer }),
    !environment.production
      ? StoreDevtoolsModule.instrument({ name: "Travel Uber" })
      : []
  ],
  exports: [
    // angular

    // material
    MatToolbarModule,
    MatSnackBarModule

    // 3rd party
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, "CoreModule");
  }
}
