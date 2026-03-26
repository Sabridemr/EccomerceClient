import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customer } from './customer';

describe('Customer', () => {
  let component: Customer;
  let fixture: ComponentFixture<Customer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Customer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Customer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
