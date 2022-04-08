import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPageComponentExampleComponent } from './first-page-component-example.component';

describe('FirstPageComponentExampleComponent', () => {
  let component: FirstPageComponentExampleComponent;
  let fixture: ComponentFixture<FirstPageComponentExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstPageComponentExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPageComponentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
