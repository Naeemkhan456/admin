import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotegoriesListComponent } from './cotegories-list.component';

describe('CotegoriesListComponent', () => {
  let component: CotegoriesListComponent;
  let fixture: ComponentFixture<CotegoriesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CotegoriesListComponent]
    });
    fixture = TestBed.createComponent(CotegoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
