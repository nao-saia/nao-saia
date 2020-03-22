import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerRegisterComponent } from './banner-register.component';

describe('BannerRegisterComponent', () => {
  let component: BannerRegisterComponent;
  let fixture: ComponentFixture<BannerRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
