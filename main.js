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
        todosListEl.append('\
            <tr>\
                <td>' + todo.task + '</td>\
                <td>\
                    <button>Edit</button>\
                    <button>Delete</button>\
                    </td>\
                  </tr>\
        ');
      });
    }

  };

app.showTodos();

});
