import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChkboxComponent } from './chkbox.component';

describe('ChkboxComponent', () => {
  let component: ChkboxComponent;
  let fixture: ComponentFixture<ChkboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChkboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChkboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
