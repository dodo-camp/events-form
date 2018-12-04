///<reference types="@types/googlemaps" />
import { Component, OnInit, Input, NgZone, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationComponent implements OnInit {
  @Input() group?: FormGroup;
  @Input() controlName?: string;
  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: any = autocomplete.getPlace().name;
          this.group.controls["location"].setValue(place);
        });
      });
    });
  }
}
