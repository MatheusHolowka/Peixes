import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Launches } from './launches';

describe('Launches', () => {
  let component: Launches;
  let fixture: ComponentFixture<Launches>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Launches]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Launches);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
