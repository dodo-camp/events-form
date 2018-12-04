import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerComponent implements OnInit {
  @Input() group?: FormGroup;
  @Input() controlName?: string;
  public placeholder: string;

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
