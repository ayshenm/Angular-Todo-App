import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-md-8 col-lg-6">
          <div class="border p-4 shadow rounded">
            <h3 class="bg-primary text-white p-3 text-center rounded">
              Angular Todo List
            </h3>

            @if (!isUpdateTodoForm) {
            <div class="d-flex flex-column flex-sm-row gap-2 mt-3">
              <input
                [(ngModel)]="work"
                type="text"
                class="form-control"
                placeholder="Add new todo..."
              />
              <button (click)="save()" class="btn btn-success w-100 w-sm-auto">
                Save
              </button>
            </div>
            } @else {
            <div class="d-flex flex-column flex-sm-row gap-2 mt-3">
              <input
                [(ngModel)]="updateTodo"
                type="text"
                class="form-control"
                placeholder="Update todo..."
              />
              <button
                (click)="update()"
                class="btn btn-primary w-100 w-sm-auto"
              >
                Update
              </button>
            </div>
            }

            <ul class="list-group mt-4">
              @for (data of todos; track data) {
              <li
                class="list-group-item d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-2"
              >
                <span class="flex-grow-1">{{ data }}</span>
                @if (!isUpdateTodoForm) {
                <div class="d-flex gap-2">
                  <button (click)="get($index)" class="btn btn-sm btn-warning">
                    Update
                  </button>
                  <button
                    (click)="delete($index)"
                    class="btn btn-sm btn-danger"
                  >
                    Clear
                  </button>
                </div>
                }
              </li>
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class App {
  work: string = '';
  todos: string[] = [];
  updateTodo: string = '';
  updateIndex: number = 0;
  isUpdateTodoForm: boolean = false;

  save() {
    this.todos.push(this.work);
    this.work = '';
  }

  delete(index: number) {
    this.todos.splice(index, 1);
  }

  get(index: number) {
    this.updateIndex = index;
    this.updateTodo = this.todos[index];
    this.isUpdateTodoForm = true;
  }

  update() {
    this.todos[this.updateIndex] = this.updateTodo;
    this.isUpdateTodoForm = false;
  }
}
