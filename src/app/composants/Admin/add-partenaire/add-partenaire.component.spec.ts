import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPartenaireComponent } from './add-partenaire.component';

describe('AddPartenaireComponent', () => {
  let component: AddPartenaireComponent;
  let fixture: ComponentFixture<AddPartenaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPartenaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
