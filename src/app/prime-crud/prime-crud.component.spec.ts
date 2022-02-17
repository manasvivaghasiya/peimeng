import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeCrudComponent } from './prime-crud.component';

describe('PrimeCrudComponent', () => {
  let component: PrimeCrudComponent;
  let fixture: ComponentFixture<PrimeCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
