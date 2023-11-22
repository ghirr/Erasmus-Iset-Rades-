import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityLifeComponent } from './university-life.component';

describe('UniversityLifeComponent', () => {
  let component: UniversityLifeComponent;
  let fixture: ComponentFixture<UniversityLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityLifeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
