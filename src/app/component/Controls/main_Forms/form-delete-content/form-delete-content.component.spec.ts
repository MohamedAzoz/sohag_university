import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDeleteContentComponent } from './form-delete-content.component';

describe('FormDeleteContentComponent', () => {
  let component: FormDeleteContentComponent;
  let fixture: ComponentFixture<FormDeleteContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDeleteContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDeleteContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
