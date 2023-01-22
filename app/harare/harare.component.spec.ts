import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarareComponent } from './harare.component';

describe('HarareComponent', () => {
  let component: HarareComponent;
  let fixture: ComponentFixture<HarareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HarareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
