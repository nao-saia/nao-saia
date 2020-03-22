import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabelecimentosComponent } from './estabelecimentos.component';

describe('EstabelecimentosComponent', () => {
  let component: EstabelecimentosComponent;
  let fixture: ComponentFixture<EstabelecimentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstabelecimentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstabelecimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
