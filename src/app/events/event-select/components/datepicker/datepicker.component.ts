import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  @Input() group?: FormGroup;
  @Input() controlName?: String;
  public placeholder: String;

  constructor() {

  }

  ngOnInit() {
    this._setPlaceHolder();
  }

  protected _setPlaceHolder() {
    if (this.controlName == "startDate")
      this.placeholder = "Start Date";
    if (this.controlName == "endDate")
      this.placeholder = "End Date";
  }

}
