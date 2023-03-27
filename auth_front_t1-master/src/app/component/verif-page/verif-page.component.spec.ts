import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifPageComponent } from './verif-page.component';

describe('VerifPageComponent', () => {
  let component: VerifPageComponent;
  let fixture: ComponentFixture<VerifPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
