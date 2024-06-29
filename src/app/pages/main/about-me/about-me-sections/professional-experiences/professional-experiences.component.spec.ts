import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalExperiencesComponent } from './professional-experiences.component';

describe('ProfessionalExperiencesComponent', () => {
  let component: ProfessionalExperiencesComponent;
  let fixture: ComponentFixture<ProfessionalExperiencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessionalExperiencesComponent],
    });
    fixture = TestBed.createComponent(ProfessionalExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
