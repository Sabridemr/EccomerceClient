import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Baskets } from './baskets';

describe('Baskets', () => {
  let component: Baskets;
  let fixture: ComponentFixture<Baskets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Baskets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Baskets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
