import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantRegisterComponent } from './merchant-register.component';

describe('MerchantComponent', () => {
  let component: MerchantRegisterComponent;
  let fixture: ComponentFixture<MerchantRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
