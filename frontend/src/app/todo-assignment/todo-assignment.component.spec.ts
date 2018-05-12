import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAssignmentComponent } from './todo-assignment.component';

describe('TodoAssignmentComponent', () => {
  let component: TodoAssignmentComponent;
  let fixture: ComponentFixture<TodoAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
