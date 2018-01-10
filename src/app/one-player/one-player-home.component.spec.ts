import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePlayerHomeComponent } from './one-player-home.component';

describe('OnePlayerHomeComponent', () => {
  let component: OnePlayerHomeComponent;
  let fixture: ComponentFixture<OnePlayerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnePlayerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnePlayerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
