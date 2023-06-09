import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeComponent } from './merge.component';

describe('PilotsComponent', () => {
  let component: MergeComponent;
  let fixture: ComponentFixture<MergeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MergeComponent]
    });
    fixture = TestBed.createComponent(MergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
