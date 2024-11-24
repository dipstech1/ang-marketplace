import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpModalComponent } from './exp-modal.component';

describe('ExpModalComponent', () => {
  let component: ExpModalComponent;
  let fixture: ComponentFixture<ExpModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ExpModalComponent]
    });
    fixture = TestBed.createComponent(ExpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
