import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chkbox',
  templateUrl: './chkbox.component.html',
  styleUrls: ['./chkbox.component.css']
})
export class ChkboxComponent implements OnInit {
  @Input() group?: FormGroup;
  @Input() controlName?: string;

  constructor() { }

  ngOnInit() {
    this.group.controls[this.controlName].valueChanges.subscribe((ans) => {
      if (ans)
        this._disableTimes();
      else
        this._enableTimes();
    });
  }

  protected _disableTimes() {
    this.group.controls["startTime"].disable();
    this.group.controls["endTime"].disable();
  }

  protected _enableTimes() {
    this.group.controls["startTime"].enable();
    this.group.controls["endTime"].enable();
  }

}
