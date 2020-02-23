import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @HostBinding('class.my-light-theme') isActive: boolean = false;
  @HostBinding('class.my-green-theme') isGreen: boolean = true;

  test() {
    this.isActive = !this.isActive;
    this.isGreen = !this.isGreen;
  }

}
