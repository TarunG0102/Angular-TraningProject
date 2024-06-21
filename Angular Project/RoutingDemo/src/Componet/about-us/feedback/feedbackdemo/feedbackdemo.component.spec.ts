import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackdemoComponent } from './feedbackdemo.component';

describe('FeedbackdemoComponent', () => {
  let component: FeedbackdemoComponent;
  let fixture: ComponentFixture<FeedbackdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackdemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
