import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTodoStatusComponent } from './update-todo-status.component';

describe('UpdateTodoStatusComponent', () => {
  let component: UpdateTodoStatusComponent;
  let fixture: ComponentFixture<UpdateTodoStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTodoStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTodoStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
