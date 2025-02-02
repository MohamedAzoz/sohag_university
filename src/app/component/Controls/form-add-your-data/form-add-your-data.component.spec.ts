import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddYourDataComponent } from './form-add-your-data.component';

describe('FormAddYourDataComponent', () => {
  let component: FormAddYourDataComponent;
  let fixture: ComponentFixture<FormAddYourDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAddYourDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddYourDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
