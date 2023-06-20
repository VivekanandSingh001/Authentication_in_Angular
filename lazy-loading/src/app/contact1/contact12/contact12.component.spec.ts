import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contact12Component } from './contact12.component';

describe('Contact12Component', () => {
  let component: Contact12Component;
  let fixture: ComponentFixture<Contact12Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Contact12Component]
    });
    fixture = TestBed.createComponent(Contact12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
