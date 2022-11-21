import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcascubosComponent } from './marcascubos.component';

describe('MarcascubosComponent', () => {
  let component: MarcascubosComponent;
  let fixture: ComponentFixture<MarcascubosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcascubosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcascubosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
