import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigBottomCardComponent } from './big-bottom-card.component';

describe('BigBottomCardComponent', () => {
  let component: BigBottomCardComponent;
  let fixture: ComponentFixture<BigBottomCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BigBottomCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BigBottomCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
