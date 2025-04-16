import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemSolvingShowcaseComponent } from './problem-solving-showcase.component';

describe('ProblemSolvingShowcaseComponent', () => {
  let component: ProblemSolvingShowcaseComponent;
  let fixture: ComponentFixture<ProblemSolvingShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProblemSolvingShowcaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProblemSolvingShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
