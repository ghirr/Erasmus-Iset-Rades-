import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrrementsComponent } from './agrrements.component';

describe('AgrrementsComponent', () => {
  let component: AgrrementsComponent;
  let fixture: ComponentFixture<AgrrementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgrrementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgrrementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
