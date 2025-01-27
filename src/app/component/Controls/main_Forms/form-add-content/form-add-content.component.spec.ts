import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddContentComponent } from './form-add-content.component';

describe('FormAddContentComponent', () => {
  let component: FormAddContentComponent;
  let fixture: ComponentFixture<FormAddContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAddContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
