import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRenderComponent } from './product-render.component';

describe('ProductRenderComponent', () => {
  let component: ProductRenderComponent;
  let fixture: ComponentFixture<ProductRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductRenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
