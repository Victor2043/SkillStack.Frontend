import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinqPlaygroundComponent } from './linq-playground.component';

describe('LinqPlaygroundComponent', () => {
  let component: LinqPlaygroundComponent;
  let fixture: ComponentFixture<LinqPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinqPlaygroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinqPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
