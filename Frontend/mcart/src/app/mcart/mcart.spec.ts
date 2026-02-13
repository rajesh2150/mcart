import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mcart } from './mcart';

describe('Mcart', () => {
  let component: Mcart;
  let fixture: ComponentFixture<Mcart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mcart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mcart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
