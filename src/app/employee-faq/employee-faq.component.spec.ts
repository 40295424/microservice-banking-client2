import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFAQComponent } from './employee-faq.component';

describe('EmployeeFAQComponent', () => {
  let component: EmployeeFAQComponent;
  let fixture: ComponentFixture<EmployeeFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeFAQComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
