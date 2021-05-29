import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionMenuComponent } from './subscription-menu.component';

describe('SubscriptionMenuComponent', () => {
  let component: SubscriptionMenuComponent;
  let fixture: ComponentFixture<SubscriptionMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
