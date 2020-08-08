import { Component } from '@angular/core';

interface CustomType {
  counter: number;
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toptier-angular-course';
  customValue: CustomType = { counter: 0, message: '' };

  onClickMessage() {
    if (this.customValue.counter < 10) {
      this.customValue.counter += 1;
    } else if (this.customValue.counter < 20) {
      this.customValue.counter += 2;
    } else if (this.customValue.counter < 30) {
      this.customValue.counter += 5;
    } else {
      this.customValue.counter = 0;
    }
  }
}
