import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExamComponent } from './update-exam.component';

describe('UpdateExamComponent', () => {
  let component: UpdateExamComponent;
  let fixture: ComponentFixture<UpdateExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateExamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
