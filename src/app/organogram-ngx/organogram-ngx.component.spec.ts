import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganogramNgxComponent } from './organogram-ngx.component';

describe('OrganogramNgxComponent', () => {
  let component: OrganogramNgxComponent;
  let fixture: ComponentFixture<OrganogramNgxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganogramNgxComponent]
    });
    fixture = TestBed.createComponent(OrganogramNgxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
