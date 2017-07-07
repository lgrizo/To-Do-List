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
                    <button class="edit-button">Edit</button>\
                    <button class="delete-button">Delete</button>\
                    <button class="save-button">Save</button>\
                    <button class="cancel-button">Cancel</button>\
                    </td>\
                  </tr>\
        ');
      });
    },

        addTodo: function (event) {
          event.preventDefault();
          var createInput = $('#create-input');
          var createInputValue = createInput.val();

          todos.push( {
            task: createInputValue,
            isCompleted: false

          });
          createInput.val('')
          app.showTodos();

        },

        toggleTodo: function() {
          todos.forEach(function(todo) {
            if (todo.task === $(this).text()) {
              todo.isCompleted = !todo.isCompleted;
            }
          }.bind(this));
          app.showTodos();
        },

        enterEditMode: function () {
          $('.save-button').show();
          $('.cancel-button').show();
          $('.edit-button').hide();
          $('.delete-button').hide();

        },

        exitEditMode: function () {
          $('.save-button').hide();
          $('.cancel-button').hide();
          $('.edit-button').show();
          $('.delete-button').show();

        },

  };

app.showTodos();

//$('.todo-task').on('click', app.toggleTodo);

$('#create-form').on('submit', app.addTodo);
$('table').on('click', '.todo-task', app.toggleTodo);
$('table').on('click', '.edit-button', app.enterEditMode);
$('table').on('click', '.cancel-button', app.exitEditMode);

});
