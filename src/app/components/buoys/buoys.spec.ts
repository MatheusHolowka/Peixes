import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Buoys } from './buoys';

describe('Buoys', () => {
  let component: Buoys;
  let fixture: ComponentFixture<Buoys>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Buoys]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Buoys);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
