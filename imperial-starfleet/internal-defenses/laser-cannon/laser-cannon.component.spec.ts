/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LaserCannonComponent } from './laser-cannon.component';

describe('LaserCannonComponent', () => {
  let component: LaserCannonComponent;
  let fixture: ComponentFixture<LaserCannonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaserCannonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaserCannonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
