import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  @Input() group?: FormGroup;
  @Input() controlName?: String;
  public name: String;
  public guests: Array<String> = new Array(0);

  constructor() { }

  ngOnInit() {
    this._watchOnControlChange();
  }

  protected _watchOnControlChange() {
    this.group.controls["guests"].valueChanges.subscribe((guests) => {
      if (!guests)
        this.guests.length = 0;
    });
  }

  public addGuest(name: string) {
    this.guests.push(name);
    this.name = "";
    this.group.controls["guests"].setValue(this.guests);
  }

  public trackByFn(index, item) {
    return index;
  }

}
