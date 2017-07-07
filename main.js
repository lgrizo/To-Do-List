$(function() {
  var todos = [
    {
        task: 'do jQuery Tutorial',
        isCompleted: false
    },
    {
        task: 'take a nap',
        isCompleted: true
    }
  ];

  var app = {
    showTodos: function() {
      var todosListEl = $('#todos-list');

      todosListEl.html('');

      todos.forEach(function(todo) {
        var taskClasses = 'todo-task' + (todo.isCompleted ? ' is-completed' : ' ');

        todosListEl.append('\
            <tr>\
                <td class="' + taskClasses + '">' + todo.task + '</td>\
                <td>\
                    <button>Edit</button>\
                    <button>Delete</button>\
                    </td>\
                  </tr>\
        ');
      });
    },

        toggleTodo: function() {
          alert('toggled!');
        }

  };

app.showTodos();

$('.todo-task').on('click', app.toggleTodo);

});
