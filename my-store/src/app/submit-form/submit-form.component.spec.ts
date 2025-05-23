import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitFormComponent } from './submit-form.component';

describe('SubmitFormComponent', () => {
  let component: SubmitFormComponent;
  let fixture: ComponentFixture<SubmitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubmitFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
