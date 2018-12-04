import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  @Input() group?: FormGroup;
  @Input() controlName?: string;

  constructor() { }

  ngOnInit() {
  }

}
