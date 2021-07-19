import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelscomponentComponent } from './novelscomponent.component';

describe('NovelscomponentComponent', () => {
  let component: NovelscomponentComponent;
  let fixture: ComponentFixture<NovelscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovelscomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovelscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
