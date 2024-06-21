import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingdemoComponent } from './ratingdemo.component';

describe('RatingdemoComponent', () => {
  let component: RatingdemoComponent;
  let fixture: ComponentFixture<RatingdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingdemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
