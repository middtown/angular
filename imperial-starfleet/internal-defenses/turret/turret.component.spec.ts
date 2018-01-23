/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TurretComponent } from './turret.component';

describe('TurretComponent', () => {
  let component: TurretComponent;
  let fixture: ComponentFixture<TurretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
