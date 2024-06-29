import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutThisCvComponent } from './about-this-cv.component';

describe('AboutThisCvComponent', () => {
  let component: AboutThisCvComponent;
  let fixture: ComponentFixture<AboutThisCvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutThisCvComponent]
    });
    fixture = TestBed.createComponent(AboutThisCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
