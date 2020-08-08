import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

interface CustomType {
  index: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  counter: CustomType[] = [{ index: 1 }, { index: 2 }, { index: 3 }, { index: 4 }, { index: 5 }];
  title = 'toptier-angular-course';
  form: FormGroup;

  constructor(private formBuiler: FormBuilder) {
    this.form = this.formBuiler.group({
      counterArray: this.formBuiler.array([]),
      username: new FormControl(''),
      password: new FormControl('')
    });
    this.counter.forEach(f => {
      this.addFormArray(f);
    });
  }

  ngOnInit() {
  }

  addFormArray(value: CustomType) {
    this.getFormArray().push(this.formBuiler.group(value));
  }

  getFormArray(): FormArray {
    return this.form.get('counterArray') as FormArray;
  }

  onClickMessage() {
    console.log(this.form.value);
  }
}
