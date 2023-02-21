$(document).ready(function() {
    // add task
    $("#addTask").click(function() {
      // get task name from input box
      var taskName = $(".textBox").val().trim();
  
      // check if task name is empty
      if (taskName === "") {
        alert("Error: Please enter a task first");
      } else {
        // create task element
        var taskElement = $("<div>").addClass("task").text(taskName);
        
        // create delete button element
        var deleteButton = $("<button>").attr("id", "delete").addClass("fas fa-trash-alt");
        
        // create done button element
        var doneButton = $("<button>").attr("id", "done").addClass("fas fa-check");
        
        // add delete and done button elements to task element
        taskElement.append(deleteButton);
        taskElement.append(doneButton);
        
        // add task element to notCompleted list
        $(".notCompleted").append(taskElement);
        
        // clear input box
        $(".textBox").val("");
      }
    });
  
    // delete task
    $(".notCompleted").on("click", "#delete", function() {
      $(this).parent().remove();
    });
  
    // mark task as done
    $(".notCompleted").on("click", "#done", function() {
      var taskElement = $(this).parent();
      var taskName = taskElement.text();
      
      // create done task element
      var doneTaskElement = $("<div>").addClass("task done").text(taskName);
      
      // remove done button from task element
      taskElement.find("#done").remove();
      
      // add done task element to completed list
      $(".completed").append(doneTaskElement);
      
      // remove task element from notCompleted list
      taskElement.remove();
    });
  });
  