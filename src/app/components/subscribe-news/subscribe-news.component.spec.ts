import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeNewsComponent } from './subscribe-news.component';

describe('SubscribeNewsComponent', () => {
  let component: SubscribeNewsComponent;
  let fixture: ComponentFixture<SubscribeNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubscribeNewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscribeNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
