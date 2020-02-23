import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app/app.component";
import { ShellComponent } from "@app/shell/shell.component";
import { HeaderComponent } from "@app/shell/header/header.component";
import { CoreModule } from "@app/core.module";
import { AppRoutingModule } from "./app-routing.module";
import { AuthComponent } from "@app/auth/auth.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent, AuthComponent, ShellComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
