import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsAutoCompleteComponent } from './chips-auto-complete.component';

describe('ChipsAutoCompleteComponent', () => {
  let component: ChipsAutoCompleteComponent;
  let fixture: ComponentFixture<ChipsAutoCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipsAutoCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
