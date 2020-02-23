import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('class.my-light-theme') isActive = false;
  @HostBinding('class.my-green-theme') isGreen = true;

  test() {
    this.isActive = !this.isActive;
    this.isGreen = !this.isGreen;
  }
}
