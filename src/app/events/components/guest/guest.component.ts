import { Component, OnInit, Input, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UtilityService } from '../../services/utility.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuestComponent implements OnInit, OnDestroy {
  @Input() group?: FormGroup;
  @Input() controlName?: string;
  public guestGroup: FormGroup;
  public guests: Array<string> = new Array(0);
  public selectable: boolean = true;
  public removable: boolean = true;
  private $controlValueChange: Subscription;

  constructor(private cd: ChangeDetectorRef, private utilityService: UtilityService) {
    this._createGuestGroup()
  }

  protected _createGuestGroup() {
    this.guestGroup = this.utilityService.createGuestGroup();
  }

  ngOnInit() {
    this._watchOnControlChange();
  }

  ngOnDestroy() {
    if (this.$controlValueChange)
      this.$controlValueChange.unsubscribe();
  }

  protected _watchOnControlChange() {
    this.$controlValueChange = this.group.controls[this.controlName].valueChanges.subscribe((guests) => {
      if (!guests)  //for reset
        this.guests.length = 0;
      if (!this.guests.length && guests) //for populating
        this.guests = guests;
      this.cd.markForCheck();
    });
  }

  public addGuest({ guest }) {
    this.guests.push(guest);
    this.group.controls[this.controlName].setValue(this.guests);
    this.guestGroup.reset();
  }

  public remove(index: number) {
    this.guests.splice(index, 1);
  }

  public trackByFn(index, item) {
    return index;
  }

}
