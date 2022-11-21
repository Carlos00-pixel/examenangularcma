import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioscubosComponent } from './comentarioscubos.component';

describe('ComentarioscubosComponent', () => {
  let component: ComentarioscubosComponent;
  let fixture: ComponentFixture<ComentarioscubosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentarioscubosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentarioscubosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
