import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristicPlacesComponent } from './touristic-places.component';

describe('TouristicPlacesComponent', () => {
  let component: TouristicPlacesComponent;
  let fixture: ComponentFixture<TouristicPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouristicPlacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouristicPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
