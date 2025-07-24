import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inspectors } from './inspectors';

describe('Inspectors', () => {
  let component: Inspectors;
  let fixture: ComponentFixture<Inspectors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inspectors]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inspectors);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
