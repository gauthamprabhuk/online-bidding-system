import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFewComponent } from './header-few.component';

describe('HeaderFewComponent', () => {
  let component: HeaderFewComponent;
  let fixture: ComponentFixture<HeaderFewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderFewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderFewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
