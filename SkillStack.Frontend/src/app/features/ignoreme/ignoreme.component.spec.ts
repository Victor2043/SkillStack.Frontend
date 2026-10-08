import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgnoreMeComponent } from './ignoreme.component';

describe('IgnoreMeComponent', () => {
  let component: IgnoreMeComponent;
  let fixture: ComponentFixture<IgnoreMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IgnoreMeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IgnoreMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
