import { Injectable } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable()
export class UtilityService {

  constructor(private fb: FormBuilder) { }

  public createFormGroup(): FormGroup {
    let group = this.fb.group({
      title: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      description: new FormControl(),
      location: new FormControl('', [Validators.required]),
      guests: new FormControl(),
      startTime: new FormControl(),
      endTime: new FormControl(),
      allDay: new FormControl()
    });
    return group;
  }

  public createGuestGroup(): FormGroup {
    let group = this.fb.group({
      guest: new FormControl('', [Validators.email, Validators.required])
    });
    return group;
  }

}
