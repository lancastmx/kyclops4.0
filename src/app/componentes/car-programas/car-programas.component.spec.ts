import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarProgramasComponent } from './car-programas.component';

describe('CarProgramasComponent', () => {
  let component: CarProgramasComponent;
  let fixture: ComponentFixture<CarProgramasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarProgramasComponent]
    });
    fixture = TestBed.createComponent(CarProgramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
