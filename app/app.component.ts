import {Component} from 'angular2/core';

@Component({
    selector: 'todo-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    todos: any[] = [{ "item": "item 1" }, { "item": "item 2" }, { "item": "item 3" }];
    checkedItems: any[] = [];

    addItem(newItem: string) {
        console.log(`new item added: ${newItem}`);

        this.todos.push({ item: newItem });
    }

    checkItem(item: any) {

        var index = this.todos.indexOf(item);

        this.checkedItems.push(this.todos[index]);

        this.todos.splice(index, 1);
    }

    removeItem(item: any) {

        var index = this.checkedItems.indexOf(item);
        this.checkedItems.splice(index, 1);

    }
}