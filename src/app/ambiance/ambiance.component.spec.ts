import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbianceComponent } from './ambiance.component';

describe('AmbianceComponent', () => {
  let component: AmbianceComponent;
  let fixture: ComponentFixture<AmbianceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmbianceComponent]
    });
    fixture = TestBed.createComponent(AmbianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
