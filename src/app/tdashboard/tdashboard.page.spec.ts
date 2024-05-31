import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TDashboardPage } from './tdashboard.page';

describe('TDashboardPage', () => {
  let component: TDashboardPage;
  let fixture: ComponentFixture<TDashboardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
