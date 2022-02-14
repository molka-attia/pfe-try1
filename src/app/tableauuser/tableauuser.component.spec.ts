import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauuserComponent } from './tableauuser.component';

describe('TableauuserComponent', () => {
  let component: TableauuserComponent;
  let fixture: ComponentFixture<TableauuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
