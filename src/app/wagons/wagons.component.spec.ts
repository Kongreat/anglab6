import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WagonsComponent } from './wagons.component';

describe('WagonsComponent', () => {
  let component: WagonsComponent;
  let fixture: ComponentFixture<WagonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WagonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WagonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
