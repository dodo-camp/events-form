import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Data, Events } from '../../../model/events.interface';
import { FormGroup } from '@angular/forms';
import { UtilityService } from '../../../services/utility.service';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventEditComponent implements OnInit {
  @Input() data?: Data;
  @Output() closeEdit: EventEmitter<boolean> = new EventEmitter();
  @Output() saveNewEvent: EventEmitter<Data> = new EventEmitter();
  public group: FormGroup;
  constructor(private utilityService: UtilityService, private cd: ChangeDetectorRef) {
    this._createFormGroup();
  }

  protected _createFormGroup() {
    this.group = this.utilityService.createFormGroup();
    this.cd.markForCheck();
  }

  ngOnInit() {
    this._populateForm();
  }

  protected _populateForm() {
    setTimeout(() => {
      Object.keys(this.data).forEach((key) => {
        this.group.controls[key].setValue(this.data[key], { emitEvent: true });
      });
    });
  }

  public closeEditing() {
    this.closeEdit.emit(false);
  }

  public save() {
    this.saveNewEvent.emit(this.group.value);
    this.closeEditing();
  }

}
