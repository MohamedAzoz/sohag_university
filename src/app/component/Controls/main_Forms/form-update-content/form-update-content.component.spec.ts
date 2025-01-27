import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpdateContentComponent } from './form-update-content.component';

describe('FormUpdateContentComponent', () => {
  let component: FormUpdateContentComponent;
  let fixture: ComponentFixture<FormUpdateContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormUpdateContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormUpdateContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
