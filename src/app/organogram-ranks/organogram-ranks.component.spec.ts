import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganogramRanksComponent } from './organogram-ranks.component';

describe('OrganogramRanksComponent', () => {
  let component: OrganogramRanksComponent;
  let fixture: ComponentFixture<OrganogramRanksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganogramRanksComponent]
    });
    fixture = TestBed.createComponent(OrganogramRanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
