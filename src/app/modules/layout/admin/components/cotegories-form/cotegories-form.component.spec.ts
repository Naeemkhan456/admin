import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotegoriesFormComponent } from './cotegories-form.component';

describe('CotegoriesFormComponent', () => {
  let component: CotegoriesFormComponent;
  let fixture: ComponentFixture<CotegoriesFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CotegoriesFormComponent]
    });
    fixture = TestBed.createComponent(CotegoriesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
