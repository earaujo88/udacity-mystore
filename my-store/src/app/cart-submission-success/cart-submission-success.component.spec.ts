import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSubmissionSuccessComponent } from './cart-submission-success.component';

describe('CartSubmissionSuccessComponent', () => {
  let component: CartSubmissionSuccessComponent;
  let fixture: ComponentFixture<CartSubmissionSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartSubmissionSuccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartSubmissionSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
