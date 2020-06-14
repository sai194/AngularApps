import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgNotFoundComponent } from './pg-not-found.component';

describe('PgNotFoundComponent', () => {
  let component: PgNotFoundComponent;
  let fixture: ComponentFixture<PgNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
