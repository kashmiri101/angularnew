import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DurbanComponent } from './durban.component';

describe('DurbanComponent', () => {
  let component: DurbanComponent;
  let fixture: ComponentFixture<DurbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DurbanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DurbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
