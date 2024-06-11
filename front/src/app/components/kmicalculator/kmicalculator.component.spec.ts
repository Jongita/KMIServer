import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KmicalculatorComponent } from './kmicalculator.component';

describe('KmicalculatorComponent', () => {
  let component: KmicalculatorComponent;
  let fixture: ComponentFixture<KmicalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KmicalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KmicalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
