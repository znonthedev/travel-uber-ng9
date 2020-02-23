import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ShellComponent } from "@app/shell/shell.component";
import { AuthComponent } from "@app/auth/auth.component";

const routes: Routes = [
  { path: "", component: ShellComponent },
  { path: "auth", component: AuthComponent },
  { path: "**", redirectTo: "auth", pathMatch: "full" }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
