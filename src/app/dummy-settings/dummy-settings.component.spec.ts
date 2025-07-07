import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummySettingsComponent } from './dummy-settings.component';

describe('DummySettingsComponent', () => {
  let component: DummySettingsComponent;
  let fixture: ComponentFixture<DummySettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummySettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
