import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadrolesComponent } from './loadroles.component';

describe('LoadrolesComponent', () => {
  let component: LoadrolesComponent;
  let fixture: ComponentFixture<LoadrolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadrolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadrolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
