import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuestComponent implements OnInit {
  @Input() group?: FormGroup;
  @Input() controlName?: string;
  public name: string;
  public guests: Array<string> = new Array(0);
  public selectable: boolean = true;
  public removable: boolean = true;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this._watchOnControlChange();
  }

  protected _watchOnControlChange() {
    this.group.controls["guests"].valueChanges.subscribe((guests) => {
      if (!guests)  //for reset
        this.guests.length = 0;
      if (!this.guests.length && guests) //for populating
        this.guests = guests;
      this.cd.markForCheck();
    });
  }

  public addGuest(name: string) {
    this.guests.push(name);
    this.name = "";
    this.group.controls["guests"].setValue(this.guests);
  }

  public remove(index: number) {
    this.guests.splice(index, 1);
  }

  public trackByFn(index, item) {
    return index;
  }

}
