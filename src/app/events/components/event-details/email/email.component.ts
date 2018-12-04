import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailComponent implements OnInit {
  @Input() group?: FormGroup;
  @Input() controlName?: String;

  constructor() { }

  ngOnInit() {
  }

}
