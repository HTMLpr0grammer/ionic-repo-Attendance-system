import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChoicePage } from './choice.page';

describe('ChoicePage', () => {
  let component: ChoicePage;
  let fixture: ComponentFixture<ChoicePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
